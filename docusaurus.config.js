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
            // Please change this to your repo.
            editUrl: "https://github.com/cmdswap/cmdswap-docs",
          },
          blog: {
            showReadingTime: true,
            editUrl: "https://github.com/cmdswap/cmdswap-docs",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    i18n: {
      defaultLocale: "en",
      locales: ["en", "ko"],
    },

    themeConfig: {
      navbar: {
        title: "cmd swap",
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
                href: "https://discord.gg/W72PaczwvN",
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
    },
  }
);
