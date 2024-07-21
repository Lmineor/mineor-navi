# Mineor导航站 提交指南

[English](./submission-guide.md) | 中文

欢迎为 [Mineor](https://mineor.xyz) 贡献内容！您可以：
- 推荐或自荐网站

请通过提交 [Issue](https://github.com/Lmineor/mineor-landingpage/issues) 来分享您的建议。

## 网站提交格式
如果您要提交网站，请使用以下格式：

```json
{
  "name": "网站名称",
  "url": "官方网站",
  "github": "GitHub 仓库链接",
  "description":"网站的简要描述，让大家一眼就能看出来这个网站的作用",
  "filterMatchings": [
    // 网站的标签，
  ],
}
```

以下是 Material UI 的提交示例：

```json
{
  "name": "Mineor的博客",
  "url": "https://blog.mineor.xyz/",
  "github": "https://github.com/Lmineor/mineor.xyz",
  "description":"日常的积累写在了这里",
  "filterMatchings": [
    {
      "id": "FCode"
    },
    {
      "id": "FAlgorithm"
    }
  ],
}
```

`filterMatchings` 具体字段说明：
- FCode 编程或刷题相关的标签
- FAlgorithm 算法相关的标签


我们期待您的贡献，共同丰富 Mineor 的资源库！
