<template>
    <DashboardLayout>
      <!-- title -->
        <div class="mt-8 ml-2">
          <div class="flex justify-between items-center">
            <h2 class="font-domine font-bold text-2xl text-grey-900">Daftar Produk</h2>
            <p class="font-popine font-semibold text-xs text-primary-900">Daftar Produk</p>
          </div>
          <div class="bg-white rounded py-6 my-8 w-[1280px] mr-4 font-poppins">
            <slot></slot>
          </div>
        </div>
    </DashboardLayout>
  </template>
  
  <script>
  import DashboardLayout from '@/layouts/DashboardLayout.vue';
  
  export default {
    name: 'Produk',
    components: {DashboardLayout},
  }
  </script>

<style scoped>
.main {
    height: 100%;
    background: #F2F2EF;
  }
</style>