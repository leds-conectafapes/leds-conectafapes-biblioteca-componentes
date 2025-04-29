import type { Meta, StoryObj } from '@storybook/vue3';

import GenericDatePicker from './GenericDatePicker.vue';

const meta = {
  title: 'Basic Components/GenericDatePicker',
  component: GenericDatePicker,
  tags: ['autodocs'],

  argTypes: {
    placeholder: { control: 'text' },
    state: { control: 'select', options: [
      'default',
      'error',
      'warning',
      'disabled',
    ]},
    label: { control: 'text' },
    mandatory: { control: 'boolean' },
  },

} satisfies Meta<typeof GenericDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    mandatory: true,
    state: 'default',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    mandatory: true,
    state: 'error',
  },
};

export const Warning: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    mandatory: true,
    state: 'warning',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    mandatory: true,
    state: 'disabled',
  },
};
