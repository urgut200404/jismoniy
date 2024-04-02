<template>
    <div>
        <Navi />
        <div class="container">
            <div class="note-secondary mt-3 mb-2 p-3">
                <router-link :to="{ name: 'starthome' }">Home</router-link> >> {{ $route.name }}
            </div>
        </div>
        <div class="container mb-5 mt-5">
            <h4 class="text-center">Jismoniy tarbiya va sog’lomlashtirish</h4>
            <div class="d-flex gap-2 justify-content-between route_Mash7_mx">
                <div class="" style="width: 32%;">
                    <div id="yonalishlar" class="p-2">
                        <p class="text-center p-0 m-0"><b class="h4 text-dark">Ta'lim yo‘nalishlari</b></p>
                        <ul class="fakellist p-0">
                            <li :style="fakultet_click == 'fl' ? fakultetstilll : ''" @click="fakultet_click = 'fl'">
                                Filologiya
                                (O‘zbek tili, Rus tili, Adabiyot, Xorijiy tillar)</li>
                            <li :style="fakultet_click == 'matem' ? fakultetstilll : ''"
                                @click="fakultet_click = 'matem'">
                                Matematika, fizika, informatika</li>
                            <li :style="fakultet_click == 'ist' ? fakultetstilll : ''" @click="fakultet_click = 'ist'">
                                Tarix
                            </li>
                            <li :style="fakultet_click == 'pg' ? fakultetstilll : ''" @click="fakultet_click = 'pg'">
                                Pedagogika
                                va psixologiyasi</li>
                            <li :style="fakultet_click == 'bosh' ? fakultetstilll : ''"
                                @click="fakultet_click = 'bosh'">
                                Boshlang'ich ta’lim</li>
                            <li :style="fakultet_click == 'mus' ? fakultetstilll : ''" @click="fakultet_click = 'mus'">
                                Musiqa
                            </li>
                            <li :style="fakultet_click == 'tex' ? fakultetstilll : ''" @click="fakultet_click = 'tex'">
                                Texnologik ta’lim</li>
                            <li :style="fakultet_click == 'jism' ? fakultetstilll : ''"
                                @click="fakultet_click = 'jism'">
                                Jismoniy ma'daniyat</li>
                        </ul>
                    </div>
                </div>
                <div class="ps-3 pt-4 route_Mash7_mx2DIv" style="width: 63%;">
                    <!-- tillarboyicha -->
                    <div class="note-light p-4 rounded-2" v-show="fakultet_click == 'fl'">
                        <h4 class="text-center border-bottom pb-2">Filologiya (O‘zbek tili, Rus tili, Adabiyot, Xorijiy
                            tillar)</h4>
                        <div class="d-flex justify-content-center ">
                            <div class=" h-50 d-flex justify-content-around gap-2 border-bottom pb-5 pt-2">
                                <div class="w-75 border-end  d-flex align-items-center gap-1"
                                    style="flex-direction: column;">
                                    <img src="../images/user137.webp" style="border-radius: none !important;"
                                        class="card-image" alt="" id="card_img">
                                    <div class="card-body m-0">
                                        <h5>Toliq ism familiya</h5>
                                    </div>
                                    <p class="d-flex gap-4 h2"><router-link to="#"><i
                                                class="fab fa-telegram text-info" /></router-link><router-link to="#"><i
                                                class="fab fa-instagram text-warning" /></router-link><router-link
                                            to="#"><i class="fab fa-facebook text-primary" /></router-link><router-link
                                            to="#"><i class="fab fa-github text-dark" /></router-link></p>

                                </div>
                                <div class="w-50">
                                    <p class="text-center"><b>MALUMOT</b></p>
                                    <ul class="list-style-none d-flex gap-3 about_me" style="flex-direction: column;">
                                        <li class="list-style-none"><b>ISM:</b> ******</li>
                                        <li><b>Familiya: </b>********</li>
                                        <li><b>Otasini ismi: </b>*******</li>
                                        <li><b>To'liq IFO: </b>************</li>
                                        <li><b>Lavozim: </b>************</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p><b class="mark">Filologiya (O‘zbek tili, Rus tili, Adabiyot, Xorijiy tillar)</b>- Lorem ipsum
                            dolor sit amet consectetur adipisicing elit.
                            Repellendus amet autem laudantium magni illum perferendis odit, molestias, nemo eos alias
                            beatae deserunt, unde culpa. Rerum nulla doloremque odit voluptatem, quasi quaerat quod
                            eligendi blanditiis. Cumque doloribus sapiente eveniet id quo quasi. Illo sit pariatur
                            minima tempora consectetur atque voluptatem sunt incidunt at, facere quae dignissimos eum,
                            dolore officiis ab quidem voluptas fugiat expedita inventore. Repellendus dolorem eius
                            itaque pariatur nam?</p>
                        <div>
                            <div class="border-top  mt-5 pt-3 text-center">
                                <p class="note note-secondary7 m-0"><b style="text-transform: uppercase;">YUGURISHNING
                                        FOYDASI</b></p>
                                <div class=" mt-5">
                                    <div v-show="placeholder_if0">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-12"
                                                style="width: 560px;;height: 315px;"></span>
                                        </h5>
                                    </div>
                                    <div v-show="!placeholder_if0">
                                        <iframe width="560" height="315"
                                            src="https://www.youtube.com/embed/-VQYVe70Prg?si=JNUcEkI3Wvl5a_9h&amp;controls=0"
                                            title="YouTube video player" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                                            @load="videoLoaded"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-5 border-top pt-5 d-flex gap-2" style="flex-direction: column;">
                            <h5 class="text-center">Bo'lajak o'qituvchining xususiyatlari va fazilatlarini
                                shakllantirish</h5>
                            <div class="border-bottom note note-secondary79">
                                <b>Psixofiziologik faoliyatning ustuvor xususiyat-lari</b>
                                <p>Aqliy faollikni oshirish</p>
                            </div>

                            <div class="border-bottom note note-secondary79">
                                <b>Kelajakdagi kasbiy faoliyatning o'ziga xos xususiyatlari</b>
                                <p>Kam jismoniy energiya talab qiladigan va o'tiradigan ish. Ko'pincha, ish pozitsiyasi
                                    o'tiradi, vosita harakatlari minimal, past amplituda va barmoqlarning mushaklarida
                                    engil kuchlanish.</p>
                            </div>
                            <div class="border-bottom note note-secondary79">
                                <b>Kasbiy jihatdan muhim jismoniy va ruhiy fazilatlar</b>
                                <p>O'ziga ishonch, hissiy barqarorlik, bag'rikenglik, xotira, tasavvur</p>
                            </div>

                            <div class="border-bottom note note-secondary79">
                                <b>Tavsiya etilgan sport va jismoniy mashqlar</b>
                                <p>Yengil atletika, sport va harakatli o'yinlar, badminton, suzish</p>
                            </div>
                            <div class="border-bottom note note-secondary79">
                                <b>Tavsiya etilgan noan'anaviy va innovatsion FU tizimlari</b>
                                <p>Suv aerobikasi, yoga, sheyping, cheerliding, bodibilding, fitnes</p>
                            </div>

                        </div>
                    </div>
                    <!-- tillarboyicha -->
                    <div class="note-light p-4 rounded-2" v-show="fakultet_click == 'matem'">
                        <h4 class="text-center border-bottom pb-2">Matematika, fizika, informatika</h4>
                        <div class="d-flex justify-content-center ">
                            <div class=" h-50 d-flex justify-content-around gap-2 border-bottom pb-5 pt-2">
                                <div class="w-75 border-end  d-flex align-items-center gap-1"
                                    style="flex-direction: column;">
                                    <img src="../images/user137.webp" style="border-radius: none !important;"
                                        class="card-image" alt="" id="card_img">
                                    <div class="card-body m-0">
                                        <h5>Toliq ism familiya</h5>
                                    </div>
                                    <p class="d-flex gap-4 h2"><router-link to="#"><i
                                                class="fab fa-telegram text-info" /></router-link><router-link to="#"><i
                                                class="fab fa-instagram text-warning" /></router-link><router-link
                                            to="#"><i class="fab fa-facebook text-primary" /></router-link><router-link
                                            to="#"><i class="fab fa-github text-dark" /></router-link></p>

                                </div>
                                <div class="w-50">
                                    <p class="text-center"><b>MALUMOT</b></p>
                                    <ul class="list-style-none d-flex gap-3 about_me" style="flex-direction: column;">
                                        <li class="list-style-none"><b>ISM:</b> ******</li>
                                        <li><b>Familiya: </b>********</li>
                                        <li><b>Otasini ismi: </b>*******</li>
                                        <li><b>To'liq IFO: </b>************</li>
                                        <li><b>Lavozim: </b>************</li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                        <p><b class="mark">Matematika, fizika, informatika</b>- Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Repellendus amet autem laudantium magni illum perferendis odit, molestias, nemo eos alias
                            beatae deserunt, unde culpa. Rerum nulla doloremque odit voluptatem, quasi quaerat quod
                            eligendi blanditiis. Cumque doloribus sapiente eveniet id quo quasi. Illo sit pariatur
                            minima tempora consectetur atque voluptatem sunt incidunt at, facere quae dignissimos eum,
                            dolore officiis ab quidem voluptas fugiat expedita inventore. Repellendus dolorem eius
                            itaque pariatur nam?</p>

                        <div>

                            <div class="border-top  mt-5 pt-3 text-center">
                                <p class="note note-secondary7 m-0"><b style="text-transform: uppercase;">YUGURISHNING
                                        FOYDASI</b></p>
                                <div class=" mt-5">
                                    <div v-show="placeholder_if0">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-12"
                                                style="width: 560px;;height: 315px;"></span>
                                        </h5>
                                    </div>
                                    <div v-show="!placeholder_if0">
                                        <iframe width="560" height="315"
                                            src="https://www.youtube.com/embed/-VQYVe70Prg?si=JNUcEkI3Wvl5a_9h&amp;controls=0"
                                            title="YouTube video player" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                                            @load="videoLoaded"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 border-top pt-5 d-flex gap-2" style="flex-direction: column;">
                            <h5 class="text-center">Bo'lajak o'qituvchining xususiyatlari va fazilatlarini
                                shakllantirish</h5>
                            <div class="border-bottom note note-secondary79">
                                <b>Psixofiziologik faoliyatning ustuvor xususiyat-lari</b>
                                <p>Aqliy faollikni oshirish</p>
                            </div>

                            <div class="border-bottom note note-secondary79">
                                <b>Kelajakdagi kasbiy faoliyatning o'ziga xos xususiyatlari</b>
                                <p>Kam jismoniy energiya talab qiladigan va o'tiradigan ish. Ko'pincha, ish pozitsiyasi
                                    o'tiradi, vosita harakatlari minimal, past amplituda va barmoqlarning mushaklarida
                                    engil kuchlanish.</p>
                            </div>
                            <div class="border-bottom note note-secondary79">
                                <b>Kasbiy jihatdan muhim jismoniy va ruhiy fazilatlar</b>
                                <p>Xotira, fikrlash, hissiy barqarorlik, mantiqiy fikrlash, diqqat</p>
                            </div>

                            <div class="border-bottom note note-secondary79">
                                <b>Tavsiya etilgan sport va jismoniy mashqlar</b>
                                <p>Kettlebell ko'tarish, atletika, arm sporti, shaxmat, shashka, sport va harakatli
                                    o'yinlar, yengil atletika</p>
                            </div>
                            <div class="border-bottom note note-secondary79">
                                <b>Tavsiya etilgan noan'anaviy va innovatsion FU tizimlari</b>
                                <p>Ekstremal kuch, pauerlifting, stritbol, lapta, bodibilding, fitnes, snoubord</p>
                            </div>

                        </div>
                    </div>

                    <div class="note-light p-4 rounded-2" v-show="fakultet_click == 'ist'">
                        <h4 class="text-center border-bottom pb-2">Tarix</h4>
                        <div class="d-flex justify-content-center ">
                            <div class=" h-50 d-flex justify-content-around gap-2 border-bottom pb-5 pt-2">
                                <div class="w-75 border-end  d-flex align-items-center gap-1"
                                    style="flex-direction: column;">
                                    <img src="../images/user137.webp" style="border-radius: none !important;"
                                        class="card-image" alt="" id="card_img">
                                    <div class="card-body m-0">
                                        <h5>Toliq ism familiya</h5>
                                    </div>
                                    <p class="d-flex gap-4 h2"><router-link to="#"><i
                                                class="fab fa-telegram text-info" /></router-link><router-link to="#"><i
                                                class="fab fa-instagram text-warning" /></router-link><router-link
                                            to="#"><i class="fab fa-facebook text-primary" /></router-link><router-link
                                            to="#"><i class="fab fa-github text-dark" /></router-link></p>

                                </div>
                                <div class="w-50">
                                    <p class="text-center"><b>MALUMOT</b></p>
                                    <ul class="list-style-none d-flex gap-3 about_me" style="flex-direction: column;">
                                        <li class="list-style-none"><b>ISM:</b> ******</li>
                                        <li><b>Familiya: </b>********</li>
                                        <li><b>Otasini ismi: </b>*******</li>
                                        <li><b>To'liq IFO: </b>************</li>
                                        <li><b>Lavozim: </b>************</li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                        <p><b class="mark">Tarix, madaniyatshunoslik</b>- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellendus amet autem laudantium magni illum perferendis odit, molestias, nemo eos alias
                            beatae deserunt, unde culpa. Rerum nulla doloremque odit voluptatem, quasi quaerat quod
                            eligendi blanditiis. Cumque doloribus sapiente eveniet id quo quasi. Illo sit pariatur
                            minima tempora consectetur atque voluptatem sunt incidunt at, facere quae dignissimos eum,
                            dolore officiis ab quidem voluptas fugiat expedita inventore. Repellendus dolorem eius
                            itaque pariatur nam?</p>

                        <div>

                            <div class="border-top  mt-5 pt-3 text-center">
                                <p class="note note-secondary7 m-0"><b style="text-transform: uppercase;">YUGURISHNING
                                        FOYDASI</b></p>
                                <div class=" mt-5">
                                    <div v-show="placeholder_if0">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-12"
                                                style="width: 560px;;height: 315px;"></span>
                                        </h5>
                                    </div>
                                    <div v-show="!placeholder_if0">
                                        <iframe width="560" height="315"
                                            src="https://www.youtube.com/embed/-VQYVe70Prg?si=JNUcEkI3Wvl5a_9h&amp;controls=0"
                                            title="YouTube video player" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                                            @load="videoLoaded"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 border-top pt-5 d-flex gap-2" style="flex-direction: column;">
                            <h5 class="text-center">Bo'lajak o'qituvchining xususiyatlari va fazilatlarini
                                shakllantirish</h5>
                            <div class="border-bottom note note-secondary79">
                                <b>Psixofiziologik faoliyatning ustuvor xususiyat-lari</b>
                                <p>Aqliy faollikni oshirish</p>
                            </div>

                            <div class="border-bottom note note-secondary79">
                                <b>Kelajakdagi kasbiy faoliyatning o'ziga xos xususiyatlari</b>
                                <p>Turistik ish turizm va arxeologik faoliyat bilan birlashtirilgan</p>
                            </div>
                            <div class="border-bottom note note-secondary79">
                                <b>Kasbiy jihatdan muhim jismoniy va ruhiy fazilatlar</b>
                                <p>Tashabbuskorlik, tashkilotchilik qobiliyati, operativ fikrlash</p>
                            </div>

                            <div class="border-bottom note note-secondary79">
                                <b>Tavsiya etilgan sport va jismoniy mashqlar</b>
                                <p>Turizm, sport va harakatli o'yinlar, merganlik</p>
                            </div>
                            <div class="border-bottom note note-secondary79">
                                <b>Tavsiya etilgan noan'anaviy va innovatsion FU tizimlari</b>
                                <p>Tarixiy qilichboz-lik, dart, parkur, stritbol, chaqmoq, snoubord</p>
                            </div>

                        </div>
                    </div>

                    <!-- psixologiya -->
                    <div class="note-light p-4 rounded-2" v-show="fakultet_click == 'pg'">
                        <h4 class="text-center border-bottom pb-2">Pedagogika va psixologiyasi</h4>
                        <div class="d-flex justify-content-center ">
                            <div class=" h-50 d-flex justify-content-around gap-2 border-bottom pb-5 pt-2">
                                <div class="w-75 border-end  d-flex align-items-center gap-1"
                                    style="flex-direction: column;">
                                    <img src="../images/user137.webp" style="border-radius: none !important;"
                                        class="card-image" alt="" id="card_img">
                                    <div class="card-body m-0">
                                        <h5>Toliq ism familiya</h5>
                                    </div>
                                    <p class="d-flex gap-4 h2"><router-link to="#"><i
                                                class="fab fa-telegram text-info" /></router-link><router-link to="#"><i
                                                class="fab fa-instagram text-warning" /></router-link><router-link
                                            to="#"><i class="fab fa-facebook text-primary" /></router-link><router-link
                                            to="#"><i class="fab fa-github text-dark" /></router-link></p>

                                </div>
                                <div class="w-50">
                                    <p class="text-center"><b>MALUMOT</b></p>
                                    <ul class="list-style-none d-flex gap-3 about_me" style="flex-direction: column;">
                                        <li class="list-style-none"><b>ISM:</b> ******</li>
                                        <li><b>Familiya: </b>********</li>
                                        <li><b>Otasini ismi: </b>*******</li>
                                        <li><b>To'liq IFO: </b>************</li>
                                        <li><b>Lavozim: </b>************</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p><b class="mark">Pedagogika va psixologiyasi</b>- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellendus amet autem laudantium magni illum perferendis odit, molestias, nemo eos alias
                            beatae deserunt, unde culpa. Rerum nulla doloremque odit voluptatem, quasi quaerat quod
                            eligendi blanditiis. Cumque doloribus sapiente eveniet id quo quasi. Illo sit pariatur
                            minima tempora consectetur atque voluptatem sunt incidunt at, facere quae dignissimos eum,
                            dolore officiis ab quidem voluptas fugiat expedita inventore. Repellendus dolorem eius
                            itaque pariatur nam?</p>
                        <div>
                            <div class="border-top  mt-5 pt-3 text-center">
                                <p class="note note-secondary7 m-0"><b style="text-transform: uppercase;">YUGURISHNING
                                        FOYDASI</b></p>
                                <div class=" mt-5">
                                    <div v-show="placeholder_if0">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-12"
                                                style="width: 560px;;height: 315px;"></span>
                                        </h5>
                                    </div>
                                    <div v-show="!placeholder_if0">
                                        <iframe width="560" height="315"
                                            src="https://www.youtube.com/embed/-VQYVe70Prg?si=JNUcEkI3Wvl5a_9h&amp;controls=0"
                                            title="YouTube video player" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                                            @load="videoLoaded"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 border-top pt-5 d-flex gap-2" style="flex-direction: column;">
                            <h5 class="text-center">Bo'lajak o'qituvchining xususiyatlari va fazilatlarini
                                shakllantirish</h5>
                            <div class="border-bottom note note-secondary79">
                                <b>Psixofiziologik faoliyatning ustuvor xususiyat-lari</b>
                                <p>Nevro-emotsional stressning kuchayishi</p>
                            </div>

                            <div class="border-bottom note note-secondary79">
                                <b>Kelajakdagi kasbiy faoliyatning o'ziga xos xususiyatlari</b>
                                <p>O'rtacha jismoniy energiya sarflashni talab qiladigan mobil tadbirlar, kam
                                    ta'minlangan oilalar va o'smirlar bilan ishlash</p>
                            </div>
                            <div class="border-bottom note note-secondary79">
                                <b>Kasbiy jihatdan muhim jismoniy va ruhiy fazilatlar</b>
                                <p>Umumiy chidamlilik, diqqat, tashabbus, tashkilotchilik qobiliyati, hissiy barqarorlik
                                </p>
                            </div>

                            <div class="border-bottom note note-secondary79">
                                <b>Tavsiya etilgan sport va jismoniy mashqlar</b>
                                <p>Sport va harakatli o'yinlar, qo'l jangi, suzish, aerobika</p>
                            </div>
                            <div class="border-bottom note note-secondary79">
                                <b>Tavsiya etilgan noan'anaviy va innovatsion FU tizimlari</b>
                                <p>Jang san'ati, yoga, parkur, stretching, velosport, rounders, skeytbord, turniket,
                                    yurish</p>
                            </div>

                        </div>
                    </div>
                    <!-- psixologiya -->

                    <!-- boshlangich -->
                    <div class="note-light p-4 rounded-2" v-show="fakultet_click == 'bosh'">
                        <h4 class="text-center border-bottom pb-2">Boshlangich Ta'lim</h4>
                        <div class="d-flex justify-content-center ">
                            <div class=" h-50 d-flex justify-content-around gap-2 border-bottom pb-5 pt-2">
                                <div class="w-75 border-end  d-flex align-items-center gap-1"
                                    style="flex-direction: column;">
                                    <img src="../images/user137.webp" style="border-radius: none !important;"
                                        class="card-image" alt="" id="card_img">
                                    <div class="card-body m-0">
                                        <h5>Toliq ism familiya</h5>
                                    </div>
                                    <p class="d-flex gap-4 h2"><router-link to="#"><i
                                                class="fab fa-telegram text-info" /></router-link><router-link to="#"><i
                                                class="fab fa-instagram text-warning" /></router-link><router-link
                                            to="#"><i class="fab fa-facebook text-primary" /></router-link><router-link
                                            to="#"><i class="fab fa-github text-dark" /></router-link></p>

                                </div>
                                <div class="w-50">
                                    <p class="text-center"><b>MALUMOT</b></p>
                                    <ul class="list-style-none d-flex gap-3 about_me" style="flex-direction: column;">
                                        <li class="list-style-none"><b>ISM:</b> ******</li>
                                        <li><b>Familiya: </b>********</li>
                                        <li><b>Otasini ismi: </b>*******</li>
                                        <li><b>To'liq IFO: </b>************</li>
                                        <li><b>Lavozim: </b>************</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p><b class="mark">Boshlangich Ta'lim</b>- Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Repellendus amet autem laudantium magni illum perferendis odit, molestias, nemo eos alias
                            beatae deserunt, unde culpa. Rerum nulla doloremque odit voluptatem, quasi quaerat quod
                            eligendi blanditiis. Cumque doloribus sapiente eveniet id quo quasi. Illo sit pariatur
                            minima tempora consectetur atque voluptatem sunt incidunt at, facere quae dignissimos eum,
                            dolore officiis ab quidem voluptas fugiat expedita inventore. Repellendus dolorem eius
                            itaque pariatur nam?</p>
                        <div>
                            <div class="border-top  mt-5 pt-3 text-center">
                                <p class="note note-secondary7 m-0"><b style="text-transform: uppercase;">YUGURISHNING
                                        FOYDASI</b></p>
                                <div class=" mt-5">
                                    <div v-show="placeholder_if0">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-12"
                                                style="width: 560px;;height: 315px;"></span>
                                        </h5>
                                    </div>
                                    <div v-show="!placeholder_if0">
                                        <iframe width="560" height="315"
                                            src="https://www.youtube.com/embed/-VQYVe70Prg?si=JNUcEkI3Wvl5a_9h&amp;controls=0"
                                            title="YouTube video player" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                                            @load="videoLoaded"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 border-top pt-5 d-flex gap-2" style="flex-direction: column;">
                            <h5 class="text-center">Bo'lajak o'qituvchining xususiyatlari va fazilatlarini
                                shakllantirish</h5>
                            <div class="border-bottom note note-secondary79">
                                <b>Psixofiziologik faoliyatning ustuvor xususiyat-lari</b>
                                <p>Nevro-emotsional stressning kuchayishi</p>
                            </div>

                            <div class="border-bottom note note-secondary79">
                                <b>Kelajakdagi kasbiy faoliyatning o'ziga xos xususiyatlari</b>
                                <p>O'rtacha jismoniy va aqliy energiya sarfini talab qiladigan harakatli faoliyat</p>
                            </div>
                            <div class="border-bottom note note-secondary79">
                                <b>Kasbiy jihatdan muhim jismoniy va ruhiy fazilatlar</b>
                                <p>Tashabbuskorlik, tashkilotchilik qobiliyati, chidamlilik, hissiy barqarorlik,
                                    bag'rikenglik</p>
                            </div>

                            <div class="border-bottom note note-secondary79">
                                <b>Tavsiya etilgan sport va jismoniy mashqlar</b>
                                <p>Gimnastika, ochiq va sport o'yinlari, stol tennisi, badminton, shaxmat, shashka,
                                    suzish</p>
                            </div>
                            <div class="border-bottom note note-secondary79">
                                <b>Tavsiya etilgan noan'anaviy va innovatsion FU tizimlari</b>
                                <p>Stritbol, turniket, lapta, sheyping, fitnes, flesh-mob, skeytbord, yurish</p>
                            </div>

                        </div>
                    </div>
                    <!-- boshlangich -->

                    <!-- musiqa -->
                    <div class="note-light p-4 rounded-2" v-show="fakultet_click == 'mus'">
                        <h4 class="text-center border-bottom pb-2">Musiqa va San'at</h4>
                        <div class="d-flex justify-content-center ">
                            <div class=" h-50 d-flex justify-content-around gap-2 border-bottom pb-5 pt-2">
                                <div class="w-75 border-end  d-flex align-items-center gap-1"
                                    style="flex-direction: column;">
                                    <img src="../images/user137.webp" style="border-radius: none !important;"
                                        class="card-image" alt="" id="card_img">
                                    <div class="card-body m-0">
                                        <h5>Toliq ism familiya</h5>
                                    </div>
                                    <p class="d-flex gap-4 h2"><router-link to="#"><i
                                                class="fab fa-telegram text-info" /></router-link><router-link to="#"><i
                                                class="fab fa-instagram text-warning" /></router-link><router-link
                                            to="#"><i class="fab fa-facebook text-primary" /></router-link><router-link
                                            to="#"><i class="fab fa-github text-dark" /></router-link></p>

                                </div>
                                <div class="w-50">
                                    <p class="text-center"><b>MALUMOT</b></p>
                                    <ul class="list-style-none d-flex gap-3 about_me" style="flex-direction: column;">
                                        <li class="list-style-none"><b>ISM:</b> ******</li>
                                        <li><b>Familiya: </b>********</li>
                                        <li><b>Otasini ismi: </b>*******</li>
                                        <li><b>To'liq IFO: </b>************</li>
                                        <li><b>Lavozim: </b>************</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p><b class="mark">Musiqa va San'at</b>- Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Repellendus amet autem laudantium magni illum perferendis odit, molestias, nemo eos alias
                            beatae deserunt, unde culpa. Rerum nulla doloremque odit voluptatem, quasi quaerat quod
                            eligendi blanditiis. Cumque doloribus sapiente eveniet id quo quasi. Illo sit pariatur
                            minima tempora consectetur atque voluptatem sunt incidunt at, facere quae dignissimos eum,
                            dolore officiis ab quidem voluptas fugiat expedita inventore. Repellendus dolorem eius
                            itaque pariatur nam?</p>
                        <div>
                            <div class="border-top  mt-5 pt-3 text-center">
                                <p class="note note-secondary7 m-0"><b style="text-transform: uppercase;">YUGURISHNING
                                        FOYDASI</b></p>
                                <div class=" mt-5">
                                    <div v-show="placeholder_if0">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-12"
                                                style="width: 560px;;height: 315px;"></span>
                                        </h5>
                                    </div>
                                    <div v-show="!placeholder_if0">
                                        <iframe width="560" height="315"
                                            src="https://www.youtube.com/embed/-VQYVe70Prg?si=JNUcEkI3Wvl5a_9h&amp;controls=0"
                                            title="YouTube video player" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                                            @load="videoLoaded"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 border-top pt-5 d-flex gap-2" style="flex-direction: column;">
                            <h5 class="text-center">Bo'lajak o'qituvchining xususiyatlari va fazilatlarini
                                shakllantirish</h5>
                            <div class="border-bottom note note-secondary79">
                                <b>Psixofiziologik faoliyatning ustuvor xususiyat-lari</b>
                                <p>Nevro-emotsional stressning kuchayishi</p>
                            </div>

                            <div class="border-bottom note note-secondary79">
                                <b>Kelajakdagi kasbiy faoliyatning o'ziga xos xususiyatlari</b>
                                <p>O'rtacha jismoniy va aqliy energiya sarfini talab qiladigan kombinatsiyalan-gan
                                    faoliyat</p>
                            </div>
                            <div class="border-bottom note note-secondary79">
                                <b>Kasbiy jihatdan muhim jismoniy va ruhiy fazilatlar</b>
                                <p>Tasavvur, jasorat va qat'iyat, hissiy barqarorlik</p>
                            </div>

                            <div class="border-bottom note note-secondary79">
                                <b>Tavsiya etilgan sport va jismoniy mashqlar</b>
                                <p>Sport va harakatli o’yinlar, badminton, suzish</p>
                            </div>
                            <div class="border-bottom note note-secondary79">
                                <b>Tavsiya etilgan noan'anaviy va innovatsion FU tizimlari</b>
                                <p>Bodyflex, kallanetika, Pilates, velosport, shayping, bodi baleti, cheerliding,
                                    flesh-mob, yurish</p>
                            </div>

                        </div>
                    </div>
                    <!-- musiqa -->

                    <!-- textalim -->
                    <div class="note-light p-4 rounded-2" v-show="fakultet_click == 'tex'">
                        <h4 class="text-center border-bottom pb-2">Texnologik Ta'lim</h4>
                        <div class="d-flex justify-content-center ">
                            <div class=" h-50 d-flex justify-content-around gap-2 border-bottom pb-5 pt-2">
                                <div class="w-75 border-end  d-flex align-items-center gap-1"
                                    style="flex-direction: column;">
                                    <img src="../images/user137.webp" style="border-radius: none !important;"
                                        class="card-image" alt="" id="card_img">
                                    <div class="card-body m-0">
                                        <h5>Toliq ism familiya</h5>
                                    </div>
                                    <p class="d-flex gap-4 h2"><router-link to="#"><i
                                                class="fab fa-telegram text-info" /></router-link><router-link to="#"><i
                                                class="fab fa-instagram text-warning" /></router-link><router-link
                                            to="#"><i class="fab fa-facebook text-primary" /></router-link><router-link
                                            to="#"><i class="fab fa-github text-dark" /></router-link></p>

                                </div>
                                <div class="w-50">
                                    <p class="text-center"><b>MALUMOT</b></p>
                                    <ul class="list-style-none d-flex gap-3 about_me" style="flex-direction: column;">
                                        <li class="list-style-none"><b>ISM:</b> ******</li>
                                        <li><b>Familiya: </b>********</li>
                                        <li><b>Otasini ismi: </b>*******</li>
                                        <li><b>To'liq IFO: </b>************</li>
                                        <li><b>Lavozim: </b>************</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p><b class="mark">Texnologik ta'lim</b>- Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Repellendus amet autem laudantium magni illum perferendis odit, molestias, nemo eos alias
                            beatae deserunt, unde culpa. Rerum nulla doloremque odit voluptatem, quasi quaerat quod
                            eligendi blanditiis. Cumque doloribus sapiente eveniet id quo quasi. Illo sit pariatur
                            minima tempora consectetur atque voluptatem sunt incidunt at, facere quae dignissimos eum,
                            dolore officiis ab quidem voluptas fugiat expedita inventore. Repellendus dolorem eius
                            itaque pariatur nam?</p>
                        <div>
                            <div class="border-top  mt-5 pt-3 text-center">
                                <p class="note note-secondary7 m-0"><b style="text-transform: uppercase;">YUGURISHNING
                                        FOYDASI</b></p>
                                <div class=" mt-5">
                                    <div v-show="placeholder_if0">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-12"
                                                style="width: 560px;;height: 315px;"></span>
                                        </h5>
                                    </div>
                                    <div v-show="!placeholder_if0">
                                        <iframe width="560" height="315"
                                            src="https://www.youtube.com/embed/-VQYVe70Prg?si=JNUcEkI3Wvl5a_9h&amp;controls=0"
                                            title="YouTube video player" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                                            @load="videoLoaded"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 border-top pt-5 d-flex gap-2" style="flex-direction: column;">
                            <h5 class="text-center">Bo'lajak o'qituvchining xususiyatlari va fazilatlarini
                                shakllantirish</h5>
                            <div class="border-bottom note note-secondary79">
                                <b>Psixofiziologik faoliyatning ustuvor xususiyat-lari</b>
                                <p> Muhim jismoniy faollik, nevro-emotsional stressning kuchayishi</p>
                            </div>

                            <div class="border-bottom note note-secondary79">
                                <b>Kelajakdagi kasbiy faoliyatning o'ziga xos xususiyatlari</b>
                                <p>O'rtacha jismoniy va aqliy energiya sarfini talab qiladigan harakatli faoliyat</p>
                            </div>
                            <div class="border-bottom note note-secondary79">
                                <b>Kasbiy jihatdan muhim jismoniy va ruhiy fazilatlar</b>
                                <p>Hissiy barqarorlik, operativ fikrlash, bag'rikenglik, qat'iyatlilik</p>
                            </div>

                            <div class="border-bottom note note-secondary79">
                                <b>Tavsiya etilgan sport va jismoniy mashqlar</b>
                                <p>Sport va harakatli o'yinlar, tosh ko'tarish, yengil atletika, turizm</p>
                            </div>
                            <div class="border-bottom note note-secondary79">
                                <b>Tavsiya etilgan noan'anaviy va innovatsion FU tizimlari</b>
                                <p>Pauerlifting, velosport, flesh-mob, fitnes, yakkakurashlar, skeytbord, snoubord</p>
                            </div>

                        </div>
                    </div>
                    <!-- textalim -->


                    <!-- ...................................................................... -->
                    <div class="note-light p-3 rounded-2" v-show="fakultet_click == 'jism'">
                        <h4 class="text-center border-bottom pb-2">Jismoniy Madaniyat</h4>
                        <div class="d-flex justify-content-center ">
                            <div class=" h-50 d-flex justify-content-around gap-2 border-bottom pb-5 pt-2 rahbar_mxres">
                                <div class="w-75 border-end  d-flex align-items-center gap-1"
                                    style="flex-direction: column;">
                                    <img src="../images/ustoz.jpg" class="card-image" alt="" id="card_img">
                                    <div class="card-body m-0">
                                        <h5>Nurmatov Eldor Ziyat o‘g‘li</h5>
                                    </div>
                                    <p class="d-flex gap-4 h2 user_link"><router-link to="#"><i
                                                class="fab fa-telegram text-info" /></router-link><router-link to="#"><i
                                                class="fab fa-instagram text-warning" /></router-link><router-link
                                            to="#"><i class="fab fa-facebook text-primary" /></router-link><router-link
                                            to="#"><i class="fab fa-github text-dark" /></router-link></p>

                                </div>
                                <div class="w-50">
                                    <p class="text-center"><b>MALUMOT</b></p>
                                    <ul class="list-style-none d-flex gap-3 about_me ps-2" style="flex-direction: column;">
                                        <li class="list-style-none"><b>ISM:</b> Eldor</li>
                                        <li><b>Familiya: </b>Nurmatov</li>
                                        <li><b>Otasini ismi: </b>Ziyat</li>
                                        <li><b>IFO: </b>Nurmatov Eldor Ziyat o‘g‘li</li>
                                        <li><b>Lavozim: </b>Rahbar</li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                        <p><b class="mark">Jismoniy madaniyat</b> - umum insoniy madaniyatning bir qismi, inson salomatligini
                            mustahkamlash, jismoniy qobiliyatini rivojlantirishga qaratilgan ijtimoiy faoliyat sohasi.
                            Jamiyatdagi J. m. holatining asosiy koʻrsatkichlari: odamlarning sogʻlomligi va jismonan
                            chiniqqanligi, J. m.ning tarbiya va taʼlim sohasida, i. ch.da, turmushda qay darajada tatbiq
                            qilinayotganligi, sportdagi yutuqlar va h. k. J. m. xalq oʻyinlari, jismoniy mashqlar,
                            sportni va turizmning faol harakat talab qiladigan koʻrinishlarini oʻz ichiga oladi. J. m.
                            tibbiyot, ekologiya, ped., psixologiya kabi fanlar bilan bogʻliq holda shakllangan va
                            rivojlangan. U jamiyat taraqqiyoti, odamlarning samarali mehnat qilishi, aqliy
                            imkoniyatlarning ravnaq topishi, axloqiy poklanish, kelajak nasllarning jismoniy ahvoliga
                            toʻgʻridan-toʻgʻri taʼsir oʻtkazadi.</p>

                        <div>

                            <div class="border-top  mt-5 pt-3 text-center">
                                <p class="note note-secondary7 m-0"><b style="text-transform: uppercase;">YUGURISHNING
                                        FOYDASI</b></p>
                                <div class=" mt-5">
                                    <div v-show="placeholder_if0">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-12"
                                                style="width: 560px;;height: 315px;"></span>
                                        </h5>
                                    </div>
                                    <div v-show="!placeholder_if0">
                                        <iframe width="560" height="315"
                                            src="https://www.youtube.com/embed/-VQYVe70Prg?si=JNUcEkI3Wvl5a_9h&amp;controls=0"
                                            title="YouTube video player" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                                            @load="videoLoaded"></iframe>
                                    </div>
                                </div>
                            </div>


                            <div class="mt-5 border-top pt-5 d-flex gap-2" style="flex-direction: column;">
                                <h5 class="text-center">Bo'lajak o'qituvchining xususiyatlari va fazilatlarini
                                    shakllantirish</h5>
                                <div class="border-bottom note note-secondary79">
                                    <b>Psixofiziologik faoliyatning ustuvor xususiyat-lari</b>
                                    <p>Nevro-emotsional stressning kuchayishi</p>
                                </div>

                                <div class="border-bottom note note-secondary79">
                                    <b>Kelajakdagi kasbiy faoliyatning o'ziga xos xususiyatlari</b>
                                    <p>Yuqori jismoniy va aqliy energiya sarfini talab qiladigan harakatli faoliyat</p>
                                </div>
                                <div class="border-bottom note note-secondary79">
                                    <b>Kasbiy jihatdan muhim jismoniy va ruhiy fazilatlar</b>
                                    <p>Tashabbuskorlik, tashkilotchilik qobiliyati, chidamlilik, hissiy barqarorlik,
                                        bag'rikenglik</p>
                                </div>

                                <div class="border-bottom note note-secondary79">
                                    <b>Tavsiya etilgan sport va jismoniy mashqlar</b>
                                    <p> Gimnastika, harakatli va sport o'yinlari, stol tennisi, badminton, turizm</p>
                                </div>
                                <div class="border-bottom note note-secondary79">
                                    <b>Tavsiya etilgan noan'anaviy va innovatsion FU tizimlari</b>
                                    <p>Bodyflex, kallanetika, Pilates, velosiped,
                                        shayping, lapta, cheerliding, turniket, pauerlifting, jang san'ati, flesh-mob,
                                        roliklar
                                    </p>
                                </div>

                            </div>


                            <div class="border-top  mt-5 pt-3 text-center">
                                <p class="note note-secondary7 border-bottom mt-5 m-0"><b>SAMARALI BOYNI OSTIRISH</b>
                                </p>
                                <div class=" mt-5">
                                    <div v-show="placeholder_if1">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-12"
                                                style="width: 560px;;height: 315px;"></span>
                                        </h5>
                                    </div>
                                    <div v-show="!placeholder_if1">
                                        <iframe width="560" height="315" class="border"
                                            src="https://www.youtube.com/embed/2ZrjJUze5ls?si=KEk7UQ44YotCBFD4"
                                            title="YouTube video player" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                                            @load="videoLoaded1">
                                        </iframe>
                                    </div>
                                </div>
                            </div>

                            <div class="border-top  mt-5 pt-3 text-center">
                                <p class="note note-secondary7 m-0"><b>5-MINUTDA QORIN YOQOTISH</b></p>
                                <div class=" mt-5">
                                    <div v-show="placeholder_if2">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-12"
                                                style="width: 560px;;height: 315px;"></span>
                                        </h5>
                                    </div>
                                    <div v-show="!placeholder_if2">
                                        <iframe width="560" height="315"
                                            src="https://www.youtube.com/embed/Gf-qlcYsXU8?si=OAggh5OKkI2H2K0b&amp;controls=0"
                                            title="YouTube video player" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                                            @load="videoLoaded2"></iframe>
                                    </div>
                                </div>
                            </div>



                            <div class="border-top  mt-5 pt-3 text-center">
                                <p class="note note-secondary7 m-0"><b>TURNIKDA ISHLASH</b></p>
                                <div class=" mt-5">
                                    <div v-show="placeholder_if3">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-12"
                                                style="width: 560px;;height: 315px;"></span>
                                        </h5>
                                    </div>
                                    <div v-show="!placeholder_if3">
                                        <iframe width="560" height="315"
                                            src="https://www.youtube.com/embed/sCbrkPfyhQ0?si=9isw23AlYZNIyS3G&amp;controls=0"
                                            title="YouTube video player" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                                            @load="videoLoaded3"></iframe>
                                    </div>
                                </div>
                            </div>

                        </div>




                    </div>
                    <!-- .............................................................................. -->



                </div>
            </div>
        </div>
        <Footer7 />
    </div>
</template>

<script setup>
import Navi from './Navi.vue';
import Footer7 from './Footer7.vue';
import { ref, onMounted, watchEffect } from 'vue';
let fakultetstilll = ref("background: #0a42f85f;color: #fff;  filter: drop-shadow(0 0 5px #9a46ba);");
let fakultet_click = ref("jism");
let placeholder_if0 = ref(true);
let placeholder_if1 = ref(true);
let placeholder_if2 = ref(true);
let placeholder_if3 = ref(true);
let placeholder_if4 = ref(true);
let placeholder_if5 = ref(true);
let placeholder_div = ref(true);

const videoSrc = 'https://www.youtube.com/embed/2ZrjJUze5ls?si=KEk7UQ44YotCBFD4';

let videoLoaded_div7 = () => { placeholder_div.value = false; };
let videoLoaded = () => { placeholder_if0.value = false; };
let videoLoaded1 = () => { placeholder_if1.value = false; };
let videoLoaded2 = () => { placeholder_if2.value = false; };
let videoLoaded3 = () => { placeholder_if3.value = false; };
let videoLoaded4 = () => { placeholder_if4.value = false; };

</script>

<style scoped>


/* resposive uchun */
@media (max-width:576px){
    .route_Mash7_mx{
        
        flex-direction:column;
        align-items: center !important;
        font-size: 12px !important;
    }
    .route_Mash7_mx2DIv h5,h4{
        font-size: 13px !important;
        text-align: center
    }
    .route_Mash7_mx div{
        width: 100% !important;
        font-size: 12px !important;
    } 
    .route_Mash7_mx div .placeholder{
        width: 100% !important;
        height: 150px !important;
    }
    .route_Mash7_mx div iframe{
        width: 100%;
        height: 50%;
    }
    .user_link{
        gap:10px !important;
    }
    #yonalishlar ul {
        padding: none !important;
    }
    .rahbar_mxres{
        flex-direction: column; 
        align-items: center;
    }

    .rahbar_mxres .about_me { 
        padding: none !important;
    }
    .rahbar_mxres>div{
        border:none !important;
    }
}


/* .................. */
.note-secondary79 {
    background: linear-gradient(to right, #dfdeee, #efeded);
}

iframe {
    border-radius: 10px;
}

.note-secondary7 {
    background: #908f9645;
}

.placeholder {
    border-radius: 10px;
}

.about_me li {
    display: flex;
    gap: 5px;
    border-bottom: solid #0404042d 1px !important;
}

body {
    background: #bab8b8 !important;
}

.card {
    width: 34%;
    padding-top: 20px;
    height: 500px !;
    display: flex;
    align-items: center;

    filter: drop-shadow(0 0 10px #bab8b8);
}

#card_img {
    width: 55%;
    border-radius: 40% 10% 40% 10%;
    /* outline: solid #364e91 4px; */
    outline-offset: 7px;
}

.fakellist {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

li {
    list-style: none;
}

.fakellist li {
    list-style: none;
    cursor: pointer;
    padding: 10px;
    background: #ededef;

    border-radius: 2px;
    border: solid #0404042d 1px !important;
}

.fakellist li:hover {
    background: #0a42f83b;
    /* background: #0a42f85f; */
}

body {
    position: relative;
}

#yonalishlar {
    position: sticky !important;
    top: 20px !important;
}
</style>