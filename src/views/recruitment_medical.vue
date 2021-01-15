<template>
<div>
  <b-row>
    <p class="title">RECRUITMENT</p>
    <p class="line"></p>
  </b-row>
  

  <b-row style="margin-top: 5vh;">
    <b-col cols="12" style="padding: 0px;">
      <p class="q_name">Medical engineer</p>
      <b-row class="info_row">
        <b-col cols=2 class ="contact_text">Name</b-col>
        <b-col cols="4" class="info_text"><input type="text" class="form-control input"></b-col>
        <b-col cols=2 class="contact_text">Gender</b-col>
        <b-col cols=2 class="contact_text"><input type="radio" name="" value="">Male</b-col>
        <b-col cols=2 class="contact_text"><input type="radio" name="" value="">Female</b-col>
      </b-row>
      <b-row class="info_row">
        <b-col cols=2 class ="contact_text">Mobile</b-col>
        <b-col cols="4" class="info_text"><input type="text" class="form-control input"></b-col>
        <b-col cols=2 class="contact_text">Email</b-col>
        <b-col cols="4" class="info_text"><input type="text" class="form-control input"></b-col>
      </b-row>
      <b-row class="info_row">
        <b-col cols=2 class ="contact_text">Address</b-col>
        <b-col cols="10" class="info_text"><input type="text" class="form-control input"></b-col>
        
      </b-row>
      <b-row class="info_row">
        <b-col cols=2 class ="contact_text">Driver License</b-col>
        <b-col cols=2 class="contact_text"><input type="checkbox" name="" value="">Motocycle</b-col>
        <b-col cols=2 class="contact_text"><input type="checkbox" name="" value="">Car</b-col>
        <b-col cols=2 class="contact_text"><input type="checkbox" name="" value="">None</b-col>
      </b-row>
      <b-row class="info_row">
        <b-col cols=2 class ="contact_text">Education</b-col>
        <b-col cols=2 class="contact_text"><input type="radio" name="" value="">High school</b-col>
        <b-col cols=2 class="contact_text"><input type="radio" name="" value="">University</b-col>
        <b-col cols=2 class="contact_text"><input type="radio" name="" value="">Master</b-col>
        <b-col cols=4 class="contact_text"><input type="radio" name="" value="">Master</b-col>
      </b-row>
      <b-row class="info_row">
        <b-col cols=2 class ="contact_text">Autobiographical</b-col>
        <b-col cols="4" class="info_text"><input type="file" class="form-control input"></b-col>  
      </b-row>
      <b-row class="info_row">  
        <b-col cols=10 class ="contact_text"></b-col>
        <b-col cols="2" class="info_button"><button type="button" class="btn btn-outline-success" style="width: 100%; font-size:1.2vw; text-align: center; folat: right;" @click="$router.push('recruitment')">apply</button></b-col>  
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



.option_bg{
    width: 80%;
    height: 108px;
    border-radius: 25px;
    background-color: #9bdd82;
    
}

.link{
    font-weight: 4000;
    font-size: 1.7vw;
    color:#07833B;
    text-align: center;   
    align-items: center;
}
.info_row{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.btn{
  float:right; 
}




</style>

