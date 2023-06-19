<template>
  <div class="Materials">
    <div class="Topbox">
        <button class="Topbox_btn Name_btn" disabled>
            {{ ItemData[1].name }}
        </button>

        <button class="Topbox_btn Itemname_btn" disabled>
            {{ ItemData[1].itemname }}
        </button>

        <button class="Topbox_btn Minus_btn" @click="$emit('Open1')">
            -
        </button>
    </div>

    <div class="Mainbox">
        <div class="Box_padding">
            <div class="Padding_box">
              <div class="Padding_box1">
                  <div class="Gray">{{ resultmax_1 }}</div>
                  <div class="Hide">{{ Materials1_result0() }} </div>
                  <div class="Big" >{{ Math.abs(resultweened_1.toFixed(0)) + ' 개' }} </div>
              </div>

              <div class="Padding_box2">
                <div class="Gray">소요 기간</div>
                <div class="Hide">{{ Materials1_result1() }}</div>
                <div class="Big" v-if="when_1 > 0 || when_1 == '' ">{{ whentweened_1.toFixed(0) + ' 주' }} </div>
                <div class="Big" v-if="when_1 < 0">{{ '제작가능' }} </div>
              </div>
            </div>

          <hr style="width:355px; float:left;">

          <div class="Input_box">
            <label class="Gray"> 보유 재료
              <input class="Have" maxlength='4' v-model="have_1">
            </label>
          </div>

          <div class="Input_box">
            <label class="Gray"> 융합 개수
              <input class="Need" maxlength='2' v-model="need_1">
            </label>
          </div>

          <div class="Input_box">
            <label class="Gray"> 캐릭터 수   
              <input class="Account" maxlength='2' v-model="account_1" placeholder="0" >
            </label>
          </div>

          <div>
            <button class="Bonus_btn" @click="Pc_1" :style="{ backgroundColor : PcStyleBack_1, color: PcStyleColor_1 }">PC방</button>
            <button class="Bonus_btn Bonus_btn_margin" @click="Pass_1" :style="{ backgroundColor : PassStyleBack_1, color:PassStyleColor_1 }">PASS</button>
          </div>
        </div>
    </div>
    
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
    data:() => {
        return {
            have_1 : '',
            need_1 : '',
            account_1 : '',
            result_1 : '',
            resultmax_1 : '필요 재료',
            when_1 : '',
            PcPass_1 : [false,false],
            PcStyleBack_1 : '',
            PcStyleColor_1 : '',
            PassStyleBack_1 : '',
            PassStyleColor_1 : '',
            resultweened_1: 0,
            whentweened_1: 0,
        }
    },
    props : {
        ItemData : Array,
    },
    methods : {
        Materials1_result0() {
            if(this.have_1 == '' || this.need_1 == '') {
                return this.result_1 = 0;
            }
            
            else {
                this.result_1 = (this.ItemData[1].buyneed * this.need_1) - this.have_1
                
                if(this.result_1 < 0) {
                    return this.resultmax_1 = '남은 재료'
                }
                return this.resultmax_1 = '필요 재료'
            }
        },

        Materials1_result1() {
            if(this.have_1 == '' || this.need_1 == '') {
                return this.when_1 = 0;
            }
            
            if(this.PcPass_1[0] == true && this.PcPass_1[1] == true) {
                this.when_1 = Math.ceil((this.ItemData[1].buyneed * this.need_1 - this.have_1 ) / (this.ItemData[1].getitem + this.ItemData[1].shareitem * this.account_1 + this.ItemData[1].shareitem + this.ItemData[1].getpc + this.ItemData[1].getpass))
                if(this.when_1 > 0) {
                    return this.when_1 + ' 주'
                }
                else {
                    return '제작 가능'
                }
            }

            else if(this.PcPass_1[0] == true) {
                this.when_1 = Math.ceil(((this.ItemData[1].buyneed * this.need_1) - this.have_1 ) / (this.ItemData[1].getitem + this.ItemData[1].shareitem * this.account_1 + this.ItemData[1].shareitem + this.ItemData[1].getpc))
                if(this.when_1 > 0) {
                    return this.when_1 + ' 주'
                }
                else {
                    return '제작 가능'
                }
            }

            else if(this.PcPass_1[1] == true) {
                this.when_1 = Math.ceil(((this.ItemData[1].buyneed * this.need_1) - this.have_1 )  / (this.ItemData[1].getitem + this.ItemData[1].shareitem * this.account_1 + this.ItemData[1].shareitem + this.ItemData[1].getpass))
                if(this.when_1 > 0) {
                    return this.when_1 + ' 주'
                }
                else {
                    return '제작 가능'
                }
            }

            else {
                this.when_1 = Math.ceil(((this.ItemData[1].buyneed * this.need_1) - this.have_1 ) / (this.ItemData[1].getitem + this.ItemData[1].shareitem * this.account_1 + this.ItemData[1].shareitem))
                if(this.when_1 > 0) {
                    return this.when_1 + ' 주'
                }
                else {
                    return '제작 가능'
                }
            }
        },

        Pc_1() {
            this.PcPass_1[0] = !this.PcPass_1[0]
            if(this.PcPass_1[0] == true) {
                this.PcStyleBack_1 = '#fff';
                this.PcStyleColor_1 = '#000';
            }
            else{
                this.PcStyleBack_1 = '';
                this.PcStyleColor_1 = '';
            }
        },
        Pass_1() {
            this.PcPass_1[1] = !this.PcPass_1[1]
            if(this.PcPass_1[1] == true) {
                this.PassStyleBack_1 = '#fff';
                this.PassStyleColor_1 = '#000';
            }
            else{
                this.PassStyleBack_1 = '';
                this.PassStyleColor_1 = '';
            }
        },
    },
    watch: {
        have_1(){
            return this.have_1 = this.have_1.replace(/[^0-9]/g, '');
        },

        need_1(){
            return this.need_1 = this.need_1.replace(/[^0-9]/g, '');
        },

        account_1(){
            return this.account_1 = this.account_1.replace(/[^0-9]/g, '');
        },
        result_1(n){
            gsap.to(this, { duration: 0.5, resultweened_1: Number(n) || 0 })
        },
        when_1(n){
            gsap.to(this, { duration: 0.5, whentweened_1: Number(n) || 0 })
        }
    },
}
</script>

<style scoped>
.Materials {
    padding-right: 30px; /* 각 페이지 간격 */
    
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
    color : #3680ff;
    font-family: 'GmarketSansTTFMedium';
    border: none;
    outline: none;
    /* 필수 */
}
.Name_btn {
    width: 120px;
    background-color: #e1ecff;
    border-radius: 20px;    
    margin-right: 10px;
}

.Itemname_btn {
    background-color: transparent;
}

.Minus_btn {
    width: 35px;
    border-radius: 20px;
    background-color: #e1ecff;
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

.Hide{
    display: none;
}
</style>