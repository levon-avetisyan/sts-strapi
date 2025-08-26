import type { Schema, Struct } from '@strapi/strapi';

export interface NavigationContactNavigationContact
  extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navigation_contacts';
  info: {
    displayName: 'Navigation Contact';
    icon: 'phone';
  };
  attributes: {
    displayText: Schema.Attribute.String & Schema.Attribute.Required;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    phoneNumber: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationCtaNavigationCta extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navigation_ctas';
  info: {
    displayName: 'Navigation CTA';
    icon: 'cursor';
  };
  attributes: {
    action: Schema.Attribute.Enumeration<['modal', 'link']> &
      Schema.Attribute.Required;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    modalType: Schema.Attribute.String;
  };
}

export interface NavigationLogoNavigationLogo extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navigation_logos';
  info: {
    displayName: 'Navigation Logo';
    icon: 'picture';
  };
  attributes: {
    altText: Schema.Attribute.String & Schema.Attribute.Required;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface NavigationMenuItemNavigationMenuItem
  extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navigation_menu_items';
  info: {
    displayName: 'Navigation Menu Item';
    icon: 'bulletList';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
    icon: 'cursor';
  };
  attributes: {
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String;
    metaImage: Schema.Attribute.String;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    structuredData: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'navigation-contact.navigation-contact': NavigationContactNavigationContact;
      'navigation-cta.navigation-cta': NavigationCtaNavigationCta;
      'navigation-logo.navigation-logo': NavigationLogoNavigationLogo;
      'navigation-menu-item.navigation-menu-item': NavigationMenuItemNavigationMenuItem;
      'seo.seo': SeoSeo;
    }
  }
}
