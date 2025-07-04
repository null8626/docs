/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Reference',
      items: [{
        type: 'autogenerated',
        dirName: 'Reference'
      }]
    },
    {
      type: 'category',
      label: 'Resources',
      items: [{
        type: 'autogenerated',
        dirName: 'Resources'
      }]
    },
    {
      type: 'category',
      label: 'Libraries',
      items: [
        'Libraries/dotnet',
        'Libraries/cpp',
        'Libraries/go',
        'Libraries/java',
        'Libraries/lua',
        'Libraries/nodejs',
        'Libraries/php',
        'Libraries/python',
        'Libraries/ruby',
        'Libraries/rust'
      ]
    }
  ],
};

export default sidebars;
