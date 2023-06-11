<template>
  <div class="footer">

    <div class="footer_box">
      <button class="footer_btn" style="color: #b73aff; background-color: #f4dfff; width: 120px;"
      @click="$emit('Open0')">
        {{ ItemData[0].name }}
      </button>
    </div>

    <div class="footer_box">
      <button class="footer_btn" style="color: #3680ff; background-color: #e1ecff; width: 120px;"
      @click="$emit('Open1')">
        {{ ItemData[1].name }}
      </button>
    </div>
    
    <div class="footer_box">
      <button class="footer_btn2">
        {{ ItemData[2].subname }}
      </button>

      <div>
        <button class="footer_sub_btn1"
        @click="$emit('Open2')">폭룡왕의 인장</button>
        <button class="footer_sub_btn1"
        @click="$emit('Open2_5')">용의 겁화 ( 미개발 ) </button>
      </div>
    </div>

    <div class="footer_box">
      <button class="footer_btn3">
        {{ ItemData[3].subname }}
      </button> 

      <div>
        <button class="footer_sub_btn2"
        @click="$emit('Open3')">폭룡왕의 인장</button>
        <button class="footer_sub_btn2">용의 겁화 ( 미개발 )</button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  props: {
    ItemData : Array,
  }
}
</script>

<style>
.footer {
  height: 40px;
  display: flex;
}

.footer_box{
  width: 460px;
  display: flex;
}

.footer_btn{
  height: 35px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  border: none;
  outline: none;
  text-align: center;
  font-family: 'GmarketSansTTFMedium';
}

.footer_btn2{
  height: 35px;
  border-radius: 20px;
  font-size: 20px;
  border: none;
  outline: none;
  text-align: center;
  font-family: 'GmarketSansTTFMedium';

  color: #ff9c00;
  background-color: #ffe6bd;
  width: 80px;
}

.footer_btn3{
  height: 35px;
  border-radius: 20px;
  font-size: 20px;
  border: none;
  outline: none;
  text-align: center;
  font-family: 'GmarketSansTTFMedium';

  color: #ff3535;
  background-color: #ffdfdf;
  width: 150px;
}

.footer_sub_btn1{
  height: 35px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  border: none;
  outline: none;
  text-align: center;
  background-color: transparent;
  font-family: 'GmarketSansTTFMedium';
  color: #8a8a8a;

  display: block;
  margin-left: 40px;
}

.footer_sub_btn1:hover{
  color : #ff9c00;
}

.footer_sub_btn2{
  height: 35px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  border: none;
  outline: none;
  text-align: center;
  background-color: transparent;
  font-family: 'GmarketSansTTFMedium';
  color: #8a8a8a;

  display: block;
  margin-left: 40px;
}

.footer_sub_btn2:hover{
  color : #ff3535;
}
</style>