<template>
<div>
  <b-row>
    <p class="title">CONTACT</p>
    <p class="line"></p>
  </b-row>
  <b-row style="margin-top: 5vh;">
    <b-col cols="7" style="padding: 0px;">
      <p class="q_name">Quantum Radition Technology</p>
      <b-row class="info_row">
        <b-col cols="2"><b-img class="info_icon" :src="require('../assets/contact/ic_call_24px.png')"></b-img></b-col>
        <b-col cols="10" class="info_text">02 2911 2196</b-col>
      </b-row>
      <b-row class="info_row">
        <b-col cols="2"><b-img class="info_icon" :src="require('../assets/contact/ic_access_time_24px.png')"></b-img></b-col>
        <b-col cols="10" class="info_text">Weekdays 9:00AM - 6:00PM</b-col>
      </b-row>
      <b-row class="info_row">
        <b-col cols="2"><b-img class="info_icon" :src="require('../assets/contact/ic_markunread_24px.png')"></b-img></b-col>
        <b-col cols="10" class="info_text">alvin.chen@radition.com.tw</b-col>
      </b-row>
      <b-row class="info_row">
        <b-col cols="2"><b-img class="info_icon" style="margin-top:1vh;" :src="require('../assets/contact/ic_location_on_24px.png')"></b-img></b-col>
        <b-col cols="10" class="info_text">No. 2, Aly. 34, Ln. 65, Sec. 3, Beixin Rd.,<br>Xindian Dist., New Taipei City 231</b-col>
      </b-row>
    </b-col>
    <b-col cols="5" style="padding: 0px;">
      <b-row class="contact" style="margin-top:0px;">
        <b-col cols="3" class="contact_text">Name</b-col>
        <b-col cols="9" class="info_text"><input type="text" class="form-control input"></b-col>
      </b-row>
      <b-row class="contact">
        <b-col cols="3" class="contact_text">Mobile</b-col>
        <b-col cols="9" class="info_text"><input type="text" class="form-control input"></b-col>
      </b-row>
      <b-row class="contact">
        <b-col cols="3" class="contact_text">E-mail</b-col>
        <b-col cols="9" class="info_text"><input type="text" class="form-control input"></b-col>
      </b-row>
      <b-row class="contact">
        <b-col cols="3" class="contact_text" style="align-items: flex-start">Content</b-col>
        <b-col cols="9" class="info_text"><textarea class="form-control input" rows="5" name=textarea></textarea></b-col>
      </b-row>
      <b-row class="contact">
        <b-col cols="8"></b-col>
        <b-col cols="4"><button type="button" class="btn btn-outline-success" style="width: 100%; font-size:1.2vw; text-align: center;">Submit</button></b-col>
      </b-row>
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

.q_name{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.5vw;
  /* font-weight: 400; */
  color: #07833B;
  text-align: left;
}

.info_row{
  text-align: left;
  margin-top: 6vh;
}

.info_icon{
  width: 1.6vw;
  margin-left: 1vw;
}

.info_text{
  color: #707070;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2vw;
}

.contact{
  color: #707070;
  margin-top: 5vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2vw;
  text-align: left;
}

.contact_text{
  display: flex;
  align-items: center;
}

.input{
  width: 100%;
  height: 2vw;
}
</style>

