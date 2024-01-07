import axios from 'axios'
import { defineStore } from 'pinia'

export const useUserStore = defineStore("user", {
    state: () => ({
        user: {},
        token: null,
    }),

    actions: {
        async setAuth(newToken) {
            this.$state.token = newToken
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + newToken
        },

        async fetchUser() {
            const res = await axios.get("/tim-b/ver1/user/get-anggota", {
                headers: {
                    Authorization: 'Bearer ' + this.$state.token
                }
            })

            const users = res.data.data

            return users
        },

        async signUp(nama_lengkap,username,password,no_hp,email,tanggal_masuk,status,role) {
            await axios.post('/tim-b/ver1/user/register', {
                nama_lengkap,
                username,
                password,
                no_hp,
                email,
                tanggal_masuk,
                status,
                role
            })
        }, 
        
        async signIn(username, password) {
            const res = await axios.post('tim-b/ver1/user/login', {username, password})
            const token = res.data.data.tokenCookie

            this.$state.user = res.data.data
            this.$state.token = token
        },

        async addAnggota(nama_lengkap,username,password,no_hp,email,tanggal_masuk,status,role) {
            await axios.post('/tim-b/ver1/user/add-anggota', {
                nama_lengkap,
                username,
                password,
                no_hp,
                email,
                tanggal_masuk,
                status,
                role
            },
            {
                headers: {
                    Authorization: 'Bearer ' + this.$state.token
                }
            })
        },

        async getDetailAnggota(id) {
            const res = await axios.get('/tim-b/ver1/user/get-anggota?user_id='+id,
            {
                headers: {
                    Authorization: 'Bearer ' + this.$state.token
                }
            })

            const user = res.data.data

            return {user}
        },

        async getAnggotaName(name) {
            const res = await axios.get('/tim-b/ver1/user/get-anggota?nama='+name,
            {
                headers: {
                    Authorization: 'Bearer ' + this.$state.token
                }
            })

            const user = res.data.data

            return {user}
        },

        async editDetailAnggota(id, nama_lengkap, username, password, no_hp, email, tanggal_masuk, status) {
            await axios.put('/tim-b/ver1/user/update-anggota?user_id='+id,
            {
                nama_lengkap,
                username,
                password,
                no_hp,
                email,
                tanggal_masuk,
                status
            },
            {
                headers: {
                    Authorization: 'Bearer ' + this.$state.token
                }
            }
            )
        }
    },
    persist: true
})