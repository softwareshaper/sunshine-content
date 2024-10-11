import type { Schema, Attribute } from '@strapi/strapi';

export interface BasicVariant extends Schema.Component {
  collectionName: 'components_basic_variants';
  info: {
    displayName: 'variant';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    text_style: Attribute.Enumeration<['inline', 'center', 'left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'inline'>;
    size: Attribute.Enumeration<['xs', 'sm', 'md', 'lg', 'xl']> &
      Attribute.Required &
      Attribute.DefaultTo<'md'>;
    effect: Attribute.Enumeration<
      ['none', 'alternate', 'collapse', 'crop', 'inline', 'shrink']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'none'>;
    background_color: Attribute.Enumeration<
      ['inherit', 'primary', 'sunshine', 'ocean', 'sand', 'black', 'white']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'inherit'>;
  };
}

export interface BasicLayout extends Schema.Component {
  collectionName: 'components_basic_layouts';
  info: {
    displayName: 'layout';
    icon: 'expand';
    description: '';
  };
  attributes: {
    background_image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    height_percentage: Attribute.Integer;
    background_color: Attribute.Enumeration<
      ['inherit', 'primary', 'sunshine', 'ocean', 'sand', 'black', 'white']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'white'>;
    content_vertical_position: Attribute.Enumeration<
      ['top', 'middle', 'bottom']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'top'>;
    content_horizontal_position: Attribute.Enumeration<
      ['start', 'middle', 'end']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'start'>;
  };
}

export interface BasicInput extends Schema.Component {
  collectionName: 'components_basic_inputs';
  info: {
    displayName: 'input';
    icon: 'write';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<
      [
        'integer',
        'text',
        'select',
        'checkbox',
        'radio',
        'switch',
        'date',
        'daterange',
        'datetime',
        'time',
        'per person and day',
        'select per person and day'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'text'>;
    size: Attribute.Enumeration<['xs', 'sm', 'md', 'lg', 'xl']> &
      Attribute.Required &
      Attribute.DefaultTo<'md'>;
    placeholder: Attribute.String;
    default: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface BasicIllustrations extends Schema.Component {
  collectionName: 'components_basic_illustrations';
  info: {
    displayName: 'illustrations';
    icon: 'picture';
    description: '';
  };
  attributes: {
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    variant: Attribute.Enumeration<
      ['canva', 'carousel', 'carousel_with_focus', 'hero', 'single']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'single'>;
  };
}

export interface BasicFilter extends Schema.Component {
  collectionName: 'components_basic_filters';
  info: {
    displayName: 'filter';
    icon: 'filter';
    description: '';
  };
  attributes: {
    category: Attribute.String;
  };
}

export interface BasicButton extends Schema.Component {
  collectionName: 'components_basic_buttons';
  info: {
    displayName: 'button';
    icon: 'seed';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    icon: Attribute.Enumeration<
      [
        'add',
        'area',
        'bathroom',
        'bbq',
        'beach_access',
        'bedroom',
        'business',
        'calendar_month',
        'caret_down',
        'caret_left',
        'caret_right',
        'caret_up',
        'description',
        'file',
        'home',
        'home_pin',
        'house',
        'menu',
        'people',
        'room_service',
        'shopping_cart',
        'whatsapp'
      ]
    >;
    external_link: Attribute.String;
    page: Attribute.Relation<'basic.button', 'oneToOne', 'api::page.page'>;
    variant: Attribute.Enumeration<
      [
        'text',
        'contained',
        'outlined',
        'sunshine',
        'ocean',
        'sand',
        'black',
        'white'
      ]
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'basic.variant': BasicVariant;
      'basic.layout': BasicLayout;
      'basic.input': BasicInput;
      'basic.illustrations': BasicIllustrations;
      'basic.filter': BasicFilter;
      'basic.button': BasicButton;
    }
  }
}
