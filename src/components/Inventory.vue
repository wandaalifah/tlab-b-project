<template>
    <DashboardLayout>
      <!-- title -->
        <div class="main mt-6 ml-2">
          <div class="flex justify-between items-center">
            <h2 class="font-domine font-bold text-2xl text-grey-900">Inventory</h2>
            <p class="font-popine font-semibold text-xs text-primary-900">Inventory</p>
          </div>
          <div class="bg-white rounded py-6 my-8 w-[1280px] mr-4 font-poppins">
            <div>
              <slot></slot>
            </div>
          </div>
        </div>
    </DashboardLayout>
  </template>
  
  <script>
  import DashboardLayout from '@/layouts/DashboardLayout.vue';
  
  export default {
    name: 'Inventory',
    components: {DashboardLayout},
  }
  </script>
  
<style scoped>
  .main {
    height: 100%;
    background: #F2F2EF;
  }
</style>