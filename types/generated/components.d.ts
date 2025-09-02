import type { Schema, Struct } from '@strapi/strapi';

export interface AboutSectionAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_about_section_about_sections';
  info: {
    description: '';
    displayName: 'About Section';
  };
  attributes: {
    about_us_features: Schema.Attribute.Component<
      'about-us-features.about-us-features',
      true
    >;
    about_us_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    about_us_stats: Schema.Attribute.Component<
      'about-us-stats.about-us-stats',
      true
    >;
    description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"At Source Termite Solutions, we've been protecting homes and businesses from termite damage for over 15 years. Our team of certified professionals combines cutting-edge technology with proven methods to deliver effective termite control solutions.">;
    sectionTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'About Source Termite Solutions'>;
  };
}

export interface AboutUsFeaturesAboutUsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_about_us_features_about_us_features';
  info: {
    displayName: 'About us features';
  };
  attributes: {
    feature_description: Schema.Attribute.Text;
    feature_icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    feature_title: Schema.Attribute.String;
  };
}

export interface AboutUsStatsAboutUsStats extends Struct.ComponentSchema {
  collectionName: 'components_about_us_stats_about_us_stats';
  info: {
    displayName: 'About us stats';
  };
  attributes: {
    stats_description: Schema.Attribute.String;
    stats_icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    stats_title: Schema.Attribute.String;
  };
}

export interface GetQuoteTopFeaturesGetQuoteTopFeatures
  extends Struct.ComponentSchema {
  collectionName: 'components_get_quote_top_features_get_quote_top_features';
  info: {
    displayName: 'Get quote top features';
  };
  attributes: {
    feature_icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    feature_text: Schema.Attribute.String;
  };
}

export interface HeroSectionHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_hero_section_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
  };
  attributes: {
    accentText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Same day service'>;
    accentTextIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ctaButtonText: Schema.Attribute.String;
    features: Schema.Attribute.JSON;
    mainHeadlineBold: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"Before It's Too Late">;
    mainHeadlineLight: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Protect Your Home'>;
    subHeadline: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Expert termite inspections and treatments that help prevent thousands in damage.'>;
    trustBadgeIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    trustBadgeText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Certified Technicians \u2022 Local Experts \u2022 Licensed & Insured'>;
  };
}

export interface HowItWorksSectionHowItWorksSection
  extends Struct.ComponentSchema {
  collectionName: 'components_how_it_works_section_how_it_works_sections';
  info: {
    description: '';
    displayName: 'How It Works Section';
  };
  attributes: {
    how_it_works_steps: Schema.Attribute.Component<
      'how-it-works-steps.how-it-works-steps',
      true
    >;
    protect_your_home: Schema.Attribute.Component<
      'protect-your-home.protect-your-home',
      false
    >;
    sectionSubtitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Our simple 4-step process protects your home from termites'>;
    sectionTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'How It Works'>;
  };
}

export interface HowItWorksStepsHowItWorksSteps extends Struct.ComponentSchema {
  collectionName: 'components_how_it_works_steps_how_it_works_steps';
  info: {
    displayName: 'How it works steps';
  };
  attributes: {
    step_description: Schema.Attribute.String;
    step_icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    step_number: Schema.Attribute.Integer;
    step_title: Schema.Attribute.String;
  };
}

export interface LinkLink extends Struct.ComponentSchema {
  collectionName: 'components_link_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ProtectYourHomeProtectYourHome extends Struct.ComponentSchema {
  collectionName: 'components_protect_your_home_protect_your_homes';
  info: {
    displayName: 'Protect your home';
  };
  attributes: {
    bg_image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ctaButtonText1: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Get Free Inspection'>;
    ctaButtonText2: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Call (253) 200-4829'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Ready to Protect Your Home? Join thousands of satisfied homeowners who trust our certified experts. Free inspection and retreatment guarantee included.'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Ready to Protect Your Home?'>;
  };
}

export interface QuoteSectionQuoteSection extends Struct.ComponentSchema {
  collectionName: 'components_quote_section_quote_sections';
  info: {
    description: '';
    displayName: 'Quote Section';
  };
  attributes: {
    form_subtitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"Get personalized protection tailored to your property's unique needs">;
    form_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Request Free Inspection'>;
    get_quote_top_features: Schema.Attribute.Component<
      'get-quote-top-features.get-quote-top-features',
      true
    >;
    getQuoteDescription: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Professional termite protection with 15+ years of trusted service. Free inspection and protection backed by our retreatment guarantee.'>;
    need_help_button_text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Call Now'>;
    need_help_now_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Need Immediate Help?'>;
    need_help_text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Same-day service available'>;
    quote_section_stats: Schema.Attribute.JSON;
    sectionTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Get Your Free Quote Today'>;
    trusted_by_thousands_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Trusted by Thousands'>;
    what_we_offer: Schema.Attribute.JSON;
    what_we_offer_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'What We Offer'>;
  };
}

export interface RiskAssessmentSectionRiskAssessmentSection
  extends Struct.ComponentSchema {
  collectionName: 'components_risk_assessment_section_risk_assessment_sections';
  info: {
    description: '';
    displayName: 'Risk Assessment Section';
  };
  attributes: {
    buttonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Start Free Assessment'>;
    company_logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    risk_bg_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    risk_features: Schema.Attribute.JSON;
    sectionDescription: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"Understand your property's vulnerability to termites with our comprehensive risk assessment. Get personalized recommendations based on your location and home construction.">;
    sectionTitleBold: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Assessment'>;
    sectionTitleLight: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Termite Risk'>;
    top_accent_text: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Free Assessment \u2022 Expert Analysis \u2022 Personalized Results'>;
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
      'about-section.about_section': AboutSectionAboutSection;
      'about-us-features.about-us-features': AboutUsFeaturesAboutUsFeatures;
      'about-us-stats.about-us-stats': AboutUsStatsAboutUsStats;
      'get-quote-top-features.get-quote-top-features': GetQuoteTopFeaturesGetQuoteTopFeatures;
      'hero-section.hero_section': HeroSectionHeroSection;
      'how-it-works-section.how_it_works_section': HowItWorksSectionHowItWorksSection;
      'how-it-works-steps.how-it-works-steps': HowItWorksStepsHowItWorksSteps;
      'link.link': LinkLink;
      'protect-your-home.protect-your-home': ProtectYourHomeProtectYourHome;
      'quote-section.quote_section': QuoteSectionQuoteSection;
      'risk-assessment-section.risk_assessment_section': RiskAssessmentSectionRiskAssessmentSection;
      'seo.seo': SeoSeo;
    }
  }
}
