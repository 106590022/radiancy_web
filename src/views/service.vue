<template>
<div>
  <b-row>
    <p class="title">SERVICE</p>
    <p class="line"></p>
  </b-row>
  <b-row>
    <b-col class="rounded info_back_right">
      <b-row class="info-row" >
        <b-col cols="6" class="">
          <b-img class="info_icon align-items-center" :src="require('../assets/service/Group 4.png')"></b-img>
        </b-col>
        <b-col cols="6">
          <p class="serv_info">Radio Protection <br>Engineering Consultant &<br>Project Management</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col class="rounded info_back_left">
      <b-row class="info-row">
        <b-col cols="6">
          <b-img class="info_icon" :src="require('../assets/service/Group 10.png')"></b-img>
        </b-col>
        <b-col cols="6">
          <p class="serv_info">Radio Protection Detect</p>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
  
  <b-row>
    <b-col>
      <b-row class="info-row">
        <b-col cols="6">
          <b-img class="info_icon" :src="require('../assets/service/Group 11.png')"></b-img>
        </b-col>
        <b-col cols="6">
          <p class="serv_info">Radiation Source <br>Shipping / Scrap<br>/ Decontamination</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col>
      <b-row class="info-row">
        <b-col cols="6">
          <b-img class="info_icon" :src="require('../assets/service/Group 12.png')"></b-img>
        </b-col>
        <b-col cols="6">
          <p class="serv_info">Medical Exposure <br>Quality Assurance Service
</p>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
      <b-row class="info-row">
        <b-col cols="6">
          <b-img class="info_icon" :src="require('../assets/service/Group 16.png')"></b-img>
        </b-col>
        <b-col cols="6">
          <p class="serv_info">Radio Protection <br>Education Training</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col>
      <b-row class="info-row">
        <b-col cols="6">
          <b-img class="info_icon" :src="require('../assets/service/Group 17.png')"></b-img>
        </b-col>
        <b-col cols="6">
          <p class="serv_info">Sales</p>
        </b-col>
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
  color:#07833B;
  text-align: left;
  margin-bottom: 1vh;
}

.line{
  width: 100%;
  height: 2px;
  background-color:rgb(7, 131, 59, 0.4); 
}

.info_icon{
  width: 7vw;
  margin-left: 1vw;
  margin-bottom: 2.4vw;
}
.info-row{
  border-radius:10px;
  color:#07833B;
}
.serv_info{
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.5vw;
  color: #707070;
  text-align: left;
}

/* .info_back_right{
  background-color: rgb(150, 201, 171);
  size: 97nx;
  
} */

/* .info_back_left{
  background-color: rgb(150, 201, 171);
  size: 20nx;
  margin-left: 3nx;
} */
</style>

