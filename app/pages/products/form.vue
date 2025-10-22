<template>
  <div class="min-h-screen bg-[#f6faff] flex flex-col">
    <!-- Navbar -->
    <nav class="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 class="text-xl font-bold text-[#2563eb]">
        {{ isEdit ? "Edit Product" : "Add New Product" }}
      </h1>
      <UButton @click="goBack" color="neutral" variant="soft">← Back</UButton>
    </nav>

    <!-- Form Section -->
    <div class="flex-1 flex justify-center items-start p-8">
      <div class="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-8">
        <form @submit="onSubmit" class="space-y-6">
          <!-- Product Name -->
          <div>
            <label class="text-sm font-semibold text-blue-700 mb-1 block">Product Name</label>
            <Field
              name="name"
              v-slot="{ field, errorMessage, meta }"
              validateOnInput
            >
              <input
                v-bind="field"
                type="text"
                placeholder="Enter product name"
                class="w-full border border-gray-300 text-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                :class="{ 'border-red-500': errorMessage &&  (meta.dirty || meta.touched) }"
              />
              <p v-if="errorMessage && (meta.dirty || meta.touched)" class="text-red-500 text-sm mt-1">
                {{ errorMessage }}
              </p>
            </Field>
          </div>

          <!-- Category + Price -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="text-sm font-semibold text-blue-700 mb-1 block">Category</label>
              <Field
                name="category"
                v-slot="{ field, errorMessage, meta }"
                validateOnInput
              >
                <select
                  v-bind="field"
                  class="w-full border border-gray-300 text-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  :class="{ 'border-red-500': errorMessage &&  (meta.dirty || meta.touched) }"
                >
                  <option value="" disabled>Select category</option>
                  <option
                    v-for="cat in store.categories"
                    :key="cat"
                    :value="cat"
                  >
                    {{ cat }}
                  </option>
                </select>
                <p v-if="errorMessage &&  (meta.dirty || meta.touched)" class="text-red-500 text-sm mt-1">
                  {{ errorMessage }}
                </p>
              </Field>
            </div>

            <div>
              <label class="text-sm font-semibold text-blue-700 mb-1 block">Price</label>
              <Field
                name="price"
                v-slot="{ field, errorMessage, meta }"
                validateOnInput
              >
                <input
                  v-bind="field"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="Enter price"
                  class="w-full border border-gray-300 text-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  :class="{ 'border-red-500': errorMessage && (meta.dirty || meta.touched) }"
                />
                <p v-if="errorMessage &&  (meta.dirty || meta.touched)" class="text-red-500 text-sm mt-1">
                  {{ errorMessage }}
                </p>
              </Field>
            </div>
          </div>

          <!-- Stock + Status -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="text-sm font-semibold text-blue-700 mb-1 block">Stock Quantity</label>
              <Field
                name="stock"
                v-slot="{ field, errorMessage, meta }"
                validateOnInput
              >
                <input
                  v-bind="field"
                  type="number"
                  min="0"
                  placeholder="Enter stock"
                  class="w-full border border-gray-300 text-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  :class="{ 'border-red-500': errorMessage &&  (meta.dirty || meta.touched) }"
                />
                <p v-if="errorMessage && (meta.dirty || meta.touched)" class="text-red-500 text-sm mt-1">
                  {{ errorMessage }}
                </p>
              </Field>
            </div>

            <div>
              <label class="text-sm font-semibold text-blue-700 mb-1 block">Status</label>
              <Field
                name="status"
                v-slot="{ field, errorMessage, meta }"
                validateOnInput
              >
                <select
                  v-bind="field"
                  class="w-full border border-gray-300 text-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  :class="{ 'border-red-500': errorMessage &&  (meta.dirty || meta.touched) }"
                >
                  <option value="" disabled>Select status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <p v-if="errorMessage &&  (meta.dirty || meta.touched)" class="text-red-500 text-sm mt-1">
                  {{ errorMessage }}
                </p>
              </Field>
            </div>
          </div>

          <!-- Description -->
          <div>
            <label class="text-sm font-semibold text-blue-700 mb-1 block">Description</label>
            <Field
              name="description"
              v-slot="{ field, errorMessage, meta }"
              validateOnInput
            >
              <textarea
                v-bind="field"
                rows="4"
                placeholder="Enter product description"
                class="w-full border border-gray-300 text-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
                :class="{ 'border-red-500': errorMessage && meta.dirty }"
              ></textarea>
              <p v-if="errorMessage && meta.dirty" class="text-red-500 text-sm mt-1">
                {{ errorMessage }}
              </p>
            </Field>
          </div>

          <!-- Buttons -->
          <div class="flex justify-end gap-4 pt-4">
            <button
              type="button"
              class="border border-[#BEDBFF] rounded-lg py-2 px-6 text-[#2563eb] font-semibold"
              @click="goBack"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="bg-[#2563eb] rounded-lg py-2 px-6 text-white font-semibold"
            >
              {{ isEdit ? "Save Changes" : "Add Product" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useProductStore } from "~/stores/products";
import { useForm, Field } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { productSchema } from "~/schemas/productSchema";

const route = useRoute();
const router = useRouter();
const store = useProductStore();

const isEdit = computed(() => !!route.query.id);

const { handleSubmit, setValues } = useForm({
  validationSchema: toTypedSchema(productSchema), 
  initialValues: {
    name: "",
    category: "",
    price: 0,
    stock: 0,
    description: "",
    status: "",
    image: "",
  },
});

if (isEdit.value) {
  const productId = Number(route.query.id);
  const existing = store.products.find((p) => p.id === productId);
  if (existing) {
    setValues({
      name: existing.name,
      category: existing.category,
      price: existing.price,
      stock: existing.stock,
      description: existing.description,
      status: existing.status,
      image: existing.image,
    });
  }
}

const onSubmit = handleSubmit((values) => {
  const productId = Number(route.query.id);

  if (isEdit.value) {
    store.updateProduct({
      id: productId,
      ...values,
    });
  } else {
    const lastId =
      store.products.length > 0
        ? Math.max(...store.products.map((p) => p.id))
        : 0;
    const newProduct = {
      id: lastId + 1,
      ...values,
      image: "https://via.placeholder.com/150",
    };
    store.addProduct(newProduct);
  }

  router.push("/products");
});

function goBack() {
  router.push("/products");
}
</script>
