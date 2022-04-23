# yumemi frontend test project

## 기한

**[2022년 4월 26일까지](https://note.yumemi.co.jp/n/ned7429b59556)**

> https://notion.yumemi.co.jp/0e9ef27b55704d7882aab55cc86c999d

> https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html

## 요건

- RESAS API로 전국 행정 구역 목록 얻기
- API response에서 행정 구역 체크박스 동적 생성
- 행정구역 체크하면 RESAS API에서 선택된 행정 구역의 인구 구성 얻기
- 인구 구성 API response에서 x축:년, y축:인구 수 꺽은선 그래프 동적 생성

## 구현 제약

- 최신 React/Vue.js/Angular 중 하나로 SPA 구축

  - React
  - Vue
  - Angular
    - Nuxt.js, Next.js 같이 이를 포함한 프레임워크 이용 가능

- 행정 구역 총 인구 정보는 RESAS API 데이터 사용

- 그래프는 Highcharts, Rechart.js 등 서드파티 그래프 라이브러리 사용

  - 그래프 라이브러리는 위의 것에만 제한되는 것이 아님

- 최신 Google Chrome에서 작동이 제대로 되야함

- PC/스마트폰 대응할 것 (반응형 디자인)

  - 실제 기계가 아니라, google chrome 검증 도구에서 움직여도 됨

- lint/포맷터 적절히 설정

  - ESLint, Prettier 사용할 것

- style은 직접 작성하며, CSS/UI 프레임워크 사용말 것

  - chart 라이브러리에 내포된 style, 리셋 계열 CSS 라이브러리는 제한되지 않음

  - css-in-js, css-modules, sass 등 에코시스템 이용을 막는 것이 아니라 css 작성능력 확인하기 위함

- 리더 엔지니어/테크리더으로 신청하는 사람은 이하의 제약이 더 해짐
  - TypeScript으로 작성할 것
  - 테스트 케이스 / 테스트 코드 작성
  - 테스트 도구는 아무거나 가능
  - 테스트 실행 시에 에러 발생없어야 함

## 주의사항

- RESAS API 가입해 API 받아 사용해야 함

- 소스코드는 Git으로 관리하며 GitHub 저장소 이용할 것

- Netlify / GitHub Pages / Firebase hosting / Vercel 등 호스팅 서비스 디플로이하고, 인터넷을 통해 볼 수 있어야 함, (URL 제출할 것)

- 보안을 고려한 코드를 작성할 것

- 애플리케이션 컴포넌트 구성 크기 설계, git 커밋 메세지 구성 크기, 문서화 등 리뷰어를 생각할 것

> 구성크기: 예를 들어 사칙연산 프로그램을 만들 때, 기능을 하나의 함수에 넣는 것은 **구성 크기가 크다** 사칙연산을 각기 나누는 것 **구성 크기가 잘다**

- 팀 개발을 전제로 코드를 작성할 것

## 해야할 일

- CD/CI
- ESLINT
- PRETTIER
- react(next)
- deploy: github pages
- chart.js
- test(jest/testing library, playwright)
- api 사용방법 익히기
- atomic design
- Semantic Web
- 문서화
