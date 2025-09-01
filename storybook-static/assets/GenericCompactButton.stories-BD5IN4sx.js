import { _ as r } from "./GenericCompactButton-BoOXS8W6.js";
import "./vue.esm-bundler-C6JmKcWh.js";
import "./cn-eKfGxdXH.js";
import "./GenericIcon-DAnoHuMU.js";
const m = {
    title: "Components/GenericCompactButton",
    component: r,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: `
**GenericCompactButton** é similar ao GenericButton, a principal diferença é que o **GenericCompactButton** usa um ícone no lugar do texto.

### Exemplo

\`\`\`vue
<GenericCompactButton icon="visibility" />
\`\`\`
        `.trim(),
        },
        extractArgTypes: !1,
        extractComponentDescription: !1,
      },
    },
    argTypes: {
      icon: {
        control: "text",
        description: "Nome do ícone do botão",
        table: { type: { summary: "string" }, defaultValue: { summary: "''" } },
        required: !0,
      },
      variant: {
        control: "select",
        options: ["default", "danger"],
        description: "Variação visual do botão",
        table: {
          type: { summary: "'default' | 'danger'" },
          defaultValue: { summary: "'default'" },
        },
      },
      onClick: {
        action: "onClick",
        description: "Evento emitido ao clicar no botão",
        table: { category: "Events", type: { summary: "() => void" } },
      },
    },
  },
  t = { args: { icon: "visibility", variant: "default" } };
var e, o, a;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((e = t.parameters) == null ? void 0 : e.docs),
    source: {
      originalSource: `{
  args: {
    icon: 'visibility',
    variant: 'default'
  }
}`,
      ...((a = (o = t.parameters) == null ? void 0 : o.docs) == null
        ? void 0
        : a.source),
    },
  },
};
const u = ["Default"];
export { t as Default, u as __namedExportsOrder, m as default };
