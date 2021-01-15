<template>
<div id="app">
  <b-navbar class="main-nav fixed-top" toggleable="md" variant="#40B8E7">
    <!-- <b-navbar-brand href="#"><b-img class="logo" :src="require('./assets/about/logo.png')"></b-img></b-navbar-brand> -->

    <b-navbar-toggle target="nav-collapse" style="border: 0;"></b-navbar-toggle>

    <b-collapse id="nav-collapse" style="width: 100%; height: 12%; box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.1);" is-nav>
      <b-img class="logo" :src="require('./assets/about/logo.png')"></b-img>
      <b-navbar-nav class="ml-auto option">
        <b-nav-item href="#" class="nav_item option_word" text="About" style="margin-left: 0;"><router-link to="about" class="link">ABOUT</router-link></b-nav-item>
        <b-nav-item href="#" class="nav_item option_word" text="Service"><router-link to="service"  class="link">SERVICE</router-link></b-nav-item>
        <b-nav-item href="#" class="nav_item option_word" text="Contact"><router-link to="contact"  class="link">CONTACT</router-link></b-nav-item>
        <b-nav-item href="#" class="nav_item option_word" text="History">HISTORY</b-nav-item>
        <b-nav-item href="#" class="nav_item option_word" text="Recruitment"><router-link to="recruitment"  class="link">RECRUITMENT</router-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <router-view style="margin: 20vh 15.5vw 18vh 15.5vw"></router-view>
</div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.logo{
  margin-top: 2.6vh;
  margin-left: 13.5vw;
  margin-bottom: 2.6vh;
  width: 6.3vw;
  /* height: 74px; */
}

.option{
  margin-right: 13.5vw;
}

.option_word{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2vw;
  color: #707070;
  margin-left: 3.5vw;
}

.link{
  color: #707070;
}
.link:hover{
  color: #07833B;
}
</style>
