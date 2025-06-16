import type { Meta, StoryObj } from '@storybook/vue3'
import GenericStatusTag from './GenericStatusTag.vue'

const meta: Meta<typeof GenericStatusTag> = {
  title: 'Components/GenericStatusTag',
  component: GenericStatusTag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**GenericStatusTag** é um componente para exibir tags de status com variantes visuais e suporte a slots.

### Props principais:
- \`text\`: texto da tag (se não usar slot).
- \`variant\`: variantes visuais da tag (success, warning, disabled etc.).
- Aceita classes adicionais via \`class\`.

### Uso básico:

\`\`\`vue
<GenericStatusTag text="Sucesso" variant="success" />
\`\`\`

### Uso com slot:

\`\`\`vue
<GenericStatusTag variant="warning">
  <template #text>
    <strong>Alerta personalizado</strong>
  </template>
</GenericStatusTag>
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto exibido na tag, se não usar slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['success', 'successOutline', 'warning', 'secondary', 'secondaryDanger', 'disabled'],
      description: 'Variante visual da tag',
      table: {
        type: { summary: 'statusTagVariant' },
        defaultValue: { summary: 'success' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof GenericStatusTag>

export const Default: Story = {
  args: {
    text: 'Sucesso',
    variant: 'success',
  },
}

export const CustomTextSlot: Story = {
  render: () => ({
    components: { GenericStatusTag },
    template: `
      <GenericStatusTag variant="warning">
        <template #text>
          <strong>Alerta com slot</strong>
        </template>
      </GenericStatusTag>
    `,
  }),
  name: 'Com slot text',
}

export const Variants: Story = {
  render: () => ({
    components: { GenericStatusTag },
    template: `
      <div class="flex gap-2 flex-wrap">
        <GenericStatusTag variant="success" text="Success" />
        <GenericStatusTag variant="successOutline" text="Success Outline" />
        <GenericStatusTag variant="warning" text="Warning" />
        <GenericStatusTag variant="secondary" text="Secondary" />
        <GenericStatusTag variant="secondaryDanger" text="Secondary Danger" />
        <GenericStatusTag variant="disabled" text="Disabled" />
      </div>
    `,
  }),
  name: 'Variantes visuais',
}
