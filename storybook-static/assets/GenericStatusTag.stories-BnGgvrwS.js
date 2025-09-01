import {
  d as G,
  u as w,
  b as c,
  e as b,
  f as y,
  m as C,
  o as V,
  g as A,
  t as I,
} from "./vue.esm-bundler-C6JmKcWh.js";
import { c as W } from "./cn-eKfGxdXH.js";
const r = G({
  inheritAttrs: !1,
  __name: "GenericStatusTag",
  props: {
    text: {},
    variant: { default: "success" },
    dontUppercase: { type: Boolean },
  },
  setup(s) {
    const o = w(),
      v = {
        info: "bg-zinc-300 text-zinc-700",
        infoStrong: "bg-gray-600 text-white",
        success: "bg-success-400",
        warn: "bg-amber-300 text-zinc-800",
        warnStrong: "bg-amber-700 text-white",
        critical: "bg-red-800 text-white",
        custom: "",
      },
      f = c(() =>
        W(
          "w-max inline-flex items-center rounded-lg px-3 py-1 text-sm font-bold text-white",
          v[s.variant],
          !s.dontUppercase && "uppercase",
          o.class,
        ),
      ),
      T = c(() => {
        const { ...t } = o;
        return t;
      });
    return (t, _) => (
      V(),
      b(
        "span",
        C(T.value, { class: f.value }),
        [y(t.$slots, "default", {}, () => [A(I(t.text), 1)])],
        16,
      )
    );
  },
});
r.__docgenInfo = {
  exportName: "default",
  displayName: "GenericStatusTag",
  description: "",
  tags: {},
  slots: [{ name: "default" }],
  sourceFiles: [
    "C:/leds-org/leds-conectafapes-biblioteca-componentes/src/components/GenericStatusTag/GenericStatusTag.vue",
  ],
};
const D = {
    title: "Components/GenericStatusTag",
    component: r,
    tags: ["autodocs"],
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
        extractArgTypes: !1,
        extractComponentDescription: !1,
      },
    },
    argTypes: {
      text: {
        control: "text",
        description: "Texto exibido na tag, se não usar slot",
        table: { type: { summary: "string" }, defaultValue: { summary: "''" } },
      },
      variant: {
        control: { type: "select" },
        options: [
          "info",
          "infoStrong",
          "success",
          "warn",
          "warnStrong",
          "critical",
          "custom",
        ],
        description: "Variante visual da tag",
        table: {
          type: { summary: "StatusTagVariant" },
          defaultValue: { summary: "success" },
        },
      },
      dontUppercase: {
        control: { type: "select" },
        options: [!0, !1],
        description: "Controla capitalização do texto.",
        table: {
          type: { summary: "boolean" },
          defaultValue: { summary: "false" },
        },
      },
    },
  },
  a = { args: { text: "Sucesso", variant: "success" } },
  e = {
    render: () => ({
      components: { GenericStatusTag: r },
      template: `
      <GenericStatusTag variant="warn">
        <strong>Alerta com slot</strong>
      </GenericStatusTag>
    `,
    }),
    name: "Com Slot",
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
  },
  n = {
    render: () => ({
      components: { GenericStatusTag: r },
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
    name: "Variantes visuais",
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
  };
var i, u, g;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((i = a.parameters) == null ? void 0 : i.docs),
    source: {
      originalSource: `{
  args: {
    text: 'Sucesso',
    variant: 'success'
  }
}`,
      ...((g = (u = a.parameters) == null ? void 0 : u.docs) == null
        ? void 0
        : g.source),
    },
  },
};
var l, m, p;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((l = e.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: `{
  render: () => ({
    components: {
      GenericStatusTag
    },
    template: \`
      <GenericStatusTag variant="warn">
        <strong>Alerta com slot</strong>
      </GenericStatusTag>
    \`
  }),
  name: 'Com Slot',
  parameters: {
    docs: {
      source: {
        code: \`
<GenericStatusTag variant="warn">
  <strong>Alerta com slot</strong>
</GenericStatusTag>
        \`.trim()
      }
    }
  }
}`,
      ...((p = (m = e.parameters) == null ? void 0 : m.docs) == null
        ? void 0
        : p.source),
    },
  },
};
var S, d, x;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((S = n.parameters) == null ? void 0 : S.docs),
    source: {
      originalSource: `{
  render: () => ({
    components: {
      GenericStatusTag
    },
    template: \`
      <div class="flex gap-2 flex-wrap">
        <GenericStatusTag variant="info" text="Info" />
        <GenericStatusTag variant="infoStrong" text="Info Strong" />
        <GenericStatusTag variant="success" text="Success" />
        <GenericStatusTag variant="warn" text="Warn" />
        <GenericStatusTag variant="warnStrong" text="Warn Strong" />
        <GenericStatusTag variant="critical" text="Critical" />
      </div>
    \`
  }),
  name: 'Variantes visuais',
  parameters: {
    docs: {
      source: {
        code: \`
<div class="flex gap-2 flex-wrap">
  <GenericStatusTag variant="info" text="Info" />
  <GenericStatusTag variant="infoStrong" text="Info Strong" />
  <GenericStatusTag variant="success" text="Success" />
  <GenericStatusTag variant="warn" text="Warn" />
  <GenericStatusTag variant="warnStrong" text="Warn Strong" />
  <GenericStatusTag variant="critical" text="Critical" />
</div>
        \`.trim()
      }
    }
  }
}`,
      ...((x = (d = n.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : x.source),
    },
  },
};
const N = ["Default", "CustomSlot", "Variants"];
export {
  e as CustomSlot,
  a as Default,
  n as Variants,
  N as __namedExportsOrder,
  D as default,
};
