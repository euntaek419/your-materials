<template>
  <div class="footer">
    <div class="footer_box">
      <div>{{ ItemData[0].name }}</div>

      <div>{{ ItemData[1].name }}</div>

      <div>{{ ItemData[2].subname }}</div>

      <div>{{ ItemData[3].subname }}</div>

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
  font-size: 20px;
}
</style>