<template>
<div>
  <b-row>
    <p class="title">SERVICE</p>
    <p class="line"></p>
  </b-row>
  <b-row style="margin-left: 15px;">
    <b-col cols="col-12 col-md-6" class="rounded info_back_right">
      <b-row class="info-row">
        <b-col cols="5">
          <b-img class="info_icon align-items-center" :src="require('../assets/service/Group 4.png')"></b-img>
        </b-col>
        <b-col cols="7">
          <p class="serv_info">Radio Protection <br>Engineering Consultant &<br>Project Management</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col cols="col-12 col-md-6" class="rounded info_back_left">
      <b-row class="info-row">
        <b-col cols="5">
          <b-img class="info_icon" :src="require('../assets/service/Group 10.png')"></b-img>
        </b-col>
        <b-col cols="7">
          <p class="serv_info">Radio Protection Detect</p>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
  
  <b-row style="margin-left: 15px;">
    <b-col cols="col-12 col-md-6">
      <b-row class="info-row">
        <b-col cols="5">
          <b-img class="info_icon" :src="require('../assets/service/Group 11.png')"></b-img>
        </b-col>
        <b-col cols="7">
          <p class="serv_info">Radiation Source <br>Shipping / Scrap<br>/ Decontamination</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col cols="col-12 col-md-6">
      <b-row class="info-row">
        <b-col cols="5">
          <b-img class="info_icon" :src="require('../assets/service/Group 12.png')"></b-img>
        </b-col>
        <b-col cols="7">
          <p class="serv_info">Medical Exposure <br>Quality Assurance Service
</p>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
  <b-row style="margin-left: 15px;">
    <b-col cols="col-12 col-md-6">
      <b-row class="info-row">
        <b-col cols="5">
          <b-img class="info_icon" :src="require('../assets/service/Group 16.png')"></b-img>
        </b-col>
        <b-col cols="7">
          <p class="serv_info">Radio Protection <br>Education Training</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col cols="col-12 col-md-6">
      <b-row class="info-row">
        <b-col cols="5">
          <b-img class="info_icon" :src="require('../assets/service/Group 17.png')"></b-img>
        </b-col>
        <b-col cols="7">
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
  font-size: 1.7vmax;
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
  width: 7vmax;
  margin-left: 1vmax;
  margin-bottom: 2.4vmax;
  display: flex;
  margin: 0 0 0 0;

}
.info-row{
  border-radius:10px;
  color:#07833B;
  background: #07833b13;
  margin-top: 5vh;
  width: 98%;
  height: 18vh;
  display: flex;
  align-items: center;
}

.info-row:hover{
  background: #07833b2f;
}

.serv_info{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.3vmax;
  color: #707070;
  text-align: left;
  display: flex;
  align-items: center;
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

