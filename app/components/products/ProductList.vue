<template>
  <div>
    <!-- Search and filter -->
    <div class="flex flex-wrap gap-3 items-center mb-4">
      <div class="relative flex-1 min-w-[250px]">
        <UIcon
          name="i-heroicons-magnifying-glass"
          class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400"
        />
        <input
          v-model="store.search"
          type="text"
          placeholder="Search by product name, SKU..."
          class="pl-10 pr-2 py-2 border border-[#BEDBFF] rounded w-full bg-white focus:outline-none text-sm text-gray-500"
        />
      </div>
      <select
        v-model="store.selectedStatus"
        class="border border-[#BEDBFF] px-3 py-2 rounded text-sm text-gray-500 bg-white focus:outline-none min-w-[160px]"
      >
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
        <option value="out_of_stock">Out of Stock</option>
      </select>

      <select
        v-model="store.selectedCategory"
        class="border border-[#BEDBFF] px-3 py-2 rounded text-sm text-gray-500 bg-white focus:outline-none min-w-[160px]"
      >
        <option value="">All Categories</option>
        <option v-for="cat in store.categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>

      <button
        type="button"
        title="add"
        class="bg-[#2563eb] rounded-lg py-2 px-6 text-white font-semibold"
        @click="
          router.push({
            path: '/products/form',
          })
        "
      >
        + Add Product
      </button>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-lg shadow border">
      <table class="min-w-full text-sm text-left">
        <thead class="bg-[#eaf2fd] text-[#2563eb] font-semibold">
          <tr>
            <th class="px-4 py-3">SKU</th>
            <th class="px-4 py-3">Product Name</th>
            <th class="px-4 py-3">Category</th>
            <th class="px-4 py-3">Price (SAR)</th>
            <th class="px-4 py-3">Stock</th>
            <th class="px-4 py-3">Status</th>
            <th class="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in paginatedProducts"
            :key="product.id"
            class="border-b last:border-b-0 hover:bg-[#f6faff]"
          >
            <td class="px-4 py-2 font-mono text-[#2563eb]">
              SKU-{{ product.id }}
            </td>
            <td class="px-4 py-2">
              <div class="font-semibold text-gray-800">
                {{
                  product.name.length > 20
                    ? product.name.slice(0, 20) + "..."
                    : product.name
                }}
              </div>
            </td>
            <td class="px-4 py-2 text-[#1C398E] cursor-pointer">
              {{ product.category }}
            </td>
            <td class="px-4 py-2 font-bold text-gray-700">
              {{ product.price?.toFixed(2) }}
            </td>
            <td class="px-4 py-2">
              <span class="text-gray-700">{{ product.stock }}</span>
            </td>
            <td class="px-4 py-2">
              <span
                v-if="product.stock <= 0"
                class="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold"
                >Out of Stock</span
              >
              <span
                v-else-if="product.status === 'active'"
                class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold"
                >Active</span
              >
              <span
                v-else
                class="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold"
                >Inactive</span
              >
            </td>
            <td class="px-4 py-2 flex gap-2">
              <button
                type="button"
                title="View"
                class="text-[#2563eb] hover:bg-[#eaf2fd] p-1 rounded"
                @click="openDetails(product)"
              >
                <UIcon name="i-heroicons-eye" class="w-5 h-5" />
              </button>

              <button
                type="button"
                title="Edit"
                class="text-[#2563eb] hover:bg-[#eaf2fd] p-1 rounded"
                @click="
                  router.push({
                    path: '/products/form',
                    query: { id: product.id },
                  })
                "
              >
                <UIcon name="i-heroicons-pencil" class="w-5 h-5" />
              </button>

              <button
                type="button"
                title="Delete"
                class="text-red-500 hover:bg-red-50 p-1 rounded"
                @click="openDelete(product)"
              >
                <UIcon name="i-heroicons-trash" class="w-5 h-5" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div
        class="flex flex-col sm:flex-row justify-between items-center px-4 py-4 text-xs text-[#2563eb] bg-[#f6faff] rounded-b-lg gap-2"
      >
        <!-- Showing count -->
        <div class="mb-2 sm:mb-0">
          Showing {{ paginatedProducts.length }} of
          {{ store.filteredProducts.length }} products
        </div>
        <Pagination
          v-model:currentPage="currentPage"
          :total-pages="totalPages"
        />

        <!-- Totals -->
        <div class="flex gap-6">
          <div>
            <UIcon
              name="i-heroicons-currency-dollar"
              class="inline w-4 h-4 mr-1"
            />
            Total Value: SAR {{ totalValue.toFixed(2) }}
          </div>
          <div>
            <UIcon name="i-heroicons-cube" class="inline w-4 h-4 mr-1" />
            Total Stock: {{ totalStock }} units
          </div>
        </div>
      </div>
    </div>
  </div>

  <ProductDetails
    v-if="showDetails"
    :product="selectedProduct"
    :show="showDetails"
    @close="showDetails = false"
  />

  <ProductDelete
    v-if="showDelete"
    :show="showDelete"
    :product="selectedToDelete"
    @close="showDelete = false"
    @confirm="confirmDelete"
  />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useProductStore } from "~/stores/products.ts";
import { useRouter } from "vue-router";
import ProductDetails from "./ProductDetails.vue";
import ProductDelete from "./ProductDelete.vue";
import Pagination from "../Pagination.vue";

const router = useRouter();
const store = useProductStore();
const currentPage = ref(1);
const pageSize = 5;
const selectedProduct = ref(null);
const showDetails = ref(false);
const selectedToDelete = ref(null);
const showDelete = ref(false);

onMounted(() => {
  if (!store.products.length && !store.isLoading) store.fetchProducts();
});

const totalValue = computed(() =>
  store.filteredProducts.reduce((sum, p) => sum + p.price * (p.stock ?? 0), 0)
);
const totalStock = computed(() =>
  store.filteredProducts.reduce((sum, p) => sum + (p.stock ?? 0), 0)
);

const totalPages = computed(() =>
  Math.ceil(store.filteredProducts.length / pageSize)
);

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return store.filteredProducts.slice(start, start + pageSize);
});

function openDetails(product) {
  selectedProduct.value = product;
  showDetails.value = true;
}

function openDelete(product) {
  selectedToDelete.value = product;
  showDelete.value = true;
}

function confirmDelete(product) {
  // call store action to delete
  store.deleteProduct(product.id);
  showDelete.value = false;
  selectedToDelete.value = null;
}

// Reset to page 1 when filter/search changes
watch(
  [
    () => store.search,
    () => store.selectedCategory,
    () => store.selectedStatus,
  ],
  () => {
    currentPage.value = 1;
  }
);
</script>
