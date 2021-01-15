<template>
<div id="app">
  <b-navbar id="nav" class="main-nav fixed-top nav" toggleable="md" variant="#40B8E7" style="background: white;">
    <!-- <b-navbar-brand href="#"><b-img class="logo" :src="require('./assets/about/logo.png')"></b-img></b-navbar-brand> -->

    <b-navbar-toggle target="nav-collapse" style="border: 0;"></b-navbar-toggle>
    <b-collapse id="nav-collapse" style="width: 100%; height: 12%; box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.1);" is-nav>
      <router-link to="/" class="link"><b-img class="logo" :src="require('./assets/about/logo.png')"></b-img></router-link>
      <b-navbar-nav class="ml-auto option">
        <b-nav-item href="#" class="nav_item option_word" text="About" style="margin-left: 0;"><router-link to="about" class="link">ABOUT</router-link></b-nav-item>
        <b-nav-item href="#" class="nav_item option_word" text="Service"><router-link to="service"  class="link">SERVICE</router-link></b-nav-item>
        <b-nav-item href="#" class="nav_item option_word" text="Contact"><router-link to="contact"  class="link">CONTACT</router-link></b-nav-item>
        <b-nav-item href="#" class="nav_item option_word" text="News"><router-link to="news"  class="link">NEWS</router-link></b-nav-item>
        <b-nav-item href="#" class="nav_item option_word" text="Recruitment"><router-link to="recruitment"  class="link">RECRUITMENT</router-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <router-view style="margin: 20vmin 15.5vw 18vh 15.5vw"></router-view>
</div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      windowTop: 0
    }
  },watch: {
		$route: function() {
			document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      if (this.$route.name == "cover") {
        document.getElementById("nav").style.cssText = "opacity: 0; transition: 0s ease;";
        document.getElementById("nav-collapse").style.cssText = "opacity: 0";
      }
		}
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods:{
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
      console.log(e.target.documentElement.scrollTop);
      if (this.$route.name == "cover" && this.windowTop <= 475) {
        document.getElementById("nav").style.cssText = "opacity: 0";
      } else {
        document.getElementById("nav").style.cssText = "opacity: 100; background: white;";
        document.getElementById("nav-collapse").style.cssText = "opacity: 100; box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.1);";
      }
    }
  }
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

.nav{
  transition: .5s ease;
  opacity: 0;
}

.logo{
  margin-top: 2.6vh;
  margin-left: 13.5vmax;
  margin-bottom: 2.6vh;
  width: 6.3vmax;
  /* height: 74px; */
}

.option{
  margin-right: 13.5vmax;
}

.option_word{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2vmax;
  color: #707070;
  margin-left: 3.5vmax;
}

.link{
  color: #707070;
}
.link:hover{
  color: #07833B;
}

@media screen and (max-width: 678px){
  .logo{
    margin: 0 0 0 0;
    width: 30vmax;
  }
  .option{
    margin-right: 0;
  }
  .option_word{
    margin-left: 0vmax;
  }
}
</style>
