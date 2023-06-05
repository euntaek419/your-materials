<template>
  <div class="Materials0">
    

    <div class="Materials0_topbox">
        <button class="title01" disabled>
            {{ ItemData[0].name }}
        </button>

        <button class="title02" disabled>
            {{ ItemData[0].itemname }}
        </button>

        <button class="title03" @click="$emit('Open0')">
            -
        </button>
    </div>

    <div class="Material0_mainbox">
        <div class="Material0_padding">
            <div class="Material0_padding_box">
              <div class="Material0_padding_box1">
                <div class="gray">필요 재료</div>
                <div class="big">10000 개</div>
              </div>

              <div class="Material0_padding_box2">
                <div class="gray">소요 기간</div>
                <div class="big">99 주</div>
              </div>
            </div>

          <hr style="width:500px; margin-left:3px;">

          <div class="Materials0_input_box">
            <label class="gray"> 보유 재료
              <input class="Materials0_have">
            </label>
          </div>

          <div class="Materials0_input_box">
            <label class="gray"> 융합 개수
              <input class="Materials0_need">
            </label>
          </div>

          <div class="Materials0_input_box">
            <label class="gray"> 캐릭터 수   
              <input class="Materials0_character">
            </label>
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
.Materials0 {
    width: 400px;
    height: 620px;
}

.Materials0_top {
    
    width: 400px;
    height: 60px;
}

.Materials0_topbox{
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

.Material0_mainbox{
    width: 640px;
    height: 500px;
    border-radius: 40px;
    box-shadow: 10px 10px 40px 0 rgba(220, 220, 220, 0.3);
    border: solid 1px #efefef;
    background-color: #fff;
}

.Material0_padding{
    padding : 70px;
}

.Material0_padding_box{
    display: flex;
    padding-bottom : 20px;
}

.Material0_padding_box1{
    width: 250px;
}
.Material0_padding_box2{
    width: 250px;
}

.gray{
    color:#616161;
    padding:3px;
}

.big{
    font-size: 50px;
}

.Materials0_input_box{
    padding-top:40px;
}

.Materials0_have{
    border-radius: 20px;
    border: solid 1px #efefef;
    background-color: #fff;
    outline: none;
    text-align: center;
    width: 300px;
    height: 40px;
}

.bonus_btn{
    width: 200px;
    height: 40px;
    border-radius: 20px;
    border: solid 1px #efefef;
    background-color: #f1f1f1;
    color : #bbbaba;
}

.Material0_character{
    border-radius: 20px;
    border: solid 1px #efefef;
    background-color: #fff;
}

.bonus_btn:hover{
    color: #000;
    background: #fff;
}
</style>