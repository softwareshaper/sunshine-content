import type { Struct, Schema } from '@strapi/strapi';

export interface BasicVariant extends Struct.ComponentSchema {
  collectionName: 'components_basic_variants';
  info: {
    displayName: 'variant';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    text_style: Schema.Attribute.Enumeration<
      ['inline', 'center', 'left', 'right']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'inline'>;
    size: Schema.Attribute.Enumeration<['xs', 'sm', 'md', 'lg', 'xl']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'md'>;
    effect: Schema.Attribute.Enumeration<
      ['none', 'alternate', 'collapse', 'crop', 'inline', 'shrink']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none'>;
    background_color: Schema.Attribute.Enumeration<
      ['inherit', 'primary', 'sunshine', 'ocean', 'sand', 'black', 'white']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'inherit'>;
  };
}

export interface BasicLayout extends Struct.ComponentSchema {
  collectionName: 'components_basic_layouts';
  info: {
    displayName: 'layout';
    icon: 'expand';
    description: '';
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    height_percentage: Schema.Attribute.Integer;
    background_color: Schema.Attribute.Enumeration<
      ['inherit', 'primary', 'sunshine', 'ocean', 'sand', 'black', 'white']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'white'>;
    content_vertical_position: Schema.Attribute.Enumeration<
      ['top', 'middle', 'bottom']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'top'>;
    content_horizontal_position: Schema.Attribute.Enumeration<
      ['start', 'middle', 'end']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'start'>;
  };
}

export interface BasicInput extends Struct.ComponentSchema {
  collectionName: 'components_basic_inputs';
  info: {
    displayName: 'input';
    icon: 'write';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<
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
        'select per person and day',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text'>;
    size: Schema.Attribute.Enumeration<['xs', 'sm', 'md', 'lg', 'xl']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'md'>;
    placeholder: Schema.Attribute.String;
    default: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
  };
}

export interface BasicIllustrations extends Struct.ComponentSchema {
  collectionName: 'components_basic_illustrations';
  info: {
    displayName: 'illustrations';
    icon: 'picture';
    description: '';
  };
  attributes: {
    variant: Schema.Attribute.Enumeration<
      ['canva', 'carousel', 'carousel_with_focus', 'hero', 'single']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'single'>;
    medias: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface BasicFilter extends Struct.ComponentSchema {
  collectionName: 'components_basic_filters';
  info: {
    displayName: 'filter';
    icon: 'filter';
    description: '';
  };
  attributes: {
    category: Schema.Attribute.String;
  };
}

export interface BasicDemoComp extends Struct.ComponentSchema {
  collectionName: 'components_basic_demo_comps';
  info: {
    displayName: 'demo_comp';
  };
  attributes: {
    blabla: Schema.Attribute.String;
  };
}

export interface BasicButton extends Struct.ComponentSchema {
  collectionName: 'components_basic_buttons';
  info: {
    displayName: 'button';
    icon: 'seed';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
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
        'whatsapp',
      ]
    >;
    external_link: Schema.Attribute.String;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    variant: Schema.Attribute.Enumeration<
      [
        'text',
        'contained',
        'outlined',
        'sunshine',
        'ocean',
        'sand',
        'black',
        'white',
      ]
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'basic.variant': BasicVariant;
      'basic.layout': BasicLayout;
      'basic.input': BasicInput;
      'basic.illustrations': BasicIllustrations;
      'basic.filter': BasicFilter;
      'basic.demo-comp': BasicDemoComp;
      'basic.button': BasicButton;
    }
  }
}
