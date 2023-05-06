<template>
  <div>
    <div>
      <Title></Title>
    </div>
    
    <div>
      <your-materials></your-materials>
    </div>

    <div>
      <Floating></Floating>
    </div>
    
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import YourMaterials from '@/components/Your-materials';
import Title from '@/components/Title';
import Footer from '@/components/Footer';
import Floating from '@/components/Floating';



export default {
  components: {
    YourMaterials,
    Title,
    Footer,
    Floating,
  }
}
</script>

<style>
@font-face{
  font-family: 'GmarketSansTTFBold';
  src : url('assets/fonts/GmarketSansTTFBold.ttf');
}

@font-face{
  font-family: 'GmarketSansTTFMedium';
  src : url('assets/fonts/GmarketSansTTFMedium.ttf');
}

body,html,#app{
  font-family: 'GmarketSansTTFMedium';
  color: #0c0342;
  background-color: #e1e1e1;
  padding: 0 0 80px;
  text-align: center;
}
</style>
