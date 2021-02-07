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
    --dark-grey: #2f2f2f;
    font-family: Verdana;
    font-weight: 100;
    font-size: large;
    word-break: normal;
  }
  .mainwrapper::before {
    content: "";
    background-image: url('~@/assets/paper_texture.jpg');
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.08;
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
    margin: 5vh 15vw;
    width: -webkit-fill-available;
    padding: 10px 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  }
  .entry.font {
    padding: 0;
    margin: 0;
    font-weight: 100;
    font-size: medium;
    width: fill-available;
    text-align: justify;
    word-wrap: normal;
  }
  .entry.font.title {
    font-size: large;
    margin: 0;
    margin-left: -55px;
    padding: 7px 25px 7px 55px;
    width: fit-content;
    min-width: fit-content;
    background: var(--dark-grey);
    color: var(--yellow);
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    margin-right: 10px;
    /* TODO?? border-right: var(--yellow) thick solid;*/
  }
  .entry.font.text {
    margin: 10px 55px;
    margin-right: 75px;
  }
  .entry.font.author {
    font-size: smaller;
    padding: 5px 0;
    margin-right: 10px;
    width: fit-content;
    min-width: fit-content;
  }
  .entry.font.date {
    font-size: small;
    padding: 5px 0;
    width: fit-content;
  }
  .entry.font.button {
    padding: 7px 10px;
    width: fit-content;
    background: var(--dark-grey);
    border: none;
    box-shadow: none;
    color: white;
    margin: 5px 0 5px 55px;
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
    margin: 5px 75px 15px 55px;
  }
  .entry.font.notice {
    margin: 2px 0;
    font-size: small;
    padding: 0 75px 0 55px;
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
  .entry.imagewrapper>div::-webkit-scrollbar-thumb:active {
    background: rgb(110, 110, 110);
  }
  .entry.image {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    margin: 0 5px;
  }
  .entry.titlewrapper {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    padding-left: 55px;
  }

  @media only screen and (max-width: 1000px) {
    .entry.wrapper {
      margin: 5vh 5vw;
    }
  }
  @media only screen and (max-width: 750px) {
    .entry.entry.titlewrapper {
      padding-left: 25px;
    }
    .entry.entry.font {
      font-size: small;
    }
    .entry.font.title {
      padding-left: 25px;
      font-size: smaller;
      margin-left: -25px;
    }
    .entry.font.notice {
      padding-left: 25px;
      padding-right: 25px;
    }
    .entry.font.button {
      margin-left: 25px;
    }
    .entry.font.description {
      margin-left: 25px;
      margin-right: 25px;
    }
    .entry.font.text {
      margin-left: 25px;
      margin-right: 25px;
    }
    .entry.font.notice {
      font-size: x-small;
    }
    .entry.imagewrapper {
      height: 200px;
    }
  }
</style>
