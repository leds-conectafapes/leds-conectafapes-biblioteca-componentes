import {
  d as _,
  l as D,
  p as M,
  q as N,
  u as q,
  b as s,
  e as l,
  s as B,
  v as T,
  x as i,
  y as E,
  m as P,
  t as F,
  f as I,
  k as O,
  z as U,
  o as m,
} from "./vue.esm-bundler-C6JmKcWh.js";
import { c as f } from "./cn-eKfGxdXH.js";
const Z = ["for"],
  $ = ["for"],
  e = _({
    inheritAttrs: !1,
    __name: "GenericCheckbox",
    props: D(
      { label: { default: "" }, containerClass: { default: () => [] } },
      { modelValue: {}, modelModifiers: {} },
    ),
    emits: ["update:modelValue"],
    setup(d) {
      const V = d,
        u = M(d, "modelValue"),
        S = N(),
        c = q(),
        p = s(() => c.id),
        b = s(() => !!S.label),
        w = s(() =>
          f(
            "w-5 h-5 appearance-none rounded-xs border-1 border-gray-500 cursor-pointer checked:border-0 checked:bg-primary-500",
            c.class,
          ),
        ),
        z = s(() => {
          const { ...o } = c;
          return o;
        });
      return (o, t) => (
        m(),
        l(
          "div",
          {
            class: O(
              U(f)(
                "group relative flex flex-row items-center gap-3 w-fit cursor-pointer select-none font-inter",
                V.containerClass,
              ),
            ),
          },
          [
            B(
              i(
                "input",
                P(z.value, {
                  "onUpdate:modelValue": t[0] || (t[0] = (L) => (u.value = L)),
                  type: "checkbox",
                  class: w.value,
                }),
                null,
                16,
              ),
              [[E, u.value]],
            ),
            b.value
              ? b.value
                ? (m(),
                  l(
                    "label",
                    { key: 1, for: p.value },
                    [I(o.$slots, "label")],
                    8,
                    $,
                  ))
                : T("", !0)
              : (m(), l("label", { key: 0, for: p.value }, F(o.label), 9, Z)),
            t[1] ||
              (t[1] = i(
                "svg",
                {
                  "pointer-events": "none",
                  width: "16",
                  height: "13",
                  viewBox: "0 0 16 13",
                  class:
                    "absolute left-1 size-3.5 hidden group-has-checked:block",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                [
                  i("path", {
                    d: "M4.75025 10.0402L1.56941 6.8594C1.21191 6.5019 0.634414 6.5019 0.276914 6.8594C-0.0805859 7.2169 -0.0805859 7.7944 0.276914 8.1519L4.10858 11.9836C4.46608 12.3411 5.04358 12.3411 5.40108 11.9836L15.0994 2.28523C15.4569 1.92773 15.4569 1.35023 15.0994 0.992734C14.7419 0.635234 14.1644 0.635234 13.8069 0.992734L4.75025 10.0402Z",
                    fill: "white",
                  }),
                ],
                -1,
              )),
          ],
          2,
        )
      );
    },
  });
e.__docgenInfo = {
  exportName: "default",
  displayName: "GenericCheckbox",
  description: "",
  tags: {},
  props: [
    { name: "label", defaultValue: { func: !1, value: "''" } },
    { name: "containerClass", defaultValue: { func: !1, value: "() => []" } },
  ],
  slots: [{ name: "label" }],
  sourceFiles: [
    "C:/leds-org/leds-conectafapes-biblioteca-componentes/src/components/GenericCheckbox/GenericCheckbox.vue",
  ],
};
const J = {
    title: "Components/GenericCheckbox",
    component: e,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component:
            '\n**GenericCheckbox** é um componente de input que aceita vários tipos de dados (`string`, `number`, `boolean` ou `undefined`).\n\n- Suporte a `v-model` genérico;\n- Todos os atributos nativos de `<input type="checkbox">`, incluindo `true-value` e `false-value` para valores customizados;\n- Prop `state`: `default` | `error` | `warning` | `disabled`;\n- Prop `label`;\n- Slots disponíveis:\n  - `label`: substitui o texto do rótulo;\n- Se `type="search"`, exibe ícone de busca e emite `@search` com o valor atual;\n\n### Exemplo\n\n```vue\n<GenericCheckbox\n  id="checkbox1"\n  v-model="selected"\n  true-value="sim"\n  false-value="não"\n  label="Aceito os termos"\n/>\n```\n\nNesse caso, `selected` será igual a `"sim"` quando marcado e `"não"` quando desmarcado.\n        '.trim(),
        },
        extractArgTypes: !1,
        extractComponentDescription: !1,
      },
    },
    argTypes: {
      modelValue: {
        control: "text",
        description: "Valor do checkbox (string, number, boolean ou undefined)",
        table: {
          type: { summary: "string | number | boolean | undefined" },
          defaultValue: { summary: "''" },
        },
      },
      label: {
        control: "text",
        description:
          "Texto do label do checkbox (ignorado se usar slot `label`)",
        table: { type: { summary: "string" }, defaultValue: { summary: "''" } },
      },
      containerClass: {
        control: "text",
        description: "Classe CSS customizada para o container do checkbox",
        table: { type: { summary: "string | string[]" } },
      },
    },
  },
  a = {
    render: () => ({
      components: { GenericCheckbox: e },
      data() {
        return { checked: !1 };
      },
      template: `
      <GenericCheckbox v-model="checked" label="Aceito os termos" />
    `,
    }),
    parameters: {
      docs: {
        source: {
          code: `
<GenericCheckbox v-model="checked" label="Aceito os termos" />

<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(false)
<\/script>
        `.trim(),
        },
      },
    },
  },
  r = {
    render: () => ({
      components: { GenericCheckbox: e },
      data() {
        return { selected: "não" };
      },
      template: `
      <GenericCheckbox
        v-model="selected"
        :true-value="'sim'"
        :false-value="'não'"
        label="Aceito os termos"
      />
    `,
    }),
    parameters: {
      docs: {
        source: {
          code: `
<GenericCheckbox
  v-model="selected"
  :true-value="'sim'"
  :false-value="'não'"
  label="Aceito os termos"
/>

<script setup lang="ts">
import { ref } from 'vue'
const selected = ref('não')
<\/script>
        `.trim(),
        },
      },
    },
  },
  n = {
    render: () => ({
      components: { GenericCheckbox: e },
      data() {
        return { checked: !1 };
      },
      template: `
      <GenericCheckbox v-model="checked" id="slot-checkbox">
        <template #label>
          <span class="text-sm font-bold">✔ Aceito os <em>termos</em> importantes</span>
        </template>
      </GenericCheckbox>
    `,
      name: "Com slot label",
    }),
    parameters: {
      docs: {
        source: {
          code: `
<GenericCheckbox v-model="checked" id="slot-checkbox">
  <template #label>
    <span class="text-sm font-bold">✔ Aceito os <em>termos</em> importantes</span>
  </template>
</GenericCheckbox>

<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(false)
<\/script>
        `.trim(),
        },
      },
    },
  };
var h, k, x;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((h = a.parameters) == null ? void 0 : h.docs),
    source: {
      originalSource: `{
  render: () => ({
    components: {
      GenericCheckbox
    },
    data() {
      return {
        checked: false
      };
    },
    template: \`
      <GenericCheckbox v-model="checked" label="Aceito os termos" />
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`
<GenericCheckbox v-model="checked" label="Aceito os termos" />

<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(false)
<\/script>
        \`.trim()
      }
    }
  }
}`,
      ...((x = (k = a.parameters) == null ? void 0 : k.docs) == null
        ? void 0
        : x.source),
    },
  },
};
var v, C, g;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((v = r.parameters) == null ? void 0 : v.docs),
    source: {
      originalSource: `{
  render: () => ({
    components: {
      GenericCheckbox
    },
    data() {
      return {
        selected: 'não'
      };
    },
    template: \`
      <GenericCheckbox
        v-model="selected"
        :true-value="'sim'"
        :false-value="'não'"
        label="Aceito os termos"
      />
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`
<GenericCheckbox
  v-model="selected"
  :true-value="'sim'"
  :false-value="'não'"
  label="Aceito os termos"
/>

<script setup lang="ts">
import { ref } from 'vue'
const selected = ref('não')
<\/script>
        \`.trim()
      }
    }
  }
}`,
      ...((g = (C = r.parameters) == null ? void 0 : C.docs) == null
        ? void 0
        : g.source),
    },
  },
};
var G, y, A;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((G = n.parameters) == null ? void 0 : G.docs),
    source: {
      originalSource: `{
  render: () => ({
    components: {
      GenericCheckbox
    },
    data() {
      return {
        checked: false
      };
    },
    template: \`
      <GenericCheckbox v-model="checked" id="slot-checkbox">
        <template #label>
          <span class="text-sm font-bold">✔ Aceito os <em>termos</em> importantes</span>
        </template>
      </GenericCheckbox>
    \`,
    name: 'Com slot label'
  }),
  parameters: {
    docs: {
      source: {
        code: \`
<GenericCheckbox v-model="checked" id="slot-checkbox">
  <template #label>
    <span class="text-sm font-bold">✔ Aceito os <em>termos</em> importantes</span>
  </template>
</GenericCheckbox>

<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(false)
<\/script>
        \`.trim()
      }
    }
  }
}`,
      ...((A = (y = n.parameters) == null ? void 0 : y.docs) == null
        ? void 0
        : A.source),
    },
  },
};
const K = ["Default", "ComValoresCustomizados", "ComSlotLabel"];
export {
  n as ComSlotLabel,
  r as ComValoresCustomizados,
  a as Default,
  K as __namedExportsOrder,
  J as default,
};
