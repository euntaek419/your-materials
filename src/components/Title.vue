<template>
  <div class="title">
    <div class="logo">
      <img src="../assets/images/LOGO_RE.gif">
      <img src="../assets/images/reset.png" class="reset_btn" @click="$emit('reset')">
    </div>

    <div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Title',
    data() {
        return {

        }
    },
}
</script>

<style scoped>

.title{
  height: 100px;
}

.logo{
  position: fixed;
}

.reset_btn{
  position: fixed;
  z-index: 1;
  top: 5%;
  right: 5%;
  cursor: pointer;
}
</style>