<template>
  <div class="floating">
    <button class="floating_btn" :style="{ backgroundColor : buttonColor_0, color: textColor_0 }"
        @click="addBtn_isClicked_1">
      이스핀즈
    </button> |

    <button class="floating_btn" :style="{ backgroundColor : buttonColor_1, color: textColor_1 }"
        @click="addBtn_isClicked_1">
      차원회랑
    </button> |

    <button class="floating_btn" :style="{ backgroundColor : buttonColor_2, color: textColor_2 }"
        @click="addBtn_isClicked_2">
      개전
    </button> |
    
    <button class="floating_btn" :style="{ backgroundColor : buttonColor_3, color: textColor_3 }"
        @click="addBtn_isClicked_3">
      바칼 레이드
    </button>
  </div>
</template>

<script>
export default {

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

.floating_btn{
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

.floating_btn:hover{
  color: #387eff;
}

</style>