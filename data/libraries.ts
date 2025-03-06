import { upperFirst } from "lodash-es"
// import { Library } from "@/types/libraries.types"
import { addUtmParams } from "@/utils/util"

export const libraries = [
  {
    "name": "Manus",
    "logo": "manus.png",
    "url": "https://manus.im/",
    "github": "",
    "description": "Manus是一款通用人工智能助手，能够将思维与行动完美结合：它不仅善于思考，更能将思考转化为实际成果。无论是在工作还是生活中，Manus都能出色地完成各种任务，让您在轻松休息的同时，一切事务尽在掌控",
    "hot": 99,
    "filterMatchings": [
      {
        "id": "FAi"
      }
    ],
  },
  {
    "name": "前端配色",
    "logo": "realtimecolors.png",
    "url": "https://www.realtimecolors.com/",
    "github": "",
    "description": "有各种前端整体配色供你选择",
    "hot": 99,
    "filterMatchings": [
      {
        "id": "FTool"
      }
    ],
  },
  {
    "name": "阿里巴巴图标库",
    "logo": "iconfont.png",
    "url": "https://www.iconfont.cn/",
    "github": "",
    "description": "风丰富的图标，来着准能找到你想要的图标",
    "hot": 99,
    "filterMatchings": [
      {
        "id": "FTool"
      }
    ],
  },
  {
    "name": "前端渐变css",
    "logo": "mshr.ico",
    "url": "https://www.mshr.app/",
    "github": "",
    "description": "如果想要渐变效果，可以来这找找看",
    "hot": 99,
    "filterMatchings": [
      {
        "id": "FTool"
      }
    ],
  },
  {
    "name": "Favicon图标生成器",
    "logo": "realfavicongenerator.png",
    "url": "https://realfavicongenerator.net/",
    "github": "",
    "description": "基于上传的图片，帮你生成各种尺寸的图标",
    "hot": 99,
    "filterMatchings": [
      {
        "id": "FTool"
      }
    ],
  },
  {
    "name": "deepseek",
    "logo": "deepseek.svg",
    "url": "https://www.deepseek.com/",
    "github": "https://github.com/deepseek-ai",
    "description": "深度求索（DeepSeek），专注于研究世界领先的通用人工智能底层模型与技术和 DeepSeek AI 对话，轻松接入 API。",
    "hot": 99,
    "filterMatchings": [
      {
        "id": "FAi"
      }
    ],
  },
  {
    "name": "工具合集",
    "logo": "mt.png",
    "url": "https://tools.mineor.xyz",
    "github": "",
    "description": "集成了好多工具，如进制转换工具、json格式化，ip地址管理等工具",
    "hot": 99,
    "filterMatchings": [
      {
        "id": "FTool"
      }
    ],
  },
  {
    "name": "PDF-Handler",
    "logo": "mt.png",
    "url": "https://pdfhandler.mineor.xyz/",
    "github": "",
    "description": "好用的PDF处理工具，可以提取、分割和合并PDF，重要的是完全免费",
    "hot": 99,
    "filterMatchings": [
      {
        "id": "FTool"
      }
    ],
  },
  {
    "name": "Excalidraw",
    "logo": "excaldraw.png",
    "url": "https://excalidraw.com/",
    "github": "",
    "description": "很好用的画布｜Excalidraw is a virtual collaborative whiteboard tool that lets you easily sketch diagrams that have a hand-drawn feel to them.",
    "hot": 99,
    "filterMatchings": [
      {
        "id": "FTool"
      }
    ],
  },
  {
    "name": "中国色",
    "logo": "zhongguose.ico",
    "url": "https://www.zhongguose.com/",
    "github": "",
    "description": "很惊艳的一个网站，做UI的可以参考，有CMYK和RGB",
    "hot": 99,
    "filterMatchings": [
      {
        "id": "FUI"
      }
    ],
  },
  {
    "name": "Kimi.ai - 帮你看更大的世界",
    "logo": "kimi.ico",
    "url": "https://kimi.moonshot.cn/",
    "github": "",
    "description": "Kimi智能助手",
    "hot": 99,
    "filterMatchings": [
      {
        "id": "FAi"
      }
    ],
  },
  {
    "name": "代码随想录",
    "logo": "programmercarl.png",
    "url": "https://programmercarl.com/",
    "github": "https://github.com/youngyangyang04/leetcode-master",
    "description": "一个超级详细的刷题顺序，每道题目都是作者精心筛选，都是经典题目高频面试题",
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
    "description": "自由框选并剪切图标，一键生成常用尺寸的Favicon图标，支持ICO，PNG以及JPG格式。",
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
    "description": "An open source license protects contributors and users. Businesses and savvy developers won’t touch a project without this protection.",
    "hot": 0,
    "filterMatchings": [
      {
        "id": "FTool"
      }, {
        "id": "FCode"
      },
    ],
  },
  {
    "name": "CODELF",
    "logo": "codelf_logo.png",
    "url": "https://unbug.github.io/codelf/",
    "github": "",
    "description": "变量命名",
    "hot": 0,
    "filterMatchings": [
      {
        "id": "FTool"
      }, {
        "id": "FCode"
      },
    ],
  },
  {
    "name": "UILibHub",
    "logo": "uilibhub.png",
    "url": "https://uilibhub.com/",
    "github": "https://github.com/aidevtoolkit/uilibhub",
    "description": "UILibHub 专注收集和分享 React、Vue 和小程序组件库的优质资源",
    "hot": 0,
    "filterMatchings": [
      {
        "id": "FCode"
      }, {
        "id": "FUI"
      },
    ],
  },
  {
    "name": "智谱AI",
    "logo": "zhipuai.png",
    "url": "https://www.zhipuai.cn/",
    "github": "",
    "description": "智谱AI是由清华大学计算机系技术成果转化而来的公司，致力于打造新一代认知智能通用模型。",
    "hot": 99,
    "filterMatchings": [
      {
        "id": "FAi"
      }
    ],
  },
  {
    "name": "OpenStack",
    "logo": "openstack.png",
    "url": "https://www.openstack.org/",
    "github": "https://github.com/openstack",
    "description": "OpenStack是一个开源的云计算管理平台项目，是一系列软件开源项目的组合",
    "hot": 99,
    "filterMatchings": [
      {
        "id": "FCloud"
      }
    ],
  },
  {
    "name": "icones",
    "logo": "icones.svg",
    "url": "https://icones.js.org/",
    "github": "",
    "description": "很多很多的icon",
    "hot": 99,
    "filterMatchings": [
      {
        "id": "FUI"
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
      showUrl: item.showUrl || item.url,
      filterMatchings: item.filterMatchings,
    }
  })
}
