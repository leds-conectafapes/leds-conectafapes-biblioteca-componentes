import {
  d as C,
  q as h,
  u as z,
  b as r,
  e as a,
  v as V,
  t as k,
  f as A,
  m as D,
  o as n,
} from "./vue.esm-bundler-C6JmKcWh.js";
import { c as P } from "./cn-eKfGxdXH.js";
const B = { key: 0 },
  N = { key: 1 },
  l = C({
    inheritAttrs: !1,
    __name: "GenericSubtitle",
    props: { text: { default: "" }, state: { default: "default" } },
    setup(G) {
      const u = G,
        y = h(),
        c = z(),
        i = r(() => !!y.text),
        E = { default: "text-gray-500", error: "text-error-300" },
        _ = r(() => P("font-inter text-sm", E[u.state], c.class)),
        T = r(() => {
          const { ...s } = c;
          return s;
        });
      return (s, I) => (
        n(),
        a(
          "legend",
          D(T.value, { class: _.value }),
          [
            i.value
              ? i.value
                ? (n(), a("div", N, [A(s.$slots, "text")]))
                : V("", !0)
              : (n(), a("div", B, k(u.text), 1)),
          ],
          16,
        )
      );
    },
  });
l.__docgenInfo = {
  exportName: "default",
  displayName: "GenericSubtitle",
  description: "",
  tags: {},
  props: [
    { name: "text", defaultValue: { func: !1, value: "''" } },
    { name: "state", defaultValue: { func: !1, value: "'default'" } },
  ],
  slots: [{ name: "text" }],
  sourceFiles: [
    "C:/leds-org/leds-conectafapes-biblioteca-componentes/src/components/GenericSubtitle/GenericSubtitle.vue",
  ],
};
const F = {
    title: "Components/GenericSubtitle",
    component: l,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component:
            '\n**GenericSubtitle** é um componente simples para legendas/subtítulos com suporte a estados visuais e slot para conteúdo customizado.\n\n- `text`: texto do subtítulo (se não usar slot).\n- `state`: estado visual do subtítulo (default, error).\n- Permite adicionar classes via `class`.\n- Slots disponíveis:\n  - `text`: substitui o texto do subtitle;\n\n### Exemplo:\n\n```vue\n<GenericSubtitle text="Subtítulo padrão" />\n```\n        '.trim(),
        },
        extractArgTypes: !1,
        extractComponentDescription: !1,
      },
    },
    argTypes: {
      text: {
        control: "text",
        description: "Texto exibido no subtítulo (se não usar slot)",
        table: { type: { summary: "string" }, defaultValue: { summary: "''" } },
      },
      state: {
        control: { type: "select" },
        options: ["default", "error"],
        description: "Estado visual do subtítulo",
        table: {
          type: { summary: "subtitleState" },
          defaultValue: { summary: "default" },
        },
      },
    },
  },
  t = { args: { text: "Subtítulo Padrão", state: "default" } },
  e = { args: { text: "Subtítulo Com Erro", state: "error" } },
  o = {
    render: () => ({
      components: { GenericSubtitle: l },
      template: `
      <GenericSubtitle state="error">
        <template #text>
          <em>Erro customizado no subtítulo via slot</em>
        </template>
      </GenericSubtitle>
    `,
    }),
    name: "Com Slot Text",
    parameters: {
      docs: {
        source: {
          code: `
<GenericSubtitle state="error">
  <template #text>
    <em>Erro customizado no subtítulo via slot</em>
  </template>
</GenericSubtitle>
        `.trim(),
        },
      },
    },
  };
var m, d, p;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((m = t.parameters) == null ? void 0 : m.docs),
    source: {
      originalSource: `{
  args: {
    text: 'Subtítulo Padrão',
    state: 'default'
  }
}`,
      ...((p = (d = t.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : p.source),
    },
  },
};
var b, S, x;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((b = e.parameters) == null ? void 0 : b.docs),
    source: {
      originalSource: `{
  args: {
    text: 'Subtítulo Com Erro',
    state: 'error'
  }
}`,
      ...((x = (S = e.parameters) == null ? void 0 : S.docs) == null
        ? void 0
        : x.source),
    },
  },
};
var f, v, g;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((f = o.parameters) == null ? void 0 : f.docs),
    source: {
      originalSource: `{
  render: () => ({
    components: {
      GenericSubtitle
    },
    template: \`
      <GenericSubtitle state="error">
        <template #text>
          <em>Erro customizado no subtítulo via slot</em>
        </template>
      </GenericSubtitle>
    \`
  }),
  name: 'Com Slot Text',
  parameters: {
    docs: {
      source: {
        code: \`
<GenericSubtitle state="error">
  <template #text>
    <em>Erro customizado no subtítulo via slot</em>
  </template>
</GenericSubtitle>
        \`.trim()
      }
    }
  }
}`,
      ...((g = (v = o.parameters) == null ? void 0 : v.docs) == null
        ? void 0
        : g.source),
    },
  },
};
const L = ["Default", "ErrorState", "CustomTextSlot"];
export {
  o as CustomTextSlot,
  t as Default,
  e as ErrorState,
  L as __namedExportsOrder,
  F as default,
};
