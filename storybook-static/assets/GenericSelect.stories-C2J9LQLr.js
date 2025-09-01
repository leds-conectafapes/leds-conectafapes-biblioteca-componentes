import {
  d as F,
  l as P,
  p as $,
  u as I,
  b as s,
  e as l,
  f as b,
  x as r,
  s as U,
  C as H,
  m as J,
  k as K,
  z as Q,
  o as a,
  v as h,
  t as n,
  F as y,
  A as O,
} from "./vue.esm-bundler-C6JmKcWh.js";
import { c as G } from "./cn-eKfGxdXH.js";
const R = ["for"],
  X = { class: "relative" },
  Y = ["disabled", "required"],
  Z = { value: void 0 },
  _ = ["value"],
  ee = { key: 0, class: "text-sm text-error-300" },
  i = F({
    inheritAttrs: !1,
    __name: "GenericSelect",
    props: P(
      {
        options: { default: () => [] },
        label: { default: "" },
        state: { default: "default" },
        placeholder: { default: "Selecione uma opção" },
        containerClass: { default: () => [] },
        errorMessages: { default: () => [] },
        required: { type: Boolean, default: !1 },
      },
      { modelValue: {}, modelModifiers: {} },
    ),
    emits: ["update:modelValue"],
    setup(o) {
      const f = $(o, "modelValue"),
        v = I(),
        D = s(() => v.id),
        W = s(() => o.state === "disabled"),
        B = {
          default: "ring-gray-500",
          error: "ring-error-300 bg-error-100/10",
          warning: "ring-warning-100",
          disabled: "ring-0 bg-gray-100/40",
        },
        N = s(() =>
          G(
            "appearance-none w-full p-4 font-inter text-gray-600 ring hover:ring-2 rounded-lg outline-primary-400",
            B[o.errorMessages.length > 0 ? "error" : o.state],
            v.class,
          ),
        ),
        S = s(() =>
          typeof o.errorMessages == "string"
            ? [o.errorMessages]
            : o.errorMessages,
        ),
        g = s(() => {
          const { ...e } = v;
          return e;
        });
      return (e, p) => (
        a(),
        l(
          "div",
          {
            class: K(
              Q(G)("w-full relative gap-y-4 flex flex-col", e.containerClass, {
                "!bg-red-500": g.value.multiple,
              }),
            ),
          },
          [
            b(e.$slots, "label", {}, () => [
              e.label !== ""
                ? (a(),
                  l(
                    "label",
                    {
                      key: 0,
                      for: D.value,
                      class: "w-fit text-base font-medium font-inter",
                    },
                    n(e.label) + n(e.required ? " *" : ""),
                    9,
                    R,
                  ))
                : h("", !0),
            ]),
            r("div", X, [
              U(
                r(
                  "select",
                  J(g.value, {
                    "onUpdate:modelValue":
                      p[0] || (p[0] = (t) => (f.value = t)),
                    class: N.value,
                    disabled: W.value,
                    required: e.required,
                  }),
                  [
                    b(e.$slots, "options", {}, () => [
                      r("option", Z, n(e.placeholder), 1),
                      (a(!0),
                      l(
                        y,
                        null,
                        O(
                          e.options,
                          (t) => (
                            a(),
                            l(
                              "option",
                              { key: t.id, value: t.value },
                              n(t.label),
                              9,
                              _,
                            )
                          ),
                        ),
                        128,
                      )),
                    ]),
                  ],
                  16,
                  Y,
                ),
                [[H, f.value]],
              ),
              p[1] ||
                (p[1] = r(
                  "div",
                  {
                    class:
                      "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
                  },
                  [
                    r(
                      "svg",
                      {
                        class: "h-4 w-4 text-gray-400",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                      },
                      [
                        r("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M19 9l-7 7-7-7",
                        }),
                      ],
                    ),
                  ],
                  -1,
                )),
            ]),
            b(e.$slots, "error", {}, () => [
              S.value.length > 0
                ? (a(),
                  l("div", ee, [
                    (a(!0),
                    l(
                      y,
                      null,
                      O(S.value, (t, j) => (a(), l("p", { key: j }, n(t), 1))),
                      128,
                    )),
                  ]))
                : h("", !0),
            ]),
          ],
          2,
        )
      );
    },
  });
i.__docgenInfo = {
  exportName: "default",
  displayName: "GenericSelect",
  description: "",
  tags: {},
  slots: [{ name: "label" }, { name: "options" }, { name: "error" }],
  sourceFiles: [
    "C:/leds-org/leds-conectafapes-biblioteca-componentes/src/components/GenericSelect/GenericSelect.vue",
  ],
};
const le = {
    title: "Components/GenericSelect",
    component: i,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: `
**GenericSelect** é um componente de select tipado com suporte a genéricos e slots.

- Suporta v-model com tipo genérico (string | number | undefined);
- Aceita props para opções, estado, placeholder, erros e classes;
- Permite customizar o label, opções e mensagens de erro via slots;
- Prop containerClass para estilização do container;
- Gerencia estados visuais como 'default', 'error', 'warning' e 'disabled'.
- Slots disponíveis:
  - \`label\`: substitui o texto do rótulo;
  - \`error\`: personaliza a exibição de mensagens de erro;
  - \`options\`: para layout personalizado das opções.

### Exemplos de uso:

\`\`\`vue
<GenericSelect
  v-model="selected"
  :options="[
    { id: '1', label: 'Opção 1', value: '1' },
    { id: '2', label: 'Opção 2', value: '2' }
  ]"
  label="Escolha uma opção"
  placeholder="Selecione..."
/>
\`\`\`
        `.trim(),
        },
        extractArgTypes: !1,
        extractComponentDescription: !1,
      },
    },
    argTypes: {
      modelValue: {
        control: "text",
        description: "Valor selecionado do select",
        table: { type: { summary: "string | number | undefined" } },
      },
      options: {
        control: "object",
        description: "Lista de opções para o select",
        table: { type: { summary: "selectOption<T>[]" } },
      },
      label: {
        control: "text",
        description: "Texto do label (ignorando se usar slot label)",
        table: { type: { summary: "string" } },
      },
      state: {
        control: { type: "select" },
        options: ["default", "error", "warning", "disabled"],
        description: "Estado visual do componente",
        table: {
          type: { summary: "selectState" },
          defaultValue: { summary: "default" },
        },
      },
      placeholder: {
        control: "text",
        description:
          "Texto do placeholder quando nenhuma opção está selecionada",
        table: {
          type: { summary: "string" },
          defaultValue: { summary: "Selecione uma opção" },
        },
      },
      containerClass: {
        control: "text",
        description: "Classes adicionais para o container",
        table: { type: { summary: "string | string[]" } },
      },
      errorMessages: {
        control: "text",
        description: "Mensagens de erro a serem exibidas",
        table: { type: { summary: "string | string[]" } },
      },
    },
  },
  c = {
    args: {
      modelValue: void 0,
      label: "Escolha uma opção",
      options: [
        { id: "opt1", label: "Opção 1", value: "1" },
        { id: "opt2", label: "Opção 2", value: "2" },
        { id: "opt3", label: "Opção 3", value: "3" },
      ],
      placeholder: "Selecione uma opção",
      state: "default",
      errorMessages: [],
    },
  },
  d = {
    render: () => ({
      components: { GenericSelect: i },
      template: `
      <GenericSelect
        v-model="selected"
        :options="options"
        placeholder="Selecione uma opção"
      >
        <template #label>
          <span style="font-weight: bold;">Selecione um valor personalizado</span>
        </template>
      </GenericSelect>
    `,
      data() {
        return {
          selected: "2",
          options: [
            { id: "1", label: "Opção 1", value: "1" },
            { id: "2", label: "Opção 2", value: "2" },
            { id: "3", label: "Opção 3", value: "3" },
          ],
        };
      },
    }),
    name: "Com Slot Label",
    parameters: {
      docs: {
        source: {
          code: `
<GenericSelect
  v-model="selected"
  :options="options"
  placeholder="Selecione uma opção"
>
  <template #label>
    <span style="font-weight: bold;">Selecione um valor personalizado</span>
  </template>
</GenericSelect>

<script setup>
import { ref } from 'vue'

const selected = ref('2')
const options = [
  { id: '1', label: 'Opção 1', value: '1' },
  { id: '2', label: 'Opção 2', value: '2' },
  { id: '3', label: 'Opção 3', value: '3' },
]
<\/script>
        `.trim(),
        },
      },
    },
  },
  u = {
    render: () => ({
      components: { GenericSelect: i },
      template: `
      <GenericSelect v-model="selected" :options="options">
        <template #options>
          <option disabled value="">{{ placeholder }}</option>
          <option
            v-for="option in options"
            :key="option.id"
            :value="option.value"
          >
            {{ option.label }} (customizado)
          </option>
        </template>
      </GenericSelect>
    `,
      data() {
        return {
          selected: "",
          placeholder: "Escolha algo",
          options: [
            { id: "1", label: "Opção 1", value: "1" },
            { id: "2", label: "Opção 2", value: "2" },
            { id: "3", label: "Opção 3", value: "3" },
          ],
        };
      },
    }),
    name: "Com Slot Options",
    parameters: {
      docs: {
        source: {
          code: `
<GenericSelect v-model="selected" :options="options">
  <template #options>
    <option disabled value="">{{ placeholder }}</option>
    <option
      v-for="option in options"
      :key="option.id"
      :value="option.value"
    >
      {{ option.label }} (customizado)
    </option>
  </template>
</GenericSelect>

<script setup>
import { ref } from 'vue'

const selected = ref('')
const placeholder = 'Escolha algo'
const options = [
  { id: '1', label: 'Opção 1', value: '1' },
  { id: '2', label: 'Opção 2', value: '2' },
  { id: '3', label: 'Opção 3', value: '3' },
]
<\/script>
      `.trim(),
        },
      },
    },
  },
  m = {
    render: () => ({
      components: { GenericSelect: i },
      template: `
      <GenericSelect
        v-model="selected"
        :options="options"
        state="error"
      >
        <template #error>
          <div style="color: red;">Erro personalizado via slot</div>
        </template>
      </GenericSelect>
    `,
      data() {
        return {
          selected: "",
          options: [
            { id: "1", label: "Opção 1", value: "1" },
            { id: "2", label: "Opção 2", value: "2" },
          ],
        };
      },
    }),
    name: "Com Slot Error",
    parameters: {
      docs: {
        source: {
          code: `
<GenericSelect
  v-model="selected"
  :options="options"
  state="error"
>
  <template #error>
    <div style="color: red;">Erro personalizado via slot</div>
  </template>
</GenericSelect>

<script setup>
import { ref } from 'vue'

const selected = ref('')
const options = [
  { id: '1', label: 'Opção 1', value: '1' },
  { id: '2', label: 'Opção 2', value: '2' },
]
<\/script>
      `.trim(),
        },
      },
    },
  };
var E, C, x;
c.parameters = {
  ...c.parameters,
  docs: {
    ...((E = c.parameters) == null ? void 0 : E.docs),
    source: {
      originalSource: `{
  args: {
    modelValue: undefined,
    label: 'Escolha uma opção',
    options: [
    // @ts-expect-error O Typescript junto com o Storybook não conseguem entender que o options tem um type genérico
    {
      id: 'opt1',
      label: 'Opção 1',
      value: '1'
    }, {
      id: 'opt2',
      label: 'Opção 2',
      value: '2'
    }, {
      id: 'opt3',
      label: 'Opção 3',
      value: '3'
    }] satisfies selectOption<string>[],
    placeholder: 'Selecione uma opção',
    state: 'default',
    errorMessages: []
  }
}`,
      ...((x = (C = c.parameters) == null ? void 0 : C.docs) == null
        ? void 0
        : x.source),
    },
  },
};
var z, k, w;
d.parameters = {
  ...d.parameters,
  docs: {
    ...((z = d.parameters) == null ? void 0 : z.docs),
    source: {
      originalSource: `{
  render: () => ({
    components: {
      GenericSelect
    },
    template: \`
      <GenericSelect
        v-model="selected"
        :options="options"
        placeholder="Selecione uma opção"
      >
        <template #label>
          <span style="font-weight: bold;">Selecione um valor personalizado</span>
        </template>
      </GenericSelect>
    \`,
    data() {
      return {
        selected: '2',
        options: [{
          id: '1',
          label: 'Opção 1',
          value: '1'
        }, {
          id: '2',
          label: 'Opção 2',
          value: '2'
        }, {
          id: '3',
          label: 'Opção 3',
          value: '3'
        }]
      };
    }
  }),
  name: 'Com Slot Label',
  parameters: {
    docs: {
      source: {
        code: \`
<GenericSelect
  v-model="selected"
  :options="options"
  placeholder="Selecione uma opção"
>
  <template #label>
    <span style="font-weight: bold;">Selecione um valor personalizado</span>
  </template>
</GenericSelect>

<script setup>
import { ref } from 'vue'

const selected = ref('2')
const options = [
  { id: '1', label: 'Opção 1', value: '1' },
  { id: '2', label: 'Opção 2', value: '2' },
  { id: '3', label: 'Opção 3', value: '3' },
]
<\/script>
        \`.trim()
      }
    }
  }
}`,
      ...((w = (k = d.parameters) == null ? void 0 : k.docs) == null
        ? void 0
        : w.source),
    },
  },
};
var M, V, T;
u.parameters = {
  ...u.parameters,
  docs: {
    ...((M = u.parameters) == null ? void 0 : M.docs),
    source: {
      originalSource: `{
  render: () => ({
    components: {
      GenericSelect
    },
    template: \`
      <GenericSelect v-model="selected" :options="options">
        <template #options>
          <option disabled value="">{{ placeholder }}</option>
          <option
            v-for="option in options"
            :key="option.id"
            :value="option.value"
          >
            {{ option.label }} (customizado)
          </option>
        </template>
      </GenericSelect>
    \`,
    data() {
      return {
        selected: '',
        placeholder: 'Escolha algo',
        options: [{
          id: '1',
          label: 'Opção 1',
          value: '1'
        }, {
          id: '2',
          label: 'Opção 2',
          value: '2'
        }, {
          id: '3',
          label: 'Opção 3',
          value: '3'
        }]
      };
    }
  }),
  name: 'Com Slot Options',
  parameters: {
    docs: {
      source: {
        code: \`
<GenericSelect v-model="selected" :options="options">
  <template #options>
    <option disabled value="">{{ placeholder }}</option>
    <option
      v-for="option in options"
      :key="option.id"
      :value="option.value"
    >
      {{ option.label }} (customizado)
    </option>
  </template>
</GenericSelect>

<script setup>
import { ref } from 'vue'

const selected = ref('')
const placeholder = 'Escolha algo'
const options = [
  { id: '1', label: 'Opção 1', value: '1' },
  { id: '2', label: 'Opção 2', value: '2' },
  { id: '3', label: 'Opção 3', value: '3' },
]
<\/script>
      \`.trim()
      }
    }
  }
}`,
      ...((T = (V = u.parameters) == null ? void 0 : V.docs) == null
        ? void 0
        : T.source),
    },
  },
};
var q, L, A;
m.parameters = {
  ...m.parameters,
  docs: {
    ...((q = m.parameters) == null ? void 0 : q.docs),
    source: {
      originalSource: `{
  render: () => ({
    components: {
      GenericSelect
    },
    template: \`
      <GenericSelect
        v-model="selected"
        :options="options"
        state="error"
      >
        <template #error>
          <div style="color: red;">Erro personalizado via slot</div>
        </template>
      </GenericSelect>
    \`,
    data() {
      return {
        selected: '',
        options: [{
          id: '1',
          label: 'Opção 1',
          value: '1'
        }, {
          id: '2',
          label: 'Opção 2',
          value: '2'
        }]
      };
    }
  }),
  name: 'Com Slot Error',
  parameters: {
    docs: {
      source: {
        code: \`
<GenericSelect
  v-model="selected"
  :options="options"
  state="error"
>
  <template #error>
    <div style="color: red;">Erro personalizado via slot</div>
  </template>
</GenericSelect>

<script setup>
import { ref } from 'vue'

const selected = ref('')
const options = [
  { id: '1', label: 'Opção 1', value: '1' },
  { id: '2', label: 'Opção 2', value: '2' },
]
<\/script>
      \`.trim()
      }
    }
  }
}`,
      ...((A = (L = m.parameters) == null ? void 0 : L.docs) == null
        ? void 0
        : A.source),
    },
  },
};
const ae = ["Default", "WithSlotLabel", "WithSlotOptions", "WithSlotError"];
export {
  c as Default,
  m as WithSlotError,
  d as WithSlotLabel,
  u as WithSlotOptions,
  ae as __namedExportsOrder,
  le as default,
};
