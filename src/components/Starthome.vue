<template>
    <div>
        <Navi />
        <div class="home_start_menu">
        </div>


        <div class="container mb-5 p-0 text-center  instalar_uchunStillar">
            <h4 class="text-center pt-5 pb-5">Ilovalar </h4>
            <MDBCardGroup class=" text-center card_groups777" style="gap: 70px;">
                <MDBCard class="card_w75 ">
                    <p class="text-center card_respotext">
                        <img src="../assets/healts.jpg" top alt="..." class="ilovalar_uchun"
                            style="border-radius: 50%;" />
                    </p>
                    <hr>
                    <MDBCardBody>
                        <MDBCardTitle><a href="https://play.google.com/store/search?q=samsung+health+monitor+watch+3&c=apps&hl=ru&gl=US">Yuklash va toliq info</a>
                        </MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard class="card_w75">
                    <p class="text-center card_respotext">
                        <img src="../assets/strava.webp" top alt="..." class="ilovalar_uchun"  style="border-radius: 50%;"/>
                    </p>
                    <hr>
                    <MDBCardBody>
                        <MDBCardTitle><a href="https://play.google.com/store/search?q=strava+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&c=apps&hl=ru&gl=US">Yuklash va toliq info</a>
                        </MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard class="card_w75">
                    <p class="text-center card_respotext">
                        <img src="../assets/ggfit.webp" top alt="..." class="ilovalar_uchun" />
                    </p>
                    <hr>
                    <MDBCardBody>
                        <MDBCardTitle><a href="https://play.google.com/store/apps/details?id=com.google.android.apps.fitness">Yuklash va toliq info</a>
                        </MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </MDBCardGroup>
        </div>
        <div class="container mb-5" id="mashuskunalari">
            <div class=" note-secondary mb-3 p-2 rounded-2  d-flex justify-content-center align-items-center">
                <h3 class="mashiqQIlishuskunalari">Mashq Qilish Uskunalari</h3>
            </div>

            <n-carousel autoplay draggable class="" :slides-per-view="4.5" :space-between="15" :loop="true">

                <img class="carousel-img rounded-4 border h-75" :src="img7.img" v-for="img7 in img_list" :key="img7.id">

            </n-carousel>
        </div>
        <div class="container border mt-5 d-none">
            <div>
                <img src="../assets/fakul_img.gif" alt="" class="w-25">
            </div>
            <div></div>
        </div>
        <div class="container d-none">
            <div class=" note-secondary mb-3 p-2 rounded-2  d-flex justify-content-center align-items-center">
                <h3>Milliy sport turlari va xalq o’yinlari</h3>
            </div>
            <n-carousel autoplay draggable class="" :slides-per-view="4.5" :space-between="15" :loop="true">

                <img class="carousel-img rounded-4 border h-75" :src="img7.img" v-for="img7 in img_list2"
                    :key="img7.id">

            </n-carousel>

        </div>


        <Footer7 />
    </div>
</template>
<script setup>
import { ref } from "vue";
import Footer7 from "./Footer7.vue";
import { MDBCardGroup, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBCardFooter } from "mdb-vue-ui-kit";

import Navi from "../components/Navi.vue";
let placeholder_if00 = ref(true);
const carouselLoad = () => { placeholder_if00.value = false; };


let img_list = ref([
    { id: 0, img: new URL("../assets/m9.jpg", import.meta.url) },
    { id: 1, img: new URL("../assets/m1.jpg", import.meta.url) },
    { id: 2, img: new URL("../assets/m2.jpg", import.meta.url) },
    { id: 3, img: new URL("../assets/m3.jpg", import.meta.url) },
    { id: 4, img: new URL("../assets/m4.jpg", import.meta.url) },
    { id: 5, img: new URL("../assets/m10.png", import.meta.url) },
    { id: 6, img: new URL("../assets/m6.webp", import.meta.url) },
    { id: 7, img: new URL("../assets/m7.webp", import.meta.url) },
    { id: 8, img: new URL("../assets/m8.jpg", import.meta.url) },
    { id: 9, img: new URL("../assets/m9.jpg", import.meta.url) },
    { id: 10, img: new URL("../assets/m1.jpg", import.meta.url) },
])




let img_list2 = ref([
    { id: 0, img: new URL("../assets/ms1.jpg", import.meta.url) },
    { id: 1, img: new URL("../assets/ms2.jpg", import.meta.url) },
    { id: 2, img: new URL("../assets/ms3.jpg", import.meta.url) },
    { id: 3, img: new URL("../assets/m3.jpg", import.meta.url) },
    { id: 4, img: new URL("../assets/m4.jpg", import.meta.url) },
])

</script>


<style> 

/* responsive uchun  stillar */

@media (max-width:576px) {
    .card_groups777 {
        display: flex;
        height: auto !important;
        gap: 10px !important;
    }

    .card_w75 {
        width: 80% !important;
        font-size: 15px !important;
    }

    .card_w75 .card-body .card-title {
        font-size: 12px;
    }

    .card-body {
        padding: 0;
    }

    .home_start_menu {
        height: 300px !important;
    }

    .mashiqQIlishuskunalari {
        font-size: 15px;
    }

    /* .card_respotext {
        margin-bottom: 0;
    } */

}


.card_respotext { 
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.card_groups777 {
    width: 80%;
    height: 350px;
}

.carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position-y: 100%;
}


.home_start_menu {
    height: 550px;
    background: url("../assets/jdpu11.jpg") no-repeat;
    background-size: cover;
    background-position-y: 100%;
    /* filter: brightness(80%); */
    /* object-fit: cover; */
}

.card_w75 {
    /* height: 75% !important; */
    filter: drop-shadow(0 0 10px #bab8b8);
    border-radius: 5px !important;
    padding-top: 5px;
}



.card_w75 img {
    width: 50%;
}



.instalar_uchunStillar {
    display: flex;
    flex-direction: column;
    align-items: center
}
</style>