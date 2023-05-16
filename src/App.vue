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
import Result from '@/components/Result.vue'



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
    resultrue(){
      this.result = true;
      setTimeout(function(){
        window.scrollTo({ top: 3000, behavior: 'smooth' });
      }, 100);
    },
  }
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
