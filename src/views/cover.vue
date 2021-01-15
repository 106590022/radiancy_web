<template>
<div>
  <b-row>
    <div class="cover" style="margin: -20vmin -15.5vw 10vh -15.5vw">
      <div class="cover_text">
       <p>Quantum Radiaion Technology</p>
       <p style="font-size: 2.2vmax">Promote the safe use of medical radiation</p>
    </div>
    </div>
  </b-row>
  <b-row>
    <p class="title">ABOUT</p>
    <p class="line"></p>
  </b-row>
  <b-row style="margin-top: 2vmax;">
    <b-col cols="col-12 col-md-6">
      <b-img class="w-75" :src="require('../assets/about/aboutpic.png')"></b-img>
    </b-col>
    <b-col cols="col-12 col-md-6" class="profile">
      <b-row>
        <p class="info_title">Company Profile</p>
      </b-row>
      <b-row>
        <p class="info_text">Quantum Radiation Technology Co., Ltd. is a
radiation safety professional company approved by
the Atomic Energy Commission of the Executive
Yuan and has obtained radiation protection
detection, training services, and sales services at
the same time; it is deeply involved in the domestic
radiation protection and shielding design field
        </p>
    </b-row>
    <div>
      <router-link to="service"  class="link"><button type="button" class=" more_but btn btn-outline-success float-right">MORE</button></router-link>
    </div>
</b-col>
  </b-row>
</div>
</template>

<script>
export default{
  name:'cover'
}
</script>     

<style>
.cover{
  width: 150%;
  margin: 0 auto;
  height: 100vh;
  padding: 200px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  background-image: url(../assets/about/cover.jpg);
  opacity: 0.95;
  z-index: 0;
}

.cover_text{
  color: white;
  font-size: 2.7vmax;
  margin: 0;
  padding: 0;
  position: absolute;;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  white-space:nowrap;
  text-shadow: 0.1em 0.1em 0.2em rgb(41, 41, 41)
}

.title{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.7vmax;
  font-weight: 500;
  color: #07833B;
  text-align: left;
  margin-bottom: 1vh;
}

.line{
  width: 100%;
  height: 2px;
  background-color:#07833B;
}


.info_icon{
  width: 30vmax;
  margin-left: 1vmax;
}

.info_text{
  color: #707070;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2vmax;
  text-align: left;
}

.info_title{
  color: #707070;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.4vmax;
  text-align: left;
}

.btn-outline-danger{
  color: #07833B;
  border-color: #07833B;
}

@media screen and (max-width: 678px){
  .profile{
    margin-top: 5vh;
  }
}
</style>

