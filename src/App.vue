<template>
  <div class="wrapper">
    <div>
      <Title @reset="reset()"></Title>
    </div>

    <div v-if="Materials0 == false && Materials1 == false && Materials2 == false && Materials2_5 == false && Materials3 == false">
      <Main></Main>
    </div>

    <div class="main_box">
      <div v-if="Materials0 == true" class="main">
        <Materials0 :ItemData="ItemData" @Open0="Open0()" class="MoveAni"></Materials0>
      </div>

      <div v-if="Materials1 == true" class="main">
        <Materials1 :ItemData="ItemData" @Open1="Open1()"></Materials1>
      </div>

      <div v-if="Materials2 == true" class="main">
        <Materials2 :ItemData="ItemData" @Open2="Open2()"></Materials2>
      </div>

      <div v-if="Materials2_5 == true" class="main">
        <Materials2_5 :ItemData="ItemData" @Open2="Open2_5()"></Materials2_5>
      </div>

      <div v-if="Materials3 == true" class="main">
        <Materials3 :ItemData="ItemData" @Open3="Open3()"></Materials3>
      </div>

      <div v-if="Materials0 == true || Materials1 == true || Materials2 == true || Materials2_5 == true || Materials3 == true" >
        <Nonebox></Nonebox>
      </div>

        
    </div>

    <div>
      <!-- <your-materials :ItemData="ItemData" @resulture="resultrue"></your-materials> -->
    </div>

    <div>
      <!-- <Floating :ItemData="ItemData"></Floating> -->
    </div>

    <div>
      <Footer :ItemData="ItemData" @Open0="Open0()" @Open1="Open1()" @Open2="Open2()" @Open2_5="Open2_5()" @Open3="Open3()"></Footer>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title';
import Main from '@/components/Main'
import Materials0 from './components/Materials0.vue';
import Materials1 from './components/Materials1.vue';
import Materials2 from './components/Materials2.vue';
import Materials2_5 from './components/Materials2_5.vue';
import Materials3 from './components/Materials3.vue';
import Nonebox from './components/Nonebox.vue';
import Footer from '@/components/Footer';
import materialdata from './assets/materialdata'


export default {
  data: () => {
    return {
      ItemData : materialdata,
      Materials0 : false,
      Materials1 : false,
      Materials2 : false,
      Materials2_5 : false,
      Materials3 : false,
    }
  },
  components: {
    Title,
    Main,
    Materials0,
    Materials1,
    Materials2,
    Materials2_5,
    Materials3,
    Footer,
    Nonebox,
  
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
    },

    Open2() {
      if(this.Materials2 == false) {
        this.Materials2 = true
      }
      else if(this.Materials2 == true) {
        this.Materials2 = false
      }
    },

    Open2_5() {
      if(this.Materials2_5 == false) {
        this.Materials2_5 = true
      }
      else if(this.Materials2_5 == true) {
        this.Materials2_5 = false
      }
    },

    Open3() {
      if(this.Materials3 == false) {
        this.Materials3 = true
      }
      else if(this.Materials3 == true) {
        this.Materials3 = false
      }
    },

    reset() {
      this.Materials0 = false
      this.Materials1 = false
      this.Materials2 = false
      this.Materials2_5 = false
      this.Materials3 = false
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

.wrapper{
  font-family: 'GmarketSansTTFMedium';
  color: black;
  background-color: white;
  padding-left: 70px;
  padding-top: 30px;
}

.main_box{
  display: flex;
}

.MoveAni {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}


</style>
