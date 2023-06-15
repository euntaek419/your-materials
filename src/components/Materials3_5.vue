<template>
  <div class="Materials">
    <div class="Topbox">
        <button class="Topbox_btn Name_btn" disabled>
            {{ ItemData[3].subname }}
        </button>

        <button class="Topbox_btn Itemname_btn" disabled>
            {{ ItemData[3].itemname[1] }}
        </button>

        <button class="Topbox_btn Minus_btn" @click="$emit('Open3_5')">
            -
        </button>
    </div>

    <div class="Mainbox">
        <div class="Box_padding">
            <div class="Padding_box">
              <div class="Padding_box1">
                  <div class="Gray">{{ resultmax_3_5 }}</div>
                  <div class="Big" >{{ Materials3_result0() }} </div>
              </div>

              <div class="Padding_box2">
                <div class="Gray">소요 기간</div>
                <div class="Big">{{ Materials3_result1() }}</div>
              </div>
            </div>

          <hr style="width:355px; float:left;">

          <div class="Input_box">
            <label class="Gray"> 보유 재료
              <input class="Have" maxlength='4' v-model="have_3_5">
            </label>
          </div>





          <div>
            <button class="Bonus_btn" @click="Pc_3_5" :style="{ backgroundColor : PcStyleBack_3_5, color: PcStyleColor_3_5 }">PC방</button>
            <button class="Bonus_btn Bonus_btn_margin" @click="Pass_3_5" :style="{ backgroundColor : PassStyleBack_3_5, color:PassStyleColor_3_5 }">PASS</button>
          </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    data:() => {
        return {
            have_3_5 : '',
            result_3_5 : '',
            resultmax_3_5 : '필요 재료',
            when_3_5 : '',
            PcPass_3_5 : [false,false],
            PcStyleBack_3_5 : '',
            PcStyleColor_3_5 : '',
            PassStyleBack_3_5 : '',
            PassStyleColor_3_5 : '',
        }
    },
    props : {
        ItemData : Array,
    },
    methods : {
        Materials3_result0() {
            if(this.have_3_5 == '') {
                return 'N 개'
            }
            
            else {
                this.result_3_5 = ((this.ItemData[3].buyneed[1]) - this.have_3_5)
                
                if(this.result_3_5 < 0) {
                    this.resultmax_3_5 = '남은 재료'
                    return Math.abs(this.result_3_5) + ' 개'
                }
                this.resultmax_3_5 = '필요 재료'
                return this.result_3_5 + ' 개'
            }
        },

        Materials3_result1() {
            if(this.have_3_5 == '') {
                return 'N 주'
            }
            
            if(this.PcPass_3_5[0] == true && this.PcPass_3_5[1] == true) {
                this.when_3_5 = Math.ceil(((this.ItemData[3].buyneed[1]) - this.have_3_5 ) / (this.ItemData[3].getitem[1] + this.ItemData[3].getpc[1] + this.ItemData[3].getpass[1]))
                if(this.when_3_5 > 0) {
                    return this.when_3_5 + ' 주'
                }
                else {
                    return '제작 가능'
                }
            }

            else if(this.PcPass_3_5[0] == true) {
                this.when_3_5 = Math.ceil(((this.ItemData[3].buyneed[1]) - this.have_3_5 ) / (this.ItemData[3].getitem[1] + this.ItemData[3].getpc[1]))
                if(this.when_3_5 > 0) {
                    return this.when_3_5 + ' 주'
                }
                else {
                    return '제작 가능'
                }
            }
                

            else if(this.PcPass_3_5[1] == true) {
                this.when_3_5 = Math.ceil(((this.ItemData[3].buyneed[1]) - this.have_3_5)  / (this.ItemData[3].getitem[1]  + this.ItemData[3].getpass[1]))
                if(this.when_3_5 > 0) {
                    return this.when_3_5 + ' 주'
                }
                else {
                    return '제작 가능'
                }
            }

            else {
                this.when_3_5 = Math.ceil(((this.ItemData[3].buyneed[1]) - this.have_3_5 ) / (this.ItemData[3].getitem[1]))
                if(this.when_3_5 > 0) {
                    return this.when_3_5 + ' 주'
                }
                else {
                    return '제작 가능'
                }
            }
        },

        Pc_3_5() {
            this.PcPass_3_5[0] = !this.PcPass_3_5[0]
            if(this.PcPass_3_5[0] == true) {
                this.PcStyleBack_3_5 = '#fff';
                this.PcStyleColor_3_5 = '#000';
            }
            else{
                this.PcStyleBack_3_5 = '';
                this.PcStyleColor_3_5 = '';
            }
        },
        Pass_3_5() {
            this.PcPass_3_5[1] = !this.PcPass_3_5[1]
            if(this.PcPass_3_5[1] == true) {
                this.PassStyleBack_3_5 = '#fff';
                this.PassStyleColor_3_5 = '#000';
            }
            else{
                this.PassStyleBack_3_5 = '';
                this.PassStyleColor_3_5 = '';
            }
        },
    },
    watch: {
        have_3_5(){
            return this.have_3_5 = this.have_3_5.replace(/[^0-9]/g, '');
        },
    },

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
    /* 필수 */
}

.Topbox_btn{
    height: 35px;
    font-size: 20px;
    color : #ff3535;
    font-family: 'GmarketSansTTFMedium';
    border: none;
    outline: none;
    /* 필수 */
}
.Name_btn {
    width: 120px;
    background-color: #ffdfdf;
    border-radius: 20px;    
    margin-right: 10px;
}

.Itemname_btn {
    background-color: transparent;
}

.Minus_btn {
    width: 35px;
    border-radius: 20px;
    background-color: #ffdfdf;
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

.Have, .Need{
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

.Bonus_btn_margin{
    margin-left: 30px;
}

.Bonus_btn:hover{
    background-color: #fff;
    color: #000;
}
</style>