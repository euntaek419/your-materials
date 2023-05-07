<template>
  <div id="wrapper" class="wrapper">

    <div id="body" class="body">
        
        <img class="item" v-if="on_material0 == 0" @click="on_material0 = 1" src="../assets/images/material0_off.png">
        <img class="item" v-if="on_material0 == 1" @click="on_material0 = 0" src="../assets/images/material0.png">

        <img class="item" v-if="on_material1 == 0" @click="on_material1 = 1" src="../assets/images/material1_off.png">
        <img class="item" v-if="on_material1 == 1" @click="on_material1 = 0" src="../assets/images/material1.png">

        <img class="item" v-if="on_material2 == 0" @click="on_material2 = 1" src="../assets/images/material2_off.png">
        <img class="item" v-if="on_material2 == 1" @click="on_material2 = 0" src="../assets/images/material2.png">

        <img class="item" v-if="on_material3 == 0" @click="on_material3 = 1" src="../assets/images/material3_off.png">
        <img class="item" v-if="on_material3 == 1" @click="on_material3 = 0" src="../assets/images/material3.png">


      
      <!-- <div>
        <input id="pc_room" type="checkbox" >
        <label for="pc_room">PC방</label>
      
        <input id="arad_pass" type="checkbox" >
        <label for="arad_pass">아라드PASS</label>
      </div> -->
      
      <div>
        <div>
          <label for="input_ispins_material">보유한 재료 </label>
          <input id="input_ispins_material" class="material_input" v-model="input_ispins_material" v-bind:keyup="NeedMaterialCalculation">
        </div>

        <div>
          <label for="input_ispins_need_material">융합 부위 </label>
          <input id="input_ispins_need_material" class="mini_input" v-model="input_ispins_need_material">
        </div>

        <!-- <div>
          <label for="input_ispins_character">이스핀즈 캐릭터 갯수 : </label>
          <input id="input_ispins_character" v-model="input_ispins_character">
        </div> -->
      </div>
      
      <!-- <div>보유한 흐릿한 기억의 조각 : <input></div>
      <div>필요한 흐릿한 기억의 조각 : <input></div>
      <div>차원회랑 배럭 캐릭터 갯수 : <input v-model="dbc"></div>

      <div>보유한 폭룡왕의 인장 : <input></div>
      <div>필요한 폭룡왕의 인장 : <input></div>
      <div>개전 배럭 캐릭터 갯수 : <input></div>
      <div>바칼 배럭 캐릭터 갯수 : <input v-model="bc_baakl"></div> -->
    </div>
  </div>
</template>

<script>

export default {
  data: () => {
    return {
      on_material0 : 0,
      on_material1 : 0,
      on_material2 : 0,
      on_material3 : 0,
      need_material : [480, 360, 456], // 필요한 재료
      need_material_user : '', // 유저에게 필요한 재료
      date: 0, // 날짜
      ispins_material: '', // 이스핀즈 재료 개수
      ispins_date:'', // 이스핀즈 날자
      input_ispins_material: '', // 입력받은 이스핀즈 재료 개수
      input_ispins_need_material: '', // 입력받은 필요한 재료 개수
      input_ispins_character: '', // 입력받은 이스핀즈 배럭 캐릭터 수
      reward_material: [32, 32, 91, 121], // 보상 갯수 [이스핀즈,차원회랑,개전,바칼]
      seb_reward_material: [48, 48, 23, 31], // 입력받은 캐릭터 개수 [이스핀즈,차원회랑,개전,바칼] //2단 6개, 3단 12개, 초월 12개
      pass: [12,9,11,15], // 패스 여부 & 갯수 [이스핀즈,차원회랑,개전,바칼]
      pcroom: [12,9,11,15], // 피시방 여부
      ischoice: false, // 가능한지 불가능한지
      cal: '',
    };
  },
  methods: {
    NeedMaterialCalculation() {
      return Math.ceil( Math.abs(this.input_ispins_material - this.need_material[0] ) * this.input_ispins_need_material / this.reward_material[0] );
    },

    OnMaterial0() {
      this.on_material[0] = 1
      console.log(this.on_material[0]);
     }
  }
}

</script>

<style scoped>
.body{
  font-size: 20px;
}

.material_input{
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

.mini_input{
  font-family: 'GmarketSansTTFMedium';
  color: #0c0342;
  background-color: #efefef;
  font-size: 15px;

  box-shadow: 10px 10px 40px 0 rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  object-fit: contain;
  width: 135px;
  height: 35px;
  outline:none;
  border:none;
  text-align: center;
}

.item{
  margin:3px;
}



</style>