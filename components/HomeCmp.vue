<template>
  <UContainer class="pb-6">
    <div class="mt-6 flex flex-grow justify-center gap-4 sm:mt-8">
      <!-- filters -->
      <div class="-mt-2 hidden w-72 shrink-0 p-3 md:block">
        <Filters />
      </div>

      <LibraryCards :page="page" />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const currentLocale = locale.value

const props = defineProps({
  page: {
    type: String,
  },
})

// const filterStore = useFilterStore()
// watch(() => filterStore.buttonFiltering.value, (value) => {
//   console.log('vale....:', value)
// }, { immediate: true })
//
//
// watch(() => props.page, (value) => {
//   console.log('page....:', value)
// }, { immediate: true })
</script>
