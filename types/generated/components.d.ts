import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_about_sections';
  info: {
    description: 'About section with company information and statistics';
    displayName: 'About Section';
    icon: 'information';
  };
  attributes: {
    aboutContent: Schema.Attribute.RichText & Schema.Attribute.Required;
    aboutImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    companyStats: Schema.Attribute.Component<'homepage.company-stat', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 2;
        },
        number
      >;
    sectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'About Source Termite Solutions'>;
    trustBadgeText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'Certified Professionals'>;
  };
}

export interface HomepageCompanyStat extends Struct.ComponentSchema {
  collectionName: 'components_homepage_company_stats';
  info: {
    description: 'Individual company statistic with number, label, and icon';
    displayName: 'Company Stat';
    icon: 'chart';
  };
  attributes: {
    statIcon: Schema.Attribute.Media<'images'>;
    statLabel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    statNumber: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface HomepageGeneralSettings extends Struct.ComponentSchema {
  collectionName: 'components_homepage_general_settings';
  info: {
    description: 'General homepage settings including SEO and status';
    displayName: 'General Settings';
    icon: 'settings';
  };
  attributes: {
    activeStatus: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    lastUpdated: Schema.Attribute.DateTime;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    pageTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface HomepageGetAQuoteSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_get_a_quote_sections';
  info: {
    description: 'Quote section with service highlights and call-to-action buttons';
    displayName: 'Get A Quote Section';
    icon: 'phone';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    primaryCTALink: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'tel:2532004829'>;
    primaryCTAText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'Call (253) 200-4829'>;
    secondaryCTALink: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    secondaryCTAText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'Get Free Inspection Today'>;
    sectionSubtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    sectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'Get Your Free Quote Today'>;
    serviceHighlights: Schema.Attribute.Component<
      'homepage.service-highlight',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 2;
        },
        number
      >;
  };
}

export interface HomepageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_hero_sections';
  info: {
    description: 'Hero section with main headlines, description, and call-to-action';
    displayName: 'Hero Section';
    icon: 'crown';
  };
  attributes: {
    heroBackgroundImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    heroDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    mainHeadline: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'Protect Your Home'>;
    primaryCTAText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'Get Free Inspection Today'>;
    socialProofItems: Schema.Attribute.Component<
      'homepage.social-proof-item',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    subHeadline: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<"Before It's Too Late">;
    trustBadgeText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }> &
      Schema.Attribute.DefaultTo<'Certified Technicians \u2022 Local Experts \u2022 Licensed & Insured'>;
  };
}

export interface HomepageHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_homepage_how_it_works';
  info: {
    description: 'How It Works section with process steps';
    displayName: 'How It Works';
    icon: 'layers';
  };
  attributes: {
    processSteps: Schema.Attribute.Component<'homepage.process-step', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 1;
        },
        number
      >;
    sectionSubtitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }> &
      Schema.Attribute.DefaultTo<'Our simple 4-step process protects your home from termites'>;
    sectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'How It Works'>;
  };
}

export interface HomepageProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_homepage_process_steps';
  info: {
    description: 'Individual process step with number, title, description, and icon';
    displayName: 'Process Step';
    icon: 'number';
  };
  attributes: {
    iconLabel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    stepDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    stepIcon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    stepNumber: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    stepTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface HomepageServiceHighlight extends Struct.ComponentSchema {
  collectionName: 'components_homepage_service_highlights';
  info: {
    description: 'Individual service highlight with icon, text, and accessibility label';
    displayName: 'Service Highlight';
    icon: 'star';
  };
  attributes: {
    highlightIcon: Schema.Attribute.Media<'images'>;
    highlightText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    iconLabel: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface HomepageSocialProofItem extends Struct.ComponentSchema {
  collectionName: 'components_homepage_social_proof_items';
  info: {
    description: 'Individual social proof item with number and label';
    displayName: 'Social Proof Item';
    icon: 'check';
  };
  attributes: {
    proofLabel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    proofNumber: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
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
      'homepage.about-section': HomepageAboutSection;
      'homepage.company-stat': HomepageCompanyStat;
      'homepage.general-settings': HomepageGeneralSettings;
      'homepage.get-a-quote-section': HomepageGetAQuoteSection;
      'homepage.hero-section': HomepageHeroSection;
      'homepage.how-it-works': HomepageHowItWorks;
      'homepage.process-step': HomepageProcessStep;
      'homepage.service-highlight': HomepageServiceHighlight;
      'homepage.social-proof-item': HomepageSocialProofItem;
      'seo.seo': SeoSeo;
    }
  }
}
