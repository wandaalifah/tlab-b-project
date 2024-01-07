<template>
  <Produk>
    <!-- <div v-for="produk in data" :key="produk"> -->
        <div class="flex justify-between p-4 mb-4 mx-4">
            <h3 class="font-domine text-xl font-bold my-auto">{{ produk.nama_barang }}</h3>
            <outlined-button class="flex" @click="$router.go(-1)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2">
                    <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                </svg>
            Kembali</outlined-button>
        </div>
        <hr>
        <div class="mx-16 mt-8">
            <div class="border-b-2">
                <div class="flex justify-center">
                    <img class="w-[160px] mx-2" :src="produk.foto_1" :alt="produk.nama_barang">
                    <img class="w-[160px] mx-2" :src="produk.foto_2" :alt="produk.nama_barang">
                </div>
                <div class="flex justify-center mt-12 text-grey-500">
                 <button id="umum" class="mr-12 pb-4 active" @click="showUmum()">Informasi Umum</button>
                 <button id="produk" class="pb-4" @click="showProduk()">Informasi Produk</button>
                </div>
            </div>  
            <div v-if="info=='umum'">
                <h3 class="font-domine font-bold text-xl mt-4 mb-8">Informasi Umum</h3>
                <div class="flex text-sm font-normal text-grey-500 mb-4">
                    <p class="w-1/3">Kode Produk</p>
                    <p class="w-1/3">Jenis Produk</p>
                    <p class="w-1/3">Tanggal Masuk</p>
                </div>
                <div class="flex text-base font-normal text-grey-900 mb-8">
                    <p class="w-1/3">{{ produk.kode }}</p>
                    <p class="w-1/3">{{ produk.nama_jenis }}</p>
                    <p class="w-1/3">{{ formatDate(produk.CreatedAt) }}</p>
                </div>
            </div>
            <div v-if="info=='produk'">
                <h3 class="font-domine font-bold text-xl mt-4 mb-8">Informasi Produk</h3>
                <div class="flex text-sm font-normal text-grey-500 mb-4">
                    <p class="w-1/4">Berat</p>
                    <p class="w-1/4">Kadar</p>
                    <p class="w-1/4">Harga Jual</p>
                    <p class="w-1/4">Bentuk Produk</p>
                </div>
                <div class="flex text-base font-normal text-grey-900">
                    <p class="w-1/4">{{ produk.berat }} Gram</p>
                    <p class="w-1/4">{{ produk.kadar }}%</p>
                    <p class="w-1/4">{{ produk.harga_jual }}%</p>
                    <p class="w-1/4">{{ produk.nama_bentuk }}</p>
                </div>
                <div class="flex text-sm font-normal text-grey-500 mb-4 mt-8">
                    <p class="w-1/4">Catatan</p>
                </div>
                <div class="flex text-base font-normal text-grey-900 mb-8">
                    <p class="w-1/4">{{ produk.Notes }}</p>
                </div>
            </div>
        </div>
    <!-- </div> -->
  </Produk>
</template>

<script>
import Produk from '@/components/Produk.vue';
import OutlinedButton from '@/components/Button/OutlinedButton.vue';
import { useProdukStore } from '@/stores/produk';
import { onMounted, reactive, ref } from 'vue';
import moment from 'moment';

export default {
    name:'DetailProduk',
    props: ['id'],
    components: {Produk, OutlinedButton},
    setup(props) {
        const produkStore = useProdukStore()
        const produk = reactive({
            nama_barang: '',
            foto_1: '',
            foto_2: '',
            kode: '',
            nama_jenis: '',
            CreatedAt: null,
            berat: '',
            kadar: '',
            harga_jual: '',
            nama_bentuk: '',
            Notes: ''
        })

        const getProdukDetail = async () => {
            const response = await produkStore.getProdukById(`${props.id}`)
            const data = response.data
            produk.nama_barang = data.nama_barang,
            produk.foto_1 = data.foto_1,
            produk.foto_2 = data.foto_2,
            produk.kode = data.kode,
            produk.nama_jenis = data.nama_barang,
            produk.CreatedAt = data.CreatedAt,
            produk.berat = data.berat,
            produk.kadar = data.kadar,
            produk.harga_jual = data.harga_jual,
            produk.nama_bentuk = data.nama_bentuk,
            produk.Notes = data.Notes
            // console.log(data);
        }

        const formatDate = (dateString) => {
        if (!dateString) {
          return '';
        }
        const dateObj = new Date(dateString)
        return moment(dateObj).format('LL')
      };

        onMounted(() => {
            getProdukDetail()
        })

      return {produk, formatDate}
    },
    data() {
        return {
            info: 'umum'
        }
    },
    methods: {
        showUmum() {
            this.info='umum'
            let elementUmum = document.getElementById("umum");
            let elementProduk = document.getElementById("produk");
            elementUmum.classList.add("active")
            elementProduk.classList.remove("active")
        },
        showProduk() {
            this.info='produk'
            let elementUmum = document.getElementById("umum");
            let elementProduk = document.getElementById("produk");
            elementProduk.classList.add("active")
            elementUmum.classList.remove("active")
        }
    }
}
</script>

<style>
.active {
    color: #27241D;
    border-bottom-width: 4px;
    border-color: #AF956B;
}
</style>