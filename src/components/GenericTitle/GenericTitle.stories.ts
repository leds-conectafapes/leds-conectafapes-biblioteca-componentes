import type { Meta, StoryObj } from '@storybook/vue3';

import GenericTitle from './GenericTitle.vue';

const meta = {
  title: 'Basic Components/GenericTitle',
  component: GenericTitle,
  tags: ['autodocs'],
} satisfies Meta<typeof GenericTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SlotH1: Story = {
  args: {
    default: 'Title',
    type: 'h1',
  }
}

export const h1: Story = {
  args: {
    text: 'Title',
    type: 'h1',
  },
};

export const h2: Story = {
  args: {
    text: 'Title',
    type: 'h2',
  },
};

export const h3: Story = {
  args: {
    text: 'Title',
    type: 'h3',
  },
};

export const title: Story = {
  args: {
    text: 'Title',
    type: 'title',
  },
};

export const subtitle: Story = {
  args: {
    text: 'Title',
    type: 'subtitle',
  },
};

export const body: Story = {
  args: {
    text: 'Title',
    type: 'body',
  },
};

export const caption: Story = {
  args: {
    text: 'Title',
    type: 'caption',
  },
};
