<template>
<div>
  <b-row>
    <p class="title">RECRUITMENT</p>
    <p class="line"></p>
  </b-row>
  <b-row style="margin-top: 5vh;">
    <b-col cols="7" style="padding: 0px;">
      <p class="q_name">Medical engineer</p>
      <b-row class="info_title">
        <b-col cols="12">CONDITION</b-col>  
      </b-row>
      <b-row class="info_row">
        <b-col cols="12">1.Bachelor or Master of Medical Enginering<br>
        2.Willing to cooperate with short-term domestic business trips<br>
        3.Have a driver's license<br>
        4.The new salary is based on the standards of the industrial Research Institute
        </b-col>  
      </b-row>
      <b-row class="info_title">
        <b-col cols="12">BONUS</b-col>  
      </b-row>
      <b-row class="info_row">
        <b-col cols="12">1.Intermediate to advanced level in English test or TOEIC score above 650 or other equivale ability<br>
        2.Use of Microsoft Office series(Word,Excel,Powerpoint) tools<br>
        3.Conpleted medical device design/medical device regulations related courses<br>
        4.Have experience in ISO product inspection registration or medical device human testing
        </b-col>  
      </b-row>
    </b-col>
    
    <b-col cols="5" style="padding: 0px;">
      <b-row class="contact" style="margin-top:0px;">
        <b-col cols="4"><button type="button" class="btn btn-outline-success" style="width: 100%; font-size:1.2vw; text-align: center;" @click="$router.push('recruitment_medical')">apply</button></b-col>
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
    font-weight: 400;
    font-size: 1.7vw;
    color:#07833B;
    text-align: center;   
    align-items: center;
}

.btn{
  float:right;
}
.info_row{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color:#707070;
}
.info_title{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color:#707070;
  font-weight: 400;
  
}




</style>

