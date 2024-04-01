import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history:createWebHistory(), 
    routes:[
        {
            path:"/", 
            name:"home", 
            component:()=> import("../components/Home.vue")
        }, 
        {
            path:"/start", 
            name:"starthome", 
            component:()=> import("../components/Starthome.vue")
        },
        {
            path:"/jdpu", 
            name:"jdpu", 
            component:()=> import("../components/Jdpu.vue")
        }, 
        {
            path:"/boys", 
            name:"boys", 
            component:()=> import("../components/Boys.vue")
        },
        {
            path:"/girls", 
            name:"girls", 
            component:()=> import("../components/Girls.vue")
        }
    ]
})

export default router;