<template>
  <NuxtLink :to="localePath('/')" class="hover:text-black dark:hover:primary-text flex h-12 items-center gap-2">
    <img class="primary-text h-8 w-8" alt="Mineor's logo" src="/favicon.png" />
    <span class="text-xl font-bold">Mineor</span>
  </NuxtLink>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
