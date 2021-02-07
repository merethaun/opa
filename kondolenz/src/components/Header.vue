<template>
  <div class="header wrapper" style="background-image: ">
    <h1 class="header title">Peter Spinola</h1>
    <h1 class="header subtitle">Kondolenzbuch</h1>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
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
    padding: 10px 2vw 20px;
    box-shadow: 0 -10px 10px 10px black;
  }
  .header.title {
    font-weight: 500;
    font-size: x-large;
    margin: 4px -2vw;
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
    padding: 2px 0 2px 50px;
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
