<template>
  <div class="bg-[#F8FAFC] shadow-2xl p-9">
    <div>
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4 text-black"
        @submit="onSubmit"
      >
        <div class="text-center mb-12">
          <h1 class="text-3xl font-bold m-3">Welcome to Learning</h1>
          <p class="text-md text-gray-400">Access your educational dashboard</p>
        </div>
        <UFormField
          label="Staff/Student ID"
          name="ID"
          :ui="{
            label: 'text-black text-sm',
            wrapper: 'w-full', 
          }"
        >
          <input
            v-model="state.ID"
            type="text"
            placeholder="Enter your ID"
            class="bg-white w-full text-black border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </UFormField>

        <UFormField
          label="Password"
          name="password"
          :ui="{
            label: 'text-black text-sm',
            wrapper: 'w-full',
          }"
        >
          <input
            v-model="state.password"
            type="password"
            placeholder="Enter your password"
            class="bg-white text-black w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </UFormField>

        <UButton
          type="submit"
          color="secondary"
          :ui="{
            base: 'bg-[#3A73ED] text-white hover:bg-blue-500 w-full justify-center',
          }"
        >
          Sign In
        </UButton>
      </UForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "@nuxt/ui";
const state = reactive({
  ID: undefined,
  password: undefined,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.ID) errors.push({ name: "ID", message: "Required" });
  if (!state.password) errors.push({ name: "password", message: "Required" });
  return errors;
};

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<typeof state>) {
  if (state.ID && state.password) {
    if (state.ID === "111" && state.password === "test") {
      toast.add({
        title: "Success",
        description: "You have successfully signed in!",
        color: "secondary",
      });
      console.log(event.data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigateTo("/HomePage");
    } else {
      toast.add({
        title: "Error",
        description: "Invalid ID or password",
        color: "error",
      });
    }
  } else {
    toast.add({
      title: "Error",
      description: "Please fill all fields",
      color: "error",
    });
  }
}
</script>
