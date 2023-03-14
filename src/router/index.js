import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LouisView from "@/views/LouisView.vue";
import RegisterView from "@/views/RegisterView.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/louis",
    name: "Louis",
    component: LouisView,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;



// import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
// import LouiwView from '../views/LouisView.vue';
// import RegisterView from '../views/RegisterView.vue'

// const routes = [
//   '/': HomeView
// ]

// // const routes = [
// //   {
// //     path: '/',
// //     name: 'home',
// //     component: HomeView,
// //   },
// //   {
// //     path: '/louis',
// //     name: 'louis',
// //     // route level code-splitting
// //     // this generates a separate chunk (about.[hash].js) for this route
// //     // which is lazy-loaded when the route is visited.
// //     component() {
// //       return import(/* webpackChunkName: "about" */ '../views/LouisView.vue');
// //     },
// //     {
// //         path: '/register',
// //         name: 'register',
// //         component() {
// //         return import(/* webpackChunkName: "about" */ '../views/RegisterView.vue');
// //       },
// //     },
// //   },
// // ];



// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

// export default router;
