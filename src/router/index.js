import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import PostsView from '../views/PostsView.vue'
import RegisterView from '../views/RegisterView.vue'
import CreatePostView from '../views/CreatePost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView
    },
    {
      path:'/register',
      name:'Register',
      component:RegisterView
    },
    {
      path:'/posts',
      name:'posts',
      component:PostsView
    },
    {
      path:'/createPost',
      name:'CreatePost',
      component:CreatePostView
    },
    {
      path:'/login',
      name:'login',
      component:LoginView
    }
  ]
})

export default router
