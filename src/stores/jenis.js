import axios from 'axios'
import { defineStore } from 'pinia'
import { useUserStore } from './user'
import moment from 'moment/moment'
import { computed } from 'vue'

export const useJenisStore = defineStore("jenis", {
    state: () => ({
        jenis: {}
    }),

    actions: {
        async getJenis() {
            const user = useUserStore()
            const res = await axios.get("/tim-b/ver1/jenis", {
                headers: {
                    Authorization: 'Bearer ' + user.token
                }
            })

            const jenis = res.data.data

            return jenis
        },

        async addJenis(nama, kode) {
            const user = useUserStore()
            await axios.post('/tim-b/ver1/jenis/create', {
                nama,
                kode
            },
            {
                headers: {
                    Authorization: 'Bearer ' + user.token
                }
            }
            )
        },

        async getJenisById(id) {
            const user = useUserStore()
            const res = await axios.get("/tim-b/ver1/jenis?jenis_id="+id, {
                headers: {
                    Authorization: 'Bearer ' + user.token
                }
            })

            const jenis = res.data.data

            return jenis
        },

        async updateJenis(id, nama, kode) {
            const user = useUserStore()
            const res = await axios.put("/tim-b/ver1/jenis/update?jenis_id="+id,
            {
                nama,
                kode
            },
            {
                headers: {
                    Authorization: 'Bearer ' + user.token
                }
            })

            const jenis = res.data.data

            return jenis
        }
    }
})