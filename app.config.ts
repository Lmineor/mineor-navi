export default defineAppConfig({
  ui: {
    strategy: "merge",
    primary: "blue",
    gray: "slate",
    tooltip: {
      // removes fixed height and truncate
      base: "h-auto overflow-visible text-overflow-clip whitespace-normal",
      popper: { placement: "top" },
    },
  },
  repoUrl: "https://github.com/Lmineor/mineor-landingpage",
  blogUrl: "https://blog.mineor.xyz",
  toolUrl: "https://tools.mineor.xyz/",
})
