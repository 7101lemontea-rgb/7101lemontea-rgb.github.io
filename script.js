const sections = document.querySelectorAll(".section");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);
sections.forEach((s) => obs.observe(s));

// ── 설정 ──────────────────────────────────────────
const GITHUB_REPO = "7101lemontea-rgb/7101lemontea-rgb.github.io"; // 본인 repo
const CURRENT_FILE =
  location.pathname // 자동으로 현재 파일 경로 감지
    .replace(/^\//, "") || // 앞 슬래시 제거
  "index.html";
// ──────────────────────────────────────────────────

function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

async function loadTimestamps() {
  const elCreated = document.getElementById("date-created");
  const elUpdated = document.getElementById("date-updated");

  try {
    // per_page=1 → 가장 최신 커밋 1개 (최종 수정일)
    const resLatest = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/commits` +
        `?path=${encodeURIComponent(CURRENT_FILE)}&per_page=1`,
    );

    // per_page=1 + page 계산 없이, 전체 커밋을 가져와 마지막 항목 사용
    // Link 헤더에서 last page 번호를 추출한 뒤 해당 페이지의 첫 항목을 가져옵니다
    const resFirst = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/commits` +
        `?path=${encodeURIComponent(CURRENT_FILE)}&per_page=1`,
      { headers: { Accept: "application/vnd.github+json" } },
    );

    if (!resLatest.ok) throw new Error("API 호출 실패");

    // ── 최종 수정일 ──
    const latest = await resLatest.json();
    elUpdated.textContent = latest.length
      ? formatDate(latest[0].commit.author.date)
      : "정보 없음";

    // ── 최초 작성일: Link 헤더에서 마지막 페이지 번호 추출 ──
    const linkHeader = resFirst.headers.get("Link") || "";
    const lastPageMatch = linkHeader.match(/page=(\d+)>;\s*rel="last"/);

    if (lastPageMatch) {
      // 커밋이 여러 페이지일 때: 마지막 페이지의 첫 항목 = 최초 커밋
      const lastPage = lastPageMatch[1];
      const resOldest = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/commits` +
          `?path=${encodeURIComponent(CURRENT_FILE)}&per_page=1&page=${lastPage}`,
      );
      const oldest = await resOldest.json();
      elCreated.textContent = oldest.length
        ? formatDate(oldest[0].commit.author.date)
        : "정보 없음";
    } else {
      // 커밋이 1페이지 분량일 때: 같은 응답의 마지막 항목 = 최초 커밋
      const resAll = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/commits` +
          `?path=${encodeURIComponent(CURRENT_FILE)}&per_page=100`,
      );
      const all = await resAll.json();
      elCreated.textContent = all.length
        ? formatDate(all[all.length - 1].commit.author.date)
        : "정보 없음";
    }
  } catch (err) {
    // API 실패 시 (네트워크 오류, rate limit 등) HTML에 적힌 날짜로 폴백
    document.getElementById("date-created").textContent = "날짜 로드 실패";
    document.getElementById("date-updated").textContent = "날짜 로드 실패";
    console.warn("GitHub API 타임스탬프 오류:", err);
  }
}

loadTimestamps();
