<template>
  <header
    class="bg-white w-full h-20  shadow-md z-20 p-3 flex items-center justify-between"
  >
    <!-- Left: Hamburger and dropdowns -->
    <div class="flex items-center gap-3">
      <!-- Hamburger -->
      <button class="p-2 rounded hover:bg-gray-100">
        <UIcon name="i-heroicons-bars-3" class="w-6 h-6 text-[#2C5AE9]" />
      </button>
      <!-- Dropdowns -->
      <select
        class="border border-[#BEDBFF] px-3 py-1 rounded text-sm focus:outline-none text-black"
      >
        <option>School Manager</option>
      </select>
      <select
        class="border border-[#BEDBFF] px-3 py-1 rounded text-sm focus:outline-none text-black"
      >
        <option>Testing Branch</option>
      </select>
      <select
        class="border border-[#BEDBFF] px-3 py-1 rounded text-sm focus:outline-none text-black"
      >
        <option>2025/2026</option>
      </select>
      <!-- Search -->
      <div class="relative">
        <UIcon
          name="i-heroicons-magnifying-glass"
          class="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-[#51A2FF]"
        />
        <input
          type="text"
          placeholder="Search..."
          class="pl-8 pr-2 py-1 bg-[#EFF6FF] text-[#86909D] border border-[#BEDBFF] rounded text-sm focus:outline-none w-48"
        />
      </div>
    </div>
    <!-- Right: Notifications, language, user -->
    <div class="flex items-center gap-4">
      <!-- Notification bell with badge -->
      <div class="relative">
        <UIcon name="i-heroicons-bell" class="w-6 h-6 text-blue-500" />
        <span
          class="absolute -top-2.5 -right-3.5 bg-red-500 text-white text-xs rounded-full px-0.5"
          >321</span
        >
      </div>
      <!-- Language dropdown -->
      <div class="flex items-center gap-1 cursor-pointer">
        <span class="text-blue-600 font-semibold">EN</span>
        <UIcon name="i-heroicons-chevron-down" class="w-4 h-4 text-blue-600" />
      </div>
      <!-- Globe icon -->
      <UIcon name="i-heroicons-globe-alt" class="w-6 h-6 text-[#155DFC]" />
      <!-- User info -->
      <div class="flex items-center bg-[#ecf3fc] px-4 py-2 rounded-2xl gap-2">
        <div class="flex flex-col items-end">
          <span class="text-sm text-[#1C398E] font-semibold"
            >International manager</span
          >
          <span class="text-xs text-[#155DFC]">Administrator</span>
        </div>
        <div
          class="w-8 h-8 rounded-full bg-[#EAEAEA] border-2 border-[#BEDBFF]"
        ></div>
      </div>
    </div>
  </header>
</template>

<script setup></script>
