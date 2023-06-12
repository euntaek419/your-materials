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
  height: 70px;
}

.logo{
  position: fixed;
}

.reset_btn{
  position: fixed;
  top: 50px;
  right: 50px;
  cursor: pointer;
}
</style>