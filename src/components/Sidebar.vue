<template>
    <div class="w-56 bg-white">
            <!-- logo -->
            <div class="flex items-center justify-center h-12 m-4">
                <img src="@/assets/logo-jewels.png" alt="logo-image">
            </div>
            <ul class="flex flex-col py-4 font-poppins font-normal">
                <!-- menus -->
                <router-link :to="{name: 'Home'}" class="nav-link">
                    <li class="flex flex-row items-center h-10">
                        <span class="inline-flex items-center justify-center h-12 w-12">
                            <img src="@/assets/icon-desktop.svg" alt="icon-desktop">
                        </span>
                        <span class="text-sm font-medium">Dashboard</span>
                    </li>
                </router-link>
                <router-link :to="{name: 'DaftarProduk'}" class="nav-link">
                    <li class="flex flex-row items-center h-10">
                        <span class="inline-flex items-center justify-center h-12 w-12">
                            <img src="@/assets/icon-inbox-full.svg" alt="icon-inbox-full">
                        </span>
                        <span class="text-sm font-medium">Daftar Produk</span>
                    </li>
                </router-link>
                <li class="relative">
                    <a href="#" class="flex flex-row items-center h-12 text-gray-800 mx-auto" @click="showInventory=!showInventory">
                        <span class="inline-flex items-center justify-center h-12 w-12">
                            <img src="@/assets/icon-box.svg" alt="icon-box">
                        </span>
                        <span class="text-sm font-medium">Inventory</span>
                        <span class="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-primary-800">
                            <div v-if="showInventory">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd" /></svg>
                            </div>
                            <div v-if="!showInventory">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" /></svg>
                        </div>
                        </span>
                    </a>
                    <div v-if="showInventory">
                        <ul class="border-l-2 ml-6 border-primary-500 text-gray-500">
                            <router-link :to="{name: 'DashboardJenis'}" class="subnav-link">
                                <li class="flex flex-row items-center h-10 mx-4 pl-2">
                                    <span class="text-xs font-semibold">Jenis Produk</span>
                                </li>
                            </router-link>
                            <router-link :to="{name: 'DashboardBentuk'}" class="subnav-link">
                                <li class="flex flex-row items-center h-10 mx-4 pl-2">
                                    <span class="text-xs font-semibold">Bentuk Produk</span>
                                </li>
                            </router-link>
                            <!-- <router-link :to="{name: 'AsalProduk'}" class="subnav-link"> -->
                                <li class="flex flex-row items-center h-10 mx-4 pl-2">
                                    <span class="text-xs font-semibold">Asal Produk</span>
                                </li>
                            <!-- </router-link> -->
                        </ul>
                    </div>
                </li>
                <li class="relative" >
                    <a href="#" class="flex flex-row items-center h-12 text-gray-800 mx-auto" @click="showOperasional=!showOperasional">
                        <span class="inline-flex items-center justify-center h-12 w-12">
                            <img src="@/assets/icon-work.svg" alt="icon-work">
                        </span>
                        <span class="text-sm font-medium">Operasional</span>
                        <span class="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-primary-800">
                            <div v-if="!showOperasional">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" /></svg>
                            </div>
                            <div v-if="showOperasional">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd" /></svg>
                            </div>
                        </span>
                    </a>
                    <div v-if="showOperasional">
                        <ul class="border-l-2 ml-6 border-primary-500 text-gray-500">
                            <router-link :to="{name: 'DashboardAnggota'}" class="subnav-link">
                                <li class="flex flex-row items-center h-10 mx-4 pl-2">
                                    <span class="text-xs font-semibold">Anggota</span>
                                </li>
                            </router-link>
                            <li>
                                <a href="#" class="flex flex-row items-center h-10 mx-4 pl-2 active:text-primary-800 active:bg-primary-100 active:rounded">
                                    <span class="text-xs font-semibold">Toko</span>
                                </a>
                            </li>    
                            <li>
                                <a href="#" class="flex flex-row items-center h-10 mx-4 pl-2 active:text-primary-800 active:bg-primary-100 active:rounded">
                                    <span class="text-xs font-semibold">Jabatan</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex flex-row items-center h-10 mx-4 pl-2 active:text-primary-800 active:bg-primary-100 active:rounded">
                                    <span class="text-xs font-semibold">Metode Pembayaran</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex flex-row items-center h-10 mx-4 pl-2 active:text-primary-800 active:bg-primary-100 active:rounded">
                                    <span class="text-xs font-semibold">Penjualan Jasa</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex flex-row items-center h-10 mx-4 pl-2 active:text-primary-800 active:bg-primary-100 active:rounded">
                                    <span class="text-xs font-semibold">Master Pengeluaran</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showInventory: true,
            showOperasional: true
        }
    }
}
</script>

<style>
.router-link-exact-active.nav-link {
    color: #613F1C;
    background-color: #FCF9EE;
    border-radius: 4px;
    margin: 0 10px 0 10px;
}
.router-link-exact-active.subnav-link {
    color: #613F1C;
    background-color: #FCF9EE;
    border-radius: 4px;
    display: block;
    margin: 0 10px 0 10px;
}
</style>