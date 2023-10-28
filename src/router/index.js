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
    path:'/orderchamp',
    name: 'Homepage',
    component: Homepage,
  },
  {
    path:'/orderchamp/palais',
    name: 'palais',
    component: Palais,
  },
  {
    path:'/orderchamp/palais/item',
    name: 'item',
    component: item,
  },
  {
    path:'/orderchamp/brands',
    name: 'brands',
    component: Brands,
  },
  {
    path:'/orderchamp/home-living',
    name: 'HomeandLiving',
    component: HomeandLiving,
  },
  {
    path:'/orderchamp/home-living/home-textiles',
    name: 'Hometextiles',
    component: Hometextiles,
  },
  {
    path:'/orderchamp/home-living/home-textiles/cushions',
    name: 'Cushions',
    component: Cushions,
  },
  

 
  
  
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })


  export default router