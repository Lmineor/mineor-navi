# Mineor Submission Guide

English | [中文](./submission-guide-zh.md)

Welcome to contribute to [Mineor](https://mineor.xyz)! You can:
- Recommend or self-nominate Website

Please share your suggestions by submitting an [Issue](https://github.com/Lmineor/mineor-landingpage/issues).

## Website Submission Format
If you're submitting a website, please use the following format:

```json
{
  "name": "website's name",
  "url": "Official Website",
  "github": "GitHub Repository Link",
  "description":"breif description of website",
  "filterMatchings": [
    // website's tag
  ],
}
```

Here's an example submission for Material UI:

```json
{
    "name": "Mineor's Blog",
  "url": "https://blog.mineor.xyz/",
  "github": "https://github.com/Lmineor/mineor.xyz",
  "description":"summary of daily coding",
  "filterMatchings": [
    {
      "id": "FCode"
    },
    {
      "id": "FAlgorithm"
    }
  ]
}
```

Detailed explanations of `filterMatchings`:
- FCode tag of coding
- FAlgorithm tag of algorithm


We look forward to your contributions to help enrich the Mineor resource library!
