<template>
  <UButton
    icon="i-heroicons-moon"
    @click="toggleColorMode"
    color="gray"
    variant="ghost"
  />
</template>

<script setup>
const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
