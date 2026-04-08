// blog_posts.js

function parseDate(str) {
  const [y, m, d] = str.split(".").map(Number);
  return new Date(y, m - 1, d);
}

const POSTS = [
  {
    href: "react_01_web_fundamentals.html",
    tag: "React",
    title: "React 01. 웹의 동작 원리",
    excerpt:
      "클라이언트-서버 구조부터 HTML·CSS·JS의 역할, 3계층 아키텍처까지 웹이 어떻게 동작하는지 정리합니다.",
    date: "2026.03.08",
  },
  {
    href: "react_02_html_01.html",
    tag: "React",
    title: "React 02. HTML 기초 01",
    excerpt:
      "HTML 기초에 대한 내용입니다. HTML의 정의와 HTML의 기본 구조 및 HTML의 주요 태그, 인라인 요소 / 블록레벨 요소에 대해서 살펴봅니다.",
    date: "2026.03.09",
  },
  {
    href: "react_03_html_02.html",
    tag: "React",
    title: "React 03. HTML 기초 02",
    excerpt: "Form 요소에 대한 기초적인 내용을 정리했습니다.",
    date: "2026.03.10",
  },
  {
    href: "react_04_css_01.html",
    tag: "React",
    title: "React 04. CSS 기초 01",
    excerpt: "CSS 요소에 대한 기초적인 내용을 정리했습니다.",
    date: "2026.03.12",
  },
  {
    href: "react_05_css_02.html",
    tag: "React",
    title: "React 05. CSS 기초 02",
    excerpt:
      "박스 모델의 4가지 레이어를 이해하고, Flexbox로 레이아웃을 자유롭게 제어하는 방법을 정리합니다.",
    date: "2026.03.13",
  },
  {
    href: "react_06_css_03.html",
    tag: "React",
    title: "React 06. CSS 기초 03",
    excerpt:
      "반응형 웹은 하나의 HTML로 모바일·태블릿·데스크탑을 모두 커버하는 방법입니다. 뷰포트 메타 태그, 유동적 단위, 미디어 쿼리 — 반응형 웹의 3가지 핵심을 정리합니다.",
    date: "2026.03.15",
  },
  {
    href: "react_07_css_04.html",
    tag: "React",
    title: "React 07. CSS 기초 04",
    excerpt:
      "Tailwind는 별도의 .css 파일 없이 HTML class 속성에 단어만 적으면 디자인이 완성되는 유틸리티 퍼스트 CSS 프레임워크입니다.",
    date: "2026.03.16",
  },
  {
    href: "react_08_javascript_01.html",
    tag: "React",
    title: "React 08. JavaScript 기초 01",
    excerpt: "JavaScript의 기본적인 사용 방법에 대해 정리했습니다.",
    date: "2026.03.17",
  },
  {
    href: "react_09_javascript_02.html",
    tag: "React",
    title: "React 09. JavaScript 기초 02",
    excerpt:
      "JavaScript에서 데이터를 다루는 기본 단위인 변수의 종류, 스코프, 그리고 올바른 네이밍 규칙을 정리했습니다.",
    date: "2026.03.18",
  },
  {
    href: "react_10_javascript_03.html",
    tag: "React",
    title: "React 10. JavaScript 기초 03",
    excerpt:
      "JavaScript의 자료형(Data Type)인 원시형(Primitive Type)과 참조형(Reference Type)의 특성과 차이를 살펴보았습니다.",
    date: "2026.03.19",
  },
  {
    href: "react_11_javascript_04.html",
    tag: "React",
    title: "React 11. JavaScript 기초 04",
    excerpt:
      "자바스크립트의 자료형 변환(Type Conversion)의 두 종류, 명시적 변환과 암묵적 변환(강제 형 변환)에 대해 정리했습니다.",
    date: "2026.03.20",
  },
  {
    href: "react_12_javascript_05.html",
    tag: "React",
    title: "React 12. JavaScript 기초 05",
    excerpt:
      "연산자(Operator)는 데이터를 가지고 특정한 작업(연산)을 수행하도록 지시하는 기호나 키워드입니다. 증감·비교·논리 연산자의 동작 원리와 주의점을 코드와 함께 살펴봅니다.",
    date: "2026.03.21",
  },
  {
    href: "react_13_javascript_06.html",
    tag: "React",
    title: "React 13. JavaScript 기초 06",
    excerpt:
      "조건문과 반복문은 프로그램의 흐름을 제어하는 데 중요한 역할을 합니다. if-else, switch, for, while 문의 사용법과 주의점을 코드와 함께 살펴봅니다.",
    date: "2026.03.22",
  },
  {
    href: "react_14_javascript_07.html",
    tag: "React",
    title: "React 14. JavaScript 기초 07",
    excerpt:
      "함수(Function)는 특정 작업을 수행하는 코드 블록입니다. 함수 선언문, 함수 표현식, ES6에서 도입된 간결한 화살표 함수까지 세 가지 방식을 살펴봅니다.",
    date: "2026.03.23",
  },
  {
    href: "react_15_javascript_08.html",
    tag: "React",
    title: "React 15. JavaScript 기초 08",
    excerpt:
      "DOM(Document Object Model)은 HTML 문서를 브라우저가 객체 트리로 변환한 프로그래밍 인터페이스입니다. 요소 선택, 내용 변경, 이벤트 연결까지 JavaScript로 화면을 동적으로 제어하는 핵심 개념을 살펴봅니다.",
    date: "2026.04.04",
  },
  {
    href: "react_16_javascript_09.html",
    tag: "React",
    title: "React 16. JavaScript 기초 09",
    excerpt:
      "최신 자바스크립트에서 문자열을 효율적으로 다루는 템플릿 리터럴과, 코드의 길이를 획기적으로 줄여주는 삼항 연산자의 활용법을 알아봅니다.",
    date: "2026.04.06",
  },
  {
    href: "react_17_javascript_10.html",
    tag: "React",
    title: "React 17. JavaScript 기초 10",
    excerpt:
      "코드의 간결함을 극대화하는 단축 평가 논리와 리액트 개발의 필수 무기인 map(), filter() 배열 메서드의 핵심 활용법을 정리합니다.",
    date: "2026.04.07",
  },
];

// index.html 블로그 섹션 최근 3개 렌더링
function renderRecentPosts() {
  const postList = document.querySelector("#blog .post-list");
  if (!postList) return;

  const recent = [...POSTS]
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))
    .slice(0, 3);

  postList.innerHTML = recent
    .map(
      (post) => `
      <a class="post-item" href="blog/${post.href}"> 
        <div class="post-left">
          <p class="post-tag">${post.tag}</p>
          <p class="post-title">${post.title}</p>
        </div>
        <span class="post-date">${post.date}</span>
      </a>
    `,
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", renderRecentPosts);
