// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Painite",
  tagline:
    "Painite project - to-go website for nitt students for all academic infomations.",
  // url: "https://painite.nitt.edu",
  url: "http://192.168.1.3:3000/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Technical Council, NIT Trichy", // Usually your GitHub org/user name.
  projectName: "painite-tc", // Usually your repo name.

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
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/technical-council-nitt/painite-tc/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/technical-council-nitt/painite-tc/tree/main/",
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
      navbar: {
        title: "Painite",
        logo: {
          alt: "Painite Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Academic",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/technical-council-nitt/painite-tc",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Quick Links",
            items: [
              {
                label: "Academic",
                to: "/docs/intro",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Links",
            items: [
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/company/technical-council-nit-trichy?originalSubdomain=in",
              },
              {
                label: "Instagram",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Linktree",
                href: "https://linktr.ee/TechnicalCouncilNITT",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/technical-council-nitt/painite-tc",
              },
            ],
          },
        ],
        copyright: `Made with ❤️ by Technical Council, NIT Trichy. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "L13U85UN7G",

        // Public API key: it is safe to commit it
        apiKey: "4589944e8eb7f68137cdd35028ef7b47",

        indexName: "painite_tc",

        // Optional: see doc section below
        contextualSearch: true,

        placeHolder: "Search anything...",
      },
    }),
};

module.exports = config;
