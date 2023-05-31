<template>
  <div class="wrapper">
    <div>
      <Title></Title>
    </div>
    
    <div>
      <Main></Main>
    </div>

    <div>
      <your-materials @resulture="resultrue" :ItemData="ItemData"></your-materials>
    </div>

    <div>
      <!-- <Floating :ItemData="ItemData"></Floating> -->
    </div>

    <div>
      <!-- <Result></Result> -->
    </div>

    <div>
      <Footer :ItemData="ItemData"></Footer>
    </div>
  </div>
</template>

<script>
// import YourMaterials from '@/components/your-materials';
import Title from '@/components/Title';
import Main from '@/components/Main'
import Footer from '@/components/Footer';
// import Result from '@/components/Result.vue';
// import Floating from '@/components/Floating.vue';
import materialdata from './assets/materialdata'


export default {
  data: () => {
    return {
      ItemData : materialdata,
    }
  },
  components: {
    // YourMaterials,
    Title,
    Main,
    Footer,
    //Result,
    // Floating,
  },
  methods: {

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

.wrapper{
  font-family: 'GmarketSansTTFMedium';
  color: black;
  background-color: white;
  padding-left: 100px;
  padding-top: 50px;
}


</style>
