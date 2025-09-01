import { G as r } from "./GenericTooltip-5F5uyFZ2.js";
import { _ as l } from "./GenericCompactButton-BoOXS8W6.js";
import { h as e } from "./vue.esm-bundler-C6JmKcWh.js";
import "./cn-eKfGxdXH.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./GenericIcon-DAnoHuMU.js";
const f = {
    title: "Components/GenericTooltip",
    component: r,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: `
**GenericTooltip** é um componente usado para fornecer informações complementares de forma discreta. Ele exibe um texto ou outro componente somente quando o usuário está com o *cursor* em cima de outro elemento designado.

### Exemplo

\`\`\`vue
<GenericTooltip text="Excluir">
  <CompactButton icon="delete" variant="danger" />
</GenericTooltip>
\`\`\`
        `.trim(),
        },
        extractArgTypes: !1,
        extractComponentDescription: !1,
      },
    },
    argTypes: {
      text: {
        control: "text",
        description:
          "Texto exibido quando o cursor está em cima do elemento alvo.",
        table: { type: { summary: "string" }, defaultValue: { summary: "''" } },
      },
      position: {
        control: "select",
        options: ["top", "right", "bottom", "left", "custom"],
        description: "Posição da tooltip",
        table: {
          type: { summary: "'top' | 'right' | 'bottom' | 'left' | 'custom'" },
          defaultValue: { summary: "'top'" },
        },
      },
      customPosition: {
        control: "text",
        description:
          "Nome das classes Tailwind quando é necessária uma posição personalizada do componente.",
        table: { type: { summary: "string" }, defaultValue: { summary: "''" } },
      },
      width: {
        control: "text",
        description:
          "Nome da classe Tailwind que controlará largura do texto da GenericTooltip",
        table: {
          type: { summary: "string" },
          defaultValue: { summary: "'w-max'" },
        },
      },
    },
  },
  t = {
    name: "Exemplo",
    render: () =>
      e(r, { text: "Excluir" }, e(l, { icon: "delete", variant: "danger" })),
  },
  o = {
    name: 'Com slot "text"',
    render: () =>
      e(
        r,
        { position: "bottom", class: "ml-50" },
        {
          default: () => e(l, { icon: "visibility" }),
          text: () =>
            e("img", {
              src: "https://media1.tenor.com/m/I6j5DmlTTk0AAAAd/stare.gif",
            }),
        },
      ),
    parameters: {
      docs: {
        source: {
          code: `
<template>
  <GenericTooltip
    position="bottom"
    class="ml-50"
  >
    <GenericCompactButton icon="visibility" />
    <template #text>
      <img src="https://media1.tenor.com/m/I6j5DmlTTk0AAAAd/stare.gif" />
    </template>
  </GenericTooltip>
</template>
        `.trim(),
        },
      },
    },
  };
var i, a, m;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((i = t.parameters) == null ? void 0 : i.docs),
    source: {
      originalSource: `{
  name: 'Exemplo',
  render: () => {
    return h(GenericTooltip, {
      text: 'Excluir'
    }, h(GenericCompactButton, {
      icon: 'delete',
      variant: 'danger'
    }));
  }
}`,
      ...((m = (a = t.parameters) == null ? void 0 : a.docs) == null
        ? void 0
        : m.source),
    },
  },
};
var s, n, c;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((s = o.parameters) == null ? void 0 : s.docs),
    source: {
      originalSource: `{
  name: 'Com slot "text"',
  render: () => {
    return h(GenericTooltip, {
      position: 'bottom',
      class: 'ml-50'
    }, {
      default: () => h(GenericCompactButton, {
        icon: 'visibility'
      }),
      text: () => h('img', {
        src: 'https://media1.tenor.com/m/I6j5DmlTTk0AAAAd/stare.gif'
      })
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`
<template>
  <GenericTooltip
    position="bottom"
    class="ml-50"
  >
    <GenericCompactButton icon="visibility" />
    <template #text>
      <img src="https://media1.tenor.com/m/I6j5DmlTTk0AAAAd/stare.gif" />
    </template>
  </GenericTooltip>
</template>
        \`.trim()
      }
    }
  }
}`,
      ...((c = (n = o.parameters) == null ? void 0 : n.docs) == null
        ? void 0
        : c.source),
    },
  },
};
const y = ["Exemplo", "slotText"];
export { t as Exemplo, y as __namedExportsOrder, f as default, o as slotText };
