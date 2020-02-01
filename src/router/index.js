import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Product02 from '../views/Product02.vue'
import Product01 from '../views/Product01.vue'
import Product03 from '../views/Product03.vue'
import Muraya from '../views/lookbook/Muraya.vue'
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
    path: '/product02',
    name: 'product02',
    component: Product02
  },
  {
    path: '/product01',
    name: 'product01',
    component: Product01
  },
  {
    path: '/product03',
    name: 'product03',
    component: Product03
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
  routes
})

export default router
