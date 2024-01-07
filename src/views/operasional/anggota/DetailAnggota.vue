<template>
  <Operasional>
    <div v-for="user in datas" :key="user">
      <div class="flex justify-between p-4 mb-4 mx-4">
        <h3 class="font-domine text-xl font-bold my-auto">{{ user.nama_lengkap }}</h3>
        <!-- <router-link :to="{name: 'DashboardAnggota'}"> -->
          <outlined-button class="flex" @click="$router.go(-1)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2">
              <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
            </svg>
            Kembali</outlined-button>
        <!-- </router-link> -->
      </div>
      <hr>
      <div class="mx-16 mt-8">
        <h3 class="font-domine font-bold text-xl mb-12">Informasi Umum</h3>
        <div class="flex text-sm font-normal text-grey-500 mb-4">
            <p class="w-1/4">Nama Lengkap</p>
            <p class="w-1/4">Usename</p>
            <p class="w-1/4">No. Handphone</p>
            <p class="w-1/4">Email</p>
        </div>
        <div class="flex text-base font-normal text-grey-900">
          <p class="w-1/4">{{ user.nama_lengkap }}</p>
          <p class="w-1/4">{{ user.username }}</p>
          <p class="w-1/4">{{ user.no_hp }}</p>
          <p class="w-1/4">{{ user.email }}</p>
        </div>
        <router-link :to="{name: 'EditAnggota', params: {id: user.ID}}">
          <button class="border-2 rounded border-primary-500 p-2 text-xs font-bold text-primary-500 mt-12">UBAH PROFIL</button>
        </router-link>
      </div>
    </div>
  </Operasional>
</template>

<script>
import Operasional from '../../../components/Operasional.vue'
import OutlinedButton from '@/components/Button/OutlinedButton.vue';
import { useUserStore } from '@/stores/user'
import { ref } from 'vue';

export default {
    name: 'DetailAnggota',
    props: ['id'],
    components: {Operasional, OutlinedButton},
    setup(props) {
      const userStore = useUserStore()
      const datas = ref([])
      const users = ref([userStore.getDetailAnggota(`${props.id}`).then(users => {
        datas.value = users;
      })])

      return {users, datas}
    }
  }
</script>

<style>

</style>