<template>
  <div class="flex justify-center items-center gap-2 text-[#2563eb]">
    <button
      class="border border-[#BEDBFF] rounded px-3 py-2 bg-[#f6faff] hover:bg-[#eaf2fd] disabled:opacity-50"
      :disabled="currentPage === 1"
      @click="$emit('update:currentPage', currentPage - 1)"
    >
      &lt;
    </button>

    <button
      v-for="page in visiblePages"
      :key="page"
      @click="$emit('update:currentPage', page)"
      :class="[
        'border border-[#BEDBFF] rounded px-3 py-2',
        page === currentPage
          ? 'bg-[#2563eb] text-white font-bold'
          : 'bg-[#f6faff] text-[#2563eb] hover:bg-[#eaf2fd]',
      ]"
    >
      {{ page }}
    </button>

    <span v-if="showEllipsis" class="px-2 text-[#2563eb]">...</span>

    <button
      class="border border-[#BEDBFF] rounded px-3 py-2 bg-[#f6faff] hover:bg-[#eaf2fd] disabled:opacity-50"
      :disabled="currentPage === totalPages"
      @click="$emit('update:currentPage', currentPage + 1)"
    >
      &gt;
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
});

defineEmits(["update:currentPage"]);

const visiblePages = computed(() => {
  const pages = [];
  if (props.totalPages <= 4) {
    for (let i = 1; i <= props.totalPages; i++) pages.push(i);
  } else {
    if (props.currentPage <= 3) {
      pages.push(1, 2, 3, 4);
    } else if (props.currentPage >= props.totalPages - 1) {
      for (let i = props.totalPages - 3; i <= props.totalPages; i++)
        pages.push(i);
    } else {
      pages.push(
        props.currentPage - 1,
        props.currentPage,
        props.currentPage + 1,
        props.currentPage + 2
      );
    }
  }
  return pages.filter((p) => p > 0 && p <= props.totalPages);
});

const showEllipsis = computed(
  () =>
    props.totalPages > 4 &&
    visiblePages.value[visiblePages.value.length - 1] < props.totalPages
);
</script>
