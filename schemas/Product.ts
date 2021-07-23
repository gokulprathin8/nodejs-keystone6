import { list } from '@keystone-next/keystone/schema';
import { integer, select, text } from '@keystone-next/fields';

export const Product = list({
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    status: select({
      options: [
        {
          label: 'Draft',
          value: 'DRAFT',
        },
        {
          label: 'Available',
          value: 'AVAILABLE',
        },
        {
          label: 'Un-Available',
          value: 'UN-AVAILABLE',
        },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
      },
    }),
    price: integer(),
  },
});
