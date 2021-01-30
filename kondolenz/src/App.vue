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
    padding: 10px 0;
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
    margin: 5px 0;
    padding: 7px 25px 7px 50px;
    width: fit-content;
    background: var(--dark-grey);
    color: var(--yellow);
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    /* TODO?? border-right: var(--yellow) thick solid;*/
  }
  .entry.font.text {
    margin: 10px 30px;
    margin-right: 50px;
    text-align: justify;
    word-wrap: normal;
  }
  .entry.font.author {
    font-size: small;
    padding: 0 0 0 20px;
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
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
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
  .entry.imagewrapper {
    height: 250px;
    width: fill-available;
    background: var(--dark-grey);
    padding: 10px 10px;
    margin: 20px 0 10px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  }
  .entry.imagewrapper>div {
    height: fill-available;
    overflow: auto;
    display: flex;
    width: fill-available;
    padding: 15px 0;
  }
  .entry.imagewrapper>div::-webkit-scrollbar {
    height: 10px;
    margin-top: 5px;
  }
  .entry.imagewrapper>div::-webkit-scrollbar-thumb {
    background: rgb(95, 95, 95);
    border-radius: 4px;
  }
  .entry.imagewrapper>div::-webkit-scrollbar-thumb:hover {
    background: rgb(110, 110, 110);
  }
  .entry.image {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    margin: 0 5px;
  }
  .entry.titlewrapper {
    display: flex;
    align-items: baseline;
  }
</style>
