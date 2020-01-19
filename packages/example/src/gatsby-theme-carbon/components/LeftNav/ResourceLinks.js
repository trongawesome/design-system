import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Donut on Github',
    href: 'https://github.com/tantrongtt/design-system',
  },
  {
    title: 'Theme',
    href: 'https://gatsby-theme-carbon.now.sh',
  },
  {
    title: 'Configuration guide',
    href: '/guides/configuration',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
