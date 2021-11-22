module.exports = {
  someSidebar: [
    {
      type: 'category',
      label: 'Overview',
      collapsible: false,
      items: ['overviewIntroduction'],
    },

    {
      type: 'category',
      label: 'Contributing',
      collapsible: false,
      items: ['contributingGuidelines', 'contributingCodeOfConduct',],
    },

    {
      type: 'category',
      label: 'Processes',
      collapsible: false,
      items: ['processesNewProject', 'processesExistingProject',],
    },

    {
      type: 'category',
      label: 'Security',
      collapsible: false,
      items: [{
        type: 'link',
        label: 'Responsible Disclosure Guidelines',
        href: 'https://www.doc.govt.nz/footer-links/privacy-and-security/responsible-disclosure-guidelines/',
      }],
    },

    {
      type: 'category',
      label: 'Projects',
      collapsible: false,
      items: ['projects/dusky', 'projects/falcon'],
    },

    {
      type: 'category',
      label: 'Legal',
      collapsible: false,
      items: ['legalLicences', 'legalDisclaimer', 'legalCopyright',]
    }
  ],
};
