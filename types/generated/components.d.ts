import type { Schema, Struct } from '@strapi/strapi';

export interface SharedSpecificationItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_specification_items';
  info: {
    displayName: 'Specification Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedWhoForItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_who_for_items';
  info: {
    displayName: 'Who For Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.specification-item': SharedSpecificationItem;
      'shared.who-for-item': SharedWhoForItem;
    }
  }
}
