import {
  d as O,
  l as P,
  p as R,
  q as U,
  u as X,
  b as s,
  e as a,
  v as A,
  s as H,
  x as u,
  t as o,
  z as T,
  f as C,
  D as J,
  m as K,
  F as Q,
  A as W,
  k as Y,
  o as r,
} from "./vue.esm-bundler-C6JmKcWh.js";
import { c as V } from "./cn-eKfGxdXH.js";
const Z = { key: 0 },
  ee = ["for"],
  ae = { key: 1 },
  re = ["disabled"],
  se = { key: 2 },
  te = { class: "text-sm text-error-300" },
  oe = { key: 0 },
  ne = { key: 1 },
  le = { key: 3 },
  p = O({
    inheritAttrs: !1,
    __name: "GenericTextArea",
    props: P(
      {
        state: { default: "default" },
        label: { default: "" },
        containerClass: { default: () => [] },
        errorMessages: { default: () => [] },
      },
      { modelValue: {}, modelModifiers: {} },
    ),
    emits: ["update:modelValue"],
    setup(g) {
      const e = g,
        b = R(g, "modelValue"),
        f = U(),
        c = X(),
        B = s(() => c.id),
        F = s(() => e.state === "disabled"),
        x = s(() => !!f.label),
        v = s(() => !!f.error),
        j = {
          default: "ring-gray-500",
          error: "ring-error-300 bg-error-100/10",
          warning: "ring-warning-100",
          disabled: "!ring-0 bg-gray-100/40",
        },
        q = s(() =>
          V(
            "w-full p-4 leading-tight font-inter text-gray-600 ring hover:ring-2 rounded-lg outline-primary-400",
            j[e.errorMessages.length > 0 ? "error" : e.state],
            e.containerClass,
          ),
        ),
        $ = s(() => {
          const { ...t } = c;
          return t;
        });
      return (t, y) => (
        r(),
        a(
          "div",
          {
            class: Y(
              T(V)("w-full relative gap-y-4 flex flex-col", e.containerClass),
            ),
          },
          [
            !x.value && e.label !== ""
              ? (r(),
                a("div", Z, [
                  u(
                    "label",
                    {
                      for: B.value,
                      class: "w-fit text-base font-medium font-inter",
                    },
                    o(e.label) + o(T(c).required ? "*" : ""),
                    9,
                    ee,
                  ),
                ]))
              : x.value
                ? (r(), a("div", ae, [C(t.$slots, "label")]))
                : A("", !0),
            H(
              u(
                "textarea",
                K($.value, {
                  "onUpdate:modelValue": y[0] || (y[0] = (m) => (b.value = m)),
                  class: q.value,
                  disabled: F.value,
                }),
                null,
                16,
                re,
              ),
              [[J, b.value]],
            ),
            !v.value && e.errorMessages.length > 0
              ? (r(),
                a("div", se, [
                  u("div", te, [
                    Array.isArray(e.errorMessages)
                      ? (r(),
                        a("div", oe, [
                          (r(!0),
                          a(
                            Q,
                            null,
                            W(
                              e.errorMessages,
                              (m, I) => (r(), a("p", { key: I }, o(m), 1)),
                            ),
                            128,
                          )),
                        ]))
                      : (r(), a("div", ne, o(e.errorMessages), 1)),
                  ]),
                ]))
              : v.value
                ? (r(), a("div", le, [C(t.$slots, "error")]))
                : A("", !0),
          ],
          2,
        )
      );
    },
  });
p.__docgenInfo = {
  exportName: "default",
  displayName: "GenericTextArea",
  description: "",
  tags: {},
  props: [
    { name: "state", defaultValue: { func: !1, value: "'default'" } },
    { name: "label", defaultValue: { func: !1, value: "''" } },
    { name: "containerClass", defaultValue: { func: !1, value: "() => []" } },
    { name: "errorMessages", defaultValue: { func: !1, value: "() => []" } },
  ],
  slots: [{ name: "label" }, { name: "error" }],
  sourceFiles: [
    "C:/leds-org/leds-conectafapes-biblioteca-componentes/src/components/GenericTextArea/GenericTextArea.vue",
  ],
};
const ce = {
    title: "Components/GenericTextArea",
    component: p,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component:
            '\n**GenericTextArea** é um componente textarea genérico com suporte a estados visuais, labels, mensagens de erro e slots para personalização.\n\n- `modelValue`: valor ligado ao textarea.\n- `state`: estado visual do textarea (default, error, warning, disabled).\n- `label`: texto do label (se não usar slot).\n- `errorMessages`: string ou array de strings para mensagens de erro.\n- `containerClass`: classes CSS customizadas para o container.\n- Slots disponíveis:\n  - `label`: substitui o texto do rótulo;\n  - `error`: personaliza a exibição de mensagens de erro;\n\n### Exemplo:\n\n```vue\n<GenericTextArea v-model="text" label="Comentário" />\n```\n        '.trim(),
        },
        extractArgTypes: !1,
        extractComponentDescription: !1,
      },
    },
    argTypes: {
      modelValue: {
        control: "text",
        description: "Valor ligado ao textarea",
        table: { type: { summary: "string | number | undefined" } },
      },
      state: {
        control: { type: "select" },
        options: ["default", "error", "warning", "disabled"],
        description: "Estado visual do textarea",
        table: { defaultValue: { summary: "default" } },
      },
      label: {
        control: "text",
        description: "Texto do label (se não usar slot)",
        table: { defaultValue: { summary: "''" } },
      },
      errorMessages: {
        control: "object",
        description: "Mensagens de erro, pode ser string ou array de strings",
        table: { defaultValue: { summary: "[]" } },
      },
      containerClass: {
        control: "object",
        description:
          "Classes CSS para o container (string ou array de strings)",
      },
    },
  },
  n = {
    args: {
      modelValue: "",
      label: "Descrição",
      state: "default",
      errorMessages: [],
      containerClass: [],
    },
  },
  l = {
    args: {
      modelValue: "",
      label: "Descrição",
      state: "error",
      errorMessages: ["Campo obrigatório", "Mínimo de 10 caracteres"],
    },
  },
  i = {
    args: {
      modelValue: "Texto desabilitado",
      label: "Descrição",
      state: "disabled",
      errorMessages: [],
    },
  },
  d = {
    render: () => ({
      components: { GenericTextArea: p },
      template: `
      <GenericTextArea v-model="value" state="error">
        <template #label>
          <strong>Descrição personalizada</strong>
        </template>
        <template #error>
          <p>Erro customizado no campo</p>
        </template>
      </GenericTextArea>
    `,
      data() {
        return { value: "" };
      },
    }),
    name: "Com Slots Label e Error",
    parameters: {
      docs: {
        source: {
          code: `
<GenericTextArea v-model="value" state="error">
  <template #label>
    <strong>Descrição personalizada</strong>
  </template>
  <template #error>
    <p>Erro customizado no campo</p>
  </template>
</GenericTextArea>
        `.trim(),
        },
      },
    },
  };
var _, M, S;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((_ = n.parameters) == null ? void 0 : _.docs),
    source: {
      originalSource: `{
  args: {
    modelValue: '',
    label: 'Descrição',
    state: 'default',
    errorMessages: [],
    containerClass: []
  }
}`,
      ...((S = (M = n.parameters) == null ? void 0 : M.docs) == null
        ? void 0
        : S.source),
    },
  },
};
var D, G, h;
l.parameters = {
  ...l.parameters,
  docs: {
    ...((D = l.parameters) == null ? void 0 : D.docs),
    source: {
      originalSource: `{
  args: {
    modelValue: '',
    label: 'Descrição',
    state: 'error',
    errorMessages: ['Campo obrigatório', 'Mínimo de 10 caracteres']
  }
}`,
      ...((h = (G = l.parameters) == null ? void 0 : G.docs) == null
        ? void 0
        : h.source),
    },
  },
};
var E, z, k;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((E = i.parameters) == null ? void 0 : E.docs),
    source: {
      originalSource: `{
  args: {
    modelValue: 'Texto desabilitado',
    label: 'Descrição',
    state: 'disabled',
    errorMessages: []
  }
}`,
      ...((k = (z = i.parameters) == null ? void 0 : z.docs) == null
        ? void 0
        : k.source),
    },
  },
};
var w, L, N;
d.parameters = {
  ...d.parameters,
  docs: {
    ...((w = d.parameters) == null ? void 0 : w.docs),
    source: {
      originalSource: `{
  render: () => ({
    components: {
      GenericTextArea
    },
    template: \`
      <GenericTextArea v-model="value" state="error">
        <template #label>
          <strong>Descrição personalizada</strong>
        </template>
        <template #error>
          <p>Erro customizado no campo</p>
        </template>
      </GenericTextArea>
    \`,
    data() {
      return {
        value: ''
      };
    }
  }),
  name: 'Com Slots Label e Error',
  parameters: {
    docs: {
      source: {
        code: \`
<GenericTextArea v-model="value" state="error">
  <template #label>
    <strong>Descrição personalizada</strong>
  </template>
  <template #error>
    <p>Erro customizado no campo</p>
  </template>
</GenericTextArea>
        \`.trim()
      }
    }
  }
}`,
      ...((N = (L = d.parameters) == null ? void 0 : L.docs) == null
        ? void 0
        : N.source),
    },
  },
};
const me = ["Default", "ComErro", "Disabled", "CustomSlots"];
export {
  l as ComErro,
  d as CustomSlots,
  n as Default,
  i as Disabled,
  me as __namedExportsOrder,
  ce as default,
};
