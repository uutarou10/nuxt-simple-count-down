<template>
  <div id="frame">
    <nuxt/>
  </div>
</template>
<script>
export default {
  head () {
    return {
      title: 'SIMPLE COUNT DOWN',
      link: [
        {hid: 'font', href: 'https://fonts.googleapis.com/css?family=M+PLUS+1p:400,700,900&amp;subset=japanese', rel: 'stylesheet'}
      ]
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    background-color: #2c3e50;
    height: 100vh;
    font-family: 'M PLUS 1p', sans-serif;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: calc(10px + 1vw);
  }

  #frame {
    background-color: white;
    color: #2c3e50;
    width: 80vw;
    height: 80vh;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    /* body {
      background-color: red;
    } */
    #frame {
      width: 100vw;
      padding: 0;
    }
  }
</style>
