<template>
  <div class="hide-scroller-g md:sticky md:top-[75px] md:max-h-[90vh] md:overflow-auto">
    <div class="flex flex-col gap-6">
      <!-- <NuxtLink to="https://melecode.com?utm_source=mineor.xyz" target="_blank">
        <img src="/img/mele-banner.png" alt="美乐全栈低代码" class="h-[80px] drop-shadow-lg" />
      </NuxtLink> -->
      <UButton color="gray" variant="ghost" size="xs" icon="i-material-symbols-delete-outline-rounded"
        :label="clearFiltersLabel" @click="handleClearFiltering" />
    </div>
    <UAccordion :items="accordionSections" color="black" size="xl" variant="ghost" :multiple="true">
      <template #mainTag>
        <div class="ml-2 flex flex-col gap-1">
          <div class="grid grid-cols-2 gap-1">
            <FilterButton buttonFilterID="FAi" />
            <FilterButton buttonFilterID="FCode" />
            <FilterButton buttonFilterID="FAlgorithm" />
            <FilterButton buttonFilterID="FTool" />
            <FilterButton buttonFilterID="FUI" />
            <FilterButton buttonFilterID="FCloud" />
          </div>
        </div>
      </template>

      <template #moreFeatures>
        <div class="ml-2 flex flex-col gap-1">
        </div>
      </template>

      <template #availableComponents>
        <div class="ml-2">
          <!-- <FilterRange rangeFilterID="FNbComponents" /> -->
        </div>
      </template>

      <template #popularity>
        <div class="ml-2 flex flex-col gap-1">
          <!-- <FilterRange rangeFilterID="FNbStars" />
          <FilterRange rangeFilterID="FNbDownloads" /> -->
        </div>
      </template>
    </UAccordion>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const accordionSections = [
  {
    label: t("mainTag"),
    defaultOpen: true,
    slot: "mainTag",
  },
  // {
  //   label: t("moreFeatures"),
  //   defaultOpen: true,
  //   slot: "moreFeatures",
  // },
  // {
  //   label: t("availableComponents"),
  //   defaultOpen: true,
  //   slot: "availableComponents",
  // },
  // {
  //   label: t("popularity"),
  //   defaultOpen: true,
  //   slot: "popularity",
  // },
]

const { nbTouchedFilters, clearFiltering } = useFilterStore()

// const suffix = computed(() => (nbTouchedFilters() == 1 ? "" : "s"))

const clearFiltersLabel = computed(() => {
  const count = nbTouchedFilters()
  const suffix = count === 1 ? "" : "s"
  return t("clearFilters", { count, suffix })
})

const handleClearFiltering = () => {
  if (nbTouchedFilters() <= 0) {
    return
  }

  clearFiltering()
}
</script>
