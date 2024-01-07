<template>
  <DashboardLayout>
    <!-- title -->
    <div class="mt-8 ml-2">
      <h2 class="font-domine text-primary-50 text-2xl">Dashboard</h2>
    </div>
    <!-- products -->
    <h3 class="font-domine text-primary-50 text-xl my-8">Produk Terbaru</h3>
    <div class="flex font-poppins text-xs">
      <button class="p-2 mr-2 border-2 border-white text-white rounded active" @click="selectedCategory = ''">Semua</button>
      <ul v-for= "bentuk in bentukData" :key="bentuk">
        <li class="p-2 mr-2 border-2 border-white text-white rounded" @click="selectedCategory = bentuk.nama">{{ bentuk.nama }}</li>
      </ul>
    </div>
    <div class="flex overflow-x-auto my-4">
      <div v-for="item in filteredItems.slice(0,10)" :key="item">
        <div class="flex flex-col flex-wrap p-4 mr-4 bg-white rounded w-max">
          <img :src="item.foto_1" :alt="item.nama_barang" class="h-[200px] w-[200px]">
          <div class="flex flex-col font-poppins text-primary-800 gap-2 mt-4">
            <p>{{ item.nama_barang }}</p>
            <p>{{ item.kode }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- daftar produk -->
    <div class="bg-white rounded py-6 my-8 w-[1280px] mr-4 font-poppins">
      <div class="flex justify-between p-4 mb-4">
        <h3 class="font-domine text-xl font-bold my-auto">Daftar Produk</h3>
        <router-link :to="{name: 'AddProduk'}">
          <add-button>Tambah Daftar Produk</add-button>
        </router-link>
      </div>
      <hr>
      <!-- search bar -->
      <div class="flex flex-wrap p-4 font-normal text-base text-grey-500">
        <div class="relative">
          <input v-model="searchQuery" class="w-[400px] border-2 border-primary-400 py-2 px-8 mr-4 rounded" placeholder="Cari nomor produk atau nama produk">
          <div class="absolute top-0 left-2 pr-3 pt-3 flex items-center text-sm leading-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        <div class="relative">
          <select v-model="sortDirection" class="text-primary-500 border-primary-400 border-2 rounded p-2 pr-4">
            <option value="desc">Urutan berdasarkan jenis produk terbaru</option>
            <option value="asc">Urutan berdasarkan jenis produk terdahulu</option>
          </select>
        </div>
      </div>
      <!-- tabel data -->
      <div class="mx-4 mt-2 font-normal text-grey-900">
        <!-- table header -->
        <div class="flex flex-row mb-4 text-sm">
          <p class="w-1/6">Tanggal</p>
          <p class="w-2/6">Nama Barang</p>
          <p class="w-2/6">Jenis</p>
          <p class="w-1/6">Bentuk</p>
        </div>
        <!-- table data -->
        <div v-for="item in searchedResult" :key="item">
          <router-link :to="{name: 'DetailProduk', params: {id:item.ID}}">
            <div class="flex flex-row text-normal my-4">
              <p class="w-1/6">{{ formatDate(item.CreatedAt) }}</p>
              <div class="w-2/6 flex flex-row">
                <img :src="item.foto_1" :alt="item.nama_barang" class="w-14">
                <div class="flex flex-col ml-2 text-primary-800">
                  <p>{{ item.nama_barang }}</p>
                  <p>{{ item.kode }}</p>
                </div>
              </div>
              <p class="w-2/6">{{ item.nama_jenis }}</p>
              <p class="w-1/6">{{ item.nama_bentuk }}</p>
            </div>
          </router-link>
          <hr>
        </div>
        <!-- pagination -->
        <div>
          <Pagination />
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
import AddButton from '@/components/Button/AddButton.vue';
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { useProdukStore } from '@/stores/produk';
import { ref, computed } from 'vue';
import { useBentukStore } from '@/stores/bentuk';
import moment from 'moment';

export default {
  name: 'Home',
  components: {Pagination, AddButton, DashboardLayout},
  setup() {
    const produkStore = useProdukStore()
    const bentukStore = useBentukStore()
    const datas = ref([])
    const bentukData = ref([])

      const products = ref([produkStore.getProduk().then(product => {
        datas.value = product
      })])
      const getBentuk = ref([bentukStore.getBentuk().then(bentuk => {
        bentukData.value = bentuk
      })])

      const selectedCategory = ref('');

      const filteredItems = computed(() => {
        const itemByBentuk = datas.value.filter((item) => {
          if (!selectedCategory.value) {
            return datas.value;
          }
          return item.nama_bentuk === selectedCategory.value
        })

        const sorted = itemByBentuk.sort((a, b) => {
          const dateA = new Date(a.CreatedAt);
          const dateB = new Date(b.CreatedAt);
          return dateB - dateA
        });
        return sorted
      });

      const searchQuery = ref('')
      const sortDirection = ref('desc')

      const searchedResult = computed(() => {
        const filtered = datas.value.filter((data) => {
          return (
            data.nama_barang
            .toLowerCase()
            .indexOf(searchQuery.value.toLowerCase()) != -1
            );
        });

        const sorted = filtered.sort((a, b) => {
          const dateA = new Date(a.CreatedAt);
          const dateB = new Date(b.CreatedAt);
          if (sortDirection.value === "asc") {
            return dateA - dateB;
          } else {
            return dateB - dateA;
          }
        });

        return sorted
      });

      const formatDate = (dateString) => {
        if (!dateString) {
          return '';
        }
        const dateObj = new Date(dateString)
        return moment(dateObj).format('LL')
      };

      return {datas, products, searchQuery, searchedResult, sortDirection, getBentuk, bentukData, formatDate, filteredItems, selectedCategory}
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.main {
  height: 100%;
  background: linear-gradient(180deg, #AF956B 20%, #F2F2EF 0%) ;
}

::-webkit-scrollbar {
  display: none;
}

.active {
  
}
</style>