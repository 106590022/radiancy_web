<template>
<div>
  <b-row>
    <p class="title">NEWS</p>
    <p class="line"></p>
  </b-row>
  <b-row>
    <b-col class="news_col" cols="col-xs-12 col-sm-6 col-md-4" v-for="anew in news" :key="anew.title">
      <b-img class="news_img" :src="anew.img"></b-img>
      <div class="middle">
        <div class="text">{{anew.date}}<br>{{anew.title}}</div>
      </div>
    </b-col>
  </b-row>
  <b-row>
    <b-col col="9"></b-col>
    <b-col col="3">
      <router-link to="edit" class="link"><button type="button" class=" more_but btn btn-outline-success float-right" style="width: 5vmax;">Edit</button></router-link>
    </b-col>
  </b-row>
</div>
</template>

<script>
import {db} from '../database.js'

export default{
  name:'news',
  data(){
    return{
      news: []
    }
  },
  firestore(){
    console.log("firestore")
    return{
      news: db.collection('news')
    }
  },
}
</script>

<style>
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

.news_col{
  margin-bottom: 5vmin;
}

.news_img{
  width: 100%;
  height: 100%;   
  object-fit:cover;   
  border-radius: 8%;
  border-color: #8a8a8a;
  border-width:1px;
  border-style:solid;
  opacity: 1;
  transition: .5s ease;
}

.news_col:hover .news_img{
  opacity: 0.2;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.news_col:hover .middle{
  opacity: 1;
}

.text {
  /* background-color: #07833B; */
  color: #07833B;
  font-size: 24px;
  padding: 16px 16px;
  /* text-shadow: 0.1em 0.1em 0.2em rgb(105, 124, 115) */
}

@media screen and (max-width: 678px){
  .news_img{
    width: 80%;
    margin-bottom: 5vh;
  }
}
</style>