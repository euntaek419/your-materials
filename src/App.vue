<template>
  <div class="wrapper" ref="wrapper" @mousewheel="scrollX">
    <div>
      <Title @reset="reset()"></Title>
    </div>

    <div class="main_box" v-if="Materials0 == false && Materials1 == false && Materials2 == false && Materials2_5 == false && Materials3 == false && Materials3_5 == false">
      <Main></Main>
    </div>

    <div class="main_box2" ref="scroll_container" @mousewheel="scrollX">
      <div v-if="Materials0 == true" class="materials">
        <Materials0 :ItemData="ItemData" @Open0="Open0()"></Materials0>
      </div>

      <div v-if="Materials1 == true" class="materials">
        <Materials1 :ItemData="ItemData" @Open1="Open1()"></Materials1>
      </div>

      <div v-if="Materials2 == true" class="materials">
        <Materials2 :ItemData="ItemData" @Open2="Open2()"></Materials2>
      </div>

      <div v-if="Materials2_5 == true" class="materials">
        <Materials2_5 :ItemData="ItemData" @Open2_5="Open2_5()"></Materials2_5>
      </div>

      <div v-if="Materials3 == true" class="materials">
        <Materials3 :ItemData="ItemData" @Open3="Open3()"></Materials3>
      </div>

      <div v-if="Materials3_5 == true" class="materials">
        <Materials3_5 :ItemData="ItemData" @Open3_5="Open3_5()"></Materials3_5>
      </div>

      <div v-if="Materials0 == true || Materials1 == true || Materials2 == true || Materials2_5 == true || Materials3 == true || Materials3_5 == true" >
        <Nonebox></Nonebox>
      </div>
    </div>

    <div>
      <Footer :ItemData="ItemData" @Open0="Open0()" @Open1="Open1()" @Open2="Open2()" @Open2_5="Open2_5()" @Open3="Open3()" @Open3_5="Open3_5()"></Footer>
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
import Materials3_5 from './components/Materials3_5.vue';
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
      Materials3_5 : false,
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
    Materials3_5,
    Footer,
    Nonebox,
  
  },
  methods: {
    scrollX(e) {
    this.$refs['scroll_container'].scrollLeft += e.deltaY;
    },
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
    Open3_5() {
      if(this.Materials3_5 == false) {
        this.Materials3_5 = true
      }
      else if(this.Materials3_5 == true) {
        this.Materials3_5 = false
      }
    },
    reset() {
      this.Materials0 = false
      this.Materials1 = false
      this.Materials2 = false
      this.Materials2_5 = false
      this.Materials3 = false
      this.Materials3_5 = false
    },
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

.wrapper{
  font-family: 'GmarketSansTTFMedium';
  color: black;
  background-color: white;
  margin-left: 70px;
  margin-top: 30px;
}

.main_box{
  display: flex;
  position: fixed;
  top: 30%;
  transform: translateY( -50% );
  left: 50%;
  transform: translateX( -50% );
}

.main_box2{
  display: flex;
  position: fixed;
  z-index: 0;
  /* top: 50%; */
  /* transform: translateY( -37% ); */
  transform: translateY( -3% );
  overflow: auto;
  width: 100%;
  height: 100%;
  white-space: nowrap;
}

@media (min-height: 900px) {
  .main_box2{
    top: 50%;
    transform: translateY( -30% );
  }
}

</style>
