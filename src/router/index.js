import { createRouter, createWebHistory } from 'vue-router'
import Palais from '../views/Palais.vue'
import Homepage from '../views/Homepage.vue'
import item from '../views/item.vue'
import Brands from '../views/Brands.vue'
import HomeandLiving from '../views/HomeandLiving.vue'
import Hometextiles from '../views/Hometextiles.vue'
import Cushions from '../views/Cushions.vue'


const routes = [ 
  {
    path:'/',
    name: 'Homepage',
    component: Homepage,
  },
  {
    path:'/palais',
    name: 'palais',
    component: Palais,
  },
  {
    path:'/palais/item',
    name: 'item',
    component: item,
  },
  {
    path:'/Brands',
    name: 'Brands',
    component: Brands,
  },
  {
    path:'/home-living',
    name: 'HomeandLiving',
    component: HomeandLiving,
  },
  {
    path:'/home-living/home-textiles',
    name: 'Hometextiles',
    component: Hometextiles,
  },
  {
    path:'/home-living/home-textiles/cushions',
    name: 'Cushions',
    component: Cushions,
  },
  

 
  
  
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })


  export default router