import Vue from 'vue'
import VueRouter from 'vue-router'
import SignInScreen from './components/SignInScreen.vue';
import HomeScreen from './components/HomeScreen.vue';
import UserScreen from './components/UserScreen.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { 
      path: '/',
      name: 'sign-in',
      component: SignInScreen
    },
    { 
      path: '/home',
      name: 'home',
      component: HomeScreen
    },
    { 
      path: '/user',
      name: 'user',
      component: UserScreen 
    }
  ]
});

export default router