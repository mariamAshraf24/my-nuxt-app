import { defineStore } from "pinia";
import { getProductsFromApi } from "~/services/productService";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  stock: number;
  // status: "active" | "inactive" | "out_of_stock";
  status: string;
}

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [] as Product[],
    isLoading: false,
    error: null as string | null,

    selectedCategory: "" as string,
    selectedStatus: "" as string,
    search: "" as string,
  }),

  getters: {
    filteredProducts(state): Product[] {
      return state.products.filter((p) => {
        const matchCategory = state.selectedCategory
          ? p.category === state.selectedCategory
          : true;

        const matchStatus =
          state.selectedStatus === "out_of_stock"
            ? p.stock <= 0
            : state.selectedStatus
            ? p.status === state.selectedStatus
            : true;

        const matchSearch = state.search
          ? p.name.toLowerCase().includes(state.search.toLowerCase()) ||
            p.description.toLowerCase().includes(state.search.toLowerCase())
          : true;

        return matchCategory && matchStatus && matchSearch;
      });
    },

    categories(state): string[] {
      return [...new Set(state.products.map((p) => p.category))];
    },
  },

  actions: {
    async fetchProducts() {
      this.isLoading = true;
      this.error = null;
      try {
        const data = await getProductsFromApi();

        this.products = data.map((item: any) => {
          const stock =
            Math.random() < 0.2 ? 0 : Math.floor(Math.random() * 100) + 1;
          let status: "active" | "inactive" | "out_of_stock" =
            Math.random() < 0.3 ? "inactive" : "active";

          return {
            id: item.id,
            name: item.title,
            price: item.price,
            image: item.image,
            category: item.category,
            description: item.description,
            stock,
            status,
          };
        });
      } catch (err: any) {
        this.error = err.message || "حدث خطأ أثناء تحميل المنتجات";
        console.error(err);
      } finally {
        this.isLoading = false;
      }
    },

    addProduct(product: Product) {
      this.products.push(product);
    },

    updateProduct(updatedProduct: Product) {
      const index = this.products.findIndex((p) => p.id === updatedProduct.id);
      if (index !== -1) this.products[index] = updatedProduct;
    },

    deleteProduct(id: number) {
      this.products = this.products.filter((p) => p.id !== id);
    },
  },
});
