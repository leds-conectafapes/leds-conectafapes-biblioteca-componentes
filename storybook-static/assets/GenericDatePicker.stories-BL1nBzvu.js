import {
  d as R,
  l as U,
  p as J,
  q as Q,
  u as W,
  b as r,
  e as a,
  v as h,
  x as s,
  t as i,
  z as P,
  f as _,
  s as X,
  D as Z,
  m as ee,
  F as ae,
  A as te,
  k as re,
  o as t,
} from "./vue.esm-bundler-C6JmKcWh.js";
import { c as G } from "./cn-eKfGxdXH.js";
import { _ as se } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const oe = { key: 0 },
  ne = ["for"],
  le = { key: 1 },
  ie = { class: "relative" },
  de = ["disabled"],
  ce = { key: 2 },
  me = { class: "text-sm text-error-300" },
  ue = { key: 0 },
  pe = { key: 1 },
  ge = { key: 3 },
  j = R({
    inheritAttrs: !1,
    __name: "GenericDatePicker",
    props: U(
      {
        state: { default: "default" },
        label: { default: "" },
        errorMessages: { default: () => [] },
        containerClass: { default: () => [] },
      },
      { modelValue: {}, modelModifiers: {} },
    ),
    emits: ["update:modelValue"],
    setup(v) {
      const D = J(v, "modelValue"),
        e = v,
        b = Q(),
        o = W(),
        F = r(() => o.id),
        q = r(() => e.state === "disabled"),
        y = r(() => !!b.label),
        k = r(() => !!b.error),
        O = {
          default: "ring-gray-500",
          error: "ring-error-300 bg-error-100/10",
          warning: "ring-warning-100",
          disabled: "!ring-0 bg-gray-100/40",
        },
        $ = r(() =>
          G(
            "w-full p-4 leading-tight font-inter text-gray-600 ring hover:ring-2 rounded-lg outline-primary-400 calendar-none",
            O[e.errorMessages.length > 0 ? "error" : e.state],
            o.class,
          ),
        ),
        H = r(() => {
          const { ...n } = o;
          return n;
        });
      return (n, l) => (
        t(),
        a(
          "div",
          {
            class: re(
              P(G)("w-full relative gap-y-4 flex flex-col", e.containerClass),
            ),
          },
          [
            !y.value && e.label !== ""
              ? (t(),
                a("div", oe, [
                  s(
                    "label",
                    {
                      for: F.value,
                      class: "w-fit text-base font-medium font-inter",
                    },
                    i(e.label) + i(P(o).required ? "*" : ""),
                    9,
                    ne,
                  ),
                ]))
              : y.value
                ? (t(), a("div", le, [_(n.$slots, "label", {}, void 0, !0)]))
                : h("", !0),
            s("div", ie, [
              X(
                s(
                  "input",
                  ee(H.value, {
                    "onUpdate:modelValue":
                      l[0] || (l[0] = (g) => (D.value = g)),
                    type: "date",
                    class: $.value,
                    disabled: q.value,
                  }),
                  null,
                  16,
                  de,
                ),
                [[Z, D.value]],
              ),
              l[1] ||
                (l[1] = s(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor",
                    class:
                      "absolute right-4 top-1/2 -translate-y-1/2 w-5.5 h-5.5 text-gray-500 pointer-events-none",
                  },
                  [
                    s("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M6.75 3v2.25m10.5-2.25V5.25M3.75 9h16.5M4.5 6.75h15a.75.75 0 01.75.75v12a.75.75 0 01-.75.75H4.5A.75.75 0 013.75 19.5V7.5a.75.75 0 01.75-.75z",
                    }),
                  ],
                  -1,
                )),
            ]),
            !k.value && e.errorMessages.length > 0
              ? (t(),
                a("div", ce, [
                  s("div", me, [
                    Array.isArray(e.errorMessages)
                      ? (t(),
                        a("div", ue, [
                          (t(!0),
                          a(
                            ae,
                            null,
                            te(
                              e.errorMessages,
                              (g, K) => (t(), a("p", { key: K }, i(g), 1)),
                            ),
                            128,
                          )),
                        ]))
                      : (t(), a("div", pe, i(e.errorMessages), 1)),
                  ]),
                ]))
              : k.value
                ? (t(), a("div", ge, [_(n.$slots, "error", {}, void 0, !0)]))
                : h("", !0),
          ],
          2,
        )
      );
    },
  }),
  f = se(j, [["__scopeId", "data-v-a81f8e25"]]);
j.__docgenInfo = {
  exportName: "default",
  displayName: "GenericDatePicker",
  description: "",
  tags: {},
  props: [
    { name: "state", defaultValue: { func: !1, value: "'default'" } },
    { name: "label", defaultValue: { func: !1, value: "''" } },
    { name: "errorMessages", defaultValue: { func: !1, value: "() => []" } },
    { name: "containerClass", defaultValue: { func: !1, value: "() => []" } },
  ],
  slots: [{ name: "label" }, { name: "error" }],
  sourceFiles: [
    "C:/leds-org/leds-conectafapes-biblioteca-componentes/src/components/GenericDatePicker/GenericDatePicker.vue",
  ],
};
const be = {
    title: "Components/GenericDatePicker",
    component: f,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component:
            '\n**GenericDatePicker** é um componente de input com seleção de data com suporte a estados visuais e mensagens de erro.\n\n- Suporte a `v-model` genérico;\n- Aceita atributos nativos do `<input>`;\n- Prop `state`: `default` | `error` | `warning` | `disabled`;\n- Prop `label`;\n- Prop `errorMessages` (`string | string[]`);\n- Slots disponíveis:\n  - `label`: substitui o texto do rótulo;\n  - `error`: personaliza a exibição de mensagens de erro;\n- Se `type="search"`, exibe ícone de busca e emite `@search` com o valor atual;\n\n### Exemplo\n\n```vue\n<GenericDatePicker\n  v-model="selectedDate"\n  label="Data de nascimento"\n  state="default"\n/>\n```\n        '.trim(),
        },
        extractArgTypes: !1,
        extractComponentDescription: !1,
      },
    },
    argTypes: {
      modelValue: {
        control: "text",
        description: "Data selecionada no formato ISO (YYYY-MM-DD)",
        table: { type: { summary: "string" }, defaultValue: { summary: "''" } },
      },
      state: {
        control: "select",
        options: ["default", "error", "warning", "disabled"],
        description: "Estado visual do componente",
        table: {
          type: { summary: "'default' | 'error' | 'warning' | 'disabled'" },
          defaultValue: { summary: "'default'" },
        },
      },
      label: {
        control: "text",
        description: "Texto do rótulo (ignorado se o slot `label` for usado)",
        table: { type: { summary: "string" }, defaultValue: { summary: "''" } },
      },
      errorMessages: {
        control: "object",
        description: "Mensagem(s) de erro (string ou array de strings)",
        table: {
          type: { summary: "string | string[]" },
          defaultValue: { summary: "[]" },
        },
      },
      containerClass: {
        control: { type: "object" },
        description: "Classe CSS para o container externo",
        table: { type: { summary: "string | string[]" } },
      },
    },
  },
  d = {
    args: {
      modelValue: "",
      state: "default",
      label: "Data",
      errorMessages: [],
    },
  },
  c = {
    args: {
      modelValue: "",
      state: "error",
      label: "Data",
      errorMessages: ["Data inválida", "Por favor escolha uma data válida"],
    },
  },
  m = {
    args: {
      modelValue: "",
      state: "disabled",
      label: "Data",
      errorMessages: [],
    },
  },
  u = {
    render: () => ({
      components: { GenericDatePicker: f },
      template: `
      <GenericDatePicker v-model="selectedDate" state="default">
        <template #label>
          <span style="font-weight: 700; color: purple;">
            Data customizada com slot
          </span>
        </template>
      </GenericDatePicker>
    `,
      data() {
        return { selectedDate: "" };
      },
    }),
    parameters: {
      docs: {
        source: {
          code: `
<GenericDatePicker v-model="selectedDate" state="default">
  <template #label>
    <span style="font-weight: 700; color: purple;">
      Data customizada com slot
    </span>
  </template>
</GenericDatePicker>
        `.trim(),
        },
      },
    },
  },
  p = {
    render: () => ({
      components: { GenericDatePicker: f },
      template: `
      <GenericDatePicker v-model="selectedDate" state="error">
        <template #error>
          <div style="color: red; font-weight: bold;">
            Erro personalizado: data inválida!
          </div>
        </template>
      </GenericDatePicker>
    `,
      data() {
        return { selectedDate: "" };
      },
    }),
    parameters: {
      docs: {
        source: {
          code: `
<GenericDatePicker v-model="selectedDate" state="error">
  <template #error>
    <div style="color: red; font-weight: bold;">
      Erro personalizado: data inválida!
    </div>
  </template>
</GenericDatePicker>
        `.trim(),
        },
      },
    },
  };
var w, M, x;
d.parameters = {
  ...d.parameters,
  docs: {
    ...((w = d.parameters) == null ? void 0 : w.docs),
    source: {
      originalSource: `{
  args: {
    modelValue: '',
    state: 'default',
    label: 'Data',
    errorMessages: []
  }
}`,
      ...((x = (M = d.parameters) == null ? void 0 : M.docs) == null
        ? void 0
        : x.source),
    },
  },
};
var V, S, C;
c.parameters = {
  ...c.parameters,
  docs: {
    ...((V = c.parameters) == null ? void 0 : V.docs),
    source: {
      originalSource: `{
  args: {
    modelValue: '',
    state: 'error',
    label: 'Data',
    errorMessages: ['Data inválida', 'Por favor escolha uma data válida']
  }
}`,
      ...((C = (S = c.parameters) == null ? void 0 : S.docs) == null
        ? void 0
        : C.source),
    },
  },
};
var E, z, A;
m.parameters = {
  ...m.parameters,
  docs: {
    ...((E = m.parameters) == null ? void 0 : E.docs),
    source: {
      originalSource: `{
  args: {
    modelValue: '',
    state: 'disabled',
    label: 'Data',
    errorMessages: []
  }
}`,
      ...((A = (z = m.parameters) == null ? void 0 : z.docs) == null
        ? void 0
        : A.source),
    },
  },
};
var T, B, I;
u.parameters = {
  ...u.parameters,
  docs: {
    ...((T = u.parameters) == null ? void 0 : T.docs),
    source: {
      originalSource: `{
  render: () => ({
    components: {
      GenericDatePicker
    },
    template: \`
      <GenericDatePicker v-model="selectedDate" state="default">
        <template #label>
          <span style="font-weight: 700; color: purple;">
            Data customizada com slot
          </span>
        </template>
      </GenericDatePicker>
    \`,
    data() {
      return {
        selectedDate: ''
      };
    }
  }),
  parameters: {
    docs: {
      source: {
        code: \`
<GenericDatePicker v-model="selectedDate" state="default">
  <template #label>
    <span style="font-weight: 700; color: purple;">
      Data customizada com slot
    </span>
  </template>
</GenericDatePicker>
        \`.trim()
      }
    }
  }
}`,
      ...((I = (B = u.parameters) == null ? void 0 : B.docs) == null
        ? void 0
        : I.source),
    },
  },
};
var L, N, Y;
p.parameters = {
  ...p.parameters,
  docs: {
    ...((L = p.parameters) == null ? void 0 : L.docs),
    source: {
      originalSource: `{
  render: () => ({
    components: {
      GenericDatePicker
    },
    template: \`
      <GenericDatePicker v-model="selectedDate" state="error">
        <template #error>
          <div style="color: red; font-weight: bold;">
            Erro personalizado: data inválida!
          </div>
        </template>
      </GenericDatePicker>
    \`,
    data() {
      return {
        selectedDate: ''
      };
    }
  }),
  parameters: {
    docs: {
      source: {
        code: \`
<GenericDatePicker v-model="selectedDate" state="error">
  <template #error>
    <div style="color: red; font-weight: bold;">
      Erro personalizado: data inválida!
    </div>
  </template>
</GenericDatePicker>
        \`.trim()
      }
    }
  }
}`,
      ...((Y = (N = p.parameters) == null ? void 0 : N.docs) == null
        ? void 0
        : Y.source),
    },
  },
};
const ye = ["Default", "ComErro", "Disabled", "ComSlotLabel", "ComSlotError"];
export {
  c as ComErro,
  p as ComSlotError,
  u as ComSlotLabel,
  d as Default,
  m as Disabled,
  ye as __namedExportsOrder,
  be as default,
};
