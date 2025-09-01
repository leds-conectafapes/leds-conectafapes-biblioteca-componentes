import {
  d as j,
  l as F,
  p as $,
  q as I,
  u as U,
  b as r,
  e,
  v as f,
  x as l,
  t as i,
  z as O,
  f as G,
  F as _,
  A as V,
  k as H,
  o,
  s as J,
  B as K,
  m as Q,
} from "./vue.esm-bundler-C6JmKcWh.js";
import { c as A } from "./cn-eKfGxdXH.js";
const X = { key: 0 },
  Y = { class: "w-fit text-base font-medium font-inter" },
  Z = { key: 1 },
  ee = { key: 0, class: "flex flex-col gap-y-1" },
  oe = ["id", "value"],
  te = ["for"],
  ae = { key: 1 },
  se = { key: 2 },
  re = { class: "text-sm text-error-300" },
  le = { key: 0 },
  ie = { key: 1 },
  ne = { key: 3 },
  n = j({
    inheritAttrs: !1,
    __name: "GenericRadioGroup",
    props: F(
      {
        options: { default: () => [] },
        label: { default: "" },
        containerClass: { default: () => [] },
        errorMessages: { default: () => [] },
      },
      { modelValue: {}, modelModifiers: {} },
    ),
    emits: ["update:modelValue"],
    setup(y) {
      const t = y,
        g = $(y, "modelValue"),
        m = I(),
        v = U(),
        R = r(() => !!m.options),
        S = r(() => !!m.error),
        x = r(() => !!m.label),
        q = r(() => A("accent-primary-500 h-5 w-5", v.class)),
        P = r(() => {
          const { ...s } = v;
          return s;
        });
      return (s, h) => (
        o(),
        e(
          "div",
          { class: H(O(A)("w-full gap-y-2 flex flex-col", t.containerClass)) },
          [
            !x.value && t.label !== ""
              ? (o(),
                e("div", X, [
                  l("label", Y, i(t.label) + i(O(v).required ? "*" : ""), 1),
                ]))
              : x.value
                ? (o(), e("div", Z, [G(s.$slots, "label")]))
                : f("", !0),
            l("div", null, [
              R.value
                ? R.value
                  ? (o(), e("div", ae, [G(s.$slots, "options")]))
                  : f("", !0)
                : (o(),
                  e("div", ee, [
                    (o(!0),
                    e(
                      _,
                      null,
                      V(
                        t.options,
                        (a) => (
                          o(),
                          e(
                            "div",
                            { key: a.id, class: "flex flex-row gap-x-2" },
                            [
                              J(
                                l(
                                  "input",
                                  Q({ ref_for: !0 }, P.value, {
                                    id: a.id,
                                    "onUpdate:modelValue":
                                      h[0] || (h[0] = (b) => (g.value = b)),
                                    value: a.value,
                                    class: q.value,
                                    type: "radio",
                                  }),
                                  null,
                                  16,
                                  oe,
                                ),
                                [[K, g.value]],
                              ),
                              l(
                                "label",
                                {
                                  for: a.id,
                                  class: "text-base font-inter font-medium",
                                },
                                i(a.label),
                                9,
                                te,
                              ),
                            ],
                          )
                        ),
                      ),
                      128,
                    )),
                  ])),
            ]),
            !S.value && t.errorMessages.length > 0
              ? (o(),
                e("div", se, [
                  l("div", re, [
                    Array.isArray(t.errorMessages)
                      ? (o(),
                        e("div", le, [
                          (o(!0),
                          e(
                            _,
                            null,
                            V(
                              t.errorMessages,
                              (a, b) => (o(), e("p", { key: b }, i(a), 1)),
                            ),
                            128,
                          )),
                        ]))
                      : (o(), e("div", ie, i(t.errorMessages), 1)),
                  ]),
                ]))
              : S.value
                ? (o(), e("div", ne, [G(s.$slots, "error")]))
                : f("", !0),
          ],
          2,
        )
      );
    },
  });
n.__docgenInfo = {
  exportName: "default",
  displayName: "GenericRadioGroup",
  description: "",
  tags: {},
  props: [
    { name: "options", defaultValue: { func: !1, value: "() => []" } },
    { name: "label", defaultValue: { func: !1, value: "''" } },
    { name: "containerClass", defaultValue: { func: !1, value: "() => []" } },
    { name: "errorMessages", defaultValue: { func: !1, value: "() => []" } },
  ],
  slots: [{ name: "label" }, { name: "options" }, { name: "error" }],
  sourceFiles: [
    "C:/leds-org/leds-conectafapes-biblioteca-componentes/src/components/GenericRadioGroup/GenericRadioGroup.vue",
  ],
};
const ce = {
    title: "Components/GenericRadioGroup",
    component: n,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component:
            "\n**GenericRadioGroup** é um componente de grupo de botões de rádio tipado com suporte a genéricos.\n\n- Suporta `v-model` com tipo genérico (string | number | undefined);\n- Aceita todos os atributos nativos de `<input type=\"radio\">` (como `name`, `disabled`, `required`, etc);\n- Prop `label` para texto do rótulo (pode ser substituído via slot `label`);\n- Prop `options` para lista de opções com `id`, `label` e `value`;\n- Prop `errorMessages` para mensagens de erro, ou slot `error` para renderização customizada;\n- Slots disponíveis:\n  - `label`: substitui o texto do rótulo;\n  - `error`: personaliza a exibição de mensagens de erro;\n  - `options`: para layout personalizado das opções.\n\n### Exemplo:\n\n```vue\n<GenericRadioGroup\n  v-model=\"value\"\n  :options=\"[\n    { id: 'opt1', label: 'Sim', value: 'yes' },\n    { id: 'opt2', label: 'Não', value: 'no' }\n  ]\"\n  label=\"Deseja receber notificações?\"\n/>\n```\n        ".trim(),
        },
        extractArgTypes: !1,
        extractComponentDescription: !1,
      },
    },
    argTypes: {
      modelValue: {
        control: "text",
        description: "Valor selecionado do grupo",
        table: { type: { summary: "string | number | undefined" } },
      },
      label: {
        control: "text",
        description: "Texto do label (ignorado se usar slot `label`)",
        table: { type: { summary: "string" } },
      },
      options: {
        control: "object",
        description: "Lista de opções para renderização",
        table: { type: { summary: "radioGroupOptions<T>[]" } },
      },
      errorMessages: {
        control: "text",
        description: "Mensagem(s) de erro (string ou array de strings)",
        table: { type: { summary: "string | string[]" } },
      },
      containerClass: {
        control: "text",
        description: "Classe(s) adicionais para o container",
        table: { type: { summary: "string | string[]" } },
      },
    },
  },
  p = {
    args: {
      modelValue: "yes",
      label: "Você aceita os termos?",
      options: [
        { id: "yes", label: "Sim", value: "yes" },
        { id: "no", label: "Não", value: "no" },
      ],
    },
    parameters: {
      docs: {
        source: {
          code: `
<GenericRadioGroup
  v-model="selected"
  :options="[
    { id: 'yes', label: 'Sim', value: 'yes' },
    { id: 'no', label: 'Não', value: 'no' }
  ]"
  label="Você aceita os termos?"
/>

<script setup>
import { ref } from 'vue'
const selected = ref('yes')
<\/script>
        `.trim(),
        },
      },
    },
  },
  d = {
    render: () => ({
      components: { GenericRadioGroup: n },
      template: `
      <GenericRadioGroup
        v-model="selected"
        :options="[
          { id: '1', label: 'Opção A', value: 'A' },
          { id: '2', label: 'Opção B', value: 'B' }
        ]"
      >
        <template #error>
          <div style="color: red;">Erro via slot personalizado</div>
        </template>
      </GenericRadioGroup>
    `,
      data() {
        return { selected: "A" };
      },
    }),
    name: "Com Slot Erro",
    parameters: {
      docs: {
        source: {
          code: `
<GenericRadioGroup v-model="selected" :options="options">
  <template #error>
    <div style="color: red;">Erro via slot personalizado</div>
  </template>
</GenericRadioGroup>

<script setup>
import { ref } from 'vue'
const selected = ref('A')
const options = [
  { id: '1', label: 'Opção A', value: 'A' },
  { id: '2', label: 'Opção B', value: 'B' },
]
<\/script>
        `.trim(),
        },
      },
    },
  },
  c = {
    render: () => ({
      components: { GenericRadioGroup: n },
      template: `
      <GenericRadioGroup
        v-model="selected"
        :options="[
          { id: 'sim', label: 'Sim', value: 'yes' },
          { id: 'nao', label: 'Não', value: 'no' }
        ]"
      >
        <template #label>
          <span style="font-weight: bold;">Você aceita os termos de uso?</span>
        </template>
      </GenericRadioGroup>
    `,
      data() {
        return { selected: "yes" };
      },
    }),
    name: "Com Slot Label",
    parameters: {
      docs: {
        source: {
          code: `
<GenericRadioGroup v-model="selected" :options="options">
  <template #label>
    <span style="font-weight: bold;">Você aceita os termos de uso?</span>
  </template>
</GenericRadioGroup>

<script setup>
import { ref } from 'vue'
const selected = ref('yes')
const options = [
  { id: 'sim', label: 'Sim', value: 'yes' },
  { id: 'nao', label: 'Não', value: 'no' },
]
<\/script>
        `.trim(),
        },
      },
    },
  },
  u = {
    render: () => ({
      components: { GenericRadioGroup: n },
      template: `
      <GenericRadioGroup v-model="selected" :options="options">
        <template #options>
          <div v-for="option in options" :key="option.id" class="flex items-center gap-2 mb-2">
            <input
              :id="option.id"
              type="radio"
              :value="option.value"
              v-model="selected"
              class="accent-primary-500 h-5 w-5"
            />
            <label :for="option.id" class="text-base font-inter font-medium">
              {{ option.label }}
            </label>
          </div>
        </template>
      </GenericRadioGroup>
    `,
      data() {
        return {
          selected: "op2",
          options: [
            { id: "op1", label: "Opção 1", value: "op1" },
            { id: "op2", label: "Opção 2", value: "op2" },
            { id: "op3", label: "Opção 3", value: "op3" },
          ],
        };
      },
    }),
    name: "Com Slot Options",
    parameters: {
      docs: {
        source: {
          code: `
<GenericRadioGroup v-model="selected" :options="options">
  <template #options>
    <div v-for="option in options" :key="option.id" class="flex items-center gap-2 mb-2">
      <input
        :id="option.id"
        type="radio"
        :value="option.value"
        v-model="selected"
        class="accent-primary-500 h-5 w-5"
      />
      <label :for="option.id" class="text-base font-inter font-medium">
        {{ option.label }}
      </label>
    </div>
  </template>
</GenericRadioGroup>

<script setup>
import { ref } from 'vue'
const selected = ref('op2')
const options = [
  { id: 'op1', label: 'Opção 1', value: 'op1' },
  { id: 'op2', label: 'Opção 2', value: 'op2' },
  { id: 'op3', label: 'Opção 3', value: 'op3' },
]
<\/script>
        `.trim(),
        },
      },
    },
  };
var k, C, w;
p.parameters = {
  ...p.parameters,
  docs: {
    ...((k = p.parameters) == null ? void 0 : k.docs),
    source: {
      originalSource: `{
  args: {
    modelValue: 'yes',
    label: 'Você aceita os termos?',
    options: [
    // @ts-expect-error O Typescript junto com o Storybook não conseguem entender que o radioGroupOptions tem um type genérico
    {
      id: 'yes',
      label: 'Sim',
      value: 'yes'
    }, {
      id: 'no',
      label: 'Não',
      value: 'no'
    }] satisfies radioGroupOptions<string>[]
  },
  parameters: {
    docs: {
      source: {
        code: \`
<GenericRadioGroup
  v-model="selected"
  :options="[
    { id: 'yes', label: 'Sim', value: 'yes' },
    { id: 'no', label: 'Não', value: 'no' }
  ]"
  label="Você aceita os termos?"
/>

<script setup>
import { ref } from 'vue'
const selected = ref('yes')
<\/script>
        \`.trim()
      }
    }
  }
}`,
      ...((w = (C = p.parameters) == null ? void 0 : C.docs) == null
        ? void 0
        : w.source),
    },
  },
};
var M, N, B;
d.parameters = {
  ...d.parameters,
  docs: {
    ...((M = d.parameters) == null ? void 0 : M.docs),
    source: {
      originalSource: `{
  render: () => ({
    components: {
      GenericRadioGroup
    },
    template: \`
      <GenericRadioGroup
        v-model="selected"
        :options="[
          { id: '1', label: 'Opção A', value: 'A' },
          { id: '2', label: 'Opção B', value: 'B' }
        ]"
      >
        <template #error>
          <div style="color: red;">Erro via slot personalizado</div>
        </template>
      </GenericRadioGroup>
    \`,
    data() {
      return {
        selected: 'A'
      };
    }
  }),
  name: 'Com Slot Erro',
  parameters: {
    docs: {
      source: {
        code: \`
<GenericRadioGroup v-model="selected" :options="options">
  <template #error>
    <div style="color: red;">Erro via slot personalizado</div>
  </template>
</GenericRadioGroup>

<script setup>
import { ref } from 'vue'
const selected = ref('A')
const options = [
  { id: '1', label: 'Opção A', value: 'A' },
  { id: '2', label: 'Opção B', value: 'B' },
]
<\/script>
        \`.trim()
      }
    }
  }
}`,
      ...((B = (N = d.parameters) == null ? void 0 : N.docs) == null
        ? void 0
        : B.source),
    },
  },
};
var E, z, L;
c.parameters = {
  ...c.parameters,
  docs: {
    ...((E = c.parameters) == null ? void 0 : E.docs),
    source: {
      originalSource: `{
  render: () => ({
    components: {
      GenericRadioGroup
    },
    template: \`
      <GenericRadioGroup
        v-model="selected"
        :options="[
          { id: 'sim', label: 'Sim', value: 'yes' },
          { id: 'nao', label: 'Não', value: 'no' }
        ]"
      >
        <template #label>
          <span style="font-weight: bold;">Você aceita os termos de uso?</span>
        </template>
      </GenericRadioGroup>
    \`,
    data() {
      return {
        selected: 'yes'
      };
    }
  }),
  name: 'Com Slot Label',
  parameters: {
    docs: {
      source: {
        code: \`
<GenericRadioGroup v-model="selected" :options="options">
  <template #label>
    <span style="font-weight: bold;">Você aceita os termos de uso?</span>
  </template>
</GenericRadioGroup>

<script setup>
import { ref } from 'vue'
const selected = ref('yes')
const options = [
  { id: 'sim', label: 'Sim', value: 'yes' },
  { id: 'nao', label: 'Não', value: 'no' },
]
<\/script>
        \`.trim()
      }
    }
  }
}`,
      ...((L = (z = c.parameters) == null ? void 0 : z.docs) == null
        ? void 0
        : L.source),
    },
  },
};
var D, W, T;
u.parameters = {
  ...u.parameters,
  docs: {
    ...((D = u.parameters) == null ? void 0 : D.docs),
    source: {
      originalSource: `{
  render: () => ({
    components: {
      GenericRadioGroup
    },
    template: \`
      <GenericRadioGroup v-model="selected" :options="options">
        <template #options>
          <div v-for="option in options" :key="option.id" class="flex items-center gap-2 mb-2">
            <input
              :id="option.id"
              type="radio"
              :value="option.value"
              v-model="selected"
              class="accent-primary-500 h-5 w-5"
            />
            <label :for="option.id" class="text-base font-inter font-medium">
              {{ option.label }}
            </label>
          </div>
        </template>
      </GenericRadioGroup>
    \`,
    data() {
      return {
        selected: 'op2',
        options: [{
          id: 'op1',
          label: 'Opção 1',
          value: 'op1'
        }, {
          id: 'op2',
          label: 'Opção 2',
          value: 'op2'
        }, {
          id: 'op3',
          label: 'Opção 3',
          value: 'op3'
        }]
      };
    }
  }),
  name: 'Com Slot Options',
  parameters: {
    docs: {
      source: {
        code: \`
<GenericRadioGroup v-model="selected" :options="options">
  <template #options>
    <div v-for="option in options" :key="option.id" class="flex items-center gap-2 mb-2">
      <input
        :id="option.id"
        type="radio"
        :value="option.value"
        v-model="selected"
        class="accent-primary-500 h-5 w-5"
      />
      <label :for="option.id" class="text-base font-inter font-medium">
        {{ option.label }}
      </label>
    </div>
  </template>
</GenericRadioGroup>

<script setup>
import { ref } from 'vue'
const selected = ref('op2')
const options = [
  { id: 'op1', label: 'Opção 1', value: 'op1' },
  { id: 'op2', label: 'Opção 2', value: 'op2' },
  { id: 'op3', label: 'Opção 3', value: 'op3' },
]
<\/script>
        \`.trim()
      }
    }
  }
}`,
      ...((T = (W = u.parameters) == null ? void 0 : W.docs) == null
        ? void 0
        : T.source),
    },
  },
};
const ue = ["Default", "WithSlotError", "WithSlotLabel", "WithSlotOptions"];
export {
  p as Default,
  d as WithSlotError,
  c as WithSlotLabel,
  u as WithSlotOptions,
  ue as __namedExportsOrder,
  ce as default,
};
