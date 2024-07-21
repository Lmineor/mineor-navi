import { upperFirst } from "lodash-es"
// import { Library } from "@/types/libraries.types"
import { addUtmParams } from "@/utils/util"

export const libraries = [
  {
    "name": "代码随想录",
    "logo": "programmercarl.png",
    "url": "https://programmercarl.com/",
    "github": "https://github.com/youngyangyang04/leetcode-master",
    "description":"一个超级详细的刷题顺序，每道题目都是作者精心筛选，都是经典题目高频面试题",
    "hot": 99,
    "filterMatchings": [
      {
        "id": "FCode"
      },
      {
        "id": "FAlgorithm"
      }
    ],
  },
]
export const getSearchFilters = (lang: string) => {
  const _lang = lang === "en" ? "" : upperFirst(lang)
  return libraries.map((item) => {
    return {
      name: item.name,
    }
  })
}


export const getLibraries = (lang: string) => {
  const _lang = lang === "en" ? "" : upperFirst(lang)

  return libraries.map((item) => {
    return {
      name: item.name,
      // @ts-ignore
      subName: item[`subName${_lang}`],
      logo: item.logo,
      url: addUtmParams(item.url),
      github: item.github,
      description: item.description,
      cantPreview: item.cantPreview,
      iframeUrl: addUtmParams(item.iframeUrl),
      detailUrl: `/c/${item.name.toLowerCase().replace(/\s/g, "-")}`,
      showUrl: item.showUrl || item.url,
      repoOwner: item.repoOwner,
      repoName: item.repoName,
      package: item.package,
      componentCount: item.componentCount,
      filterMatchings: item.filterMatchings,
      nbStars: item.nbStars,
      nbDownloads: item.nbDownloads,
    }
  })
}
