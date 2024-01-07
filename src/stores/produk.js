import axios from 'axios'
import { defineStore } from 'pinia'
import { useUserStore } from './user'

export const useProdukStore = defineStore("produk", {
    state: () => ({

    }),

    actions: {
        async getProduk() {
            const user = useUserStore()
            const res = await axios.get("/tim-b/ver1/inv", {
                headers: {
                    Authorization: 'Bearer ' + user.token
                }
            })

            const produk = res.data.data

            return produk
        },

        async getProdukById(id) {
            const user = useUserStore()
            const res = await axios.get("/tim-b/ver1/inv?inv_id="+id, {
                headers: {
                    Authorization: 'Bearer ' + user.token
                }
            })

            const produk = res.data

            return produk
        },

        async addProduk(id_jenis_barang, id_bentuk_barang, nama_barang, kode, berat, kadar, harga_jual, catatan, foto_1, foto_2) {
            const user = useUserStore()
            const formData = new FormData()
            formData.append('id_jenis_barang', id_jenis_barang)
            formData.append('id_bentuk_barang', id_bentuk_barang)
            formData.append('nama_barang', nama_barang)
            formData.append('kode', kode)
            formData.append('berat', berat)
            formData.append('kadar', kadar)
            formData.append('harga_jual', harga_jual)
            formData.append('catatan', catatan)
            formData.append('foto_1', foto_1)
            formData.append('foto_2', foto_2)

            await axios.post("/tim-b/ver1/inv/create",formData,
            {
                headers: {
                    Authorization: 'Bearer ' + user.token
                }
            })
        },

        async editDetailProduk(id, id_jenis_barang, id_bentuk_barang, nama_barang, kode, berat, kadar, harga_jual, catatan, foto_1, foto_2) {
            const user = useUserStore()
            const formData = new FormData()
            formData.append('id_jenis_barang', id_jenis_barang)
            formData.append('id_bentuk_barang', id_bentuk_barang)
            formData.append('nama_barang', nama_barang)
            formData.append('kode', kode)
            formData.append('berat', berat)
            formData.append('kadar', kadar)
            formData.append('harga_jual', harga_jual)
            formData.append('catatan', catatan)
            formData.append('foto_1', foto_1)
            formData.append('foto_2', foto_2)

            await axios.put("/tim-b/ver1/inv/update?inv_id="+id,formData,
            {
                headers: {
                    Authorization: 'Bearer ' + user.token
                }
            })
        }
    }
})