import type { Meta, StoryObj } from '@storybook/vue3';

import GenericSubtitle from './GenericSubtitle.vue';

const meta = {
  title: 'Basic Components/GenericSubtitle',
  component: GenericSubtitle,
  tags: ['autodocs'],

  argTypes: {
    text: { control: 'text' },
    state: { control: 'select', options: [
      'normal',
      'error',
    ]},
  },

} satisfies Meta<typeof GenericSubtitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    text: 'Subtitle',
    state: 'normal',
  },
};

export const Error: Story = {
  args: {
    text: 'Subtitle',
    state: 'error',
  },
};
