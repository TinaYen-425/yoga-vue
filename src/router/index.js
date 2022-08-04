import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import PlaceView from '../views/PlaceView.vue'
import AdminView from '../views/admin/AdminView.vue'
import AdminProductView from '@/views/admin/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: '/products',
        name: 'products',
        component: ProductView
      },
      {
        path: '/place',
        name: 'place',
        component: PlaceView
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    children: [
      {
        path: '',
        name: 'AdminProducts',
        component: AdminProductView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
