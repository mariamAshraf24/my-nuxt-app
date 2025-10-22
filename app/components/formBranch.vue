<template>
  <div class="bg-[#F8FAFC] shadow-2xl p-9 w-[448px]">
    <div>
      <div class="flex justify-center items-center">
        <div
          class="bg-green-100 rounded-full p-4 flex justify-center items-center"
        >
          <div
            class="border-2 border-green-600 rounded-full p-1 flex justify-center items-center"
          >
            <UIcon name="i-heroicons-check" class="text-green-600 w-4 h-4" />
          </div>
        </div>
      </div>
      <div class="space-y-4 text-black">
        <div class="text-center mb-12">
          <h1 class="text-3xl font-bold m-3">Welcome Back!</h1>
          <p class="text-md text-gray-400">Ready to continue learning</p>
        </div>

        <div
          class="flex flex-row items-center mb-8 bg-[#F1F5F9] p-4 rounded-lg gap-3"
        >
          <div
            class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center"
          >
            <UIcon name="i-heroicons-user" class="w-10 h-10 text-blue-500" />
          </div>
          <div class="flex flex-col">
            <div class="text-xl font-semibold">111</div>
            <div class="text-gray-500 text-sm">ID: 111</div>
          </div>
        </div>

        <div class="flex flex-col gap-2 p-4 bg-[#F1F5F9] mb-8 rounded-lg">
          <div class="flex items-center gap-3 text-base" style="color: #a6b1bf">
            <UIcon name="i-heroicons-book-open" class="w-8 h-8" />
            <span class="font-medium">Position:</span>
            <span
              class="ml-2 px-3 py-1 rounded-lg font-semibold"
              style="color: #2e69ec; background-color: #dce6f7"
            >
              {{ role }}
            </span>
          </div>
          <div class="flex items-center gap-3 text-base" style="color: #a6b1bf">
            <UIcon name="i-lucide-school" class="w-8 h-8" />
            <span class="font-medium">Branch:</span>
            <span
              class="ml-2 px-3 py-1 rounded-lg font-semibold border"
              style="
                color: #2e69ec;
                background-color: #f1f5f9;
                border-color: #c8d8f6;
                border-width: 1px;
              "
            >
              {{ branch }}
            </span>
          </div>
        </div>

        <button
          class="bg-[#3A73ED] text-white hover:bg-blue-500 w-full justify-center rounded-md py-3"
          @click="goToDashboard"
        >
          Enter Dashboard
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const role = ref("");
const branch = ref("");

onMounted(() => {
  role.value = localStorage.getItem("selectedRole") || "";
  branch.value = localStorage.getItem("selectedBranch") || "";
});

function goToDashboard() {
  navigateTo("/products");
}
</script>
