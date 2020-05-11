import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Result from '../views/Result.vue';
import Login from '../views/Login.vue';
import Category from '.././components/IsiCategory.vue';
import Detail from '.././components/Detail.vue';
import FavoriteItem from '.././components/FavoriteItem.vue';
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
  },
  {
    path: '/Favorite',
    name: 'Favorite',
    component: FavoriteItem,
    beforeEach: (to, from, next) => {
      if (this.$store.state.isLoggedIn == false) {
        alert('Please Login First !!');
        next('/Login');
      } else {
        next();
      }
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }
];

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
});

export default router;
