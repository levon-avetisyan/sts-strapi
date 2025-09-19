import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsFeaturesAboutUsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_about_us_features_about_us_features';
  info: {
    displayName: 'About us features';
  };
  attributes: {
    feature_icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    feature_text: Schema.Attribute.String;
  };
}

export interface ClientReviewsClinetReviews extends Struct.ComponentSchema {
  collectionName: 'components_client_reviews_clinet_reviews';
  info: {
    displayName: 'Clinet reviews';
  };
  attributes: {
    review_text: Schema.Attribute.Text;
    review_title: Schema.Attribute.String;
  };
}

export interface FooterLinksFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_links_footer_links';
  info: {
    displayName: 'Footer links';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HowItWorksHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_how_it_works_how_it_works';
  info: {
    displayName: 'How it works';
  };
  attributes: {
    step_description: Schema.Attribute.Text;
    step_icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    step_number: Schema.Attribute.String;
    step_title: Schema.Attribute.String;
  };
}

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

export interface OurValuesItemsOurValuesItems extends Struct.ComponentSchema {
  collectionName: 'components_our_values_items_our_values_items';
  info: {
    displayName: 'Our values items';
  };
  attributes: {
    item_description: Schema.Attribute.Text;
    item_icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    item_title: Schema.Attribute.String;
  };
}

export interface TrustedByLogosTrustedByLogos extends Struct.ComponentSchema {
  collectionName: 'components_trusted_by_logos_trusted_by_logos';
  info: {
    displayName: 'Trusted by logos';
  };
  attributes: {
    logo_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us-features.about-us-features': AboutUsFeaturesAboutUsFeatures;
      'client-reviews.clinet-reviews': ClientReviewsClinetReviews;
      'footer-links.footer-links': FooterLinksFooterLinks;
      'how-it-works.how-it-works': HowItWorksHowItWorks;
      'nav-links.nav-links': NavLinksNavLinks;
      'our-values-items.our-values-items': OurValuesItemsOurValuesItems;
      'trusted-by-logos.trusted-by-logos': TrustedByLogosTrustedByLogos;
    }
  }
}
