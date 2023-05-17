<template>
  <div class="floating">
    <button class="floating_btn">
      이스핀즈
    </button> |

    <button class="floating_btn">
      차원회랑
    </button> |

    <button class="floating_btn">
      개전
    </button> |
    
    <button class="floating_btn">
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
  width: 500px;
  height: 70px;
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
  bottom: 200px;
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