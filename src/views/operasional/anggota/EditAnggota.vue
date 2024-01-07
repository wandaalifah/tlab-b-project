<template>
    <Operasional>
        <div class="flex justify-between p-4 mb-4 mx-4">
      <h3 class="font-domine text-xl font-bold my-auto">Tambah Anggota</h3>
      <router-link :to="{name: 'DashboardAnggota'}">
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
        <h4 class="text-lg font-semibold text-grey-900 pb-4">Informasi Anggota<br>yang wajib terisi</h4>
        <p class="text-xs font-normal text-grey-500">Isi kolom disamping dengan baik dan benar agar anggota bisa menggunakan aplikasi</p>
      </div>
      <div class="flex-col w-3/4">
        <div class="flex-row">
          <div class="flex-col mb-6">
            <p class="text-base font-normal text-base-500 mb-2">Nama Lengkap</p>
            <p class="text-sm font-medium text-grey-500 mb-2">Pastikan Nama Sesuai dengan KTP</p>
            <input v-model="profile.nama_lengkap" class="w-full border-2 border-primary-400 py-2 px-2 mr-4 rounded" placeholder="Contoh “Agung Bayu”">
            <div v-if="v$.nama_lengkap.$error" class="text-xs text-red-600">{{ v$.nama_lengkap.$errors[0].$message}}</div>
          </div>
          <div class="flex-col mb-6">
            <p class="text-base font-normal text-base-500 mb-2">Email</p>
            <p class="text-sm font-medium text-grey-500 mb-2">Email yang sudah didaftarkan tidak dapat diubah</p>
            <input v-model="profile.email" class="w-full border-2 border-primary-400 py-2 px-2 mr-4 rounded text-gray-500" placeholder="Contoh “agungbay@gmail.com”" disabled>
            <!-- <div v-if="v$.email.$error" class="text-xs text-red-600">{{ v$.email.$errors[0].$message}}</div> -->
          </div>
          <div class="flex-col mb-6">
            <p class="text-base font-normal text-base-500 mb-2">Username</p>
            <p class="text-sm font-medium text-grey-500 mb-2">Username yang sudah didaftarkan tidak dapat diubah</p>
            <input v-model="profile.username" class="w-full border-2 border-primary-400 py-2 px-2 mr-4 rounded text-gray-500" placeholder="Contoh “agungBayu001”" disabled>
            <!-- <div v-if="v$.username.$error" class="text-xs text-red-600">{{ v$.username.$errors[0].$message}}</div> -->
          </div>
          <div class="flex-col mb-6">
            <p class="text-base font-normal text-base-500 mb-2">No. Handphone</p>
            <p class="text-sm font-medium text-grey-500 mb-2">Pastikan No. handphone aktif</p>
            <input v-model="profile.no_hp" class="w-full border-2 border-primary-400 py-2 px-2 mr-4 rounded" placeholder="Contoh “Contoh “081234567890”">
            <div v-if="v$.no_hp.$error" class="text-xs text-red-600">{{ v$.no_hp.$errors[0].$message}}</div>
          </div>
          <div class="flex-col mb-6">
            <p class="text-base font-normal text-base-500 mb-2">Tanggal masuk</p>
            <p class="text-sm font-medium text-grey-500 mb-2">Isi dengan tanggal masuk anggota bekerja</p>
            <input v-model="profile.tanggal_masuk" class="border border-primary-500 w-full mt-2 rounded py-3 px-4" type="date" placeholder="Tanggal Masuk">
            <div v-if="v$.tanggal_masuk.$error" class="text-xs text-red-600">{{ v$.tanggal_masuk.$errors[0].$message}}</div>
          </div>
          <div class="flex-col mb-6">
            <p class="text-base font-normal text-base-500 mb-4">Status Keanggotaan</p>
            <div class="flex">
                <div class="flex-col mr-6">
                    <div class="flex items-center">
                        <input type="radio" id="status" value="aktif" class="h-6 w-6 bg-gray-500 mr-4" v-model="profile.status">
                        <label class="text-normal font-normal text-gray-500">Aktif</label>
                    </div>
                </div>
                <div class="flex-col">
                    <div class="flex items-center">
                        <input type="radio" id="status" value="nonaktif" class="h-6 w-6 bg-gray-500 mr-4" v-model="profile.status">
                        <label class="text-normal font-normal text-gray-500">Non Aktif</label>
                    </div>
                </div>
            </div>
            <div v-if="v$.status.$error" class="text-xs text-red-600">{{ v$.status.$errors[0].$message}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex mx-16 mt-8 border-b-2 pb-8 border-dotted">
        <div class="flex-col w-1/4 mr-16">
            <h4 class="text-lg font-semibold text-grey-900 pb-4">Kata Sandi<br>untuk Anggota</h4>
            <p class="text-xs font-normal text-grey-500">Silakan buatkan kata sandi untuk anggota, pastikan aman dan tidak mudah ditebak</p>
        </div>
        <div class="flex-col w-3/4">
            <div class="flex-row">
               <div class="flex-col mb-6">
                    <p class="text-base font-normal text-base-500 mb-2">Kata Sandi Baru</p>
                    <p class="text-sm font-medium text-grey-500 mb-2">Pastikan kata sandi hanya admin dan anggota yang tahu</p>
                    <div class="relative">
                        <input v-model="profile.password" class="border border-primary-500 w-full mt-4 rounded py-3 px-4" :type="show ? 'text' : 'password'" placeholder="Tulis kata sandi disini....">
                        <div class="absolute inset-y-3 right-0 pr-3 pt-3 flex items-center text-sm leading-5">
                            <div v-if="!show" @click="show=!show">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div v-else @click="show=!show">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            </div>
                        </div> 
                    </div>
                    <div v-if="v$.password.$error" class="text-xs text-red-600">{{ v$.password.$errors[0].$message}}</div>
                </div>
               <div class="flex-col mb-6">
                    <p class="text-base font-normal text-base-500 mb-2">Konfirmasi Kata Sandi Baru</p>
                    <p class="text-sm font-medium text-grey-500 mb-2">Pastikan kata sandi sama dengan kolom diatas</p>
                    <div class="relative">
                        <input v-model="profile.confirmPassword" class="border border-primary-500 w-full mt-4 rounded py-3 px-4" :type="show ? 'text' : 'password'" placeholder="Tulis ulang kata sandi disini....">
                        <div class="absolute inset-y-3 right-0 pr-3 pt-3 flex items-center text-sm leading-5">
                            <div v-if="!show" @click="show=!show">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div v-else @click="show=!show">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            </div>
                        </div> 
                    </div>
                    <div v-if="v$.confirmPassword.$error" class="text-xs text-red-600">{{ v$.confirmPassword.$errors[0].$message}}</div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-end mx-16 mt-8">
      <router-link :to="{name: 'DashboardAnggota'}">
        <outlined-button class="mr-4 px-12">Batalkan</outlined-button>
      </router-link>
      <primary-button class="px-12" @click="editAnggota">Simpan</primary-button>
    </div>
    </Operasional>
  </template>
  
  <script>
  import Operasional from '../../../components/Operasional.vue';
  import OutlinedButton from '@/components/Button/OutlinedButton.vue';
  import PrimaryButton from '@/components/Button/PrimaryButton.vue';
  import { useRouter } from 'vue-router'
  import { useUserStore } from '@/stores/user'
  import { useVuelidate } from '@vuelidate/core'
  import { minLength, required, email, maxLength, sameAs, helpers } from '@vuelidate/validators'
import { reactive, onMounted, computed } from 'vue';
  
  export default {
      name: 'EditAnggota',
      props: ['id'],
      components: {Operasional, OutlinedButton, PrimaryButton},
      setup(props) {
        const router = useRouter()
        const userStore = useUserStore()
        const profile = reactive({
          ID: null,
          nama_lengkap: '',
          username: '',
          email: '',
          no_hp: '',
          tanggal_masuk: '',
          status: '',
          password: '',
          confirmPassword: ''
        })

        const rules = computed(() => {
          return {
            nama_lengkap: { required, minLength: minLength(4), maxLength: maxLength(50) },
            password:{
              required,
              containsPasswordRequirement: helpers.withMessage(
                () => `The password requires an uppercase, lowercase, number and special character`, 
                (value) => /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(value)
              )
            },
            confirmPassword:{ required, sameAsPassword: sameAs(profile.password) },
            no_hp:{
              required,
              containsPhoneNumber: helpers.withMessage(
                () => `The form must be filled with valid phone number`, 
                (value) => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value)
              )
            },
            tanggal_masuk: { required },
            status: {required}
          }
        })

        const getAnggota = async () => {
          const res = await userStore.getDetailAnggota(`${props.id}`)
          const data = res.user
          profile.ID = data.ID
          profile.nama_lengkap = data.nama_lengkap
          profile.username = data.username
          profile.no_hp = data.no_hp
          profile.email = data.email
          profile.tanggal_masuk = new Date(data.tanggal_masuk).toISOString().substr(0, 10);
          profile.status = data.status
        }

        const editAnggota = async () => {  
          v$.value.$touch()
          
          if(!v$.value.$invalid) {
            await userStore.editDetailAnggota( 
                profile.ID,  
                profile.nama_lengkap,
                profile.username,
                profile.password,
                profile.no_hp,
                profile.email,
                profile.tanggal_masuk,
                profile.status
            )
            await router.push('/anggota')
          }
        }

        onMounted(() => {
          getAnggota()
        })

        const v$ = useVuelidate(rules, profile)

        return{
          profile,
          editAnggota,
          v$
        }
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