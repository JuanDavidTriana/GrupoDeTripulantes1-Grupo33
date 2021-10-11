import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Contacto from '../views/Contacto.vue';
import Category from '../views/Category.vue';
import Blog from '../views/Blog.vue';
import AboutUs from '../views/AboutUs.vue';
import Cart from '../views/Cart.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/aboutUs',
    name: 'AboutUs',
    component: AboutUs,
  },
  {
    path: '/:category',
    component: Category,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
