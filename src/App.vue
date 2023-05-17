<template>
  <div>
    <div>
      <Title></Title>
    </div>
    
    <div>
      <your-materials @resulture="resultrue"></your-materials>
    </div>

    <div v-if="result == true">
      <Result></Result>
    </div>

    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import YourMaterials from '@/components/your-materials';
import Title from '@/components/Title';
import Footer from '@/components/Footer';
import Result from '@/components/Result.vue';
// import {useScroll} from '@/vueuse/core';



export default {
  data: () => {
    return {
      result : false,
    }
  },
  components: {
    YourMaterials,
    Title,
    Footer,
    Result,
  },
  methods: {
    resultrue() {
    // 결과값을 true로 설정합니다.
    this.result = true;

    // 스크롤 위치를 1920px만큼 이동시킵니다.
    const targetPosition = 930;

    // 애니메이션에 걸리는 시간을 설정합니다.
   const duration = 2000; // 2초에 걸쳐서 스크롤 애니메이션 진행

    // 애니메이션 시작 시의 스크롤 위치를 기록합니다.
    const startPosition = window.pageYOffset;

    // 애니메이션 시작 시간을 저장할 변수를 선언합니다.
    let startTime = null;

    // easeOutQuart easing 함수를 정의합니다.
    function easeOutQuart(t) {
     return 1 - (--t) * t * t * t;
    }

    // 애니메이션 프레임마다 호출되는 스크롤 이동 함수입니다.
    function scrollStep(timestamp) {
      // 시작 타임스탬프를 설정합니다.
      if (!startTime) startTime = timestamp;

      // 애니메이션 경과 시간과 진행 상태를 계산합니다.
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeOutQuart(progress);

      // 현재 스크롤 위치를 계산합니다.
      const currentPosition = startPosition + (targetPosition - startPosition) * easeProgress;

      // 계산된 위치로 스크롤을 이동합니다.
      window.scrollTo(0, currentPosition);

      // 애니메이션이 완료되지 않았다면 다음 프레임을 요청합니다.
      if (elapsed < duration) {
        requestAnimationFrame(scrollStep);
      }
    }

    // 최초의 애니메이션 프레임을 요청합니다.
    requestAnimationFrame(scrollStep);
}
  },
}

</script>

<style>
@font-face{
  font-family: 'GmarketSansTTFBold';
  src : url('assets/fonts/GmarketSansTTFBold.ttf');
}

@font-face{
  font-family: 'GmarketSansTTFMedium';
  src : url('assets/fonts/GmarketSansTTFMedium.ttf');
}

body,html,#app{
  font-family: 'GmarketSansTTFMedium';
  color: #0c0342;
  background-color: #e1e1e1;
  text-align: center;
  margin: 0px;
}


</style>
