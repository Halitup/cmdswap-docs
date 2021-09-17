const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Cmdswap",
    tagline: "Decentralized trading protocol on Arbitrum",
    url: "https://docs.cmdswap.org",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "cmdswap",
    projectName: "cmdswap-docs",

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            editUrl: "https://github.com/cmdswap/cmdswap-docs/tree/main/docs",
          },
          blog: {
            showReadingTime: true,
            editUrl: "https://github.com/cmdswap/cmdswap-docs/tree/main/blog",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    i18n: {
      defaultLocale: "en",
      locales: ["en", "ko", "zh-CN", "ja"],
    },

    themeConfig: {
      navbar: {
        title: "cmdswap",
        logo: {
          alt: "cmd swap Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "V1",
          },
          {
            position: "left",
            label: "Blog",
            to: "/blog",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Learn",
            items: [
              {
                label: "V1",
                to: "/docs/intro",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/X6R9Ea7peu",
              },
              {
                label: "Telegram",
                href: "https://t.me/cmdswap",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/cmdswap",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/cmdswap",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        apiKey: "1573138dc6207960c783aa7d849b33fb",
        indexName: "cmdswap",
        appId: "KUPFGINMTG",
      },
      gtag: {
        trackingID: "GTM-NDFDNKW",
      },
    },
  }
);
