<template>
  <div class="result" id="result">
    <div class="result_box">
      
      <div class="result_1">
        기계혁명 : 바칼 레이드 / 융합 부위 5개의
      </div>

      <div>
        <spen class="result_2">필요한 재료는</spen> <spen class="result_3">0개</spen> <spen class="result_2">이며,</spen>
      </div>

      <div class="result_3">
        N주뒤 가능합니다.
      </div>

    </div>
    <!--
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
      -->
    </div>
</template>

<script>
export default {

}
</script>

<style>

.result{
  background-image: linear-gradient(to right, #ccc7ee, #efefef);
  background-size: cover;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
  display: flex;
}

.result_1{
  font-size: 30px;
  font-weight: 500;
  color: #43397c;
}

.result_2{
  font-size: 50px;
  color: #43397c;
}


.result_3{
  font-family: 'GmarketSansTTFBold';
  font-size: 50px;
  color: #43397c;
}
</style>