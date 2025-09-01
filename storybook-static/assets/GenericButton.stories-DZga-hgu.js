import { _ as z } from "./GenericButton-oXdqNmC8.js";
import "./vue.esm-bundler-C6JmKcWh.js";
import "./cn-eKfGxdXH.js";
const A = {
    title: "Components/GenericButton",
    component: z,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component:
            '\n**GenericButton** é um botão reutilizável que suporta múltiplas variações de estilo.\n\n- Prop `label`;\n- Ou, de forma alternativa, através de um **slot nomeado `label`**, que permite inserir **qualquer conteúdo personalizado**, como ícones, HTML ou componentes;\n- Evento `onClick`, que é emitido ao ser clicado;\n- Aceita atributos nativos do `<button>`;\n- Slots disponíveis:\n  - `label`: substitui o texto do botão;\n\n### Exemplo\n\n```vue\n<GenericButton label="Salvar" variant="primary" @onClick="handleClick" type="submit" />\n```\n\n> 💡 Use o slot `label` quando quiser personalizar o conteúdo do botão com mais controle visual ou semântica adicional.\n        '.trim(),
        },
        extractArgTypes: !1,
        extractComponentDescription: !1,
      },
    },
    argTypes: {
      label: {
        control: "text",
        description: "Texto do botão (ignorado se o slot `label` for usado)",
        table: { type: { summary: "string" }, defaultValue: { summary: "''" } },
      },
      variant: {
        control: "select",
        options: [
          "primary",
          "danger",
          "warning",
          "secondary",
          "secondaryDanger",
          "disabled",
        ],
        description: "Variação visual do botão",
        table: {
          type: {
            summary:
              "'primary' | 'danger' | 'warning' | 'secondary' | 'secondaryDanger' | 'disabled'",
          },
          defaultValue: { summary: "'primary'" },
        },
      },
      onClick: {
        action: "onClick",
        description: "Evento emitido ao clicar no botão",
        table: { category: "Events", type: { summary: "() => void" } },
      },
    },
  },
  e = { args: { label: "Confirmar", variant: "primary" } },
  a = { args: { label: "Excluir", variant: "danger" } },
  r = { args: { label: "Atenção", variant: "warning" } },
  n = { args: { label: "Cancelar", variant: "secondary" } },
  t = { args: { label: "Remover", variant: "secondaryDanger" } },
  o = { args: { label: "Indisponível", variant: "disabled" } },
  s = {
    render: () => ({
      components: { GenericButton: z },
      template: `
      <GenericButton variant="primary">
        <template #label>
          <span class="text-sm text-white">🔒 Customizado</span>
        </template>
      </GenericButton>
    `,
    }),
    name: "Com Slot Label",
    parameters: {
      docs: {
        source: {
          code: `
<GenericButton variant="primary">
  <template #label>
    <span class="text-sm text-white">🔒 Customizado</span>
  </template>
</GenericButton>
        `.trim(),
        },
      },
    },
  };
var i, c, l;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((i = e.parameters) == null ? void 0 : i.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Confirmar',
    variant: 'primary'
  }
}`,
      ...((l = (c = e.parameters) == null ? void 0 : c.docs) == null
        ? void 0
        : l.source),
    },
  },
};
var m, p, d;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((m = a.parameters) == null ? void 0 : m.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Excluir',
    variant: 'danger'
  }
}`,
      ...((d = (p = a.parameters) == null ? void 0 : p.docs) == null
        ? void 0
        : d.source),
    },
  },
};
var u, b, g;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((u = r.parameters) == null ? void 0 : u.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Atenção',
    variant: 'warning'
  }
}`,
      ...((g = (b = r.parameters) == null ? void 0 : b.docs) == null
        ? void 0
        : g.source),
    },
  },
};
var v, y, x;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((v = n.parameters) == null ? void 0 : v.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Cancelar',
    variant: 'secondary'
  }
}`,
      ...((x = (y = n.parameters) == null ? void 0 : y.docs) == null
        ? void 0
        : x.source),
    },
  },
};
var C, S, B;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((C = t.parameters) == null ? void 0 : C.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Remover',
    variant: 'secondaryDanger'
  }
}`,
      ...((B = (S = t.parameters) == null ? void 0 : S.docs) == null
        ? void 0
        : B.source),
    },
  },
};
var G, f, D;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((G = o.parameters) == null ? void 0 : G.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Indisponível',
    variant: 'disabled'
  }
}`,
      ...((D = (f = o.parameters) == null ? void 0 : f.docs) == null
        ? void 0
        : D.source),
    },
  },
};
var w, h, q;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((w = s.parameters) == null ? void 0 : w.docs),
    source: {
      originalSource: `{
  render: () => ({
    components: {
      GenericButton
    },
    template: \`
      <GenericButton variant="primary">
        <template #label>
          <span class="text-sm text-white">🔒 Customizado</span>
        </template>
      </GenericButton>
    \`
  }),
  name: 'Com Slot Label',
  parameters: {
    docs: {
      source: {
        code: \`
<GenericButton variant="primary">
  <template #label>
    <span class="text-sm text-white">🔒 Customizado</span>
  </template>
</GenericButton>
        \`.trim()
      }
    }
  }
}`,
      ...((q = (h = s.parameters) == null ? void 0 : h.docs) == null
        ? void 0
        : q.source),
    },
  },
};
const T = [
  "Primary",
  "Danger",
  "Warning",
  "Secondary",
  "SecondaryDanger",
  "Disabled",
  "WithSlot",
];
export {
  a as Danger,
  o as Disabled,
  e as Primary,
  n as Secondary,
  t as SecondaryDanger,
  r as Warning,
  s as WithSlot,
  T as __namedExportsOrder,
  A as default,
};
