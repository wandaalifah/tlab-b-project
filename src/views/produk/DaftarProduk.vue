<template>
    <Produk>
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
              <div class="flex flex-row mb-4 text-sm mr-16">
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
                      <img :src="item.foto_1" alt="item.nama_barang" class="w-14">
                      <div class="flex flex-col ml-2 text-primary-800">
                        <p>{{ item.nama_barang }}</p>
                        <p>{{ item.kode }}</p>
                      </div>
                    </div>
                    <p class="w-2/6">{{ item.nama_jenis }}</p>
                    <p class="w-1/6">{{ item.nama_bentuk }}</p>
                    <router-link :to="{name: 'EditProduk', params: {id: item.ID}}">
                      <button class="text-primary-500 border-primary-500 border-2 rounded py-2 px-4 text-xs font-bold">UBAH</button>
                    </router-link>
                  </div>
                </router-link>
                <hr>
              </div>
              <!-- pagination -->
              <div>
                <Pagination />
              </div>
            </div>
    </Produk>
  </template>
  
  <script>
  import Pagination from '@/components/Pagination.vue'
  import AddButton from '@/components/Button/AddButton.vue';
  import Produk from '@/components/Produk.vue'
import { useProdukStore } from '@/stores/produk';
import { ref, computed } from 'vue';
import moment from 'moment';
  
  export default {
    name: 'Home',
    components: {Pagination, AddButton, Produk},
    setup() {
      const produkStore = useProdukStore()
      const datas = ref([])
      const products = ref([produkStore.getProduk().then(product => {
        datas.value = product
      })])

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

      return {datas, products, searchQuery, searchedResult, sortDirection, formatDate}
    },
    data() {
      return {
        page: 1,
        pageCount: null,
      }
    }
  }
  </script>
  
  <style scoped>
  .main {
    height: 100%;
    background: #F2F2EF;
  }
  </style>