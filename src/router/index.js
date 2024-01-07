import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import Forgot from '../views/auth/Forgot.vue'
import Register from '../views/auth/Register.vue'
import DaftarProduk from '../views/produk/DaftarProduk.vue'
import AddProduk from '../views/produk/AddProduk.vue'
import DetailProduk from '../views/produk/DetailProduk.vue'
import EditProduk from '../views/produk/EditProduk.vue'
import Inventory from '../components/Inventory.vue'
import DashboardJenis from '../views/inventory/Jenis/DashboardJenis.vue'
import AddJenis from '../views/inventory/Jenis/AddJenis.vue'
import EditJenis from '../views/inventory/Jenis/EditJenis.vue'
import DashboardBentuk from '../views/inventory/Bentuk/DashboardBentuk.vue'
import AddBentuk from '../views/inventory/Bentuk/AddBentuk.vue'
import DashboardAnggota from '../views/operasional/anggota/DashboardAnggota.vue'
import FormAnggota from '../views/operasional/anggota/FormAnggota.vue'
import DetailAnggota from '../views/operasional/anggota/DetailAnggota.vue'
import Operasional from '../components/Operasional.vue'
import EditBentuk from '../views/inventory/Bentuk/EditBentuk.vue'
import EditAnggota from '../views/operasional/anggota/EditAnggota.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgot-password',
    name: 'Forgot',
    component: Forgot
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Home',
    component: Home
  },
  {
    path: '/daftar-produk',
    name: 'DaftarProduk',
    component: DaftarProduk
  },
  {
    path: '/add-produk',
    name: 'AddProduk',
    component: AddProduk
  },
  {
    path: '/detail-produk/:id',
    name: 'DetailProduk',
    component: DetailProduk,
    props: true
  },
  {
    path: '/edit-produk/:id',
    name: 'EditProduk',
    component: EditProduk,
    props: true
  },
  {
    path: '/jenis',
    name: 'DashboardJenis',
    component: DashboardJenis,
  },
  {
    path: '/add-jenis',
    name: 'AddJenis',
    component: AddJenis,
  },
  {
    path: '/edit-jenis/:id',
    name: 'EditJenis',
    component: EditJenis,
    props: true
  },
  {
    path: '/bentuk',
    name: 'DashboardBentuk',
    component: DashboardBentuk,
  },
  {
    path: '/add-bentuk',
    name: 'AddBentuk',
    component: AddBentuk
  },
  {
    path: '/edit-bentuk/:id',
    name: 'EditBentuk',
    component: EditBentuk,
    props: true
  },
  {
    path: '/anggota',
    name: 'DashboardAnggota',
    component: DashboardAnggota,
  },
  {
    path: '/form-anggota',
    name: 'FormAnggota',
    component: FormAnggota
  },
  {
    path: '/detail-anggota/:id',
    name: 'DetailAnggota',
    component: DetailAnggota,
    props: true
  },
  {
    path: '/edit-anggota/:id',
    name: 'EditAnggota',
    component: EditAnggota,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
