import type { Meta, StoryObj } from '@storybook/vue3';

import GenericCheckbox from './GenericCheckbox.vue';

const meta = {
  title: 'Basic Components/GenericCheckbox',
  component: GenericCheckbox,
  tags: ['autodocs'],

  argTypes: {
    label: { control: 'text', description: 'Nome do checkbox', required: true }
  }
} satisfies Meta<typeof GenericCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
  }
}