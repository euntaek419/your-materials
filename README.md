# 너의 재료는? [URL 이동](https://cet4713.cafe24.com/) 

### 프로젝트 주제
- DNF 게임의 아이템 정가 구매 계산기

### 프로젝트 배경
- 게임을 하다보면 다양한 아이템들을 획득하게 되는데, 그 중 아이템을 최소 며칠에서 최대 몇 개월까지 고정적인 개수로 모으는 상태가 존재하게 됩니다.
- 이 때, 재료만 입력하면 계산해주는 계산기가 있었으면 좋겠다고 생각했습니다.
- 유저들의 편의성과 궁금증을 조금이라도 해소하고자 내가 얻고 싶은 아이템이 몇 주가 필요한지 계산해주는 사이트를 만들게 되었습니다.

### 프로젝트 목적
- 계산을 통해 유저들의 편의성을 제공한다.
- 홈페이지를 이용함에 있어, 홈페이지가 너무 딱딱하지 않게 받아드릴 수 있도록 하며, 소소하지만 재미를 느낄 요소를 추가해본다. ( Gif, 숫자 카운팅 )
- 나의 첫 Vue.js 프로젝트인 만큼 Vue.js의 사용법을 익혀본다.
- 배포까지의 과정을 체험해본다.

### 프로젝트 사용 방법
### * 스크롤을 통해 가로로 움직일 수 있습니다! *
1. 하단에서 계산을 원하는 던전 클릭
2. 보유 재료 개수 입력
3. 제작 아이템 개수 입력
4. 계정귀속 아이템 캐릭터 수 입력
5. PC방 / PASS 여부 체크
   
![test](https://github.com/euntaek419/your-materials/assets/100109284/8cf3fedf-1258-4e0b-9772-3997d0a8cc8a)


### 개발환경 & 기술스택
<div>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src='https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D'/>
  <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/>
</div>

### 프로젝트에서 잘한 부분
- Vue.js의 첫 프로젝트로 작업했지만, 생각보다 결과물이 만족스럽게 나왔다.
- 처음으로 시도해본 GSAP 숫자 카운트 기능을 정상적으로 잘 탑재하였다.
- 데이터를 js 파일로 따로 관리하여, 데이터 관리 및 수정이 용이하게 이루어질수 있도록 제작하였다.
  

### 프로젝트에서 부족한 부분
- 첫 프로젝트라 그런지 완성에만 집중했다.
- 클린 코드를 제대로 고려하지 못했다.
- css 작성 방법이 아직 많이 부족한 것 같다.
- 데이터를 사용함에 있어 효율적이지 못한 구조를 가지고 있다. ( 리팩토링을 매우 고려중 )

---
### 고려 중 사항
1. 모바일도 사용할 수 있게 웹앱
2. 리팩토링 ( 매우 고려중 )
3. 동일 재료 통합 작업
---
### 개발 로그

2023/06/25
* 바칼 레이드 폭룡왕의 인장 창이 나오지 않는 버그 수정

2023/06/23
* 숫자가 촤르르륵 올라가는 애니메이션 효과 추가

2023/06/20
* 소요기간이 비정상적으로 출력되는 버그 수정

2023/06/19
* 숫자가 촤르르륵 올라가는 애니메이션 효과 추가 (일부 적용중)
* 소요기간이 비정상적으로 출력되는 버그 발생

2023/06/15
* input에서 숫자입력만 되도록 설정
