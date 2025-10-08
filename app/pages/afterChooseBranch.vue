<template class="h-screen">
  <div class="flex w-screen h-screen">
    <section
      class="w-full lg:w-1/2 h-full bg-white px-8 flex items-center justify-center"
    >
       <form-branch></form-branch>
    </section>

    <section class="hidden lg:block w-1/2 h-full">
      <constant-comp></constant-comp>
    </section>
  </div>
</template>

<script setup lang="ts"></script>