import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentText extends Schema.Component {
  collectionName: 'components_content_texts';
  info: {
    displayName: 'link';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    link: Attribute.String & Attribute.Required;
  };
}

export interface ContentTitleSubText extends Schema.Component {
  collectionName: 'components_content_title_sub_texts';
  info: {
    displayName: 'title_subtitle';
    icon: 'filter';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
  };
}

export interface ContentTitleText extends Schema.Component {
  collectionName: 'components_content_title_texts';
  info: {
    displayName: 'title_text';
    icon: 'server';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
  };
}

export interface CtaBtn extends Schema.Component {
  collectionName: 'components_cta_btns';
  info: {
    displayName: 'btn';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
  };
}

export interface HeaderHeader extends Schema.Component {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    logo: Attribute.Media<'images'>;
    header: Attribute.Component<'content.text', true>;
  };
}

export interface LandingPageAboutUs extends Schema.Component {
  collectionName: 'components_landing_page_about_uses';
  info: {
    displayName: 'about us';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    feature_1: Attribute.Component<'content.title-text'>;
    feature_2: Attribute.Component<'content.title-text'>;
    feature_3: Attribute.Component<'content.title-text'>;
    btn: Attribute.Component<'cta.btn'>;
  };
}

export interface LandingPageContact extends Schema.Component {
  collectionName: 'components_landing_page_contacts';
  info: {
    displayName: 'contact';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    name: Attribute.String;
    address: Attribute.String;
    phone: Attribute.String;
    email: Attribute.Email;
    city: Attribute.String;
  };
}

export interface LandingPageHero extends Schema.Component {
  collectionName: 'components_content_heroes';
  info: {
    displayName: 'hero';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title_up: Attribute.String & Attribute.Required;
    title_down: Attribute.String;
    content: Attribute.Blocks;
    btn_left: Attribute.Component<'cta.btn'>;
    btn_right: Attribute.Component<'cta.btn'>;
    background_media: Attribute.Media<'images' | 'videos'> & Attribute.Required;
  };
}

export interface LandingPageNews extends Schema.Component {
  collectionName: 'components_landing_page_news';
  info: {
    displayName: 'media block';
    icon: 'apps';
    description: '';
  };
  attributes: {
    btn: Attribute.Component<'cta.btn'>;
    content: Attribute.Component<'content.title-sub-text'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.text': ContentText;
      'content.title-sub-text': ContentTitleSubText;
      'content.title-text': ContentTitleText;
      'cta.btn': CtaBtn;
      'header.header': HeaderHeader;
      'landing-page.about-us': LandingPageAboutUs;
      'landing-page.contact': LandingPageContact;
      'landing-page.hero': LandingPageHero;
      'landing-page.news': LandingPageNews;
    }
  }
}
