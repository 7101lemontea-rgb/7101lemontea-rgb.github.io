// blog_posts.js

function parseDate(str) {
  const [y, m, d] = str.split(".").map(Number);
  return new Date(y, m - 1, d);
}

const POSTS = [
  {
    href: "react_01_web_fundamentals.html",
    tag: "React 01",
    title: "웹의 동작 원리",
    excerpt:
      "클라이언트-서버 구조부터 HTML·CSS·JS의 역할, 3계층 아키텍처까지 웹이 어떻게 동작하는지 정리합니다.",
    date: "2026.03.08",
  },
  {
    href: "react_02_html_01.html",
    tag: "React 02",
    title: "HTML 01 — 기초",
    excerpt:
      "HTML 기초에 대한 내용입니다. HTML의 정의와 HTML의 기본 구조 및 HTML의 주요 태그, 인라인 요소 / 블록레벨 요소에 대해서 살펴봅니다.",
    date: "2026.03.09",
  },
  {
    href: "react_03_html_02.html",
    tag: "React 03",
    title: "HTML 02 — 폼(Form) 요소",
    excerpt: "Form 요소에 대한 기초적인 내용을 정리했습니다.",
    date: "2026.03.10",
  },
  {
    href: "react_04_css_01.html",
    tag: "React 04",
    title: "CSS 01 — 기초",
    excerpt: "CSS 요소에 대한 기초적인 내용을 정리했습니다.",
    date: "2026.03.12",
  },
  {
    href: "react_05_css_02.html",
    tag: "React 05",
    title: "CSS 02 — 박스 모델과 Flexbox",
    excerpt:
      "박스 모델의 4가지 레이어를 이해하고, Flexbox로 레이아웃을 자유롭게 제어하는 방법을 정리합니다.",
    date: "2026.03.13",
  },
  {
    href: "react_06_css_03.html",
    tag: "React 06",
    title: "CSS 03 — 반응형 웹 & 미디어 쿼리",
    excerpt:
      "반응형 웹은 하나의 HTML로 모바일·태블릿·데스크탑을 모두 커버하는 방법입니다. 뷰포트 메타 태그, 유동적 단위, 미디어 쿼리 — 반응형 웹의 3가지 핵심을 정리합니다.",
    date: "2026.03.15",
  },
  {
    href: "react_07_css_04.html",
    tag: "React 07",
    title: "CSS 04 — Tailwind CSS",
    excerpt:
      "Tailwind는 별도의 .css 파일 없이 HTML class 속성에 단어만 적으면 디자인이 완성되는 유틸리티 퍼스트 CSS 프레임워크입니다.",
    date: "2026.03.16",
  },
  {
    href: "react_08_javascript_01.html",
    tag: "React 08",
    title: "JavaScript 01 — 기초",
    excerpt: "JavaScript의 기본적인 사용 방법에 대해 정리했습니다.",
    date: "2026.03.17",
  },
  {
    href: "react_09_javascript_02.html",
    tag: "React 09",
    title: "JavaScript 02 — 변수",
    excerpt:
      "JavaScript에서 데이터를 다루는 기본 단위인 변수의 종류, 스코프, 그리고 올바른 네이밍 규칙을 정리했습니다.",
    date: "2026.03.18",
  },
  {
    href: "react_10_javascript_03.html",
    tag: "React 10",
    title: "JavaScript 03 — 자료형",
    excerpt:
      "JavaScript의 자료형(Data Type)인 원시형(Primitive Type)과 참조형(Reference Type)의 특성과 차이를 살펴보았습니다.",
    date: "2026.03.19",
  },
  {
    href: "react_11_javascript_04.html",
    tag: "React 11",
    title: "JavaScript 04 — 자료형 변환",
    excerpt:
      "자바스크립트의 자료형 변환(Type Conversion)의 두 종류, 명시적 변환과 암묵적 변환(강제 형 변환)에 대해 정리했습니다.",
    date: "2026.03.20",
  },
  {
    href: "react_12_javascript_05.html",
    tag: "React 12",
    title: "JavaScript 05 — 연산자",
    excerpt:
      "연산자(Operator)는 데이터를 가지고 특정한 작업(연산)을 수행하도록 지시하는 기호나 키워드입니다. 증감·비교·논리 연산자의 동작 원리와 주의점을 코드와 함께 살펴봅니다.",
    date: "2026.03.21",
  },
  {
    href: "react_13_javascript_06.html",
    tag: "React 13",
    title: "JavaScript 06 — 제어문",
    excerpt:
      "조건문과 반복문은 프로그램의 흐름을 제어하는 데 중요한 역할을 합니다. if-else, switch, for, while 문의 사용법과 주의점을 코드와 함께 살펴봅니다.",
    date: "2026.03.22",
  },
  {
    href: "react_14_javascript_07.html",
    tag: "React 14",
    title: "JavaScript 07 — 함수",
    excerpt:
      "함수(Function)는 특정 작업을 수행하는 코드 블록입니다. 함수 선언문, 함수 표현식, ES6에서 도입된 간결한 화살표 함수까지 세 가지 방식을 살펴봅니다.",
    date: "2026.03.23",
  },
  {
    href: "react_15_javascript_08.html",
    tag: "React 15",
    title: "JavaScript 08 — DOM",
    excerpt:
      "DOM(Document Object Model)은 HTML 문서를 브라우저가 객체 트리로 변환한 프로그래밍 인터페이스입니다. 요소 선택, 내용 변경, 이벤트 연결까지 JavaScript로 화면을 동적으로 제어하는 핵심 개념을 살펴봅니다.",
    date: "2026.04.04",
  },
  {
    href: "react_16_javascript_09.html",
    tag: "React 16",
    title: "JavaScript 09 — 템플릿 리터럴과 삼항 연산자",
    excerpt:
      "최신 자바스크립트에서 문자열을 효율적으로 다루는 템플릿 리터럴과, 코드의 길이를 획기적으로 줄여주는 삼항 연산자의 활용법을 알아봅니다.",
    date: "2026.04.06",
  },
  {
    href: "react_17_javascript_10.html",
    tag: "React 17",
    title: "JavaScript 10 — 단축 평가와 배열 메서드",
    excerpt:
      "코드의 간결함을 극대화하는 단축 평가 논리와 리액트 개발의 필수 무기인 map(), filter() 배열 메서드의 핵심 활용법을 정리합니다.",
    date: "2026.04.07",
  },

  {
    href: "react_18_javascript_11.html",
    tag: "React",
    title: "React 18. JavaScript 11 — 스프레드 연산자",
    excerpt:
      "배열과 객체를 자유자재로 다루기 위한 스프레드 연산자(...)의 개념과 리액트에서의 활용법을 정리합니다.",
    date: "2026.04.08",
  },

  {
    href: "react_19_javascript_12.html",
    tag: "React",
    title: "React 19. JavaScript 12 — 구조 분해 할당",
    excerpt:
      "배열이나 객체의 속성을 해체하여 개별 변수에 효율적으로 담는 구조 분해 할당(Destructuring)을 알아봅니다.",
    date: "2026.04.08",
  },

  {
    href: "react_20_react_01.html",
    tag: "React",
    title: "React 20. React 01 — Vite 활용 프로젝트 설치",
    excerpt:
      "개발 환경에서 빠른 속도와 효율성을 제공하는 빌드 도구인 Vite를 사용하여 React 프로젝트를 설치하는 방법을 알아봅니다.",
    date: "2026.04.09",
  },

  {
    href: "react_21_react_02.html",
    tag: "React",
    title: "React 21. React 02 — 프로젝트 폴더 구조",
    excerpt:
      "Vite로 생성한 React 프로젝트의 내부 구조와 각 파일의 역할, 그리고 애플리케이션의 실행 흐름에 대해 정리합니다.",
    date: "2026.04.09",
  },
  {
    href: "react_22_react_03.html",
    tag: "React",
    title: "React 22. React 03 — JSX 문법의 정의와 주요 규칙",
    excerpt:
      "React 프로젝트에서 화면을 설계할 때 가장 기본이 되는 JSX(JavaScript XML)의 개념과 필수 규칙에 대해 정리합니다.",
    date: "2026.04.10",
  },
  {
    href: "react_23_react_04.html",
    tag: "React",
    title: "React 23. React 04 — 조건부 렌더링",
    excerpt:
      "특정 조건에 따라 서로 다른 UI를 화면에 출력하는 기법인 조건부 렌더링(Conditional Rendering)에 대해 정리합니다.",
    date: "2026.04.10",
  },
  {
    href: "react_24_react_05.html",
    tag: "React",
    title: "React 24. React 05 — 리스트 렌더링",
    excerpt:
      "배열 형태의 데이터를 화면에 반복적으로 표시하는 리스트 렌더링(List Rendering) 기법과 key 속성의 중요성에 대해 정리합니다.",
    date: "2026.04.11",
  },

  {
    href: "react_25_react_06.html",
    tag: "React",
    title: "React 25. React 06 — Tailwind와 아이콘 라이브러리",
    excerpt:
      "리액트 프로젝트의 시각적 완성도를 높여주는 Tailwind CSS 설정과 아이콘 라이브러리 활용법을 정리합니다.",
    date: "2026.04.12",
  },

  {
    href: "react_26_react_07.html",
    tag: "React",
    title: "React 26. React 07 — 컴포넌트와 Props의 이해",
    excerpt:
      "리액트의 핵심 단위인 컴포넌트(Component)의 개념과 데이터 전달 방식인 Props를 학습합니다.",
    date: "2026.04.13",
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
