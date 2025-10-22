<template>
  <aside
    class="w-72 min-h-screen bg-white border-r shadow-md"
  >
    <!-- Logo and subtitle -->
    <div class="flex items-center gap-3 p-5">
      <div class="bg-[#2563eb] p-1 rounded-md">
        <UIcon name="i-heroicons-academic-cap" class="w-12 h-12 text-white" />
      </div>
      <div>
        <div class="font-bold text-lg text-[#1e293b]">Ibn Khaldun</div>
        <div class="text-xs text-[#7b8bb2]">Schools Management</div>
      </div>
    </div>
    <hr class="mx-4 border-[#e5eaf3]" />

    <!-- Navigation -->
    <nav class="flex-1 px-4 py-2 space-y-1">
      <a
        href="#"
        class="flex items-center gap-3 px-3 py-2 rounded-lg font-semibold bg-[#2563eb] text-white"
      >
        <UIcon name="i-heroicons-home" class="w-5 h-5" />
        Dashboard
      </a>
      <a
        href="#"
        class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#2563eb] hover:bg-[#f1f5fd] font-medium"
      >
        <UIcon name="i-heroicons-user" class="w-5 h-5" />
        School Manager
      </a>
      <a
        href="#"
        class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#2563eb] hover:bg-[#f1f5fd] font-medium"
      >
        <UIcon name="i-heroicons-users" class="w-5 h-5" />
        Administration Assistants
      </a>
      <a
        href="#"
        class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#2563eb] hover:bg-[#f1f5fd] font-medium"
      >
        <UIcon name="i-heroicons-academic-cap" class="w-5 h-5" />
        Academic Management
      </a>
      <a
        href="#"
        class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#2563eb] hover:bg-[#f1f5fd] font-medium"
      >
        <UIcon name="i-heroicons-building-library" class="w-5 h-5" />
        Classroom Management
      </a>
      <a
        href="#"
        class="flex items-center gap-3 px-3 py-2 rounded-lg font-semibold bg-[#2563eb] text-white"
      >
        <UIcon name="i-heroicons-archive-box" class="w-5 h-5" />
        Products Management
      </a>
      <!-- ...other menu items... -->
      <a
        href="#"
        class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#2563eb] hover:bg-[#f1f5fd] font-medium"
      >
        <UIcon name="i-heroicons-clipboard-document-list" class="w-5 h-5" />
        Behavior Notes
      </a>
      <a
        href="#"
        class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#2563eb] hover:bg-[#f1f5fd] font-medium"
      >
        <UIcon name="i-heroicons-printer" class="w-5 h-5" />
        Printing Press
      </a>
      <a
        href="#"
        class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#2563eb] hover:bg-[#f1f5fd] font-medium"
      >
        <UIcon name="i-heroicons-arrow-uturn-left" class="w-5 h-5" />
        Withdrawals
      </a>
      <a
        href="#"
        class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#2563eb] hover:bg-[#f1f5fd] font-medium truncate"
      >
        <UIcon name="i-heroicons-chart-bar" class="w-5 h-5" />
        Student Academic Perfor...
      </a>
      <a
        href="#"
        class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#2563eb] hover:bg-[#f1f5fd] font-medium"
      >
        <UIcon name="i-heroicons-user-minus" class="w-5 h-5" />
        Dropout Students
      </a>
      <!-- Collapsible example -->
      <div>
        <button
          class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#2563eb] hover:bg-[#f1f5fd] font-medium w-full"
        >
          <UIcon name="i-heroicons-banknotes" class="w-5 h-5" />
          Finance
          <UIcon name="i-heroicons-chevron-down" class="w-4 h-4 ml-auto" />
        </button>
        <!-- <div class="pl-8"> ...sub items... </div> -->
      </div>
      <!-- Repeat for other collapsible sections -->
      <div>
        <button
          class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#2563eb] hover:bg-[#f1f5fd] font-medium w-full"
        >
          <UIcon name="i-heroicons-light-bulb" class="w-5 h-5" />
          Evaluation and Meas...
          <UIcon name="i-heroicons-chevron-down" class="w-4 h-4 ml-auto" />
        </button>
      </div>
      <div>
        <button
          class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#2563eb] hover:bg-[#f1f5fd] font-medium w-full"
        >
          <UIcon name="i-heroicons-clipboard-document-check" class="w-5 h-5" />
          Reports
          <UIcon name="i-heroicons-chevron-down" class="w-4 h-4 ml-auto" />
        </button>
      </div>
      <div>
        <button
          class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#2563eb] hover:bg-[#f1f5fd] font-medium w-full"
        >
          <UIcon name="i-heroicons-globe-alt" class="w-5 h-5" />
          Transportation
          <UIcon name="i-heroicons-chevron-down" class="w-4 h-4 ml-auto" />
        </button>
      </div>
      <div>
        <button
          class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#2563eb] hover:bg-[#f1f5fd] font-medium w-full"
        >
          <UIcon name="i-heroicons-document-check" class="w-5 h-5" />
          Certificates
          <UIcon name="i-heroicons-chevron-down" class="w-4 h-4 ml-auto" />
        </button>
      </div>
      <div>
        <button
          class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#2563eb] hover:bg-[#f1f5fd] font-medium w-full"
        >
          <UIcon name="i-heroicons-user-group" class="w-5 h-5" />
          Customer Relations
          <UIcon name="i-heroicons-chevron-down" class="w-4 h-4 ml-auto" />
        </button>
      </div>
      <div>
        <button
          class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#2563eb] hover:bg-[#f1f5fd] font-medium w-full"
        >
          <UIcon name="i-heroicons-cog-6-tooth" class="w-5 h-5" />
          Communication Tools
          <UIcon name="i-heroicons-chevron-down" class="w-4 h-4 ml-auto" />
        </button>
      </div>
    </nav>
    <!-- System status -->
    <div class="p-4">
      <div
        class="bg-[#eaf4ff] rounded-xl px-3 py-2 text-xs flex items-center gap-2"
      >
        <span class="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
        <span class="text-[#2563eb] font-semibold">System Status</span>
        <span class="text-[#7b8bb2]">All systems operational</span>
      </div>
    </div>
  </aside>
</template>
<script setup></script>
