<template>
  <div class="relative">
    <!-- Trigger -->
    <div
      class="flex items-center cursor-pointer border border-gray-200 rounded-lg px-3 py-1 bg-white"
      @click="toggleDropdown"
    >
      <span class="text-blue-600 font-semibold uppercase">{{ currentLocale }}</span>
      <UIcon name="i-heroicons-chevron-down" class="w-4 h-4 text-blue-600" />
    </div>

    <!-- Dropdown -->
    <div
      v-if="open"
      class="absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
    >
      <div
        v-for="locale in locales"
        :key="locale.code"
        @click="selectLanguage(locale.code)"
        class="px-3 py-2 hover:bg-blue-50 cursor-pointer flex items-center justify-between"
      >
        <span class="text-gray-700 uppercase">{{ locale.code }}</span>
        <UIcon
          v-if="locale.code === currentLocale"
          name="i-heroicons-check"
          class="w-4 h-4 text-blue-600"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const { locales, locale, setLocale } = useI18n()

const open = ref(false)
const currentLocale = locale

function toggleDropdown() {
  open.value = !open.value
}

function selectLanguage(code: 'en' | 'ar') {
  setLocale(code)
  open.value = false
}
</script>
