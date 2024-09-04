import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsClass extends Schema.Component {
  collectionName: 'components_about_us_classes';
  info: {
    displayName: 'class';
    icon: 'crop';
  };
  attributes: {
    foto: Attribute.Media<'images' | 'videos'>;
    class: Attribute.String;
    description: Attribute.Text;
  };
}

export interface AboutUsContent extends Schema.Component {
  collectionName: 'components_about_us_contents';
  info: {
    displayName: 'content';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface AboutUsKids extends Schema.Component {
  collectionName: 'components_about_us_kids';
  info: {
    displayName: 'kids';
    icon: 'user';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    classes: Attribute.Component<'about-us.class', true>;
  };
}

export interface AboutUsPersonFoto extends Schema.Component {
  collectionName: 'components_about_us_person_fotos';
  info: {
    displayName: 'person_foto';
    icon: 'cube';
  };
  attributes: {
    profile: Attribute.Media<'images'>;
    name: Attribute.String & Attribute.Required;
    position: Attribute.String;
    other: Attribute.String;
  };
}

export interface AboutUsTeam extends Schema.Component {
  collectionName: 'components_about_us_teams';
  info: {
    displayName: 'team';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    teachers: Attribute.Component<'about-us.person-foto', true>;
  };
}

export interface ContentText extends Schema.Component {
  collectionName: 'components_content_texts';
  info: {
    displayName: 'link';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    link: Attribute.String & Attribute.Required;
    name: Attribute.String;
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

export interface ContentTitleTextAnim extends Schema.Component {
  collectionName: 'components_content_title_text_anims';
  info: {
    displayName: 'title_text_anim';
    icon: 'check';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    illustrationType: Attribute.Enumeration<
      [
        'illustration-learning',
        'illustration-playing',
        'illustration-eco',
        'illustration-digital',
        'illustration-integration',
        'illustration-age'
      ]
    >;
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
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String;
  };
}

export interface HeaderHeader extends Schema.Component {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'content.text', true>;
  };
}

export interface HeaderSubHeader extends Schema.Component {
  collectionName: 'components_header_sub_headers';
  info: {
    displayName: 'subHeader';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    subHeader: Attribute.Component<'content.text', true>;
    name: Attribute.String;
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
    btn: Attribute.Component<'cta.btn'>;
    features: Attribute.Component<'content.title-text-anim', true>;
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
      'about-us.class': AboutUsClass;
      'about-us.content': AboutUsContent;
      'about-us.kids': AboutUsKids;
      'about-us.person-foto': AboutUsPersonFoto;
      'about-us.team': AboutUsTeam;
      'content.text': ContentText;
      'content.title-sub-text': ContentTitleSubText;
      'content.title-text-anim': ContentTitleTextAnim;
      'content.title-text': ContentTitleText;
      'cta.btn': CtaBtn;
      'header.header': HeaderHeader;
      'header.sub-header': HeaderSubHeader;
      'landing-page.about-us': LandingPageAboutUs;
      'landing-page.contact': LandingPageContact;
      'landing-page.hero': LandingPageHero;
      'landing-page.news': LandingPageNews;
    }
  }
}
