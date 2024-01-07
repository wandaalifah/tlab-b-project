<template>
  <div class="main flex">
    <Sidebar />
    <!-- dashboard content -->
    <div class="left-52 max-w-[1460px]">
        <div class="ml-4 min-h-screen">
            <slot></slot>
        </div>
        <Footer class="absolute end-0" />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'DashboardLayout',
    components: {Sidebar, Footer}
}
</script>

<style>

</style>