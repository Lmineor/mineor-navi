export default defineAppConfig({
  ui: {
    primary: "emerald",
    gray: "slate",
    tooltip: {
      // Hide the tooltip on touch devices
      base: "[@media(pointer:coarse)]:hidden px-2 py-1 text-xs font-normal",
      popper: { placement: "top" },
    },
  },
  repoUrl: "https://github.com/ddahan/ui-libs",
  buyMeACoffeeUrl: "https://www.buymeacoffee.com/ddahan",
  myWebsiteUrl: "https://david-dahan.com",
  myContactUrl: "https://david-dahan.com/contact",
});
