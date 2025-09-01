import {
  d as R,
  l as S,
  p as W,
  q as X,
  u as Y,
  b as t,
  e as r,
  v as f,
  x as l,
  t as c,
  z as _,
  f as I,
  s as Z,
  E as ee,
  m as re,
  F as ae,
  A as te,
  k as se,
  o as a,
} from "./vue.esm-bundler-C6JmKcWh.js";
import { c as w } from "./cn-eKfGxdXH.js";
import { _ as oe } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const ne = { key: 0 },
  le = ["for"],
  ie = { key: 1 },
  ue = { class: "relative" },
  ce = ["disabled"],
  de = { key: 2 },
  me = { class: "text-sm text-error-300" },
  pe = { key: 0 },
  ge = { key: 1 },
  ve = { key: 3 },
  P = R({
    inheritAttrs: !1,
    __name: "GenericInput",
    props: S(
      {
        label: { default: "" },
        state: { default: "default" },
        containerClass: { default: () => [] },
        errorMessages: { default: () => [] },
      },
      { modelValue: {}, modelModifiers: {} },
    ),
    emits: S(["search"], ["update:modelValue"]),
    setup(s, { emit: o }) {
      const e = s,
        U = o,
        q = () => {
          U("search", v.value);
        },
        v = W(s, "modelValue"),
        y = X(),
        n = Y(),
        j = t(() => n.id),
        L = t(() => n.type),
        $ = t(() => e.state === "disabled"),
        O = t(() => L.value === "search"),
        x = t(() => !!y.label),
        V = t(() => !!y.error),
        H = {
          default: "ring-gray-500",
          error: "ring-error-300 bg-error-100/10",
          warning: "ring-warning-100",
          disabled: "!ring-0 bg-gray-100/40",
        },
        J = t(() =>
          w(
            "w-full p-4 leading-tight font-inter text-gray-600 ring hover:ring-2 rounded-lg outline-primary-400",
            H[e.errorMessages.length > 0 ? "error" : e.state],
            n.class,
          ),
        ),
        K = t(() => {
          const { ...i } = n;
          return i;
        });
      return (i, u) => (
        a(),
        r(
          "div",
          { class: se(_(w)("w-full gap-y-4 flex flex-col", e.containerClass)) },
          [
            !x.value && e.label !== ""
              ? (a(),
                r("div", ne, [
                  l(
                    "label",
                    {
                      for: j.value,
                      class: "w-fit text-base font-medium font-inter",
                    },
                    c(e.label) + c(_(n).required ? "*" : ""),
                    9,
                    le,
                  ),
                ]))
              : x.value
                ? (a(), r("div", ie, [I(i.$slots, "label", {}, void 0, !0)]))
                : f("", !0),
            l("div", ue, [
              Z(
                l(
                  "input",
                  re(K.value, {
                    "onUpdate:modelValue":
                      u[0] || (u[0] = (b) => (v.value = b)),
                    class: J.value,
                    disabled: $.value,
                  }),
                  null,
                  16,
                  ce,
                ),
                [[ee, v.value]],
              ),
              O.value
                ? (a(),
                  r(
                    "svg",
                    {
                      key: 0,
                      xmlns: "http://www.w3.org/2000/svg",
                      class:
                        "absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700 transition",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      onClick: q,
                    },
                    u[1] ||
                      (u[1] = [
                        l(
                          "path",
                          {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z",
                          },
                          null,
                          -1,
                        ),
                      ]),
                  ))
                : f("", !0),
            ]),
            !V.value && e.errorMessages.length > 0
              ? (a(),
                r("div", de, [
                  l("div", me, [
                    Array.isArray(e.errorMessages)
                      ? (a(),
                        r("div", pe, [
                          (a(!0),
                          r(
                            ae,
                            null,
                            te(
                              e.errorMessages,
                              (b, Q) => (a(), r("p", { key: Q }, c(b), 1)),
                            ),
                            128,
                          )),
                        ]))
                      : (a(), r("div", ge, c(e.errorMessages), 1)),
                  ]),
                ]))
              : V.value
                ? (a(), r("div", ve, [I(i.$slots, "error", {}, void 0, !0)]))
                : f("", !0),
          ],
          2,
        )
      );
    },
  }),
  h = oe(P, [["__scopeId", "data-v-dd764f48"]]);
P.__docgenInfo = {
  exportName: "default",
  displayName: "GenericInput",
  description: "",
  tags: {},
  props: [
    { name: "label", defaultValue: { func: !1, value: "''" } },
    { name: "state", defaultValue: { func: !1, value: "'default'" } },
    { name: "containerClass", defaultValue: { func: !1, value: "() => []" } },
    { name: "errorMessages", defaultValue: { func: !1, value: "() => []" } },
  ],
  events: [{ name: "search", type: { names: ["T"] } }],
  slots: [{ name: "label" }, { name: "error" }],
  sourceFiles: [
    "C:/leds-org/leds-conectafapes-biblioteca-componentes/src/components/GenericInput/GenericInput.vue",
  ],
};
const ye = {
    title: "Components/GenericInput",
    component: h,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component:
            '\n**GenericInput** é um componente de input genérico que aceita vários tipos de dados (`string`, `number`, `boolean` ou `undefined`).\n\n- Suporte a `v-model` genérico;\n- Aceita atributos nativos do `<input>`;\n- Prop `state`: `default` | `error` | `warning` | `disabled`;\n- Prop `label`;\n- Prop `errorMessages` (`string | string[]`);\n- Slots disponíveis:\n  - `label`: substitui o texto do rótulo;\n  - `error`: personaliza a exibição de mensagens de erro;\n- Se `type="search"`, exibe ícone de busca e emite `@search` com o valor atual;\n\n### Exemplo\n\n```vue\n<GenericInput v-model="value" type="search" label="Buscar" @search="buscar" />\n```\n        '.trim(),
        },
        extractArgTypes: !1,
        extractComponentDescription: !1,
      },
    },
    argTypes: {
      modelValue: {
        control: "text",
        description: "Valor do input (string, number ou undefined)",
        table: {
          type: { summary: "string | number | undefined" },
          defaultValue: { summary: "''" },
        },
      },
      type: {
        control: { type: "select" },
        options: [
          "text",
          "number",
          "email",
          "password",
          "search",
          "tel",
          "url",
        ],
        description: "Tipo nativo do input",
        table: {
          type: { summary: "string" },
          defaultValue: { summary: "'text'" },
        },
      },
      state: {
        control: "select",
        options: ["default", "error", "warning", "disabled"],
        description: "Estado visual do input",
        table: {
          type: { summary: "'default' | 'error' | 'warning' | 'disabled'" },
          defaultValue: { summary: "'default'" },
        },
      },
      label: {
        control: "text",
        description: "Texto do label (ignorado se usar slot `label`)",
        table: { type: { summary: "string" }, defaultValue: { summary: "''" } },
      },
      errorMessages: {
        control: "object",
        description: "Mensagem(s) de erro (string ou string[])",
        table: {
          type: { summary: "string | string[]" },
          defaultValue: { summary: "[]" },
        },
      },
      containerClass: {
        control: "text",
        description: "Classe CSS customizada para o container externo",
        table: { type: { summary: "string | string[]" } },
      },
    },
  },
  d = {
    args: {
      modelValue: "",
      type: "text",
      label: "Texto",
      state: "default",
      errorMessages: [],
    },
  },
  m = {
    args: { modelValue: "", type: "search", label: "Buscar usuário" },
    parameters: {
      docs: {
        source: {
          code: `
<GenericInput
  v-model="busca"
  type="search"
  label="Buscar usuário"
  @search="onSearch"
/>
        `.trim(),
        },
      },
    },
    render: (s) => ({
      components: { GenericInput: h },
      data() {
        return { busca: s.modelValue };
      },
      watch: {
        busca(o) {
          var e;
          (e = s["onUpdate:modelValue"]) == null || e.call(s, o);
        },
        "args.modelValue"(o) {
          this.busca = o;
        },
      },
      methods: {
        onSearch() {
          alert("Buscando por: " + this.busca);
        },
      },
      template: `
      <GenericInput
        type="search"
        :model-value="busca"
        v-bind="args"
        @update:modelValue="val => busca = val"
        @search="onSearch"
      />
    `,
    }),
  },
  p = {
    args: {
      modelValue: "",
      type: "text",
      label: "Email",
      state: "error",
      errorMessages: ["Campo obrigatório", "Formato inválido"],
    },
  },
  g = {
    parameters: {
      docs: {
        source: {
          code: `
<GenericInput v-model="valor" state="error">
  <template #error>
    <div style="color: red; font-weight: bold;">
      Este campo é obrigatório!
    </div>
  </template>
</GenericInput>
        `.trim(),
        },
      },
    },
    render: () => ({
      components: { GenericInput: h },
      data: () => ({ valor: "" }),
      template: `
      <GenericInput v-model="valor" state="error">
        <template #error>
          <div style="color: red; font-weight: bold;">
            Este campo é obrigatório!
          </div>
        </template>
      </GenericInput>
    `,
    }),
  };
var G, C, M;
d.parameters = {
  ...d.parameters,
  docs: {
    ...((G = d.parameters) == null ? void 0 : G.docs),
    source: {
      originalSource: `{
  args: {
    modelValue: '',
    type: 'text',
    label: 'Texto',
    state: 'default',
    errorMessages: []
  }
}`,
      ...((M = (C = d.parameters) == null ? void 0 : C.docs) == null
        ? void 0
        : M.source),
    },
  },
};
var E, k, B;
m.parameters = {
  ...m.parameters,
  docs: {
    ...((E = m.parameters) == null ? void 0 : E.docs),
    source: {
      originalSource: `{
  args: {
    modelValue: '',
    type: 'search',
    label: 'Buscar usuário'
  },
  parameters: {
    docs: {
      source: {
        code: \`
<GenericInput
  v-model="busca"
  type="search"
  label="Buscar usuário"
  @search="onSearch"
/>
        \`.trim()
      }
    }
  },
  render: args => ({
    components: {
      GenericInput
    },
    data() {
      return {
        busca: args.modelValue
      };
    },
    watch: {
      busca(val) {
        args['onUpdate:modelValue']?.(val);
      },
      'args.modelValue'(val) {
        this.busca = val;
      }
    },
    methods: {
      onSearch() {
        alert('Buscando por: ' + this.busca);
      }
    },
    template: \`
      <GenericInput
        type="search"
        :model-value="busca"
        v-bind="args"
        @update:modelValue="val => busca = val"
        @search="onSearch"
      />
    \`
  })
}`,
      ...((B = (k = m.parameters) == null ? void 0 : k.docs) == null
        ? void 0
        : B.source),
    },
  },
};
var T, A, D;
p.parameters = {
  ...p.parameters,
  docs: {
    ...((T = p.parameters) == null ? void 0 : T.docs),
    source: {
      originalSource: `{
  args: {
    modelValue: '',
    type: 'text',
    label: 'Email',
    state: 'error',
    errorMessages: ['Campo obrigatório', 'Formato inválido']
  }
}`,
      ...((D = (A = p.parameters) == null ? void 0 : A.docs) == null
        ? void 0
        : D.source),
    },
  },
};
var z, F, N;
g.parameters = {
  ...g.parameters,
  docs: {
    ...((z = g.parameters) == null ? void 0 : z.docs),
    source: {
      originalSource: `{
  parameters: {
    docs: {
      source: {
        code: \`
<GenericInput v-model="valor" state="error">
  <template #error>
    <div style="color: red; font-weight: bold;">
      Este campo é obrigatório!
    </div>
  </template>
</GenericInput>
        \`.trim()
      }
    }
  },
  render: () => ({
    components: {
      GenericInput
    },
    data: () => ({
      valor: ''
    }),
    template: \`
      <GenericInput v-model="valor" state="error">
        <template #error>
          <div style="color: red; font-weight: bold;">
            Este campo é obrigatório!
          </div>
        </template>
      </GenericInput>
    \`
  })
}`,
      ...((N = (F = g.parameters) == null ? void 0 : F.docs) == null
        ? void 0
        : N.source),
    },
  },
};
const xe = ["Default", "Search", "ComErro", "ComSlotDeErro"];
export {
  p as ComErro,
  g as ComSlotDeErro,
  d as Default,
  m as Search,
  xe as __namedExportsOrder,
  ye as default,
};
