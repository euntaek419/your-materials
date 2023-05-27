<template>
  <div class="floating">

    <button class="floating_btn0" :style="{ color: textColor_0 }"
        @click="addBtn_isClicked_0">
      {{ ItemData[0].name }}
    </button> |

    <button class="floating_btn1" :style="{ color: textColor_1 }"
        @click="addBtn_isClicked_1">
      {{ ItemData[1].name }}
    </button> |

    <button class="floating_btn2" :style="{ color: textColor_2 }"
        @click="addBtn_isClicked_2">
      {{ ItemData[2].name }}
    </button> |
    
    <button class="floating_btn3" :style="{ color: textColor_3 }"
        @click="addBtn_isClicked_3">
      {{ ItemData[3].name }}
    </button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {

      //버튼 색상 변경 CSS
      textColor_0: '',
      textColor_1: '',
      textColor_2: '',
      textColor_3: '',
      isClicked_0: true,
      isClicked_1: true,
      isClicked_2: true,
      isClicked_3: true,
    }
  },
  props : {
    ItemData : Array,
  },
  methods : {
    addBtn_isClicked_0() {
      if (this.isClicked_0) {
        this.textColor_0 = '#387eff';
      } else {
        this.textColor_0 = 'white';
      }
      this.isClicked_0 = !this.isClicked_0;

      console.log(this.ItemData[0])
    },

    addBtn_isClicked_1() {
      if (this.isClicked_1) {
        this.textColor_1 = '#387eff';
      } else {
        this.textColor_1 = 'white';
      }
      this.isClicked_1 = !this.isClicked_1;
    },

    addBtn_isClicked_2() {
      if (this.isClicked_2) {
        this.textColor_2 = '#387eff';
      } else {
        this.textColor_2 = 'white';
      }
      this.isClicked_2 = !this.isClicked_2;
    },

    addBtn_isClicked_3() {
      if (this.isClicked_3) {
        this.textColor_3 = '#387eff';
      } else {
        this.textColor_3 = 'white';
      }
      this.isClicked_3 = !this.isClicked_3;
    },

  },

}
</script>

<style>

.floating{
  width: 30%;
  height: 8%;
  color: #fff;
  background-color: #0c0342;
  border-radius: 50px;
  box-shadow: 10px 10px 40px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:auto;

  position: fixed;
  bottom: 22%;
  left: 0;
  right: 0;
}

.floating_btn0{
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #fff;
  background-color: #0c0342;
  outline: none;
  border: none;
  font-family: GmarketSansTTFMedium;
  cursor: pointer;
}

.floating_btn1{
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #fff;
  background-color: #0c0342;
  outline: none;
  border: none;
  font-family: GmarketSansTTFMedium;
  cursor: pointer;
}

.floating_btn2{
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #fff;
  background-color: #0c0342;
  outline: none;
  border: none;
  font-family: GmarketSansTTFMedium;
  cursor: pointer;
}

.floating_btn3{
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #fff;
  background-color: #0c0342;
  outline: none;
  border: none;
  font-family: GmarketSansTTFMedium;
  cursor: pointer;
}

.floating_btn0:hover{
  color: #387eff;
}

.floating_btn1:hover{
  color: #387eff;
}

.floating_btn2:hover{
  color: #387eff;
}

.floating_btn3:hover{
  color: #387eff;
}

</style>