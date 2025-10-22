<template>
  <div class="min-h-screen  flex flex-col">
    <Navbar />
    <div class="flex flex-1">
      <Sidebar />
      <main class="flex-1 bg-[#F3F8FE]">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "~/components/layout/Sidebar.vue";
import Navbar from "~/components/layout/Navbar.vue";
</script>