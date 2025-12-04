import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import ContactView from '../views/ContactView.vue'
import AddPostView from '../views/AddPostView.vue'
import auth from '../auth'


const routes = [
    { path: '/', component: HomeView, meta: { requiresAuth: true } },
    { path: '/login', component: LoginView },
    { path: '/signup', component: SignupView },
    { path: '/contacts', component: ContactView },
    { path: '/add', component: AddPostView, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, form, next) => {
  if(to.meta.requiresAuth) {
    let authResult = await auth.authenticated();
    if (!authResult) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router