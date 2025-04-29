import type { Meta, StoryObj } from '@storybook/vue3';

import GenericTitle from './GenericTitle.vue';

const meta = {
  title: 'Basic Components/GenericTitle',
  component: GenericTitle,
  tags: ['autodocs'],

  argTypes: {
    text: { control: 'text' },
    variant: { control: 'select', options: [
      'h1',
      'h2',
      'h3',
      'title',
      'subtitle',
      'body',
      'caption',
    ]},
  },

} satisfies Meta<typeof GenericTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const h1: Story = {
  args: {
    text: 'Title',
    variant: 'h1',
  },
};

export const h2: Story = {
  args: {
    text: 'Title',
    variant: 'h2',
  },
};

export const h3: Story = {
  args: {
    text: 'Title',
    variant: 'h3',
  },
};

export const title: Story = {
  args: {
    text: 'Title',
    variant: 'title',
  },
};

export const subtitle: Story = {
  args: {
    text: 'Title',
    variant: 'subtitle',
  },
};

export const body: Story = {
  args: {
    text: 'Title',
    variant: 'body',
  },
};

export const caption: Story = {
  args: {
    text: 'Title',
    variant: 'caption',
  },
};
