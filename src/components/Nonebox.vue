<template>
  <div class="Materials">

    <div class="Mainbox">
        <img src="../assets/images/Gray_ani.gif" class="Info_img">
        <div class="Info">하단에서 계산할 재료를</div>
        <div class="Info">선택해보세요!</div>
    </div>
    
  </div>
</template>

<script>
export default {
    data:() => {
        return {
        }
    },
}
</script>

<style scoped>
.Materials {
    height: 600px;
    padding-right: 30px; /* 각 페이지 간격 */
    /* 필수 */
}

.Mainbox{
    width: 460px;
    height: 500px;
    border-radius: 40px;
    box-shadow: 10px 10px 40px 0 rgba(220, 220, 220, 0.3);
    border: solid 1px #efefef;
    background-color: #f1f1f1;
    margin-top: 100px;
    display: block;
}

.Info{
    color: #616161;
    text-align: center;
}

.Info_img{
    margin-top : 60px;
    margin-left : 100px;
}
</style>