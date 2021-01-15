<template>
<div>
  <b-row>
    <p class="title">EDIT</p>
    <p class="line"></p>
  </b-row>
  <b-row style="margin-top: 5vmin;">
    <b-col cols="12" style="padding: 0px;" class="contact_col">
      <b-row class="contact" style="margin-top:0px;">
        <b-col cols="3" class="contact_text">Title</b-col>
        <b-col cols="9" class="info_text"><input type="text" class="form-control input" id="title"></b-col>
      </b-row>
      <b-row class="contact">
        <b-col cols="3" class="contact_text">Date</b-col>
        <b-col cols="9" class="info_text"><input type="text" class="form-control input" id="date"></b-col>
      </b-row>
      <b-row class="contact">
        <b-col cols="3" class="contact_text">Image</b-col>
        <b-col cols="9" class="info_text">
          <input type="file" @change="previewImage" value="upload" class="form-control input" id="image">
          <p style="position:absolute; right:2vw; opacity:0;">Progress: {{uploadValue.toFixed()+"%"}}<progress id="progress" :value="uploadValue" max="100" ></progress></p>
        </b-col>
      </b-row>
      <b-row class="contact">
        <b-col cols="3" class="contact_text" style="align-items: flex-start">Description</b-col>
        <b-col cols="9" class="info_text"><textarea class="form-control input" rows="5" name=textarea id="description"></textarea></b-col>
      </b-row>
      <b-row class="contact">
        <b-col cols="8"></b-col>
        <b-col cols="4"><button type="button" class="btn btn-outline-success" style="width: 100%; font-size:1.2vmax; text-align: center;" @click="update">Save</button></b-col>
      </b-row>
    </b-col>
  </b-row>
</div>
</template>

<script>
import {db, firebase} from '../database.js'

export default{
  name:'edit',
  data(){
	return{
      imageData: null,
      picture: null,
      uploadValue: 0
	}
  },
  methods:{
    previewImage(event) {
      // this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },

    update(){
      console.log("123")
      var n_title = document.getElementById('title').value
      var n_date = document.getElementById('date').value
      // var n_image = document.getElementById("image");
      var n_description = document.getElementById('description').value
      var n_img;
      console.log(n_title)
      if(n_title.length == 0 || n_date.length == 0 || n_description.length == 0){      
        alert("Cannot be empty");
      }
      else{
        console.log("456")
        this.picture=null;
        const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);

        console.log("789")
        // this.picture=null;
        // const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
        storageRef.on(`state_changed`,snapshot=>{
          this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        }, error=>{console.log(error.message)},
        ()=>{this.uploadValue=100;
          storageRef.snapshot.ref.getDownloadURL().then((url)=>{
            this.picture =url;
            db.collection('news').doc(n_date).set({
              title: n_title,
              date: n_date,
              description: n_description,
              img: url
            })
            .then(function() {
              console.log("Document successfully written!");
              console.log(url)
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            })
            console.log(n_img);
          });
        }
        );
        this.$router.push('/news')
    }
      }
  }
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

.q_name{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.5vmax;
  /* font-weight: 400; */
  color: #07833B;
  text-align: left;
}

.info_row{
  text-align: left;
  margin-top: 6vh;
}

.con_info_icon{
  width: 1.7vmax;
  margin-left: 1vmax;
}

.info_text{
  color: #707070;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2vmax;
}

.contact{
  color: #707070;
  margin-top: 5vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2vmax;
  text-align: left;
}

.contact_text{
  display: flex;
  align-items: center;
}

.input{
  width: 100%;
  height: 2vmax;
}
@media screen and (max-width: 678px){
  .contact_col{
    margin-top: 5vh;
  }
}

</style>

