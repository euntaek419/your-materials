<template>
  <div class="wrapper">
    <div>
      <Title></Title>
    </div>

    <div v-if="Materials0 == false && Materials1 == false && Materials2 == false && Materials3 == false">
      <Main></Main>
    </div>

    <div v-if="Materials0 == true">
      <Materials0 :ItemData="ItemData" @Open0="Open0()"></Materials0>
    </div>

    <div>
      <!-- <your-materials :ItemData="ItemData" @resulture="resultrue"></your-materials> -->
    </div>

    <div>
      <!-- <Floating :ItemData="ItemData"></Floating> -->
    </div>

    <div>
      <Footer :ItemData="ItemData" @Open0="Open0()"></Footer>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title';
import Main from '@/components/Main'
import Materials0 from './components/Materials0.vue';
import Footer from '@/components/Footer';
import materialdata from './assets/materialdata'


export default {
  data: () => {
    return {
      ItemData : materialdata,
      Materials0 : false,
      Materials1 : false,
      Materials2 : false,
      Materials3 : false,
    }
  },
  components: {
    Title,
    Main,
    Materials0,
    Footer,
  
    },
  methods: {
    Open0() {
      if(this.Materials0 == false) {
        this.Materials0 = true
      }
      else if(this.Materials0 == true) {
        this.Materials0 = false
      }
    }
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
