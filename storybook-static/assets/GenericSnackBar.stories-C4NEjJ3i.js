import {
  d as F,
  u as W,
  b as k,
  G as J,
  w as K,
  H as P,
  I as R,
  x as s,
  j as f,
  J as U,
  T as q,
  K as Q,
  o as X,
  s as Y,
  m as Z,
  z as n,
  k as l,
  f as y,
  g as S,
  t as b,
  L as ee,
} from "./vue.esm-bundler-C6JmKcWh.js";
import { c as i } from "./cn-eKfGxdXH.js";
import { _ as x } from "./GenericIcon-DAnoHuMU.js";
import { _ as te } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const ae = {
    class: "fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-2",
  },
  re = {
    class: "flex flex-col justify-start w-full h-full text-base leading-normal",
  },
  N = F({
    __name: "GenericSnackBar",
    props: {
      variant: { default: "informative" },
      title: { default: "" },
      description: { default: "" },
      timeout: { default: 8e3 },
    },
    setup(r) {
      const e = r,
        H = W(),
        O = {
          informative: {
            style: {
              card: "border-slate-200 bg-white",
              icon: "text-gray-500",
              title: "text-gray-900",
              description: "text-gray-600",
            },
            icon: "info",
          },
          success: {
            style: {
              card: "border-slate-200 bg-white",
              icon: "text-emerald-500",
              title: "text-gray-900",
              description: "text-gray-600",
            },
            icon: "check_circle",
          },
          warning: {
            style: {
              card: "border-transparent bg-amber-300",
              icon: "text-zinc-900",
              title: "text-zinc-900",
              description: "text-zinc-900",
            },
            icon: "warning",
          },
          error: {
            style: {
              card: "border-transparent bg-red-700",
              icon: "text-white",
              title: "text-white",
              description: "text-white",
            },
            icon: "error",
          },
        },
        a = k(() => O[e.variant]),
        o = J(!0),
        j = () => {
          o.value = !1;
        },
        g = () => {
          setTimeout(() => {
            o.value = !1;
          }, e.timeout);
        };
      (K(
        () => e.timeout,
        () => {
          ((o.value = !0), !(e.timeout <= 0) && g());
        },
      ),
        P(() => {
          ((o.value = !0), !(e.timeout <= 0) && g());
        }));
      const $ = k(() => {
        const { ...c } = H;
        return c;
      });
      return (c, oe) => (
        X(),
        R(Q, { to: "body" }, [
          s("div", ae, [
            f(
              q,
              {
                appear: "",
                "enter-active-class": "transition duration-300",
                "enter-from-class": "opacity-0 translate-y-4",
                "enter-to-class": "opacity-100 translate-y-0",
                "leave-active-class": "transition duration-300",
                "leave-from-class": "opacity-100 translate-y-0",
                "leave-to-class": "opacity-0 translate-y-4",
              },
              {
                default: U(() => [
                  Y(
                    s(
                      "div",
                      Z($.value, {
                        class: n(i)(
                          "flex flex-row justify-between gap-x-4 w-full py-5 px-6 border rounded-lg shadow-lg shadow-zinc-600/10 text-base md:min-w-[420px] md:max-w-[700px] font-inter",
                          a.value.style.card,
                        ),
                      }),
                      [
                        f(
                          x,
                          {
                            id: "icon",
                            name: a.value.icon,
                            class: l(n(i)(a.value.style.icon)),
                            weight: 400,
                            filled: "",
                          },
                          null,
                          8,
                          ["name", "class"],
                        ),
                        s("div", re, [
                          s(
                            "span",
                            {
                              class: l(n(i)("font-bold", a.value.style.title)),
                            },
                            [
                              y(
                                c.$slots,
                                "title",
                                {},
                                () => [S(b(e.title), 1)],
                                !0,
                              ),
                            ],
                            2,
                          ),
                          s(
                            "span",
                            {
                              class: l(
                                n(i)("font-normal", a.value.style.description),
                              ),
                            },
                            [
                              y(
                                c.$slots,
                                "description",
                                {},
                                () => [S(b(e.description), 1)],
                                !0,
                              ),
                            ],
                            2,
                          ),
                        ]),
                        f(
                          x,
                          {
                            class: l(
                              n(i)(
                                "text-xl cursor-pointer select-none",
                                a.value.style.title,
                              ),
                            ),
                            name: "close",
                            weight: 400,
                            onClick: j,
                          },
                          null,
                          8,
                          ["class"],
                        ),
                      ],
                      16,
                    ),
                    [[ee, o.value]],
                  ),
                ]),
                _: 3,
              },
            ),
          ]),
        ])
      );
    },
  }),
  v = te(N, [["__scopeId", "data-v-929038f7"]]);
N.__docgenInfo = {
  exportName: "default",
  displayName: "GenericSnackBar",
  description: "",
  tags: {},
  props: [
    { name: "variant", defaultValue: { func: !1, value: "'informative'" } },
    { name: "title", defaultValue: { func: !1, value: "''" } },
    { name: "description", defaultValue: { func: !1, value: "''" } },
    { name: "timeout", defaultValue: { func: !1, value: "8000" } },
  ],
  slots: [{ name: "title" }, { name: "description" }],
  sourceFiles: [
    "C:/leds-org/leds-conectafapes-biblioteca-componentes/src/components/GenericSnackBar/GenericSnackBar.vue",
  ],
};
const le = {
    title: "Components/GenericSnackBar",
    component: v,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component:
            '\n**GenericSnackBar** é um componente de notificação (toast) posicionado no canto inferior direito da tela.\n\n- `variant`: tipo da notificação (informative, success, warning, error).\n- `title`: título principal da notificação.\n- `description`: descrição ou corpo da notificação.\n- `timeout`: tempo em milissegundos para o desaparecimento automático. Use `0` para não fechar automaticamente.\n- Slots:\n  - `title`: substitui o título por conteúdo customizado.\n  - `description`: substitui a descrição por conteúdo customizado.\n\n### Exemplo:\n\n```vue\n<GenericSnackBar title="Sucesso" description="Ação realizada com sucesso" variant="success" />\n```\n        '.trim(),
        },
        extractArgTypes: !1,
        extractComponentDescription: !1,
      },
    },
    argTypes: {
      title: { control: "text", description: "Título da notificação" },
      description: { control: "text", description: "Descrição da notificação" },
      variant: {
        control: { type: "select" },
        options: ["informative", "success", "warning", "error"],
        description: "Estilo visual do alerta",
      },
      timeout: {
        control: "number",
        description: "Tempo (ms) para desaparecer (0 = permanente)",
      },
    },
  },
  t = {
    render: (r) => ({
      components: { GenericSnackBar: v },
      data() {
        return { key: 0, localArgs: r };
      },
      methods: {
        show() {
          this.key++;
        },
      },
      template: `
      <div>
        <button @click="show" class="px-4 py-2 bg-blue-500 text-white rounded">Mostrar Snackbar</button>
        <GenericSnackBar v-if="key" v-bind="localArgs" :key="key" />
      </div>
    `,
    }),
    args: {
      title: "Aviso Informativo",
      description: "Esta é uma mensagem de informação.",
      variant: "informative",
      timeout: 8e3,
    },
    parameters: {
      docs: {
        source: {
          code: `
<GenericSnackBar variant="informative" title="Aviso Informativo" description="Esta é uma mensagem de informação." :timeout="8000" />
        `,
        },
      },
    },
  },
  d = {
    render: t.render,
    args: {
      title: "Sucesso!",
      description: "A operação foi realizada corretamente.",
      variant: "success",
      timeout: 5e3,
    },
    parameters: {
      docs: {
        source: {
          code: `
<GenericSnackBar variant="success" title="Sucesso!" description="A operação foi realizada corretamente." :timeout="5000" />
        `,
        },
      },
    },
  },
  m = {
    render: t.render,
    args: {
      title: "Atenção",
      description: "Algo pode estar errado.",
      variant: "warning",
      timeout: 0,
    },
    parameters: {
      docs: {
        source: {
          code: `
<GenericSnackBar variant="warning" title="Atenção" description="Algo pode estar errado." :timeout="0" />
        `,
        },
      },
    },
  },
  u = {
    render: t.render,
    args: {
      title: "Erro",
      description: "Ocorreu um problema inesperado.",
      variant: "error",
      timeout: 7e3,
    },
    parameters: {
      docs: {
        source: {
          code: `
<GenericSnackBar variant="error" title="Erro" description="Ocorreu um problema inesperado." :timeout="7000" />
        `,
        },
      },
    },
  },
  p = {
    render: (r) => ({
      components: { GenericSnackBar: v },
      data() {
        return { key: 0, localArgs: r };
      },
      methods: {
        show() {
          this.key++;
        },
      },
      template: `
      <div>
        <button @click="show" class="px-4 py-2 bg-blue-500 text-white rounded">Mostrar Snackbar</button>
        <GenericSnackBar v-if="key" v-bind="localArgs" :key="key">
          <template #title>
            <strong>Título Customizado</strong>
          </template>
          <template #description>
            <i>Mensagem detalhada com <u>HTML</u> customizado.</i>
          </template>
        </GenericSnackBar>
      </div>
    `,
    }),
    args: { variant: "success", timeout: 9e3 },
    name: "Com Slots Title e Description",
    parameters: {
      docs: {
        source: {
          code: `
<GenericSnackBar variant="success" :timeout="9000">
  <template #title>
    <strong>Título Customizado</strong>
  </template>
  <template #description>
    <i>Mensagem detalhada com <u>HTML</u> customizado.</i>
  </template>
</GenericSnackBar>
        `.trim(),
        },
      },
    },
  };
var h, w, B;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((h = t.parameters) == null ? void 0 : h.docs),
    source: {
      originalSource: `{
  render: args => ({
    components: {
      GenericSnackBar
    },
    data() {
      return {
        key: 0,
        localArgs: args
      };
    },
    methods: {
      show() {
        this.key++;
      }
    },
    template: \`
      <div>
        <button @click="show" class="px-4 py-2 bg-blue-500 text-white rounded">Mostrar Snackbar</button>
        <GenericSnackBar v-if="key" v-bind="localArgs" :key="key" />
      </div>
    \`
  }),
  args: {
    title: 'Aviso Informativo',
    description: 'Esta é uma mensagem de informação.',
    variant: 'informative',
    timeout: 8000
  },
  parameters: {
    docs: {
      source: {
        code: \`
<GenericSnackBar variant="informative" title="Aviso Informativo" description="Esta é uma mensagem de informação." :timeout="8000" />
        \`
      }
    }
  }
}`,
      ...((B = (w = t.parameters) == null ? void 0 : w.docs) == null
        ? void 0
        : B.source),
    },
  },
};
var A, G, _;
d.parameters = {
  ...d.parameters,
  docs: {
    ...((A = d.parameters) == null ? void 0 : A.docs),
    source: {
      originalSource: `{
  render: Informative.render,
  args: {
    title: 'Sucesso!',
    description: 'A operação foi realizada corretamente.',
    variant: 'success',
    timeout: 5000
  },
  parameters: {
    docs: {
      source: {
        code: \`
<GenericSnackBar variant="success" title="Sucesso!" description="A operação foi realizada corretamente." :timeout="5000" />
        \`
      }
    }
  }
}`,
      ...((_ = (G = d.parameters) == null ? void 0 : G.docs) == null
        ? void 0
        : _.source),
    },
  },
};
var z, T, C;
m.parameters = {
  ...m.parameters,
  docs: {
    ...((z = m.parameters) == null ? void 0 : z.docs),
    source: {
      originalSource: `{
  render: Informative.render,
  args: {
    title: 'Atenção',
    description: 'Algo pode estar errado.',
    variant: 'warning',
    timeout: 0
  },
  parameters: {
    docs: {
      source: {
        code: \`
<GenericSnackBar variant="warning" title="Atenção" description="Algo pode estar errado." :timeout="0" />
        \`
      }
    }
  }
}`,
      ...((C = (T = m.parameters) == null ? void 0 : T.docs) == null
        ? void 0
        : C.source),
    },
  },
};
var E, I, M;
u.parameters = {
  ...u.parameters,
  docs: {
    ...((E = u.parameters) == null ? void 0 : E.docs),
    source: {
      originalSource: `{
  render: Informative.render,
  args: {
    title: 'Erro',
    description: 'Ocorreu um problema inesperado.',
    variant: 'error',
    timeout: 7000
  },
  parameters: {
    docs: {
      source: {
        code: \`
<GenericSnackBar variant="error" title="Erro" description="Ocorreu um problema inesperado." :timeout="7000" />
        \`
      }
    }
  }
}`,
      ...((M = (I = u.parameters) == null ? void 0 : I.docs) == null
        ? void 0
        : M.source),
    },
  },
};
var V, D, L;
p.parameters = {
  ...p.parameters,
  docs: {
    ...((V = p.parameters) == null ? void 0 : V.docs),
    source: {
      originalSource: `{
  render: args => ({
    components: {
      GenericSnackBar
    },
    data() {
      return {
        key: 0,
        localArgs: args
      };
    },
    methods: {
      show() {
        this.key++;
      }
    },
    template: \`
      <div>
        <button @click="show" class="px-4 py-2 bg-blue-500 text-white rounded">Mostrar Snackbar</button>
        <GenericSnackBar v-if="key" v-bind="localArgs" :key="key">
          <template #title>
            <strong>Título Customizado</strong>
          </template>
          <template #description>
            <i>Mensagem detalhada com <u>HTML</u> customizado.</i>
          </template>
        </GenericSnackBar>
      </div>
    \`
  }),
  args: {
    variant: 'success',
    timeout: 9000
  },
  name: 'Com Slots Title e Description',
  parameters: {
    docs: {
      source: {
        code: \`
<GenericSnackBar variant="success" :timeout="9000">
  <template #title>
    <strong>Título Customizado</strong>
  </template>
  <template #description>
    <i>Mensagem detalhada com <u>HTML</u> customizado.</i>
  </template>
</GenericSnackBar>
        \`.trim()
      }
    }
  }
}`,
      ...((L = (D = p.parameters) == null ? void 0 : D.docs) == null
        ? void 0
        : L.source),
    },
  },
};
const de = ["Informative", "Success", "Warning", "Error", "CustomSlots"];
export {
  p as CustomSlots,
  u as Error,
  t as Informative,
  d as Success,
  m as Warning,
  de as __namedExportsOrder,
  le as default,
};
