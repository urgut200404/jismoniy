<template>
 <div class="bg-dark">
    <div class="container">
        <MDBFooter :text="['center', 'lg-start', 'muted']" class="bg-dark ">
            <!-- Section: Social media -->
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-light">
                <!-- Left -->
                <div class="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <!-- Left -->

                <!-- Right -->
                <div>
                    <a href="" class="me-4 text-reset">
                        <MDBIcon class="link-secondary" iconStyle="fab" icon="facebook-f"></MDBIcon>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <MDBIcon class="link-secondary" iconStyle="fab" icon="twitter"></MDBIcon>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <MDBIcon class="link-secondary" iconStyle="fab" icon="google"></MDBIcon>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <MDBIcon class="link-secondary" iconStyle="fab" icon="instagram"></MDBIcon>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <MDBIcon class="link-secondary" iconStyle="fab" icon="linkedin"></MDBIcon>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <MDBIcon class="link-secondary" iconStyle="fab" icon="github"></MDBIcon>
                    </a>
                </div>
                <!-- Right -->
            </section>
            <!-- Section: Social media -->

            <!-- Section: Links  -->
            <section class="">
                <MDBContainer class="text-center text-md-start mt-5">
                    <!-- Grid row -->
                    <MDBRow class="mt-3">
                        <!-- Grid column -->
                        <MDBCol md="3" lg="4" xl="3" class="mx-auto mb-4">
                            <!-- Content -->
                            <h6 class="text-uppercase fw-bold mb-4 text-light">
                                <i class="fas fa-gem me-3 link-secondary"></i>Main JDPU
                            </h6>
                            <p class="text-light">
                                Bizni Ilovani yuklab oling
                            </p>
                            <p class="d-flex">
                               <a href="#"> <button class="btn  p-0 down_btn"><img src="../assets/ggplay.jpg" class="w-100 h-75 rounded-2"></button></a>
                                <a href="#"><button class="btn  p-0 down_btn"><img src="../assets/apstore.png" class="w-100 h-100"></button></a>
                            </p>
                        </MDBCol>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <MDBCol md="2" lg="2" xl="2" class="mx-auto mx78 mb-4 text-light">
                            <!-- Links -->
                            <h6 class="text-uppercase fw-bold mb-4 text-warning borlink">Products</h6>
                            <p>
                                <a href="#!" class="text-reset borlink7878">Bosh Menu</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset borlink7878">Sayt haqida</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset borlink7878">Qo'llanma</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset borlink7878">Sport</a>
                            </p>
                        </MDBCol>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <MDBCol md="3" lg="2" xl="2" class="mx-auto mx78 mb-4 dspnone text-light">
                            <!-- Links -->
                            <h6 class="text-uppercase fw-bold mb-4 text-warning borlink">Useful links</h6>
                            <p>
                                <a href="#!" class="text-reset borlink7878 ">Togri ovqatlanish</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset borlink7878">Mashq qilish uskunalari</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset borlink7878">Qiz bolalar uchun</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset borlink7878">O'g'il bollalar uchun</a>
                            </p>
                        </MDBCol>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <MDBCol md="4" lg="3" xl="3" class="mx-auto mx78 mb-md-0 mb-4 text-light">
                            <!-- Links -->
                            <h6 class="text-uppercase fw-bold mb-4 text-warning borlink">Contact</h6>
                            <p>
                                <i class="fas fa-home me-3 link-light"></i> Uzbekistan, Jizzax
                            </p>
                            <p>
                                <i class="fas fa-envelope me-3 link-light"></i>
                                info@example.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" class="me-3 link-light" />
                                + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon icon="print" class="me-3 link-light" />
                                + 01 234 567 89
                            </p>
                        </MDBCol>
                        <!-- Grid column -->
                    </MDBRow>
                    <!-- Grid row -->
                </MDBContainer>
            </section>
            <!-- Section: Links  -->

            <!-- Copyright -->
            <div class="text-center p-4 text-warning" style="background-color: rgba(0, 0, 0, 0.05)">
                © {{ new Date().getFullYear() }} Copyright:
                <a class="text-reset fw-bold" href="#">MAIN.JDPU.UZ</a>
            </div>
            <!-- Copyright -->
        </MDBFooter>
    </div>
 </div>
</template>

<script setup>
import { MDBFooter, MDBIcon, MDBRow, MDBCol, MDBContainer } from "mdb-vue-ui-kit";
import {ref} from "vue";
</script>

<style scoped>

 

/* .borlink7878{ 
    padding-bottom: 5px;
    position: relative;  
} */

.mx78 p{position: relative;padding-bottom: 1px;transition: ease 0.3;}
.mx78 p::before{
    content: "";
    position: absolute;
    bottom: 0;
    width: 0%;
    height: 2px;
    background:linear-gradient(to left, transparent , orange);
    transition: ease 0.3s;
}
.mx78 p:hover::before{
    width: 100%;
}
.mx78 p:hover{
    color:orange;
}

/* .borlink7878::before{
    content: "";
    position: absolute;
    width: 0%;
    transition:ease 0.5s;
    height: 2px;
    background: orange;
    bottom: 0;
}

.borlink7878:hover::before{
    width: 100%;
} */
@media (max-width:576px){
    .dspnone{
        display: none;
    }
}

.down_btn{
    width: 150px;
    height: 50px;
}

.down_btn img{
    object-fit: cover
}
</style>