<template>
    <div class="grid grid-cols-2 divide-x">
        <img src="@/assets/forgot-image.jpg" alt="forgot-image" class="object-fill max-h-screen w-fill">
        <div class="mx-auto my-auto border-none">
            <h2 class="font-domine font-bold text-2xl mb-2">Ubah Kata Sandi</h2>
            <div class="font-poppins">
                <h3 class="text-gray-500 font-medium">Silakan menghubungi Admin Pusat untuk mendapatkan kata sandi baru</h3>
                <h3 class="text-gray-500 font-medium mt-8 mb-2">Hubungi nomor berikut</h3>
                <p class="font-domine font-bold text-2xl mb-6">08788976567</p>
                <hr>
                <router-link :to="{name: 'Home'}">
                    <outlined-button class="mt-8">Masuk Ke Aplikasi</outlined-button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import OutlinedButton from '@/components/Button/OutlinedButton.vue'
export default {
  components: { OutlinedButton },
    
}
</script>