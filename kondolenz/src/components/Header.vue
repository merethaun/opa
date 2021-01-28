<template>
  <div class="header wrapper">
    <div>he</div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper {
    background: green;
    position: sticky;
    width: -webkit-fill-available;
    top: 0;
    left: 0;
    display: flex;
    z-index: 1;
  }
</style>
