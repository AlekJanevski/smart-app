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
    { path: '/', component: SignInScreen },
    { path: '/home', component: HomeScreen },
    { path: '/user', component: UserScreen }
  ]
});

export default router