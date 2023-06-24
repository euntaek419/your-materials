<template>
  <div class="Materials">
    <div class="Topbox">
        <button class="Topbox_btn Name_btn" disabled>
            {{ ItemData[3].subname }}
        </button>

        <button class="Topbox_btn Itemname_btn" disabled>
            {{ ItemData[3].itemname[0] }}
        </button>

        <button class="Topbox_btn Minus_btn" @click="$emit('Open3')">
            -
        </button>
    </div>

    <div class="Mainbox">
        <div class="Box_padding">
            <div class="Padding_box">
              <div class="Padding_box1">
                  <div class="Gray">{{ resultmax_3 }}</div>
                  <div class="Hide" >{{ Materials3_result0() }} </div>
                  <div class="Big" >{{ Math.abs(resultweened_1.toFixed(0)) + ' 개' }} </div>
              </div>

              <div class="Padding_box2">
                <div class="Gray">소요 기간</div>
                <div class="Hide">{{ Materials3_result1() }}</div>
                <div class="Big" v-if="when_3 > 0 || have_3 == '' || need_3 == '' ">{{ whentweened_3.toFixed(0) + ' 주' }} </div>
                <div class="Big" v-if="when_3 <= 0 && have_3 !== '' && need_3 !== ''">{{ '제작가능' }} </div>
              </div>
            </div>

          <hr style="width:355px; float:left;">

          <div class="Input_box">
            <label class="Gray"> 보유 재료
              <input class="Have" maxlength='4' v-model="have_3">
            </label>
          </div>

          <div class="Input_box">
            <label class="Gray" title="제작할 융합 개수를 입력해주세요."> 융합 개수
              <input class="Need" maxlength='2' v-model="need_3" title="제작할 융합 개수를 입력해주세요.">
            </label>
          </div>

          <div class="Input_box">
            <label class="Gray" title="계정 귀속 캐릭터 수를 입력해주세요. (배럭)"> 캐릭터 수   
              <input class="Account" maxlength='2' v-model="account_3" placeholder="0" title="계정 귀속 캐릭터 수를 입력해주세요. (배럭)">
            </label>
          </div>

          <div>
            <button class="Bonus_btn" @click="Pc_3" :style="{ backgroundColor : PcStyleBack_3, color: PcStyleColor_3 }">PC방</button>
            <button class="Bonus_btn Bonus_btn_margin" @click="Pass_3" :style="{ backgroundColor : PassStyleBack_3, color:PassStyleColor_3 }">PASS</button>
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
            have_3 : '',
            need_3 : '',
            account_3 : '',
            result_3 : '',
            resultmax_3 : '필요 재료',
            when_3 : '',
            PcPass_3 : [false,false],
            PcStyleBack_3 : '',
            PcStyleColor_3 : '',
            PassStyleBack_3 : '',
            PassStyleColor_3 : '',
            resultweened_3: 0,
            whentweened_3: 0,
        }
    },
    props : {
        ItemData : Array,
    },
    methods : {
        Materials3_result0() {
            if(this.have_3 == '' || this.need_3 == '') {
                return this.result_3 = 0;
            }
            
            else {
                this.result_3 = (this.ItemData[3].buyneed[0] * this.need_3) - this.have_3
                
                if(this.result_3 < 0) {
                    return this.resultmax_3 = '남은 재료'
                    
                }
                return this.resultmax_3 = '필요 재료'
                
            }
        },

        Materials3_result1() {
            if(this.have_3 == '' || this.need_3 == '') {
                return 'N 주'
            }
            
            if(this.PcPass_3[0] == true && this.PcPass_3[1] == true) {
                this.when_3 = Math.ceil(((this.ItemData[3].buyneed[0] * this.need_3) - this.have_3 ) / (this.ItemData[3].getitem[0] + this.ItemData[3].shareitem * this.account_3 + this.ItemData[3].shareitem + this.ItemData[3].getpc[0] + this.ItemData[3].getpass[0]))
                if(this.when_3 > 0) {
                    return this.when_3 + ' 주'
                }
                else {
                    return '제작 가능'
                }
            }

            else if(this.PcPass_3[0] == true) {
                this.when_0 = Math.ceil(((this.ItemData[3].buyneed[0] * this.need_3) - this.have_3 ) / (this.ItemData[3].getitem[0] + this.ItemData[3].shareitem * this.account_3 + this.ItemData[3].shareitem + this.ItemData[3].getpc[0]))
                if(this.when_3 > 0) {
                    return this.when_3 + ' 주'
                }
                else {
                    return '제작 가능'
                }
            }

            else if(this.PcPass_3[1] == true) {
                this.when_0 = Math.ceil(((this.ItemData[3].buyneed[0] * this.need_3) - this.have_3 )  / (this.ItemData[3].getitem[0] + this.ItemData[3].shareitem * this.account_3 + this.ItemData[3].shareitem + this.ItemData[3].getpass[0]))
                if(this.when_3 > 0) {
                    return this.when_3 + ' 주'
                }
                else {
                    return '제작 가능'
                }
            }

            else {
                this.when_3 = Math.ceil(((this.ItemData[3].buyneed[0] * this.need_3) - this.have_3 ) / (this.ItemData[3].getitem[0] + this.ItemData[3].shareitem * this.account_3 + this.ItemData[3].shareitem) )
                if(this.when_3 > 0) {
                    return this.when_3 + ' 주'
                }
                else {
                    return '제작 가능'
                }
            }
        },

        Pc_3() {
            this.PcPass_3[0] = !this.PcPass_3[0]
            if(this.PcPass_3[0] == true) {
                this.PcStyleBack_3 = '#fff';
                this.PcStyleColor_3 = '#000';
            }
            else{
                this.PcStyleBack_3 = '';
                this.PcStyleColor_3 = '';
            }
        },
        Pass_3() {
            this.PcPass_3[1] = !this.PcPass_3[1]
            if(this.PcPass_3[1] == true) {
                this.PassStyleBack_3 = '#fff';
                this.PassStyleColor_3 = '#000';
            }
            else{
                this.PassStyleBack_3 = '';
                this.PassStyleColor_3 = '';
            }
        },
    },
    watch: {
        have_3(){
            return this.have_3 = this.have_3.replace(/[^0-9]/g, '');
        },

        need_3(){
            return this.need_3 = this.need_3.replace(/[^0-9]/g, '');
        },

        account_3(){
            return this.account_3 = this.account_3.replace(/[^0-9]/g, '');
        },
        result_3(n){
            gsap.to(this, { duration: 0.5, resultweened_3: Number(n) || 0 })
        },
        when_3(n){
            gsap.to(this, { duration: 0.5, whentweened_3: Number(n) || 0 })
        }
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
    display:none;
}
</style>