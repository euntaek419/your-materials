<template>
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
</template>

<script>
export default {

}
</script>

<style>

</style>