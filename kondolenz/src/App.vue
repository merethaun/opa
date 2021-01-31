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
    --light-yellow: #fd9c00;
    --yellow: #ec8f14;
    --grey: #979797;
    --dark-grey: #3a3a3a;
    font-family: Verdana;
    font-weight: 100;
    font-size: large;
  }
  .mainwrapper::before {
    content: "";
    background-image: url('~@/assets/paper_texture.jpg');
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.15;
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
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
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
    padding: 7px 25px 7px 40px;
    width: fit-content;
    background: var(--dark-grey);
    color: var(--yellow);
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    /* TODO?? border-right: var(--yellow) thick solid;*/
  }
  .entry.font.text {
    margin: 10px 40px;
    margin-right: 60px;
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
    margin: 5px 0 5px 40px;
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
    margin: 5px 40px;
  }
  .entry.font.notice {
    margin: 2px 0;
    font-size: small;
    padding: 0 0 0 40px;
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
    padding: 7px 0;
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
  .entry.formwrapper {
    padding: 5px 40px;
    display: flex;
    flex-direction: column;
  }
  .entry.formwrapper.row {
    padding: 5px 0;
    flex-direction: row;
  }
  .entry.font.label {
    width: 125px;
  }
</style>
