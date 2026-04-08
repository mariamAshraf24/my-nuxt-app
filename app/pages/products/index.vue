<template>
  <div class="bg-[#F3F8FE] min-h-screen p-6">
    <!-- Header section -->
    <div class="flex flex-row justify-between items-center mb-8">
      <div>
        <h1 class="text-4xl font-bold text-[#1C398E] mb-2">
          {{ $t('product.title') }}
        </h1>
        <p class="text-[#1447E6] text-base mb-1">
          {{ $t('product.subtitle') }}
        </p>
      </div>
      <UButton
        class="border border-[#BEDBFF] text-[#1447E6] bg-white hover:bg-[#f1f5fd] font-medium rounded-lg px-6 py-2 transition"
        @click="navigateTo('/dashboard')"
      >
       {{ $t('product.backButton') }}
      </UButton>
    </div>

    <!-- Product List Table -->
    <ProductList />
  </div>
</template>

<script setup>
import ProductList from '~/components/products/ProductList.vue'
import { useRouter } from 'vue-router'


definePageMeta({
  layout: "dashboard",
});

const router = useRouter()
function navigateTo(path) {
  router.push(path)
}
</script>

