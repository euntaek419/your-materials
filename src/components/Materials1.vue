<template>
  <div class="Materials1">
    

    <div class="Materials1_topbox">
        <button class="title01" disabled>
            {{ ItemData[1].name }}
        </button>

        <button class="title02" disabled>
            {{ ItemData[1].itemname }}
        </button>

        <button class="title03" @click="$emit('Open1')">
            -
        </button>
    </div>

    <div class="Materials1_mainbox">
        <div class="Materials1_padding">
          <div>필요 재료</div>
          <div>N 개</div>

          <div>소요 기간</div>
          <div>N 주</div>

          <hr style="width:500px;">

          <div>
            <label class="Materials1_have"> 보유 재료 </label>
            <input class="Materials1_have">
          </div>

          <div>
            <label class="Materials1_need"> 융합 개수 </label>
            <input class="Materials1_need">
          </div>

          <div>
            <label class="Materials1_character"> 캐릭터 수 </label>
            <input class="Materials1_character">
          </div>

          <div>
            <button class="bonus_btn">PC방</button>
            <button class="bonus_btn">PASS</button>
          </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    props : {
        ItemData : Array,
    }

}
</script>

<style>
.Materials1 {
    width: 400px;
    height: 620px;
}

.Materials1_top {
    
    width: 400px;
    height: 60px;
}

.Materials1_topbox{
    width: 640px;
    height: 60px;
    display: flex;
}

.title01 {
    width: 120px;
    height: 35px;
    background-color: #f4dfff;
    font-size: 20px;
    color : #b73aff;
    border: none;
    outline: none;
    border-radius: 20px;
    font-family: 'GmarketSansTTFMedium';
    margin-right: 10px;
}

.title02 {
    height: 35px;
    font-size: 20px;
    border: none;
    outline: none;
    background-color: transparent;
    color: #b73aff;
    font-family: 'GmarketSansTTFMedium';
}

.title03 {
    height: 35px;
    width: 35px;
    font-size: 20px;
    border: none;
    outline: none;
    color: #b73aff;
    font-family: 'GmarketSansTTFMedium';
    border-radius: 16.5px;
    background-color: #f4dfff;
    margin-left: auto;
    cursor: pointer;
}

.Materials1_mainbox{
    width: 640px;
    height: 500px;
    border-radius: 40px;
    box-shadow: 10px 10px 40px 0 rgba(220, 220, 220, 0.3);
    border: solid 1px #efefef;
    background-color: #fff;
}

.Materials1_padding{
    padding : 70px;
}

.bonus_btn{
    width: 200px;
    height: 40px;
    border-radius: 20px;
    border: solid 1px #efefef;
    background-color: #f1f1f1;
    color : #bbbaba;
}

.Materials1_character{
    border-radius: 20px;
    border: solid 1px #efefef;
    background-color: #fff;
}

.bonus_btn:hover{
    color: #000;
    background: #fff;
}
</style>