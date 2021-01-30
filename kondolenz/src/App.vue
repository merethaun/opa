<template>
  <div class="main wrapper">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  :root {
    --yellow: #ec8f14;
    --grey: #959595;
    --dark-grey: #494949;
    font-family: 'Verdana';
    font-weight: 100;
    font-size: large;
  }
  .mainwrapper {
    background: var(--grey);
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    min-height: fill-available;
  }
  .entry.wrapper {
    background: white;
    display: flex;
    flex-direction: column;
    position: relative;
    height: fit-content;
    margin: 5vh 4vw;
    width: -webkit-fill-available;
    padding: 10px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  }
  .entry.font {
    padding: 0;
    margin: 0;
    font-weight: 100;
    font-size: medium;
    width: fit-content;
  }
  .entry.font.title {
    font-size: large;
    margin: 4px -20px;
    padding: 7px 25px 7px 50px;
    width: fit-content;
    background: var(--dark-grey);
    color: var(--yellow);
    /* TODO?? border-right: var(--yellow) thick solid;*/
  }
  .entry.font.text {
    margin: 10px 5px;
    margin-right: 20px;
  }
  .entry.font.author {
    font-size: small;
    padding: 0 0 0 30px;
  }
  .entry.font.button {
    padding: 7px 10px;
    width: fit-content;
    background: var(--dark-grey);
    border: none;
    box-shadow: none;
    color: white;
    margin: 5px 0 5px 30px;
    outline: none;
    cursor: pointer;
  }
  .entry.font.button.cancel {
    background: var(--grey);
    margin: 5px 0 5px 5px;
  }
  .entry.font.button:hover {
    filter: brightness(90%);
  }
  .entry.font.description {
    margin: 5px 0;
  }
  .entry.font.notice {
    margin: 2px 0;
    font-size: x-small;
    padding: 0 0 0 30px;
    color: var(--grey)
  }
</style>
