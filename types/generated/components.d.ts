import type { Schema, Struct } from '@strapi/strapi';

export interface NavLinksNavLinks extends Struct.ComponentSchema {
  collectionName: 'components_nav_links_nav_links';
  info: {
    displayName: 'Nav Links';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'nav-links.nav-links': NavLinksNavLinks;
    }
  }
}
