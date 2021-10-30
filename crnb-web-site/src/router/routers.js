import { createRouter, createWebHistory } from 'vue-router'
import Home from   "../components/Home"
import Club from "../components/Club"
// import Club from   "../components/Home"


const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/Club',
        name: 'Club',
        component: Club
      }
   
  ]
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  export default router