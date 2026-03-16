/* =========================================
   GitHub Blog Script
   - section animation
   - TOC highlight
   - GitHub commit timestamps
========================================= */

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    /* -------------------------------------
     1. Section Scroll Animation
  ------------------------------------- */

    const sections = document.querySelectorAll(".section");

    if (sections.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.05 },
      );

      sections.forEach((section) => observer.observe(section));
    }

    /* -------------------------------------
     2. TOC Active Highlight
  ------------------------------------- */

    const tocLinks = document.querySelectorAll(".toc-list a");

    if (tocLinks.length && sections.length) {
      const tocObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              tocLinks.forEach((link) => link.classList.remove("active"));

              const active = document.querySelector(
                `.toc-list a[href="#${entry.target.id}"]`,
              );

              if (active) active.classList.add("active");
            }
          });
        },
        { rootMargin: "-25% 0px -65% 0px" },
      );

      sections.forEach((section) => tocObserver.observe(section));
    }

    /* -------------------------------------
     3. GitHub Timestamp (created / updated)
  ------------------------------------- */

    const repo = "7101lemontea-rgb/7101lemontea-rgb.github.io";

    const createdEl = document.getElementById("date-created");
    const updatedEl = document.getElementById("date-updated");

    if (!createdEl || !updatedEl) return;

    /* 현재 페이지 파일 경로 */

    let filePath = location.pathname;

    if (filePath.endsWith("/")) {
      filePath += "index.html";
    }

    filePath = filePath.replace(/^\//, "");

    function formatDate(date) {
      return new Date(date).toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }

    async function loadTimestamps() {
      try {
        /* 최신 커밋 → 수정일 */

        const latestRes = await fetch(
          `https://api.github.com/repos/${repo}/commits?path=${encodeURIComponent(filePath)}&per_page=1`,
        );

        if (!latestRes.ok) throw new Error("API error");

        const latestData = await latestRes.json();

        if (latestData.length) {
          updatedEl.textContent = formatDate(latestData[0].commit.author.date);
        }

        /* 최초 커밋 → 작성일 */

        const linkHeader = latestRes.headers.get("Link") || "";
        const match = linkHeader.match(/page=(\d+)>;\s*rel="last"/);

        if (match) {
          const lastPage = match[1];

          const oldestRes = await fetch(
            `https://api.github.com/repos/${repo}/commits?path=${encodeURIComponent(filePath)}&per_page=1&page=${lastPage}`,
          );

          const oldestData = await oldestRes.json();

          if (oldestData.length) {
            createdEl.textContent = formatDate(
              oldestData[0].commit.author.date,
            );
          }
        } else {
          const allRes = await fetch(
            `https://api.github.com/repos/${repo}/commits?path=${encodeURIComponent(filePath)}&per_page=100`,
          );

          const allData = await allRes.json();

          if (allData.length) {
            createdEl.textContent = formatDate(
              allData[allData.length - 1].commit.author.date,
            );
          }
        }
      } catch (err) {
        console.warn("GitHub timestamp load failed:", err);

        createdEl.textContent = "정보 없음";
        updatedEl.textContent = "정보 없음";
      }
    }

    loadTimestamps();
  });
})();
