import {
  d as _,
  q as H,
  u as V,
  b as l,
  e as r,
  v as E,
  t as B,
  f as k,
  m as D,
  o as a,
} from "./vue.esm-bundler-C6JmKcWh.js";
import { c as A } from "./cn-eKfGxdXH.js";
const N = { key: 0 },
  q = { key: 1 },
  n = _({
    inheritAttrs: !1,
    __name: "GenericTitle",
    props: { text: { default: "" }, type: { default: "h1" } },
    setup(i) {
      const c = i,
        v = H(),
        p = V(),
        u = l(() => !!v.text),
        g = {
          h1: "text-3xl/[38px] font-semibold",
          h2: "text-2xl",
          h3: "text-xl",
          title: "text-lg/[26px]",
          subtitle: "text-base",
          body: "text-sm/[22px]",
          caption: "text-xs/[18px]",
        },
        S = l(() => A(g[c.type], p.class)),
        C = l(() => {
          const { ...s } = p;
          return s;
        });
      return (s, I) => (
        a(),
        r(
          "span",
          D(C.value, { class: S.value }),
          [
            u.value
              ? u.value
                ? (a(), r("div", q, [k(s.$slots, "text")]))
                : E("", !0)
              : (a(), r("div", N, B(c.text), 1)),
          ],
          16,
        )
      );
    },
  });
n.__docgenInfo = {
  exportName: "default",
  displayName: "GenericTitle",
  description: "",
  tags: {},
  props: [
    { name: "text", defaultValue: { func: !1, value: "''" } },
    { name: "type", defaultValue: { func: !1, value: "'h1'" } },
  ],
  slots: [{ name: "text" }],
  sourceFiles: [
    "C:/leds-org/leds-conectafapes-biblioteca-componentes/src/components/GenericTitle/GenericTitle.vue",
  ],
};
const z = {
    title: "Components/GenericTitle",
    component: n,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component:
            '\n**GenericTitle** é um componente simples para títulos e textos com diferentes estilos visuais, baseado em tipos como `h1`, `h2`, `body`, etc.\n\n- `text`: conteúdo textual do título;\n- `type`: define o estilo do título (h1, h2, body etc.);\n- Slots disponíveis:\n  - `text`: substitui o texto do title;\n\n### Exemplo:\n```vue\n<GenericTitle text="Título Exemplo" type="h1" />\n```\n        '.trim(),
        },
        extractArgTypes: !1,
        extractComponentDescription: !1,
      },
    },
    argTypes: {
      text: {
        control: "text",
        description: "Texto a ser exibido no título",
        defaultValue: "",
      },
      type: {
        control: {
          type: "select",
          options: ["h1", "h2", "h3", "title", "subtitle", "body", "caption"],
        },
        description: "Tipo do título que define o estilo visual",
        defaultValue: "h1",
      },
      class: {
        control: "text",
        description: "Classes CSS adicionais para customização",
      },
    },
  },
  e = { args: { text: "Título Exemplo", type: "h1" } },
  t = {
    render: () => ({
      components: { GenericTitle: n },
      template: `
      <div class="space-y-4">
        <GenericTitle type="h1" text="Título H1" />
        <GenericTitle type="h2" text="Título H2" />
        <GenericTitle type="h3" text="Título H3" />
        <GenericTitle type="title" text="Título Title" />
        <GenericTitle type="subtitle" text="Título Subtitle" />
        <GenericTitle type="body" text="Título Body" />
        <GenericTitle type="caption" text="Título Caption" />
      </div>
    `,
    }),
    name: "Variações de Type",
    parameters: {
      docs: {
        source: {
          code: `
<div class="space-y-4">
  <GenericTitle type="h1" text="Título H1" />
  <GenericTitle type="h2" text="Título H2" />
  <GenericTitle type="h3" text="Título H3" />
  <GenericTitle type="title" text="Título Title" />
  <GenericTitle type="subtitle" text="Título Subtitle" />
  <GenericTitle type="body" text="Título Body" />
  <GenericTitle type="caption" text="Título Caption" />
</div>
        `.trim(),
        },
      },
    },
  },
  o = {
    render: (i) => ({
      components: { GenericTitle: n },
      setup: () => ({ args: i }),
      template: `
      <GenericTitle v-bind="args">
        <template #text>
          <em>Conteúdo via slot de texto</em>
        </template>
      </GenericTitle>
    `,
    }),
    args: { type: "h2" },
  };
var T, d, x;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((T = e.parameters) == null ? void 0 : T.docs),
    source: {
      originalSource: `{
  args: {
    text: 'Título Exemplo',
    type: 'h1'
  }
}`,
      ...((x = (d = e.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : x.source),
    },
  },
};
var m, y, G;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((m = t.parameters) == null ? void 0 : m.docs),
    source: {
      originalSource: `{
  render: () => ({
    components: {
      GenericTitle
    },
    template: \`
      <div class="space-y-4">
        <GenericTitle type="h1" text="Título H1" />
        <GenericTitle type="h2" text="Título H2" />
        <GenericTitle type="h3" text="Título H3" />
        <GenericTitle type="title" text="Título Title" />
        <GenericTitle type="subtitle" text="Título Subtitle" />
        <GenericTitle type="body" text="Título Body" />
        <GenericTitle type="caption" text="Título Caption" />
      </div>
    \`
  }),
  name: 'Variações de Type',
  parameters: {
    docs: {
      source: {
        code: \`
<div class="space-y-4">
  <GenericTitle type="h1" text="Título H1" />
  <GenericTitle type="h2" text="Título H2" />
  <GenericTitle type="h3" text="Título H3" />
  <GenericTitle type="title" text="Título Title" />
  <GenericTitle type="subtitle" text="Título Subtitle" />
  <GenericTitle type="body" text="Título Body" />
  <GenericTitle type="caption" text="Título Caption" />
</div>
        \`.trim()
      }
    }
  }
}`,
      ...((G = (y = t.parameters) == null ? void 0 : y.docs) == null
        ? void 0
        : G.source),
    },
  },
};
var h, f, b;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((h = o.parameters) == null ? void 0 : h.docs),
    source: {
      originalSource: `{
  render: args => ({
    components: {
      GenericTitle
    },
    setup: () => ({
      args
    }),
    template: \`
      <GenericTitle v-bind="args">
        <template #text>
          <em>Conteúdo via slot de texto</em>
        </template>
      </GenericTitle>
    \`
  }),
  args: {
    type: 'h2'
  }
}`,
      ...((b = (f = o.parameters) == null ? void 0 : f.docs) == null
        ? void 0
        : b.source),
    },
  },
};
const F = ["Default", "Variations", "ComSlotText"];
export {
  o as ComSlotText,
  e as Default,
  t as Variations,
  F as __namedExportsOrder,
  z as default,
};
