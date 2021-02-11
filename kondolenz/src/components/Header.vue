<template>
  <div class="header wrapper" style="background-image: " @click="goToTop" title="Gehe zum Seitenanfang">
    <h1 class="header title">Peter Spinola</h1>
    <h1 class="header subtitle">Kondolenzbuch</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    goToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style>
  .header.wrapper::before {
    content: "";
    background-image: url('~@/assets/paper_texture.jpg');
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.05;
  }
  .header.wrapper {
    background-color: var(--dark-grey);
    position: sticky;
    width: -webkit-fill-available;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 1;
    padding: 0 2vw;
    box-shadow: 0 -10px 10px 10px black;
    height: 10vh;
  }
  .header.title {
    font-weight: 500;
    font-size: x-large;
    margin: 4px -2vw;
    margin-right: 0;
    padding: 7px 20px 7px 10vw;
    width: fit-content;
    background: var(--yellow);
    color: var(--dark-grey);
    /*box-shadow: 0 0 3px 0 var(--light-yellow);*/
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.3);
  }
  .header.subtitle {
    background: none;
    font-weight: 100;
    font-size: large;
    padding: 2px 0 2px 20px;
    margin: 0;
    color: var(--yellow);
  }

  @media only screen and (max-width: 750px) {
    .header.wrapper {
      justify-content: space-between;
    }
    .header.title {
      font-size: large;
    }
    .header.subtitle {
      font-size: smaller;
      padding: 0;
      padding-right: 5vw;
      margin: 0;
    }
  }
</style>
