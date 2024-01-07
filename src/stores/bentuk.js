import axios from 'axios'
import { defineStore } from 'pinia'
import { useUserStore } from './user'

export const useBentukStore = defineStore("bentuk", {
    state: () => ({

    }),

    actions: {
        async getBentuk() {
            const user = useUserStore()
            const res = await axios.get("/tim-b/ver1/bentuk", {
                headers: {
                    Authorization: 'Bearer ' + user.token
                }
            })

            const bentuk = res.data.data

            return bentuk
        },

        async addBentuk(nama, kode) {
            const user = useUserStore()
            await axios.post('/tim-b/ver1/bentuk/create', {
                nama,
                kode
            },
            {
                headers: {
                    Authorization: 'Bearer ' + user.token
                }
            })
        },

        async getBentukById(id) {
            const user = useUserStore()
            const res = await axios.get("/tim-b/ver1/bentuk?bentuk_id="+id, {
                headers: {
                    Authorization: 'Bearer ' + user.token
                }
            })

            const bentuk = res.data.data

            return bentuk
        },

        async updateBentuk(id, nama, kode) {
            const user = useUserStore()
            const res = await axios.put("/tim-b/ver1/bentuk/update?bentuk_id="+id,
            {
                nama,
                kode
            },
            {
                headers: {
                    Authorization: 'Bearer ' + user.token
                }
            })

            const bentuk = res.data.data

            return bentuk
        }
    }
})