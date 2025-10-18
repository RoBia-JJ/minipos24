import { createRouter, createWebHistory } from "vue-router";

import Product from "../Pages/Product.vue";
import Category from "../Pages/Category.vue";
import POS from "../Pages/POS.vue";
import Report from "../Pages/Report.vue";
import Transection from "../Pages/Transection.vue";
import Page404 from "../Pages/404.vue";

const   routes = [
    {
    name : "Product",
    path : "/product",
    component : Product,
    },

    {
        name : "Category",
        path : "/category",
        component : Category,
    },

    {
        name : "POS",
        path : "/pos",
        component : POS
    },

    {
        name : "Report",
        path : "/report",
        component : Report,
    },

    {
        name : "Transection",
        path : "/transection",
        component : Transection,

    },
    {
        name : "404Page",
        path : "/:pathMatch(.*)*",
        component : Page404,
    }


]

const router = createRouter({
    history: createWebHistory(),
    routes : routes,
    scrollBehavior () {
        return{0: 0}
    }
})

export default router;
