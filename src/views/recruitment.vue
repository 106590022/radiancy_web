<template>
<div>
  <b-row>
    <p class="title">RECRUITMENT</p>
    <p class="line"></p>
  </b-row>
  <b-row style="margin-top: 5vh;">
    <b-col cols="5" style="padding: 0px;">
            <div class="option_bg">      
                <router-link to="recruitment_apply"  class="link">Radiation protection division</router-link>      
            </div>
    </b-col>
    <b-col cols="7" style="padding: 0px;">
    </b-col>
  </b-row>

  <b-row style="margin-top: 5vh;">
    <b-col cols="5" style="padding: 0px;">
        <div class="option_bg">
            <router-link to="recruitment"  class="link" >Medical engineer</router-link>
        </div>
    </b-col>
    <b-col cols="7" style="padding: 0px;">
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
    width: 100%;
    height: 108px;
    border-radius: 25px;
    background-color: #e0f3d9;
    align-items: center;
    text-align: center; 
    display: flex;
     
    
}

.link{
    
    font-weight: 400;
    font-size: 1.6vw;
    color:#07833B;
    text-align: justify;   
    align-items: center;
    margin-bottom: 1vh;
}




</style>

