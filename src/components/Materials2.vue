<template>
  <div class="Materials">
    <div class="Topbox">
        <button class="Topbox_btn Name_btn" disabled>
            {{ ItemData[2].subname }}
        </button>

        <button class="Topbox_btn Itemname_btn" disabled>
            {{ ItemData[2].itemname[0] }}
        </button>

        <button class="Topbox_btn Minus_btn" @click="$emit('Open2')">
            -
        </button>
    </div>

    <div class="Mainbox">
        <div class="Box_padding">
            <div class="Padding_box">
              <div class="Padding_box1">
                  <div class="Gray">{{ resultmax_2 }}</div>
                  <div class="Big" >{{ Materials2_result0() }} </div>
              </div>

              <div class="Padding_box2">
                <div class="Gray">소요 기간</div>
                <div class="Big">{{ Materials2_result1() }}</div>
              </div>
            </div>

          <hr style="width:355px; float:left;">

          <div class="Input_box">
            <label class="Gray"> 보유 재료
              <input class="Have" maxlength='4' v-model="have_2">
            </label>
          </div>

          <div class="Input_box">
            <label class="Gray"> 융합 개수
              <input class="Need" maxlength='2' v-model="need_2">
            </label>
          </div>

          <div class="Input_box">
            <label class="Gray"> 캐릭터 수   
              <input class="Account" maxlength='2' v-model="account_2" placeholder="0" >
            </label>
          </div>

          <div>
            <button class="Bonus_btn" @click="Pc_2" :style="{ backgroundColor : PcStyleBack_2, color: PcStyleColor_2 }">PC방</button>
            <button class="Bonus_btn Bonus_btn_margin" @click="Pass_2" :style="{ backgroundColor : PassStyleBack_2, color:PassStyleColor_2 }">PASS</button>
          </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    data:() => {
        return {
            have_2 : '',
            need_2 : '',
            account_2 : '',
            result_2 : '',
            resultmax_2 : '필요 재료',
            when_2 : '',
            PcPass_2 : [false,false],
            PcStyleBack_2 : '',
            PcStyleColor_2 : '',
            PassStyleBack_2 : '',
            PassStyleColor_2 : '',
        }
    },
    props : {
        ItemData : Array,
    },
    methods : {
        Materials2_result0() {
            if(this.have_2 == '' || this.need_2 == '') {
                return 'N 개'
            }
            
            else {
                this.result_2 = (this.ItemData[2].buyneed[0] * this.need_2) - this.have_2 
                
                if(this.result_2 < 0) {
                    this.resultmax_2 = '남은 재료'
                    return Math.abs(this.result_2) + ' 개'
                }
                this.resultmax_2 = '필요 재료'
                return this.result_2 + ' 개'
            }
        },

        Materials2_result1() {
            if(this.have_2 == '' || this.need_2 == '') {
                return 'N 주'
            }
            
            if(this.PcPass_2[0] == true && this.PcPass_2[1] == true) {
                this.when_2 = Math.ceil(((this.ItemData[2].buyneed[0] * this.need_2) - this.have_2 ) / (this.ItemData[2].getitem[0] + this.ItemData[2].shareitem * this.account_2 + this.ItemData[2].shareitem + this.ItemData[2].getpc[0] + this.ItemData[2].getpass[0]))
                if(this.when_2 > 0) {
                    return this.when_2 + ' 주'
                }
                else {
                    return '제작 가능'
                }
            }

            else if(this.PcPass_2[0] == true) {
                this.when_0 = Math.ceil(((this.ItemData[2].buyneed[0] * this.need_2) - this.have_2 ) / (this.ItemData[2].getitem[0] + this.ItemData[2].shareitem * this.account_2 + this.ItemData[2].shareitem + this.ItemData[2].getpc[0]))
                if(this.when_2 > 0) {
                    return this.when_2 + ' 주'
                }
                else {
                    return '제작 가능'
                }
            }

            else if(this.PcPass_2[1] == true) {
                this.when_0 = Math.ceil(((this.ItemData[2].buyneed[0] * this.need_2) - this.have_2 )  / (this.ItemData[2].getitem[0] + this.ItemData[2].shareitem * this.account_2 + this.ItemData[2].shareitem + this.ItemData[2].getpass[0]))
                if(this.when_2 > 0) {
                    return this.when_2 + ' 주'
                }
                else {
                    return '제작 가능'
                }
            }

            else {
                this.when_2 = Math.ceil(((this.ItemData[2].buyneed[0] * this.need_2) - this.have_2 ) / (this.ItemData[2].getitem[0] + this.ItemData[2].shareitem * this.account_2 + this.ItemData[2].shareitem))
                if(this.when_2 > 0) {
                    return this.when_2 + ' 주'
                }
                else {
                    return '제작 가능'
                }
            }
        },
        Pc_2() {
            this.PcPass_2[0] = !this.PcPass_2[0]
            if(this.PcPass_2[0] == true) {
                this.PcStyleBack_2 = '#fff';
                this.PcStyleColor_2 = '#000';
            }
            else{
                this.PcStyleBack_2 = '';
                this.PcStyleColor_2 = '';
            }
        },
        Pass_2() {
            this.PcPass_2[1] = !this.PcPass_2[1]
            if(this.PcPass_2[1] == true) {
                this.PassStyleBack_2 = '#fff';
                this.PassStyleColor_2 = '#000';
            }
            else{
                this.PassStyleBack_2 = '';
                this.PassStyleColor_2 = '';
            }
        },


    },
    watch: {
        have_2(){
            return this.have_2 = this.have_2.replace(/[^0-9]/g, '');
        },

        need_2(){
            return this.need_2 = this.need_2.replace(/[^0-9]/g, '');
        },

        account_2(){
            return this.account_2 = this.account_2.replace(/[^0-9]/g, '');
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
    padding-top:40px;
}

.Have, .Need, .Account{
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
    margin-top: 40px;
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