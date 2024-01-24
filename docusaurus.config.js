// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DOXA",
  tagline: "A powerful platform for hosting engaging AI competitions.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://blog.doxaai.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "doxaai", // Usually your GitHub org/user name.
  projectName: "doxaai.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  deploymentBranch: "production",

  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "DOXA AI Blog",
        // logo: {
        //   alt: 'DOXA Logo',
        //   src: 'img/logo.png',
        // },
        items: [
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://doxaai.com/",
            label: "Compete",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Competitions",
            items: [
              {
                label: "ClimateHack.AI",
                href: "https://climatehack.ai/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/MUvbQ3UYcf",
              },
              {
                label: "Instagram",
                href: "https://instagram.com/doxaai",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/doxaai",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/doxaai/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Press & Media",
                to: "/press",
              },
              {
                label: "DOXA AI Platform",
                href: "https://doxaai.com/",
              },
              {
                label: "GitHub",
                href: "https://github.com/doxaai/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DOXA AI`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
