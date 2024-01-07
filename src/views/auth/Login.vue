<template>
<!-- content -->
    <div class="lg:grid lg:grid-cols-2 lg:divide-x max-lg:m-6">
        <div class="max-lg:hidden overflow-hidden h-screen">
            <img src="@/assets/login-image.jpg" alt="login-image">
        </div>
        <div class="mx-auto my-auto border-none w-6/12">
            <h2 class="font-domine font-bold text-2xl">Masuk</h2>
            <div class="font-poppins">
                <h3 class="text-gray-500 font-medium">Selamat datang di Sistem Informasi Toko Emas</h3>
                <form @submit.prevent="handleSubmit">
                    <div class="my-8">
                        <label class="font-normal">Username</label><br>
                        <span class="text-sm font-medium text-gray-500">Username yang digunakan untuk masuk ke dalam aplikasi</span><br>
                        <input v-model="state.username" class="border border-primary-500 w-full mt-4 rounded py-3 px-4" type="text" placeholder="Contoh “bayuajis”">
                        <div v-if="v$.username.$error" class="text-xs text-red-600">{{ v$.username.$errors[0].$message}}</div>
                    </div>
                    <div class="my-8">
                        <label class="font-normal">Kata Sandi</label><br>
                        <span class="text-sm font-medium text-gray-500">Kata Sandi yang digunakan untuk masuk ke dalam aplikasi</span><br>
                        <div class="relative">
                            <input v-model="state.password" class="border border-primary-500 w-full mt-4 rounded py-3 px-4" :type="show ? 'text' : 'password'" placeholder="Tulis kata sandi">
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
                    <div class="mb-4 mt-4 flex justify-between">
                        <p>Lupa kata sandi?</p>
                        <router-link :to="{name: 'Forgot'}" class="font-bold text-primary-500">GANTI</router-link>
                    </div>
                    <div class="mb-4 flex justify-between">
                        <p>Belum punya akun?</p>
                        <router-link :to="{name: 'Register'}" class="font-bold text-primary-500">REGISTER</router-link>
                    </div>
                    <primary-button>MASUK</primary-button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import { reactive, computed} from 'vue';
import { useUserStore } from '@/stores/user.js';
import PrimaryButton from '@/components/Button/PrimaryButton.vue'

export default {
    name: 'Login',
    components: {PrimaryButton},
    setup() {
        const router = useRouter()
        const state = reactive({
            username: '',
            password: ''
        })

        const rules = computed(() => {
            return {
                username: {required},
                password: {
                    required,
                    containsPasswordRequirement: helpers.withMessage(
                        () => `The password requires an uppercase, lowercase, number and special character`, 
                        (value) => /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(value)
                    )
                }
            }
        })

        const userStore = useUserStore()

        const handleSubmit = async () => {
            try {
                v$.value.$touch()

                if (!v$.value.$invalid) {
                    await userStore.signIn(state.username, state.password)
                    await router.push('/dashboard')
                    alert('Login success')
                }
            } catch(error) {
                alert('Username atau password salah. Silakan ulangi kembali')
            }
        }

        const v$ = useVuelidate(rules, state)

        return {state, handleSubmit, v$}
    },
    data() {
        return {
            show: false
        }
    }
}
</script>