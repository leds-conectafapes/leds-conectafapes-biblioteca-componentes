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

- \`text\`: texto da tag (se não usar slot).
- \`variant\`: variantes visuais da tag (success, warning, disabled etc.).
- Slots disponíveis:
  - \`text\`: substitui o texto da tag;

### Exemplo:

\`\`\`vue
<GenericStatusTag text="Sucesso" variant="success" />
\`\`\`
        `.trim(),
      },
      extractArgTypes: false,
      extractComponentDescription: false,
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
      options: ['info', 'infoStrong', 'success', 'warn', 'warnStrong', 'critical', 'custom'],
      description: 'Variante visual da tag',
      table: {
        type: { summary: 'StatusTagVariant' },
        defaultValue: { summary: 'success' },
      },
    },
    dontUppercase: {
      control: { type: 'select' },
      options: [true, false],
      description: 'Controla capitalização do texto.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    }
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

export const CustomSlot: Story = {
  render: () => ({
    components: { GenericStatusTag },
    template: `
      <GenericStatusTag variant="warn">
        <strong>Alerta com slot</strong>
      </GenericStatusTag>
    `,
  }),
  name: 'Com Slot',
  parameters: {
    docs: {
      source: {
        code: `
<GenericStatusTag variant="warn">
  <strong>Alerta com slot</strong>
</GenericStatusTag>
        `.trim(),
      },
    },
  },
}


export const Variants: Story = {
  render: () => ({
    components: { GenericStatusTag },
    template: `
      <div class="flex gap-2 flex-wrap">
        <GenericStatusTag variant="info" text="Info" />
        <GenericStatusTag variant="infoStrong" text="Info Strong" />
        <GenericStatusTag variant="success" text="Success" />
        <GenericStatusTag variant="warn" text="Warn" />
        <GenericStatusTag variant="warnStrong" text="Warn Strong" />
        <GenericStatusTag variant="critical" text="Critical" />
      </div>
    `,
  }),
  name: 'Variantes visuais',
  parameters: {
    docs: {
      source: {
        code: `
<div class="flex gap-2 flex-wrap">
  <GenericStatusTag variant="info" text="Info" />
  <GenericStatusTag variant="infoStrong" text="Info Strong" />
  <GenericStatusTag variant="success" text="Success" />
  <GenericStatusTag variant="warn" text="Warn" />
  <GenericStatusTag variant="warnStrong" text="Warn Strong" />
  <GenericStatusTag variant="critical" text="Critical" />
</div>
        `.trim(),
      },
    },
  },
}

