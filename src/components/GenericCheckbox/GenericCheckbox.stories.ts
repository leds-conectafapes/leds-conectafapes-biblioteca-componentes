import type { Meta, StoryObj } from '@storybook/vue3';

import GenericCheckbox from './GenericCheckbox.vue';

const meta = {
  title: 'Basic Components/GenericCheckbox',
  component: GenericCheckbox,
  tags: ['autodocs'],
} satisfies Meta<typeof GenericCheckbox>;

export default meta;
type Story = StoryObj<typeof GenericCheckbox>

export const PropDefault: Story = {
  args: {
    label: 'Checkbox',
    modelValue: false,
  },
}

export const SlotDefault: Story = {
  args: {
    default: 'Checkbox with slot',
  }
}

export const CheckedDefault: Story = {
  args: {
    default: 'Checkbox',
    modelValue: true,
  }
}
