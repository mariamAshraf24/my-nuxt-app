<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
    @click.self="$emit('close')"
  >
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-xl p-8 relative">
      <!-- Close button -->
      <button
        class="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        @click="$emit('close')"
      >
        <UIcon name="i-heroicons-x-mark" class="w-6 h-6" />
      </button>
      <h2 class="text-2xl font-bold mb-6 text-[#1C398E]">Product Details</h2>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div class="text-sm font-semibold text-blue-700 mb-1">
            Product Name
          </div>
          <div class="bg-blue-50 text-blue-900 rounded px-3 py-2">
            {{ product.name }}
          </div>
        </div>

        <div>
          <div class="text-sm font-semibold text-blue-700 mb-1">Category</div>
          <div class="bg-blue-50 text-blue-900 rounded px-3 py-2">
            {{ product.category }}
          </div>
        </div>

        <div>
          <div class="text-sm font-semibold text-blue-700 mb-1">SKU</div>
          <div class="bg-blue-50 text-blue-900 rounded px-3 py-2">
            SKU-{{ product.id }}
          </div>
        </div>

        <div>
          <div class="text-sm font-semibold text-blue-700 mb-1">Status</div>
          <div class="bg-blue-50 text-blue-900 rounded px-3 py-2">
            <span
              v-if="(product.stock ?? 20) > 0"
              class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold"
              >Active</span
            >
            <span
              v-else
              class="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold"
              >Out of Stock</span
            >
          </div>
        </div>

        <div>
          <div class="text-sm font-semibold text-blue-700 mb-1">Price</div>
          <div
            class="bg-blue-50 text-blue-900 rounded p-3 flex items-center text-lg font-semibold gap-2"
          >
            <UIcon
              name="i-heroicons-currency-dollar"
              class="w-5 h-5 text-[#2563eb]"
            />
            {{ product.price?.toFixed(2) }} SAR
          </div>
        </div>

        <div>
          <div class="text-sm font-semibold text-blue-700 mb-1">
            Stock Quantity
          </div>
          <div
            class="bg-blue-50 text-blue-900 rounded p-3 flex items-center text-lg font-semibold gap-2"
          >
            <UIcon name="i-heroicons-cube" class="w-5 h-5 text-[#2563eb]" />
            {{ product.stock ?? 20 }} units
          </div>
        </div>
      </div>
      <div class="mb-4">
        <div class="text-sm font-semibold text-blue-700 mb-1">Description</div>
        <div class="bg-blue-50 text-blue-900 rounded px-3 py-2">
          {{ product.description }}
        </div>
      </div>
      <div class="mb-6">
        <div class="text-sm font-semibold text-blue-700 mb-1">
          Total Inventory Value
        </div>
        <div
          class="bg-blue-50 text-blue-900 rounded px-3 py-2 font-bold text-lg"
        >
          {{ ((product.price ?? 0) * (product.stock ?? 20)).toFixed(2) }} SAR
        </div>
      </div>
      <div class="flex justify-between mt-8 gap-4">
        <button
          class="w-full border border-[#BEDBFF] rounded-lg py-2 text-[#2563eb] font-semibold"
          @click="$emit('close')"
        >
          Close
        </button>

        <button
          type="button"
          title="Edit"
          class="w-full bg-[#2563eb] rounded-lg py-2 text-white font-semibold flex items-center justify-center gap-2"
          @click="
            router.push({
              path: '/products/form',
              query: { id: product.id },
            })
          "
        >
          <UIcon name="i-heroicons-pencil" class="w-5 h-5" />
          Edit Product
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

defineProps({
  product: { type: Object, required: true },
  show: { type: Boolean, default: false },
});
</script>
