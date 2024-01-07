<template>
  <Inventory>
    <div class="flex justify-between p-4 mb-4 mx-4">
      <h3 class="font-domine text-xl font-bold my-auto">Tambah Jenis Produk</h3>
      <router-link :to="{name: 'DashboardJenis'}">
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
        <h4 class="text-lg font-semibold text-grey-900 pb-4">Informasi Jenis Produk</h4>
        <p class="text-xs font-normal text-grey-500">Isi kolom disamping dengan baik dan benar agar jenis produk bisa terdaftar dalam aplikasi</p>
      </div>
      <div class="flex-col w-3/4">
        <div class="flex-row">
          <div class="flex-col mb-6">
            <p class="text-base font-normal text-base-500 mb-2">Nama Jenis Produk</p>
            <p class="text-sm font-medium text-grey-500 mb-2">Pastikan nama jenis produk sesuai</p>
            <input v-model="state.nama" class="w-full border-2 border-primary-400 py-2 px-2 mr-4 rounded" placeholder="Contoh “Emas Logam Mulia”">
            <div v-if="v$.nama.$error" class="text-xs text-red-600">{{ v$.nama.$errors[0].$message}}</div>
          </div>
          <div class="flex-col">
            <p class="text-base font-normal text-base-500 mb-2">Kode Jenis Produk</p>
            <p class="text-sm font-medium text-grey-500 mb-2">Masukkan kode jenis produk</p>
            <input v-model="state.kode" class="w-full border-2 border-primary-400 py-2 px-2 mr-4 rounded" placeholder="Contoh “EML”">
            <div v-if="v$.kode.$error" class="text-xs text-red-600">{{ v$.kode.$errors[0].$message}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end mx-16 mt-8">
      <router-link :to="{name: 'DashboardJenis'}">
        <outlined-button class="mr-4 px-12">Batalkan</outlined-button>
      </router-link>
      <primary-button class="px-12" @click="addNewJenis">Simpan</primary-button>
    </div>
  </Inventory>
</template>

<script>
import Inventory from '../../../components/Inventory.vue';
import OutlinedButton from '@/components/Button/OutlinedButton.vue';
import PrimaryButton from '@/components/Button/PrimaryButton.vue';
import { useJenisStore } from '@/stores/jenis';
import { useRouter } from 'vue-router';
import { computed, reactive } from 'vue';
import useVuelidate from '@vuelidate/core';
import {maxLength, minLength, required} from '@vuelidate/validators'

export default {
    name: 'AddJenis',
    components: {Inventory, OutlinedButton, PrimaryButton},
    setup() {
      const router = useRouter()
      const jenisStore = useJenisStore()
      const state = reactive({
        nama: '',
        kode: ''
      })

      const rules = computed(() => {
        return {
          nama: {required},
          kode: {required, minLength: minLength(3), maxLength: maxLength(4)}
        }
      })

      const addNewJenis = async () => {
        v$.value.$touch()

        if (!v$.value.$invalid) {
          await jenisStore.addJenis(
          state.nama,
          state.kode
        )
        router.push('/jenis')
        }
      }

      const v$ = useVuelidate(rules, state)

      return {state, v$, addNewJenis, jenisStore}
    }
}
</script>

<style>

</style>