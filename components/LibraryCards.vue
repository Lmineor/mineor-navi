<template>
  <div class="flex-grow">
    <UInput icon="i-heroicons-magnifying-glass-20-solid" size="sm" color="white" :trailing="false"
      placeholder="Search..." v-model="searchValue" />
    <div class="mt-2.5 mb-8">
      <span class="font-bold text-primary mr-2">{{ total }}</span>{{ $t("total") }}
    </div>
    <div class="grid grid-cols-1 content-start gap-6 lg:grid-cols-2">
      <LibraryCard v-for="library in finalLibraries" :key="library.name" :initialLibrary="library" />
    </div>
    <UPagination class="mt-8" v-model="vPage" :page-count="pageCount" :total="total" :to="(_page) => {
      return {
        path: localePath(`/p/${_page}`),
      }
    }" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { getLibraries } from "@/data/libraries"
import { useFilterStore } from "../composables/states"

const { locale } = useI18n()
const libraries = getLibraries(locale.value)
const localePath = useLocalePath()

const props = defineProps({
  page: {
    type: String,
  },
})

const searchValue = ref('')
const vPage = ref(Number(props.page))
const total = ref(0)
const pageCount = ref(10)

watch(() => vPage.value, (val) => {
  const page = localePath(`/p/${val}`)
  navigateTo(page)
})

watch(searchValue, () => {
  // 当搜索值变化时重新计算列表和总数
  console.log(searchValue.value)
  finalLibraries.value = paginate(libraries, vPage.value)
})

function paginate(_libraries, _page) {
  // 确保页码为正整数
  if (_page < 1) {
    throw new Error("页码必须大于等于 1")
  }

  // 计算起始索引
  const startIndex = (_page - 1) * pageCount.value
  // 计算结束索引
  const endIndex = startIndex + pageCount.value

  // 截取数组并返回
  return _libraries.slice(startIndex, endIndex)
}

// const finalLibraries = ref(libraries.filter((item) => isDisplay(item)))
const finalLibraries = computed(() => {
  const { touchedButtonFilterIDs, rangeFiltering } = useFilterStore()

  const isDisplay = (library: any) => {
    const nbComponents = library.componentCount
    /* Return true if this card should be displayed */
    const libraryFilterIDs = library.filterMatchings.map((obj) => obj.id)

    // 搜索逻辑：检查库名是否包含搜索值
    if (searchValue.value && !library.name.toLowerCase().includes(searchValue.value.toLowerCase())) {
      return false
    }

    // Check wether all the button logic is satisfied, and debranch if not
    if (isSubset(touchedButtonFilterIDs(), libraryFilterIDs) == false) {
      return false
    }

    // ... Now range logic must be verified too.
    // We need to check every range filters living in the state
    if (
      rangeFiltering.value.FNbStars.qty > 0 &&
      library.nbStars! < rangeFiltering.value.FNbStars.qty
    ) {
      return false
    }
    if (
      rangeFiltering.value.FNbDownloads.qty > 0 &&
      library.nbDownloads! < rangeFiltering.value.FNbDownloads.qty * 1000
    ) {
      return false
    }
    if (
      rangeFiltering.value.FNbComponents.qty > 0 &&
      nbComponents < rangeFiltering.value.FNbComponents.qty
    ) {
      return false
    }

    return true
  }

  const filteredLibs = libraries.filter((item) => isDisplay(item))
  total.value = filteredLibs.length

  return paginate(filteredLibs, props.page)
})

</script>
