<template>
    <Operasional>
        <div class="flex justify-between p-4 mb-4">
            <h3 class="font-domine text-xl font-bold my-auto">Daftar Anggota</h3>
            <router-link :to="{name: 'FormAnggota'}">
              <add-button>Tambah Daftar Anggota</add-button>
            </router-link>
          </div>
          <hr>
          <!-- search bar -->
          <div class="flex flex-wrap p-6 font-normal text-base text-grey-500">
            <div class="relative">
              <input v-model="searchQuery" class="w-[450px] border-2 border-primary-400 py-2 pl-8 mr-4 rounded" placeholder="Cari anggota dengan nama atau No. handpone">
              <div class="absolute top-0 left-2 pr-3 pt-3 flex items-center text-sm leading-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <div class="relative">
              <select v-model="sortDirection" class="text-grey-500 border-primary-400 border-2 rounded p-2 pr-4">
                <option value="desc">Urutan berdasarkan anggota terbaru</option>
                <option value="asc">Urutan berdasarkan anggota terdahulu</option>
              </select>
            </div>
          </div>
          <!-- tabel data -->
          <div class="mx-6 mt-2 font-normal text-grey-900">
            <!-- table header -->
            <div class="flex flex-row mb-4 text-sm mr-16">
              <p class="w-3/12">Nama Anggota</p>
              <p class="w-1/6">No. Handphone</p>
              <p class="w-3/12">Username</p>
              <p class="w-1/6">Tanggal Masuk</p>
              <p class="w-1/6">Status</p>
            </div>
            <!-- table data -->
              <div v-for="user in searchedResult" :key="user">
                <router-link :to="{name: 'DetailAnggota', params: {id: user.ID}}">
                  <div class="flex flex-row text-normal my-4 items-center">
                    <p class="w-3/12 font-bold text-primary-800">{{ user.nama_lengkap }}</p>
                    <p class="w-1/6">{{ user.no_hp }}</p>
                    <p class="w-3/12">{{ user.username }}</p>
                    <p class="w-1/6">{{ formatDate(user.tanggal_masuk) }}</p>
                    <div class="w-1/6 flex justify-start">
                        <p v-if="user.status === 'aktif'" class="text-green-800 py-2 px-8 bg-green-50 rounded">Aktif</p>
                        <p v-if="user.status === 'nonaktif'" class="text-gray-400 py-2 px-8 bg-gray-10 rounded">Non Aktif</p>
                    </div>
                    <router-link :to="{name: 'EditAnggota', params: {id: user.ID}}">
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
    </Operasional>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
import Operasional from '../../../components/Operasional.vue'
import AddButton from '@/components/Button/AddButton.vue';
import { useUserStore } from '@/stores/user';
import { computed, ref, watch } from 'vue';
import moment from 'moment'

export default {
    name: 'DashboardAnggota',
    components: { Operasional, AddButton, Pagination },
    setup() {
      const userStore = useUserStore()
      const datas = ref([])
      const users = ref([userStore.fetchUser().then(users => {
        datas.value = users;
      })])

      const searchQuery = ref('')
      const sortDirection = ref("desc")

      const searchedResult = computed(() => {
        const filtered = datas.value.filter((data) => {
            return (
              data.nama_lengkap
              .toLowerCase()
              .indexOf(searchQuery.value.toLowerCase()) != -1
            );
          })

        const sorted = filtered.sort((a, b) => {
          const dateA = new Date(a.tanggal_masuk);
          const dateB = new Date(b.tanggal_masuk);
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

      watch(searchQuery, () => {
        // Reset the sort direction when the search text changes
        sortDirection.value = "asc";
      });

    return {users, datas, searchQuery, searchedResult, sortDirection, formatDate}
    }
}
</script>
<style>

</style>