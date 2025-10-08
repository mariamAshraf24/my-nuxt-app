<template>
  <div
    class="min-h-screen bg-[#F4F8FD] flex flex-col items-center justify-center px-4 text-center relative"
  >
    <div
      @click="backToLogin"
      class="absolute top-6 left-6 flex items-center gap-2 text-gray-600 text-sm cursor-pointer hover:text-blue-600 transition"
    >
      <UIcon name="i-heroicons-arrow-left" class="w-4 h-4" />
      <span>Back to Login</span>
    </div>

    <div class="absolute top-6 right-6 text-sm text-gray-500 text-right">
      <p>Welcome, {{ userID }}</p>
      <p>ID: {{ userID }}</p>
    </div>

    <div class="max-w-3xl w-full space-y-6 mt-10">
      <div class="flex flex-col items-center space-y-3">
        <div class="bg-blue-100 text-blue-600 p-4 rounded-full">
          <UIcon name="i-heroicons-book-open" class="w-8 h-8" />
        </div>
        <h2 class="text-2xl font-semibold text-gray-800">Choose Your Role</h2>
        <p class="text-gray-500 text-sm">
          Select your position and branch to access your personalized dashboard
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        <div
          v-for="role in roles"
          :key="role.title"
          @click="selectRole(role)"
          class="cursor-pointer border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
          :class="{
            'ring-2 ring-blue-500 bg-[#EFF6FE] ': selectedRole === role.title,
            'border-gray-200 bg-white': selectedRole !== role.title,
          }"
        >
          <div class="flex flex-col items-center gap-3">
            <div class="bg-blue-100 text-blue-600 p-3 rounded-full">
              <UIcon name="i-heroicons-academic-cap" class="w-4 h-4" />
            </div>
            <h3 class="font-semibold text-gray-800">{{ role.title }}</h3>
            <p class="text-gray-500 text-sm">
              {{ role.branches }} branches available
            </p>
          </div>
          <div
            v-if="selectedRole === role.title"
            class="p-3 flex justify-center items-center"
          >
            <div
              class="border-2 border-blue-600 rounded-full p-1 flex justify-center items-center"
            >
              <UIcon name="i-heroicons-check" class="text-blue-600 w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      <div v-if="selectedRole" class="mt-10 bg-white p-4 rounded-2xl shadow-md">
        <h3 class="text-lg font-semibold text-gray-800 mb-5">
          Select Your Branch
        </h3>
        <div class="flex gap-4">
          <div
            v-for="branch in filteredBranches"
            :key="branch.name"
            @click="selectBranch(branch)"
            class="cursor-pointer border rounded-xl px-6 py-4 w-60 shadow-sm hover:shadow-md transition-all"
            :class="{
              'ring-2 ring-blue-500 bg-[#EFF6FE]':
                selectedBranch === branch.name,
              'border-gray-200 bg-white': selectedBranch !== branch.name,
            }"
          >
            <div class="flex flex-row items-center gap-2">
              <div class="bg-gray-50 p-2 rounded-2xl">
                <UIcon name="i-lucide-school" class="text-gray-500 w-8 h-8" />
              </div>
              <div class="flex flex-row justify-between items-center gap-2">
                <div class="flex flex-col items-center gap-2">
                  <h4 class="font-medium text-gray-800">{{ branch.name }}</h4>
                  <p class="text-xs text-gray-500">Branch Location</p>
                </div>

                <div
                  v-if="selectedBranch === branch.name"
                  class="p-1 flex justify-center items-center"
                >
                  <div
                    class="border-2 border-blue-600 rounded-full p-1 flex justify-center items-center"
                  >
                    <UIcon
                      name="i-heroicons-check"
                      class="text-blue-600 w-4 h-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <UButton
          color="secondary"
          class="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700"
          size="lg"
          :disabled="!selectedRole || !selectedBranch"
          @click="continueToDashboard"
        >
          Continue to Dashboard
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const userID = "111";

const roles = [
  { title: "Administrator", branches: 3 },
  { title: "Teacher", branches: 2 },
  { title: "Student Affairs", branches: 1 },
];

const branches = [
  { name: "Main Campus" },
  { name: "North Branch" },
  { name: "South Branch" },
];

const selectedRole = ref<string | null>(null);
const selectedBranch = ref<string | null>(null);

const filteredBranches = computed(() => {
  if (selectedRole.value === "Administrator") return branches;
  if (selectedRole.value === "Teacher") return branches.slice(0, 2);
  if (selectedRole.value === "Student Affairs") return branches.slice(0, 1);
  return [];
});

function selectRole(role: any) {
  selectedRole.value = role.title;
  selectedBranch.value = null;
}

function selectBranch(branch: any) {
  selectedBranch.value = branch.name;
}

function continueToDashboard() {
  if (selectedRole.value && selectedBranch.value) {
    localStorage.setItem("selectedRole", selectedRole.value);
    localStorage.setItem("selectedBranch", selectedBranch.value);
      navigateTo("/afterChooseBranch");
  }
}

function backToLogin() {
  navigateTo("/");
}
</script>
