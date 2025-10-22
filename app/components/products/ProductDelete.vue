<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    @click.self="$emit('close')"
  >
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
      <button class="absolute top-3 right-3 text-gray-400 hover:text-gray-600" @click="$emit('close')">
        <UIcon name="i-heroicons-x-mark" class="w-5 h-5" />
      </button>

      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
          <UIcon name="i-heroicons-exclamation-triangle" class="w-6 h-6 text-red-600" />
        </div>
        <h3 class="text-lg font-semibold text-[#1C398E]">Confirm Delete</h3>
      </div>

      <p class="text-sm text-gray-600 mb-6">
       Are you sure you want to delete this product? This action cannot be undone and will permanently remove the product from your inventory.
      </p>

      <div class="flex gap-3">
        <button
          class="flex-1 border border-[#BEDBFF] rounded-lg py-2 text-[#2563eb] font-semibold"
          @click="$emit('close')"
        >
          Cancel
        </button>
        <button
          class="flex-1 bg-red-600 text-white rounded-lg py-2 font-semibold"
          @click="confirm"
        >
          <UIcon name="i-heroicons-trash" class="inline w-4 h-4 mr-2" />
          Delete Product
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

const props = defineProps({
  show: { type: Boolean, default: false },
  product: { type: Object, default: null }
})

const emit = defineEmits(['close', 'confirm'])

function confirm() {
  emit('confirm', props.product)
}
</script>