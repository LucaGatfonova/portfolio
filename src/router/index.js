import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Сertificate from '../views/Сertificate.vue'
import Сompetence from '../views/Сompetence.vue'
import Contact from '../views/Contact.vue'
import Resume from '../views/Resume.vue'
import Develop from '../views/Develop.vue'
import Skill from '../views/Skill.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/certificate',
    name: 'certificate',
    component: Сertificate
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/competence',
    name: 'competence',
    component: Сompetence
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
  {
    path: '/develop',
    name: 'develop',
    component: Develop
  },
  {
    path: '/skill',
    name: 'skill',
    component: Skill
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
