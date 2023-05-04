<template>
  <div id="wrapper">

    <div id="body">
      <!-- <div>
        <input id="pc_room" type="checkbox" >
        <label for="pc_room">PC방</label>
      
        <input id="arad_pass" type="checkbox" >
        <label for="arad_pass">아라드PASS</label>
      </div> -->
      
      <div>
        <div>
          <label for="input_ispins_material">보유한 사방의 분열된 기운 : </label>
          <input id="input_ispins_material" v-model="input_ispins_material" v-bind:keyup="NeedMaterialCalculation">
        </div>

        <div>
          <label for="input_ispins_need_material">필요한 이스핀즈 융합 부위 : </label>
          <input id="input_ispins_need_material" v-model="input_ispins_need_material">
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

    <div id="footer">
      <div>
        <div v-if=" input_ispins_material == '' || input_ispins_need_material == '' || input_ispins_need_material == 0 ">
          유효한 값을 입력해주세요.
        </div>

        <div v-else-if=" input_ispins_material <= need_material[0] * input_ispins_need_material" >
          필요한 재료는 {{ Math.abs((input_ispins_material - need_material[0] * input_ispins_need_material)) }} 개 이며, {{ NeedMaterialCalculation() }}주 뒤 가능합니다.
        </div>

        <div v-else>
          현재 제작 가능하며, 남은 재료는 {{  Math.abs( input_ispins_material - need_material[0] ) }} 개 입니다.
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: () => {
    return {
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
      possible: false, // 가능한지 불가능한지
      cal: '',
    };
  },
  methods: {
    NeedMaterialCalculation() {
      return Math.ceil( Math.abs(this.input_ispins_material - this.need_material[0] ) * this.input_ispins_need_material / this.reward_material[0] );
    },

     DateCalculation() {
       
     }
  }
}

</script>

<style scoped>
</style>