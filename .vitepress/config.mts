import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rent helper bot",
  description: "I'll help you find accommodation",
  themeConfig: {
    socialLinks: [{ icon: "telegram", link: "https://t.me/sk_inzeraty_bot" }],
  },
});
