<template>
    <Produk>
        <div class="flex justify-between p-4 mb-4 mx-4">
      <h3 class="font-domine text-xl font-bold my-auto">Edit Detail Produk</h3>
      <router-link :to="{name: 'DaftarProduk'}">
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
        <h4 class="text-lg font-semibold text-grey-900 pb-4">Informasi Umum</h4>
        <p class="text-xs font-normal text-grey-500">Isi kolom disamping dengan baik dan benar agar informasi lengkap</p>
      </div>
      <div class="flex-col w-3/4">
        <div class="flex-row">
          <div class="flex-col mb-6">
            <p class="text-base font-normal text-base-500 mb-2">Nama Produk</p>
            <p class="text-sm font-medium text-grey-500 mb-2">Pastikan nama produk sesuai</p>
            <input v-model="state.nama_barang" class="w-full border-2 border-primary-400 py-2 px-2 mr-4 rounded" placeholder="Contoh “Kalung Bunga”">
            <div v-if="v$.nama_barang.$error" class="text-xs text-red-600">{{ v$.nama_barang.$errors[0].$message }}</div>
          </div>
          <div class="flex-col mb-6">
            <p class="text-base font-normal text-base-500 mb-2">Jenis Produk</p>
            <p class="text-sm font-medium text-grey-500 mb-2">Pilih jenis produk yang sesuai</p>
            <select v-model="state.id_jenis_barang" class="w-full border-2 border-primary-400 py-2 px-2 mr-4 rounded">
              <option :value="option.ID" v-for="option in jenis" :key="option">{{ option.nama }}</option>
            </select>
          </div>
          <div class="flex-col mb-6">
            <p class="text-base font-normal text-base-500 mb-2">Bentuk Produk</p>
            <p class="text-sm font-medium text-grey-500 mb-2">Pastikan bentuk produk sesuai</p>
            <select v-model="state.id_bentuk_barang" class="w-full border-2 border-primary-400 py-2 px-2 mr-4 rounded">
              <option :value="option.ID" v-for="option in bentuk" :key="option">{{ option.nama }}</option>
            </select>
          </div>
        </div>
        </div>
    </div>
    <div class="flex mx-16 mt-8 border-b-2 pb-8 border-dotted">
        <div class="flex-col w-1/4 mr-16">
            <h4 class="text-lg font-semibold text-grey-900 pb-4">Informasi Produk</h4>
            <p class="text-xs font-normal text-grey-500">Pastikan informasi produk ini diisi dengan tepat</p>
        </div>
        <div class="flex-col w-3/4">
            <div class="flex-row">
               <div class="flex-col mb-6">
                   <p class="text-base font-normal text-base-500 mb-2">Berat</p>
                   <p class="text-sm font-medium text-grey-500 mb-2">Pastikan berat sesuai</p>
                    <div class="relative">
                        <input v-model="state.berat" class="w-full border-2 border-primary-400 py-2 px-2 mr-4 rounded">
                        <div class="absolute inset-y-3 right-0 pr-3 flex items-center text-sm font-bold text-gray-500">gr</div>
                    </div>
                    <div v-if="v$.berat.$error" class="text-xs text-red-600">{{ v$.berat.$errors[0].$message }}</div>
                </div>
               <div class="flex-col mb-6">
                   <p class="text-base font-normal text-base-500 mb-2">Kadar</p>
                   <p class="text-sm font-medium text-grey-500 mb-2">Tuliskan kadar yang sesuai</p>
                    <div class="relative">
                        <input v-model="state.kadar" class="w-full border-2 border-primary-400 py-2 px-2 mr-4 rounded">
                        <div class="absolute inset-y-3 right-0 pr-3 flex items-center text-sm font-bold text-gray-500">%</div>
                    </div>
                    <div v-if="v$.kadar.$error" class="text-xs text-red-600">{{ v$.nama_barang.$errors[0].$message }}</div>
                </div>
               <div class="flex-col mb-6">
                   <p class="text-base font-normal text-base-500 mb-2">Harga Jual</p>
                   <p class="text-sm font-medium text-grey-500 mb-2">Tuliskan harga jual sesuai</p>
                    <div class="relative">
                        <input v-model="state.harga_jual" class="w-full border-2 border-primary-400 py-2 px-2 mr-4 rounded">
                        <div class="absolute inset-y-3 right-0 pr-3 flex items-center text-sm font-bold text-gray-500">%</div>
                    </div>
                    <div v-if="v$.harga_jual.$error" class="text-xs text-red-600">{{ v$.harga_jual.$errors[0].$message }}</div>
                </div>
               <div class="flex-col mb-6">
                   <p class="text-base font-normal text-base-500 mb-2">Catatan</p>
                   <p class="text-sm font-medium text-grey-500 mb-2">Berikan catatan sesuai dengan produk</p>
                   <textarea v-model="state.catatan" rows="4" class="w-full border-2 border-primary-400 py-2 px-2 mr-4 rounded resize-none"></textarea>
                   <div v-if="v$.catatan.$error" class="text-xs text-red-600">{{ v$.catatan.$errors[0].$message }}</div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex mx-16 mt-8 border-b-2 pb-8 border-dotted">
        <div class="flex-col w-1/4 mr-16">
            <h4 class="text-lg font-semibold text-grey-900 pb-4">Informasi Umum Anggota</h4>
            <p class="text-xs font-normal text-grey-500">Untuk Informasi anggota yang lengkap, silakan isi kolom disamping, informasi ini sifatnya tidak wajib disini</p>
        </div>
        <div class="flex-col w-3/4">
            <div class="flex-row">
                <div class="flex-col mb-6">
                   <OutlinedButton class="flex" @click="onPickFile">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2">
                        <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
                        <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                    </svg>
                    Klik untuk ganti foto profil di galeri</OutlinedButton>
                    <div v-if="state.uploadedImages.length">
                      <div class="relative w-fit mt-2" v-for="(image, index) in state.selectedImages" :key="index">
                        <img class="w-[160px]" :src="image" alt="Selected Image" />
                        <DeleteButton class="absolute bottom-0 right-0 m-2" @click="deleteImage(index)"></DeleteButton>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
    <div class="flex justify-end mx-16 mt-8">
      <router-link :to="{name: 'DaftarProduk'}">
        <outlined-button class="mr-4 px-12">Batalkan</outlined-button>
      </router-link>
      <primary-button class="px-12" @click="editDetailProduk">Simpan</primary-button>
    </div>
</Produk>
  </template>
  
  <script>
  import Produk from '@/components/Produk.vue';
  import OutlinedButton from '@/components/Button/OutlinedButton.vue';
  import PrimaryButton from '@/components/Button/PrimaryButton.vue';
  import { useRouter } from 'vue-router'
import { useProdukStore } from '@/stores/produk';
import { reactive,ref, computed, onMounted } from 'vue';
import { useJenisStore } from '@/stores/jenis';
import { useBentukStore } from '@/stores/bentuk';
import DeleteButton from '@/components/Button/DeleteButton.vue';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import axios from 'axios';
  
  export default {
      name: 'FormAnggota',
      props: ['id'],
      components: {OutlinedButton, PrimaryButton, Produk, DeleteButton},
      setup(props) {
        const router = useRouter()
        const produkStore = useProdukStore()
        const jenisStore = useJenisStore()
        const bentukStore = useBentukStore()

        const jenis = ref([])
        const getJenis = ref([jenisStore.getJenis().then(data => {
          jenis.value = data
        })])

        const bentuk = ref([])
        const getBentuk = ref([bentukStore.getBentuk().then(data => {
          bentuk.value = data
        })])

        const convertImageUrlToImageURI = (url) => {
          return new Promise((resolve) => {
            axios
              .get(url, {
                responseType: 'blob',
              })
              .then((response) => {
                const reader = new FileReader();

                reader.readAsDataURL(response.data);

                reader.onload = () => {
                  const imageDataURI = reader.result;
                  resolve(imageDataURI);
                };
              });
          });
        }

        const convertImageUrlToImageFile = async(url) => {
            const response = await fetch(url);
            const blob = await response.blob();
            const uniqueFileName = `${Date.now()}.${blob.type.split("/")[1]}`
            const file = new File([blob], uniqueFileName, { type: blob.type });
            return file;
        }


        const getProduk = async () => {
            const response = await produkStore.getProdukById(`${props.id}`)
            const data = response.data
            state.id = data.ID
            state.id_jenis_barang = data.id_jenis_barang
            state.id_bentuk_barang = data.id_bentuk_barang
            state.nama_barang = data.nama_barang
            state.kode = data.kode
            state.berat = data.berat
            state.kadar = data.kadar
            state.harga_jual = data.harga_jual
            state.catatan = data.Notes
            convertImageUrlToImageURI(data.foto_1).then((dataURI) => {
              state.selectedImages[0] = dataURI;
            })
            convertImageUrlToImageURI(data.foto_2).then((dataURI) => {
              state.selectedImages[1] = dataURI;
            })
            convertImageUrlToImageFile(data.foto_1).then((image) => {
              state.uploadedImages[0] = image
            })
            convertImageUrlToImageFile(data.foto_2).then((image) => {
              state.uploadedImages[1] = image
            })

        }

        const state = reactive({
            id: '',
          id_jenis_barang: '1',
          id_bentuk_barang: '1',
          nama_barang: '',
          kode: '',
          berat: '',
          kadar: '',
          harga_jual: '',
          catatan: '',
          foto_1: null,
          foto_2: null,
          selectedImages: [],
          uploadedImages: []
        })

        const rules = computed(() => {
          return {
            nama_barang: {required},
            kode: {required},
            berat: {required},
            kadar: {required},
            harga_jual: {required},
            catatan: {required},
            selectedImages: {required}
          }
        })

        const editDetailProduk = async () => {
          v$.value.$touch()   
          splitPhotos()  
          if(!v$.value.$invalid) {
            await produkStore.editDetailProduk(
              state.id,
              state.id_jenis_barang,
              state.id_bentuk_barang,
              state.nama_barang,
              state.kode,
              state.berat,
              state.kadar,
              state.harga_jual,
              state.catatan,
              state.foto_1,
              state.foto_2
            )
            await router.push('/daftar-produk')
          }
        }

        const onPickFile = () => {
          const input = document.createElement('input')
          input.type = 'file'
          input.multiple = true
          input.accept = 'image/*'
          input.onchange = (event) => {
            const files = event.target.files
            state.uploadedImages.push(event.target.files[0])
            for (let i = 0; i < files.length; i++) {
              const reader = new FileReader()
              reader.onload = (event) => {
                state.selectedImages.push(event.target.result)
              }
              reader.readAsDataURL(files[i])
            }
          }
          input.click()
        }

        const splitPhotos = () => {
          state.foto_1 = state.uploadedImages[0]
          state.foto_2 = state.uploadedImages[1]
        }

        onMounted(() => {
            getProduk()
        })

        const deleteImage = (index) => {
          state.selectedImages.splice(index, 1)
        }

        const v$ = useVuelidate(rules, state) 

        return{state, editDetailProduk, produkStore, jenis, getJenis, getBentuk, bentuk, onPickFile, v$, deleteImage}
      },
      data() {
        return {
            show: false
        }
      }
  }
  </script>
  
  <style>
  
  </style>