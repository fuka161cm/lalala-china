import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Product from '../views/Product.vue'
import Muraya from '../views/lookbook/Muraya.vue';
import Tiger from '../views/lookbook/Tiger.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/look-book/tiger',
    name: 'look-book-tiger',
    component: Tiger
  },
  {
    path: '/look-book/muraya',
    name: 'look-book-muraya',
    component: Muraya
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
