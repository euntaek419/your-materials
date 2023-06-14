<template>
  <div class="Materials">
    <div class="Topbox">
        <button class="Topbox_btn Name_btn" disabled>
            {{ ItemData[2].subname }}
        </button>

        <button class="Topbox_btn Itemname_btn" disabled>
            {{ ItemData[2].itemname[1] }}
        </button>

        <button class="Topbox_btn Minus_btn" @click="$emit('Open2_5')">
            -
        </button>
    </div>

    <div class="Mainbox">
        <div class="Box_padding">
            <div class="Padding_box">
              <div class="Padding_box1">
                  <div class="Gray">{{ resultmax_2_5 }}</div>
                  <div class="Big" >{{ Materials2_5_result0() }} </div>
              </div>

              <div class="Padding_box2">
                <div class="Gray">소요 기간</div>
                <div class="Big">{{ Materials2_5_result1() }}</div>
              </div>
            </div>

          <hr style="width:355px; float:left;">

          <div class="Input_box">
            <label class="Gray"> 보유 재료
              <input class="Have" maxlength='4' v-model="have_2_5">
            </label>
          </div>

          <!--
          <div class="Input_box">
            <label class="Gray"> 융합 개수
              <input class="Need" maxlength='2' v-model="need_2_5">
            </label>
          </div>
          -->


          <div>
            <button class="Bonus_btn" @click="Pc_2_5" :style="{ backgroundColor : PcStyleBack_2_5, color: PcStyleColor_2_5 }">PC방</button>
            <button class="Bonus_btn1 Bonus_btn_margin" disabled>PASS</button>
          </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    data:() => {
        return {
            have_2_5 : '',
            result_2_5 : '',
            resultmax_2_5 : '필요 재료',
            when_2_5 : '',
            isPcOn_2_5 : false,
            PcOn_2_5 : false,
            PcStyleBack_2_5 : '',
            PcStyleColor_2_5 : '',
        }
    },
    props : {
        ItemData : Array,
    },
    methods : {
        Materials2_5_result0() {
            if(this.have_2_5 == '') {
                return 'N 개'
            }
            
            else {
                this.result_2_5 = ((this.ItemData[2].buyneed[1]) - this.have_2_5 )
                
                if(this.result_2_5 < 0) {
                    this.resultmax_2_5 = '남은 재료'
                    return Math.abs(this.result_2_5) + ' 개'
                }
                this.resultmax_2_5 = '필요 재료'
                return this.result_2_5 + ' 개'
            }
        },

        Materials2_5_result1() {
            if(this.have_2_5 == '') {
                return 'N 주'
            }
            
            if(this.isPcOn_2_5 == true) {
                this.when_2_5 = Math.ceil(((this.ItemData[2].buyneed[1]) - this.have_2_5 ) / (this.ItemData[2].getitem[1] + this.ItemData[2].getpc[1]))
            }

            else {
                this.when_2_5 = Math.ceil(((this.ItemData[2].buyneed[1]) - this.have_2_5 ) / this.ItemData[2].getitem[1])
            }

            if(this.when_2_5 > 0) {
                return this.when_2_5 + ' 주'
            }
            else {
                return '제작 가능'
            }
        },

        Pc_2_5() {
            this.PcOn_2_5 = !this.PcOn_2_5
            if(this.PcOn_2_5 == true) {
                this.PcStyleBack_2_5 = '#fff';
                this.PcStyleColor_2_5 = '#000';
                this.isPcOn_2_5 = true;
            }
            else{
                this.PcStyleBack_2_5 = '';
                this.PcStyleColor_2_5 = '';
                this.isPcOn_2_5 = false;
            }
        },
    }

}
</script>

<style scoped>
.Materials {
    margin-right: 30px; /* 각 페이지 간격 */
    /* 필수 */
}

.Topbox{
    width: 460px; 
    height: 50px; 
    display: flex;
    margin-top: 50px;
    /* 필수 */
}

.Topbox_btn{
    height: 35px;
    font-size: 20px;
    color : #ff9c00;
    font-family: 'GmarketSansTTFMedium';
    border: none;
    outline: none;
    /* 필수 */
}
.Name_btn {
    width: 120px;
    background-color: #ffe6bd;
    border-radius: 20px;    
    margin-right: 10px;
}

.Itemname_btn {
    background-color: transparent;
}

.Minus_btn {
    width: 35px;
    border-radius: 20px;
    background-color: #ffe6bd;
    margin-left: auto;
    cursor: pointer;
}

.Mainbox{
    width: 460px;
    height: 500px;
    border-radius: 40px;
    box-shadow: 10px 10px 40px 0 rgba(220, 220, 220, 0.3);
    border: solid 1px #efefef;
    background-color: #fff;
}

.Box_padding{
    padding : 50px;
}

.Padding_box{
    display: flex;
    padding-bottom: 20px;
}

.Padding_box1{
    width: 190px;
}

.Gray{
    color:#616161;
}

.Big{
    font-size: 40px;
}

.Input_box{
    margin-top:120px;
}

.Have{
    border-radius: 20px;
    border: solid 1px #efefef;
    background-color: #fff;
    outline: none;
    text-align: center;
    width: 230px;
    height: 40px;
    margin-left : 50px;
    color : #000;
    font-family: 'GmarketSansTTFMedium';
}

.Bonus_btn{
    width: 165px;
    height: 40px;
    border-radius: 20px;
    border: solid 1px #efefef;
    background-color: #f1f1f1;
    color : #bbbaba;
    margin-top: 125px;
    font-family: 'GmarketSansTTFMedium';
    cursor: pointer;
}

.Bonus_btn1{
    width: 165px;
    height: 40px;
    border-radius: 20px;
    border: solid 1px #efefef;
    background-color: #f1f1f1;
    color : #bbbaba;
    margin-top: 40px;
    font-family: 'GmarketSansTTFMedium';
}

.Bonus_btn_margin{
    margin-left: 30px;
}

.Bonus_btn:hover{
    background-color: #fff;
    color: #000;
}
</style>