import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Result from '../views/Result.vue';
import Category from '.././components/IsiCategory.vue';
import Detail from '.././components/Detail.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/result/:text',
    name: 'Cari',
    component: Result
  },
  {
    path: '/list-category/:id',
    name: 'Come',
    component: Category
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
});

export default router;
