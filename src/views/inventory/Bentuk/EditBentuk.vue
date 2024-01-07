<template>
    <Inventory>
      <div class="flex justify-between p-4 mb-4 mx-4">
        <h3 class="font-domine text-xl font-bold my-auto">Ubah Bentuk Produk</h3>
        <router-link :to="{name: 'DashboardBentuk'}">
          <outlined-button class="flex ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2">
              <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
            </svg>
            Kembali</outlined-button>
        </router-link>
      </div>
      <hr>
      <div class="flex mx-16 mt-8 border-b-2 pb-8 border-dotted">
        <div class="flex-col w-1/4 mr-16">
          <h4 class="text-lg font-semibold text-grey-900 pb-4">Informasi Bentuk Produk</h4>
          <p class="text-xs font-normal text-grey-500">Isi kolom disamping dengan baik dan benar agar bentuk produk bisa terdaftar dalam aplikasi</p>
        </div>
        <div class="flex-col w-3/4">
            <div class="flex-row">
                <div class="flex-col mb-6">
                    <p class="text-base font-normal text-base-500 mb-2">Nama Bentuk Produk</p>
                    <p class="text-sm font-medium text-grey-500 mb-2">Pastikan nama bentuk produk sesuai</p>
                    <input v-model="data.nama" class="w-full border-2 border-primary-400 py-2 px-2 mr-4 rounded" placeholder="Contoh “Kalung”">
                </div>
                <div class="flex-col">
                    <p class="text-base font-normal text-base-500 mb-2">Kode Bentuk Produk</p>
                    <p class="text-sm font-medium text-grey-500 mb-2">Masukkan kode bentuk produk</p>
                    <input v-model="data.kode" class="w-full border-2 border-primary-400 py-2 px-2 mr-4 rounded" placeholder="Contoh “KLG”">
                </div>
            </div>
        </div>
      </div>
      <div class="flex justify-end mx-16 mt-8">
        <router-link :to="{name: 'DashboardBentuk'}">
          <outlined-button class="mr-4 px-12">Batalkan</outlined-button>
        </router-link>
        <primary-button class="px-12" @click="editBentuk">Simpan</primary-button>
      </div>
    </Inventory>
  </template>
  
  <script>
  import Inventory from '../../../components/Inventory.vue';
  import OutlinedButton from '@/components/Button/OutlinedButton.vue';
  import PrimaryButton from '@/components/Button/PrimaryButton.vue';
  import { useBentukStore } from '@/stores/bentuk';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
      name: 'EditBentuk',
      props: ['id'],
      components: {Inventory, OutlinedButton, PrimaryButton},
      setup(props) {
        const router = useRouter()
        const bentukStore = useBentukStore()
        const data = ref([null])
        const bentuk = ref([bentukStore.getBentukById(`${props.id}`).then(bentuk => {
          data.value = bentuk
        })])
  
        const editBentuk = async () => {
          await bentukStore.updateBentuk(
            data.value.ID,
            data.value.nama,
            data.value.kode
          )
          await router.push('/bentuk')
        }
  
        return {data, bentuk, editBentuk}
      }
  }
  </script>
  
  <style>
  
  </style>