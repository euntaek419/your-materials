<template>
  <div class="Materials">
    <div class="Topbox">
        <button class="Topbox_btn Name_btn" disabled>
            {{ ItemData[0].name }}
        </button>

        <button class="Topbox_btn Itemname_btn" disabled>
            {{ ItemData[0].itemname }}
        </button>

        <button class="Topbox_btn Minus_btn" @click="$emit('Open0')">
            -
        </button>
    </div>

    <div class="Mainbox">
        <div class="Box_padding">
            <div class="Padding_box">
              <div class="Padding_box1">
                  <div class="Gray">{{ resultmax_0 }}</div>
                  <div class="Hide">{{ Materials0_result0() }} </div>
                  <div class="Big" >{{ Math.abs(resultweened_0.toFixed(0)) + ' 개' }} </div>
              </div>

              <div class="Padding_box2">
                <div class="Gray">소요 기간</div>
                <div class="Hide">{{ Materials0_result1() }}</div>
                <div class="Big" v-if="when_0 > 0 || have_0 == '' || need_0 == '' ">{{ whentweened_0.toFixed(0) + ' 주' }} </div>
                <div class="Big" v-if="when_0 <= 0 && have_0 !== '' && need_0 !== ''">{{ '제작 가능' }} </div>
              </div>
            </div>

          <hr style="width:355px; float:left;">

          <div class="Input_box">
            <label class="Gray"> 보유 재료
              <input class="Have" v-model="have_0" maxlength="4">
            </label>
          </div>

          <div class="Input_box">
            <label class="Gray" title="제작할 융합 개수를 입력해주세요." > 융합 개수
              <input class="Need" maxlength='2' v-model="need_0" title="제작할 융합 개수를 입력해주세요.">
            </label>
          </div>

          <div class="Input_box">
            <label class="Gray" title="계정 귀속 캐릭터 수를 입력해주세요. (배럭)"> 캐릭터 수   
              <input class="Account" maxlength='2' v-model="account_0" title="계정 귀속 캐릭터 수를 입력해주세요. (배럭 갯수)" placeholder="0" >
            </label>
          </div>

          <div>
            <button class="Bonus_btn" @click="Pc_0" :style="{ backgroundColor : PcStyleBack_0, color: PcStyleColor_0 }">PC방</button>
            <button class="Bonus_btn Bonus_btn_margin" @click="Pass_0" :style="{ backgroundColor : PassStyleBack_0, color:PassStyleColor_0 }">PASS</button>
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
            have_0 : '',
            need_0 : '',
            account_0 : '',
            result_0 : '',
            resultmax_0 : '필요 재료',
            when_0 : '',
            PcPass_0 : [false,false],
            PcStyleBack_0 : '',
            PcStyleColor_0 : '',
            PassStyleBack_0 : '',
            PassStyleColor_0 : '',
            resultweened_0: 0,
            whentweened_0: 0,
            // numerator: this.ItemData[0].buyneed * this.need_0 - this.have_0,
            // denominator: this.ItemData[0].shareitem * this.account_0 + this.ItemData[0].getitem + this.ItemData[0].shareitem,
        }
    },
    props : {
        ItemData : Array,
    },
    methods : {
        Materials0_result0() {
            if(this.have_0 == '' || this.need_0 == '') {
                return this.result_0 = 0;
            }
            else {
                this.result_0 = this.ItemData[0].buyneed * this.need_0 - this.have_0

                if(this.result_0 < 0) {
                    return this.resultmax_0 = '남은 재료'
                }
                return this.resultmax_0 = '필요 재료'
            }
        },

        Materials0_result1() {
            if(this.have_0 == '' || this.need_0 == '') {
                return this.when_0 = 0;
            }
            
            if(this.PcPass_0[0] == true && this.PcPass_0[1] == true) { // 피시방 PASS ON
                this.when_0 = Math.ceil((this.ItemData[0].buyneed * this.need_0 - this.have_0 )  / (this.ItemData[0].getitem + this.ItemData[0].shareitem * this.account_0 + this.ItemData[0].shareitem + this.ItemData[0].getpc + this.ItemData[0].getpass ))
                if(this.when_0 > 0) {
                    return this.when_0 + ' 주'
                }
                else {
                    return '제작 가능'
                }
            }

            else if(this.PcPass_0[0] == true) { // PC방 ON
                this.when_0 = Math.ceil(((this.ItemData[0].buyneed * this.need_0) - this.have_0 ) / (this.ItemData[0].getitem + this.ItemData[0].shareitem * this.account_0 + this.ItemData[0].shareitem + this.ItemData[0].getpc ))
                if(this.when_0 > 0) {
                    return this.when_0 + ' 주'
                }
                else {
                    return '제작 가능'
                }
            }

            else if(this.PcPass_0[1] == true) { // PASS ON
                this.when_0 = Math.ceil(((this.ItemData[0].buyneed * this.need_0) - this.have_0 )  / (this.ItemData[0].getitem + this.ItemData[0].shareitem * this.account_0 + this.ItemData[0].shareitem + this.ItemData[0].getpass ))
                if(this.when_0 > 0) {
                    return this.when_0 + ' 주'
                }
                else {
                    return '제작 가능'
                }
            }
            else { // PCPASS OFF
                this.when_0 = Math.ceil(((this.ItemData[0].buyneed * this.need_0) - this.have_0 ) / (this.ItemData[0].getitem + this.ItemData[0].shareitem * this.account_0 + this.ItemData[0].shareitem ))
                if(this.when_0 > 0) {
                    return this.when_0 + ' 주'
                }
                else {
                    return '제작 가능'
                }
            }
        },

        Pc_0() {
            this.PcPass_0[0] = !this.PcPass_0[0]
            if(this.PcPass_0[0] == true) {
                this.PcStyleBack_0 = '#fff';
                this.PcStyleColor_0 = '#000';
            }
            else{
                this.PcStyleBack_0 = '';
                this.PcStyleColor_0 = '';
            }
            return 
        },
        Pass_0() {
            this.PcPass_0[1] = !this.PcPass_0[1]
            if(this.PcPass_0[1] == true) {
                this.PassStyleBack_0 = '#fff';
                this.PassStyleColor_0 = '#000';
            }
            else{
                this.PassStyleBack_0 = '';
                this.PassStyleColor_0 = '';
            }
        },
    },
    watch: {
        have_0(){
            return this.have_0 = this.have_0.replace(/[^0-9]/g, '');
        },

        need_0(){
            return this.need_0 = this.need_0.replace(/[^0-9]/g, '');
        },

        account_0(){
            return this.account_0 = this.account_0.replace(/[^0-9]/g, '');
        },
        result_0(n){
            gsap.to(this, { duration: 0.5, resultweened_0: Number(n) || 0 })
        },
        when_0(n){
            gsap.to(this, { duration: 0.5, whentweened_0: Number(n) || 0 })
        }
    },
}
</script>

<style scoped>
.Materials {
    padding-right: 30px; /* 각 페이지 간격 */
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
    color : #b73aff;
    font-family: 'GmarketSansTTFMedium';
    border: none;
    outline: none;
    /* 필수 */
}

.Name_btn {
    width: 120px;
    background-color: #f4dfff;
    border-radius: 20px;    
    margin-right: 10px;
}

.Itemname_btn {
    background-color: transparent;
}

.Minus_btn {
    width: 35px;
    border-radius: 20px;
    background-color: #f4dfff;
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
    display:none
}
</style>