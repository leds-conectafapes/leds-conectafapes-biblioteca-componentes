import type { Meta, StoryObj } from '@storybook/vue3';

import GenericStatusTag from './GenericStatusTag.vue';

const meta = {
  title: 'Basic Components/GenericStatusTag',
  component: GenericStatusTag,
  tags: ['autodocs'],

  argTypes: {
    text: { control: 'text' },
    variant: { control: 'select', options: [
      'success',
      'successOutline',
      'error',
      'neutral',
      'neutralOutline',
      'warning',
    ]},
  },

} satisfies Meta<typeof GenericStatusTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    text: 'Status Tag',
    variant: 'success',
  },
};

export const SuccessOutline: Story = {
  args: {
    text: 'Status Tag',
    variant: 'successOutline',
  },
};

export const Error: Story = {
  args: {
    text: 'Status Tag',
    variant: 'error',
  },
};

export const Neutral: Story = {
  args: {
    text: 'Status Tag',
    variant: 'neutral',
  },
};

export const NeutralOutline: Story = {
  args: {
    text: 'Status Tag',
    variant: 'neutralOutline',
  },
};

export const Warning: Story = {
  args: {
    text: 'Status Tag',
    variant: 'warning',
  },
};
