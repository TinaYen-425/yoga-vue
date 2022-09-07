import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import PlaceView from '../views/PlaceView.vue'
import CurriculumView from '../views/CurriculumView.vue'
import LoginView from '@/views/admin/LoginView.vue'
import AdminView from '../views/admin/AdminView.vue'
import AdminProductView from '@/views/admin/ProductView.vue'
import AdminCouponView from '@/views/admin/CouponView.vue'
import AdminOrdersView from '@/views/admin/OrdersView.vue'
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
      },
      {
        path: '/curriculum',
        name: 'curriculum',
        component: CurriculumView
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    children: [
      {
        path: 'products',
        name: 'AdminProducts',
        component: AdminProductView
      },
      {
        path: 'coupon',
        name: 'AdminCoupon',
        component: AdminCouponView
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: AdminOrdersView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
