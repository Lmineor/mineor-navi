import { upperFirst } from "lodash-es"

export const buttonFilters = [
  {
    id: "FCode" as const,
    index: 1,
    label: "Code",
    labelZh: "刷题",
    icon: "i-codicon-terminal",
    help: "Keep Coding, Keep Love",
    helpZh: "爱生活，爱coding",
  },
  {
    id: "FAlgorithm" as const,
    index: 2,
    label: "Algorithm",
    labelZh: "算法",
    icon: "i-tabler-palette",
    help: "Algorithm",
    helpZh: "算法相关",
  },
  {
    id: "FAi" as const,
    index: 3,
    label: "Ai",
    labelZh: "Ai",
    icon: "i-la-reddit-alien",
    help: "Ai",
    helpZh: "Ai",
  },
  {
    id: "FTool" as const,
    index: 4,
    label: "Tool",
    labelZh: "工具类",
    icon: "i-fa6-solid-toolbox",
    help: "Collected Tools",
    helpZh: "收集的工具类网站",
  }
]

// export const rangeFilters = [
//   {
//     id: "FNbStars" as const,
//     leadingLabel: "More than",
//     leadingLabelZh: "超过",
//     trailingLabel: "stars",
//     trailingLabelZh: "stars",
//     icon: "i-mdi-star-outline",
//     help: "Remind that Vue-centered/React-centered libraries are supposed to be less stared than general ones",
//     helpZh: "以 Vue/React 为中心的库通常比通用库获得的星数少",
//     rangeMax: 35000,
//     rangeStep: 1000,
//   },
//   {
//     id: "FNbDownloads" as const,
//     leadingLabel: "More than",
//     leadingLabelZh: "超过",
//     trailingLabel: "k npm DLs",
//     trailingLabelZh: "千次 npm 下载",
//     icon: "i-material-symbols-download",
//     help: "NPM Weekly Downloads",
//     helpZh: "NPM 包平均每周下载量",
//     rangeMax: 500,
//     rangeStep: 5,
//   },
//   {
//     id: "FNbComponents" as const,
//     leadingLabel: "More than",
//     leadingLabelZh: "超过",
//     trailingLabel: "components",
//     trailingLabelZh: "个组件",
//     icon: "i-heroicons-square-3-stack-3d",
//     help: "Only counts the number of components provided by the library, does not include utility methods or other tools",
//     helpZh: "只计算组件库提供的组件数量，工具方法等不计算",
//     rangeMax: 100,
//     rangeStep: 5,
//   },
// ]

export const getButtonFilters = (lang: string) => {
  const _lang = lang === "en" ? "" : upperFirst(lang)
  return buttonFilters.map((item) => {
    return {
      id: item.id,
      index: item.index,
      // @ts-ignore
      label: item[`label${_lang}`],
      rawLabel: item.label,
      icon: item.icon,
      // @ts-ignore
      help: item[`help${_lang}`],
    }
  })
}

export const getRangeFilters = (lang: string) => {
  const _lang = lang === "en" ? "" : upperFirst(lang)
  // return lang === "zh" ? buttonFiltersZh : buttonFilters
  return rangeFilters.map((item) => {
    return {
      id: item.id,
      // @ts-ignore
      leadingLabel: item[`leadingLabel${_lang}`],
      // @ts-ignore
      trailingLabel: item[`trailingLabel${_lang}`],
      icon: item.icon,
      // @ts-ignore
      help: item[`help${_lang}`],
      rangeMax: item.rangeMax,
      rangeStep: item.rangeStep,
    }
  })
}
