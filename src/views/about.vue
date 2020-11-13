<template>
<div>
  <b-row>
    <p class="title">ABOUT</p>
    <p class="line"></p>
  </b-row>
  <b-row>
    <b-col>
      <b-img class="w-75" :src="require('../assets/about/aboutpic.png')"></b-img>
    </b-col>
    <b-col>
    <p class="info_title">Company Profile</p>
    <p class="info_text">Quantum Radiation Technology Co., Ltd. is a
radiation safety professional company approved by
the Atomic Energy Commission of the Executive
Yuan and has obtained radiation protection
detection, training services, and sales services at
the same time; it is deeply involved in the domestic
radiation protection and shielding design field
    </p>
    <div>
      <button type="button" class=" more_but btn btn-outline-success float-right" >more</button>
    </div>
</b-col>
  </b-row>
</div>
</template>

<script>
export default{
  name:'about'
}
</script>     

<style>
.title{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.7vw;
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
  width: 30vw;
  margin-left: 1vw;
  
}

.info_text{
  color: #707070;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2vw;
  text-align: left;
}

.info_title{
  color: #707070;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.4vw;
  text-align: left;
}

.btn-outline-danger{
  color: #07833B;
  border-color: #07833B;
}
</style>

