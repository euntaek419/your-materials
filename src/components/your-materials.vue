<template>
  <div id="wrapper" class="wrapper">

    <div id="body" class="body">

        <div class="item_box">
          <img class="item" v-if="on_material_2 == 0" @click="on_material_2 = 1" src="../assets/images/material2_off.png">
          <img class="item" v-if="on_material_2 == 1" @click="on_material_2 = 0" src="../assets/images/material2.png">
          <img class="item" v-if="on_material_3 == 0" @click="on_material_3 = 1" src="../assets/images/material3_off.png">
          <img class="item" v-if="on_material_3 == 1" @click="on_material_3 = 0" src="../assets/images/material3.png">
        </div>

      
      <div class="add_box">
        <button id="pc_room" class="add_btn" :style="{ backgroundColor : buttonColor_PC, color: textColor_PC }"
        @click="addBtn_isClicked_PC">PC방</button>
        
        <button id="arad_pass" class="add_btn" :style="{ backgroundColor : buttonColor_PASS, color: textColor_PASS }"
        @click="addBtn_isClicked_PASS">아라드PASS</button>

      </div>
      
      <div class="input_box">
        <div>
          <div>
            <label class="label_have_0" for="have_0">보유한 재료 </label>
            <input id="have_0" class="have_0" v-model="have_00">
            <!-- <input id="have_0" class="have_0" v-model="input_ispins_material" v-bind:keyup="NeedMaterialCalculation"> -->
          </div>

          <div class="mini_box">
            <label class="label_need_0" for="need_0">융합 부위 </label>
            <input id="need_0" class="mini_input_1" v-model="need_00">
            <!-- <input id="need_0" class="mini_input_1" v-model="input_ispins_need_material"> -->

            <label class="label_character_0" for="character_0">캐릭터 갯수 </label>
            <input id="character_0" class="mini_input_2" v-model="character_00">
            <!-- <input id="character_0" class="mini_input_2" v-model="input_ispins_character"> -->
          </div>
        </div>
      </div>

      <div class="down_box">
        <img src="../assets/images/down.png" class="down_btn" @click="$emit('resulture')">
      </div>
      

    </div>
  </div>
</template>

<script>

export default {
  data: () => {
    return {
      on_material_2 : 3,
      on_material_3 : 3,
      have_00 : '',
      need_00 : '',
      character_00 : '',

      //버튼 색상 변경 CSS
      buttonColor_PC: '',
      textColor_PC: '',
      isClicked_PC: true,
      buttonColor_PASS: '',
      textColor_PASS: '',
      isClicked_PASS: true,
    };
  },
  methods: {
    addBtn_isClicked_PC() {
      if (this.isClicked_PC) {
        this.buttonColor_PC = '#0c0342';
        this.textColor_PC = 'white';
      } else {
        this.buttonColor_PC = '';
        this.textColor_PC = '';
      }
      this.isClicked_PC = !this.isClicked_PC;
    },

    addBtn_isClicked_PASS() {
      if (this.isClicked_PASS) {
        this.buttonColor_PASS = '#0c0342';
        this.textColor_PASS = 'white';
      } else {
        this.buttonColor_PASS = '';
        this.textColor_PASS = '';
      }
      this.isClicked_PASS = !this.isClicked_PASS;
    },
  }
}


</script>

<style scoped>
.wrapper{
  min-height: 72vh;
}

.body{
  font-size: 20px;
}

.item_box{
  height: 100px;
}

.add_box{
  height: 100px;
}

.add_btn{
  width: 170px;
  height: 44px;
  border-radius: 20px;
  box-shadow: 10px 10px 40px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
  color : #0c0342;
  font-size: 15px;
  outline: none;
  border: none;

  margin-left : 20px;
  margin-right : 20px;
}

.add_btn:hover{
  background-color: #0c0342;
  color : white;
  outline: none;
  border: none;
  cursor: pointer;
}

.input_box{
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.have_0{
  font-family: 'GmarketSansTTFMedium';
  color: #0c0342;
  background-color: #efefef;
  font-size: 15px;

  box-shadow: 10px 10px 40px 0 rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  object-fit: contain;
  width: 400px;
  height: 35px;
  outline:none;
  border:none;
  text-align: center;
}

.mini_box{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 11px;
  margin-left: 1px;
  
}

.label_have_0 {
  padding: 30px;
}

.label_need_0 {
  padding: 40px;
  margin-right: 15px;
}

.label_character_0 {
  padding: 27px;
}

.mini_input_1{
  font-family: 'GmarketSansTTFMedium';
  color: #0c0342;
  background-color: #efefef;
  font-size: 15px;

  box-shadow: 10px 10px 40px 0 rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  object-fit: contain;
  width: 120px;
  height: 35px;
  outline:none;
  border:none;
  text-align: center;
}

.mini_input_2{
  font-family: 'GmarketSansTTFMedium';
  color: #0c0342;
  background-color: #efefef;
  font-size: 15px;

  box-shadow: 10px 10px 40px 0 rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  object-fit: contain;
  width: 120px;
  height: 35px;
  outline:none;
  border:none;
  text-align: center;
}

.down_box{
  height: 10px;
  padding: 70px;
}

.down_btn{
  cursor: pointer;
}

.item{
  margin:3px;
}
</style>