<template>
  <div class="Materials0">
    

    <div class="Materials0_topbox">
        <button class="name_btn Materials0_topbox_btn" disabled>
            {{ ItemData[0].name }}
        </button>

        <button class="itemname_btn Materials0_topbox_btn" disabled>
            {{ ItemData[0].itemname }}
        </button>

        <button class="minus_btn Materials0_topbox_btn" @click="$emit('Open1')">
            -
        </button>
    </div>

    <div class="Material0_mainbox">
        <div class="Box_padding">
            <div class="Material0_padding_box">
              <div class="Material0_padding_box1">
                <div class="gray">필요 재료</div>
                <div class="big">9999 개</div>
              </div>

              <div class="Material0_padding_box2">
                <div class="gray">소요 기간</div>
                <div class="big">N 주</div>
              </div>
            </div>

          <hr style="width:425px; margin-left:3px;">

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
            <button class="bonus_btn bonus_btn_margin">PASS</button>
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

<style scoped>
.Materials0 {
    height: 620px;
    padding-right: 30px; /* 각 페이지 간격 */
    /* 필수 */
}

.Materials0_topbox{
    width: 520px; 
    height: 60px; 
    display: flex;
    /* 필수 */
}

.Materials0_topbox_btn{
    height: 35px;
    font-size: 20px;
    color : #b73aff;
    font-family: 'GmarketSansTTFMedium';
    border: none;
    outline: none;
    /* 필수 */
}
.name_btn {
    width: 120px;
    background-color: #f4dfff;
    border-radius: 20px;    
    margin-right: 10px;
}

.itemname_btn {
    background-color: transparent;
}

.minus_btn {
    width: 35px;
    border-radius: 16.5px;
    background-color: #f4dfff;
    margin-left: auto;
    cursor: pointer;
}

.Material0_mainbox{
    width: 520px;
    height: 500px;
    border-radius: 40px;
    box-shadow: 10px 10px 40px 0 rgba(220, 220, 220, 0.3);
    border: solid 1px #efefef;
    background-color: #fff;
}

.Box_padding{
    padding : 40px;
}

.Material0_padding_box{
    display: flex;
    padding-bottom : 20px;
}

.Material0_padding_box1{
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

.Materials0_have, .Materials0_need, .Materials0_character{
    border-radius: 20px;
    border: solid 1px #efefef;
    background-color: #fff;
    outline: none;
    text-align: center;
    width: 300px;
    height: 40px;
    margin-left : 50px;
    color : #000;
    font-family: 'GmarketSansTTFMedium';
}

.bonus_btn{
    width: 200px;
    height: 40px;
    border-radius: 20px;
    border: solid 1px #efefef;
    background-color: #f1f1f1;
    color : #bbbaba;
    margin-top: 20px;
    font-family: 'GmarketSansTTFMedium';
    margin-top:20px;
}

.bonus_btn_margin{
    margin-left: 30px;
}

.Material0_character{
    border-radius: 20px;
    border: solid 1px #efefef;
    background-color: #fff;
}

.bonus_btn:hover{
    color: #000;
    background-color: #fff;
}
</style>