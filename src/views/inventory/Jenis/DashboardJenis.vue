<template>
    <Inventory>
          <div class="flex justify-between p-4 mb-4 mx-4">
            <h3 class="font-domine text-xl font-bold my-auto">Jenis Produk</h3>
            <router-link :to="{name: 'AddJenis'}">
                <add-button>Tambah Jenis Produk</add-button>
            </router-link>
          </div>
          <hr>
          <!-- search bar -->
          <div class="flex flex-wrap p-4 mx-4 font-normal text-base text-grey-500">
            <div class="relative">
              <input v-model="searchQuery" class="w-[400px] border-2 border-primary-400 py-2 px-8 mr-4 rounded" placeholder="Cari jenis produk atau kode produk">
              <div class="absolute top-0 left-2 pr-3 pt-3 flex items-center text-sm leading-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <div class="relative">
              <select v-model="sortDirection" class="text-grey-500 border-primary-400 border-2 rounded p-2">
                <option value="desc">Urutan berdasarkan jenis produk terbaru</option>
                <option value="asc">Urutan berdasarkan jenis produk terdahulu</option>
              </select>
            </div>
          </div>
          <!-- tabel data -->
          <div class="mx-8 mt-2 font-normal text-grey-900">
            <!-- table header -->
            <div class="flex flex-row mb-4 text-sm mr-16">
              <p class="w-2/6">Nama Produk</p>
              <p class="w-2/6">Kode Produk</p>
              <p class="w-2/6">Tanggal Dibuat</p>
            </div>
            <!-- table data -->
            <div v-for="jenis in searchedResult" :key="jenis">
              <div class="flex flex-row text-normal my-4">
                  <p class="w-2/6 font-bold text-primary-800">{{ jenis.nama }}</p>
                  <p class="w-2/6">{{ jenis.kode }}</p>
                  <p class="w-2/6">{{ formatDate(jenis.CreatedAt) }}</p>
                  <router-link :to="{name: 'EditJenis', params: {id: jenis.ID}}">
                    <button class="text-primary-500 border-primary-500 border-2 rounded py-2 px-4 text-xs font-bold">UBAH</button>
                  </router-link>
                </div>
                <hr>
              </div>
            </div>
  </Inventory>
</template>

<script>
import AddButton from '@/components/Button/AddButton.vue'
import OutlinedButton from '@/components/Button/OutlinedButton.vue';
import Inventory from '../../../components/Inventory.vue'
import { useJenisStore } from '@/stores/jenis';
import { ref, computed, reactive, onMounted, watch } from 'vue';
import moment from 'moment';


export default {
    name: 'DashboardJenis',
    components: { Inventory, AddButton, OutlinedButton },
    setup() {
      const jenisStore = useJenisStore()
      const state = reactive({
        datas: []
      })

      const getJenis = async () => {
        const response = await jenisStore.getJenis()
        state.datas = response
      }

      const searchQuery = ref('')
      const sortDirection = ref("desc")

      const searchedResult = computed(() => {
        const filtered = state.datas.filter((data) => {
          return (
            data.nama
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

      onMounted(() => {
        getJenis()
      })

      watch(searchQuery, () => {
        // Reset the sort direction when the search text changes
        sortDirection.value = "desc";
      });

      return {...state, searchQuery, searchedResult, sortDirection, formatDate}
    }
}
</script>

<style>

</style>