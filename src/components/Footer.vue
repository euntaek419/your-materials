<template>
  <div class="footer">

    <div class="footer_box">
      <button class="footer_btn" style="color: #b73aff; background-color: #f4dfff; width: 120px;">
        {{ ItemData[0].name }}
      </button>
    </div>

    <div class="footer_box">
      <button class="footer_btn" style="color: #3680ff; background-color: #e1ecff; width: 120px;">{{ ItemData[1].name }}</button>
    </div>
    
    <div class="footer_box">
      <button class="footer_btn2" style="color: #ff9c00; background-color: #ffe6bd; width: 80px;">{{ ItemData[2].subname }}</button>   
      <button class="footer_btn">폭룡왕의 인장</button>
      <button class="footer_btn">용의 겁화</button>
    </div>

    <div class="footer_box">
      <button class="footer_btn3" style="color: #ff3535; background-color: #ffdfdf; width: 150px;">
        {{ ItemData[3].subname }}
      </button>
      <button class="footer_btn">폭룡왕의 인장</button><p></p>
      <button class="footer_btn">용의 겁화</button>

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
  height: 150px;
  display: flex;
}

.footer_box{
  width: 400px;
}

.footer_btn{
  height: 35px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  border: none;
  outline: none;
  text-align: center;
}

.footer_btn2{
  height: 35px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  border: none;
  outline: none;
  text-align: center;
}

.footer_btn3{
  height: 35px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  border: none;
  outline: none;
  text-align: center;
}
</style>