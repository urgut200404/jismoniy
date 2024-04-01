<template>
  <div class="nuxt-jdp">
    
    <div class="container home_mx h-100">
      <div class="w-50 pt-5 ps-4 home_mx_child">
        <p class="home_text">O'z Sog'lig'ingizni Nazorat qiling </p>
        <MDBBtn color="primary" id="btn_start" @click="Starthome">BOSHLASH</MDBBtn>
      </div>
      <div class="w-50 d-flex   justify-content-center mx777">
        <div class="text-center  home_shadow" >
          <img src="../images/home_img777.jpg" alt="" class="h-100 w-100 " style="border-radius: 40px;">
        </div>
      </div>
    </div>
      
    
  </div>
</template>
<script setup>
import { MDBBtn } from "mdb-vue-ui-kit";
import {useRouter} from "vue-router";
const router=useRouter()

let Starthome = (()=>{
  router.push({name:"starthome"})
})
</script>

<style scoped>
.nuxt-jdp {
  height: 100vh;  
  background: rgb(43, 24, 33);
}

.home_mx {
  display: flex;
  padding-top: 100px;
}

.home_text {
  color: #fff;
  font-family: "YAFdJvl8raw 0", _fb_, auto;
  font-size: 70px;
  width: 80%;
  text-align: left;
  font-weight: 650;
  letter-spacing: 1px;
  /* background: linear-gradient(to right, rgb(224, 126, 170), rgb(217, 112, 161),rgb(143, 65, 101), rgb(167, 103, 133)); */
  filter: drop-shadow(0 0 40px rgb(172, 98, 215));
   
}

#btn_start {
  font-size: 17px;
  background: rgb(253, 40, 141);
  padding: 10px 70px;
  border-radius: 20px;
  box-shadow: none !important;
  outline: none;
}


.home_shadow{ 

  border-radius: 40px;
  height: 90%;
  filter: drop-shadow(0 0 0px rgba(91, 140, 245, 0.462));
  box-shadow:-120px 0 80px rgba(204, 121, 185, 0.122), -10px 0 80px rgba(237, 87, 174, 0.495),70px 0 80px rgba(82, 42, 128, 0.182) ,120px 0 80px rgba(207, 124, 255, 0.055);

}



@media (max-width:576px){
  .home_text{
    text-align: center;
    font-size: 20px;
    color: #e40a98;
  }

  #btn_start{
    font-size: 12px;  
    padding: 10px 40px;
  }

  .home_shadow{
    display: none;
  }

  .nuxt-jdp { 
    background: url("../images/boys.jpg") no-repeat;  
    background-size: cover;
    text-align: center; 
    padding: 0 !important;
  }

  .home_mx{ 
    text-align: center;
    display: flex !important;   
    justify-content: center ; 
    padding: 0;
  }
  .home_mx_child{
    border-radius: 10px;
    margin: 0 !important;
    width: 100% !important;
    height: 100% !important;
    backdrop-filter: blur(10px);

  }


  .mx777{
    display: none !important;
  }
}
</style>