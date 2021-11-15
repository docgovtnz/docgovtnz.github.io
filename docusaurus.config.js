module.exports = {
  title: 'Open Source and Open Data',
  tagline: 'Department of Conservation | Te Papa Atawhai',
  url: 'https://docgovtnz.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'docgovtnz',
  projectName: 'docgovtnz.github.io',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Department of Conservation | Te Papa Atawhai',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Policies',
          position: 'left',
        },
        {to: 'repositories', label: 'Code Repositories', position: 'left'},
        {
          to: 'data',
          label: 'Open Data',
          position: 'left',
        },
        {
          href: 'https://github.com/docgovtnz',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} Department of Conservation on behalf of the Crown. Content reusable under CC BY 4.0, unless stated otherwise.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/docgovtnz/docgovtnz.github.io/edit/main/',
        },
        theme: {
          customCss: [
            require.resolve('./src/style/fonts.css'),
            require.resolve('./src/style/custom.css'),
          ],
        },
      },
    ],
  ],
};
