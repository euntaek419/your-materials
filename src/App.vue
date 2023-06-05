<template>
  <div class="wrapper">
    <div>
      <Title></Title>
    </div>

    <div v-if="Materials0 == false && Materials1 == false && Materials2 == false && Materials3 == false">
      <Main></Main>
    </div>

    <div class="main_box">
      <div v-if="Materials0 == true" class="main">
        <Materials0 :ItemData="ItemData" @Open0="Open0()" ></Materials0>
      </div>

      <div v-if="Materials1 == true" class="main">
        <Materials1 :ItemData="ItemData" @Open1="Open1()"></Materials1>
      </div>
    </div>

    <div>
      <!-- <your-materials :ItemData="ItemData" @resulture="resultrue"></your-materials> -->
    </div>

    <div>
      <!-- <Floating :ItemData="ItemData"></Floating> -->
    </div>

    <div>
      <Footer :ItemData="ItemData" @Open0="Open0()" @Open1="Open1"></Footer>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title';
import Main from '@/components/Main'
import Materials0 from './components/Materials0.vue';
import Materials1 from './components/Materials1.vue';
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
    Materials1,
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
    },

    Open1() {
      if(this.Materials1 == false) {
        this.Materials1 = true
      }
      else if(this.Materials1 == true) {
        this.Materials1 = false
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

.main_box{
  display: flex;
}

.main{
  width: 700px;
}


</style>
