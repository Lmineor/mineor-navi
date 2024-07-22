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
  {
    "name": "在线Favicon图标生成器",
    "logo": "web-favicon.png",
    "url": "https://favicon.net.cn/",
    "github": "",
    "description":"自由框选并剪切图标，一键生成常用尺寸的Favicon图标，支持ICO，PNG以及JPG格式。",
    "hot": 0,
    "filterMatchings": [
      {
        "id": "FTool"
      }
    ],
  },
  {
    "name": "开源License选择",
    "logo": "chooselicense.ico",
    "url": "https://choosealicense.com/",
    "github": "",
    "description":"An open source license protects contributors and users. Businesses and savvy developers won’t touch a project without this protection.",
    "hot": 0,
    "filterMatchings": [
      {
        "id": "FTool"
      },{
        "id": "FCode"
      },
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
      showUrl: item.showUrl || item.url,
      filterMatchings: item.filterMatchings,
    }
  })
}
