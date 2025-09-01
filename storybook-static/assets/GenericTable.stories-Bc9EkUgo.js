import {
  d as X,
  b as v,
  e as r,
  j as p,
  J as A,
  F as m,
  A as P,
  o as t,
  I as f,
  G as Y,
  w as ee,
  x as u,
  v as T,
  t as x,
  g as D,
  f as q,
  M as j,
  h as E,
} from "./vue.esm-bundler-C6JmKcWh.js";
import { _ as S } from "./GenericCompactButton-BoOXS8W6.js";
import { _ as $ } from "./GenericButton-oXdqNmC8.js";
import { _ as R } from "./GenericIcon-DAnoHuMU.js";
import { G as B } from "./GenericTooltip-5F5uyFZ2.js";
import "./cn-eKfGxdXH.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
const te = {
    class: "flex w-fit border border-gray-300 rounded-lg overflow-hidden",
  },
  Z = X({
    __name: "GenericPagination",
    props: { totalItems: {}, itemsPerPage: {}, modelValue: {} },
    emits: ["update:modelValue", "change"],
    setup(i, { emit: g }) {
      const c = g;
      function y(s) {
        (c("update:modelValue", s), c("change", s));
      }
      const l = v(() => Math.ceil(i.totalItems / i.itemsPerPage) || 1);
      function h(s) {
        typeof s == "number" && s !== i.modelValue && y(s);
      }
      function G() {
        i.modelValue > 1 && y(i.modelValue - 1);
      }
      function F() {
        i.modelValue < l.value && y(i.modelValue + 1);
      }
      function L(s) {
        const d = l.value,
          e = [];
        if (d <= 5) for (let o = 1; o <= d; o++) e.push(o);
        else
          s <= 3
            ? e.push(1, 2, 3, 4, 5, "...", d)
            : s >= d - 2
              ? e.push(1, "...", d - 4, d - 3, d - 2, d - 1, d)
              : e.push(1, "...", s - 1, s, s + 1, "...", d);
        return e;
      }
      const b = v(() => L(i.modelValue));
      return (s, d) => (
        t(),
        r("div", te, [
          p(
            $,
            {
              variant: s.modelValue > 1 ? "secondary" : "disabled",
              class: "h-10 w-10 rounded-none",
              "aria-label": "Página anterior",
              onClick: G,
            },
            {
              label: A(() => [
                p(R, {
                  name: "chevron_left",
                  variant: "rounded",
                  class: "text-2xl",
                }),
              ]),
              _: 1,
            },
            8,
            ["variant"],
          ),
          (t(!0),
          r(
            m,
            null,
            P(
              b.value,
              (e, o) => (
                t(),
                f(
                  $,
                  {
                    key: o,
                    label: e.toString(),
                    variant: e === s.modelValue ? "primary" : "secondary",
                    class: "h-10 w-10 rounded-none",
                    disabled: e === "...",
                    onClick: (n) => h(e),
                  },
                  null,
                  8,
                  ["label", "variant", "disabled", "onClick"],
                )
              ),
            ),
            128,
          )),
          p(
            $,
            {
              variant: s.modelValue < l.value ? "secondary" : "disabled",
              class: "h-10 w-10 rounded-none",
              "aria-label": "Próxima página",
              onClick: F,
            },
            {
              label: A(() => [
                p(R, {
                  name: "chevron_right",
                  variant: "rounded",
                  class: "text-2xl",
                }),
              ]),
              _: 1,
            },
            8,
            ["variant"],
          ),
        ])
      );
    },
  });
Z.__docgenInfo = {
  exportName: "default",
  displayName: "GenericPagination",
  description: "",
  tags: {},
  props: [
    { name: "totalItems", required: !0, type: { name: "number" } },
    { name: "itemsPerPage", required: !0, type: { name: "number" } },
    { name: "modelValue", required: !0, type: { name: "number" } },
  ],
  events: [
    { name: "update:modelValue", type: { names: ["number"] } },
    { name: "change", type: { names: ["number"] } },
  ],
  sourceFiles: [
    "C:/leds-org/leds-conectafapes-biblioteca-componentes/src/components/GenericPagination/GenericPagination.vue",
  ],
};
const ae = { class: "flex flex-col border-zinc-300 border rounded-lg" },
  ne = { key: 0, class: "flex items-center justify-center py-12" },
  ie = { key: 1 },
  re = { class: "table-auto w-full" },
  se = {
    class:
      "border-b bg-zinc-100 border-zinc-300 gap-x-2 text-zinc-800 leading-tight rounded-t-lg",
  },
  oe = {
    key: 0,
    class: "text-left font-semibold text-base rounded-t-lg font-inter",
  },
  le = {
    key: 1,
    class:
      "px-5 py-4 text-left font-semibold text-base rounded-t-lg font-inter",
  },
  de = {
    key: 0,
    class:
      "px-5 py-4 text-left font-semibold text-base rounded-t-lg font-inter",
  },
  ce = { class: "border-b border-zinc-300" },
  ue = { key: 0, class: "bg-white rounded-lg px-5 py-4" },
  me = { class: "flex gap-x-2 items-center justify-start" },
  pe = { key: 1, class: "bg-white rounded-lg px-5 py-4" },
  ge = { class: "flex gap-x-2 items-center justify-start" },
  ye = { key: 0, class: "flex items-center justify-center py-12" },
  ke = { class: "text-gray-500" },
  be = { key: 1, class: "flex items-center justify-between py-4 px-5" },
  fe = { class: "text-sm text-zinc-700 leading-tight font-inter" },
  ve = { class: "font-bold" },
  he = { class: "font-bold" },
  w = X({
    __name: "GenericTable",
    props: {
      columns: {},
      data: {},
      page: {},
      itemsPerPage: {},
      totalItems: {},
      actions: { default: () => [] },
      loading: { type: Boolean, default: !1 },
      emptyText: { default: "Nenhum resultado encontrado" },
    },
    emits: ["update:page", "changePage"],
    setup(i, { emit: g }) {
      const c = g;
      function y(e) {
        c("changePage", e);
      }
      const l = Y(i.page ?? 1);
      ee(
        () => i.page,
        (e) => {
          e && (l.value = e);
        },
      );
      function h(e) {
        ((l.value = e), c("update:page", e));
      }
      const G = v(() => {
        if (i.itemsPerPage && i.totalItems) {
          const e = i.itemsPerPage * l.value;
          return e < i.totalItems ? e : i.totalItems;
        }
      });
      function F(e) {
        return `cell-${e.key}`;
      }
      function L(e) {
        return {
          icon:
            e.type === "custom"
              ? e.icon
              : e.type === "view"
                ? "visibility"
                : e.type,
          variant: e.variant ?? "default",
          ...e,
        };
      }
      const b = v(() => i.actions.map((e) => L(e))),
        s = v(() => i.data.some((e) => e.hasOwnProperty("actions"))),
        d = v(() =>
          i.data.map((e) => {
            if (e.hasOwnProperty("render") && typeof e.render != "function")
              throw new TypeError(
                `Linha de dados passados a GenericTable possui 'render' que não é função:
` + JSON.stringify(e),
              );
            const o = e.hasOwnProperty("actions");
            if (o && !Array.isArray(e.actions))
              throw new TypeError(
                `Linha de dados passados a GenericTable possui 'actions' que não é array:
` + JSON.stringify(e),
              );
            const n = s.value
              ? o
                ? e.actions.map((k) => L(k))
                : []
              : b.value.length > 0
                ? b.value
                : void 0;
            return { ...e, render: e.render, actions: n };
          }),
        );
      return (e, o) => (
        t(),
        r("div", ae, [
          e.loading
            ? (t(),
              r(
                "div",
                ne,
                o[0] ||
                  (o[0] = [
                    u(
                      "div",
                      { class: "text-gray-500 font-inter" },
                      " Carregando... ",
                      -1,
                    ),
                  ]),
              ))
            : (t(),
              r("div", ie, [
                u("table", re, [
                  u("thead", null, [
                    u("tr", se, [
                      (t(!0),
                      r(
                        m,
                        null,
                        P(
                          e.columns,
                          (n) => (
                            t(),
                            r(
                              m,
                              { key: n.key },
                              [
                                n.tooltip
                                  ? (t(),
                                    r("th", oe, [
                                      p(
                                        B,
                                        {
                                          text: n.tooltip,
                                          class: "px-5 py-4 w-full",
                                        },
                                        {
                                          default: A(() => [
                                            D(x(n.title) + " ", 1),
                                            p(R, {
                                              class:
                                                "text-primary-500 text-xl leading-tight relative ml-1 top-1",
                                              name: "info",
                                              weight: 400,
                                            }),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ["text"],
                                      ),
                                    ]))
                                  : (t(), r("th", le, x(n.title), 1)),
                              ],
                              64,
                            )
                          ),
                        ),
                        128,
                      )),
                      s.value || b.value.length > 0
                        ? (t(), r("th", de, " Ações "))
                        : T("", !0),
                    ]),
                  ]),
                  u("tbody", null, [
                    (t(!0),
                    r(
                      m,
                      null,
                      P(d.value, (n, k) =>
                        q(
                          e.$slots,
                          "row",
                          { key: k, rowData: n, rowIndex: k },
                          () => [
                            u("tr", ce, [
                              q(
                                e.$slots,
                                "cell",
                                { rowData: n, rowIndex: k },
                                () => [
                                  (t(!0),
                                  r(
                                    m,
                                    null,
                                    P(
                                      e.columns,
                                      (a, N) => (
                                        t(),
                                        r(
                                          "td",
                                          {
                                            key: N,
                                            class:
                                              "text-zinc-600 leading-relaxed text-sm px-5 py-4 bg-white rounded-lg font-inter",
                                          },
                                          [
                                            a.render
                                              ? (t(),
                                                f(
                                                  j(
                                                    a.render(
                                                      n[a.key],
                                                      n,
                                                      a.key,
                                                      k,
                                                    ),
                                                  ),
                                                  { key: 0 },
                                                ))
                                              : q(
                                                  e.$slots,
                                                  F(a),
                                                  {
                                                    key: 1,
                                                    rowData: n,
                                                    rowIndex: k,
                                                    cellData: n[a.key],
                                                  },
                                                  () => [
                                                    n.render
                                                      ? (t(),
                                                        f(
                                                          j(
                                                            n.render(
                                                              n[a.key],
                                                              n,
                                                              a.key,
                                                              k,
                                                            ),
                                                          ),
                                                          { key: 0 },
                                                        ))
                                                      : (t(),
                                                        r(
                                                          m,
                                                          { key: 1 },
                                                          [D(x(n[a.key]), 1)],
                                                          64,
                                                        )),
                                                  ],
                                                ),
                                          ],
                                        )
                                      ),
                                    ),
                                    128,
                                  )),
                                ],
                              ),
                              s.value
                                ? (t(),
                                  r("td", ue, [
                                    u("div", me, [
                                      (t(!0),
                                      r(
                                        m,
                                        null,
                                        P(
                                          n.actions,
                                          (a, N) => (
                                            t(),
                                            r(
                                              m,
                                              { key: N },
                                              [
                                                a.tooltip
                                                  ? (t(),
                                                    f(
                                                      B,
                                                      {
                                                        key: 0,
                                                        text: a.tooltip,
                                                      },
                                                      {
                                                        default: A(() => [
                                                          p(
                                                            S,
                                                            {
                                                              icon: a.icon,
                                                              variant:
                                                                a.variant,
                                                              onClick: (V) =>
                                                                a.onClick(n),
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                              "icon",
                                                              "variant",
                                                              "onClick",
                                                            ],
                                                          ),
                                                        ]),
                                                        _: 2,
                                                      },
                                                      1032,
                                                      ["text"],
                                                    ))
                                                  : (t(),
                                                    f(
                                                      S,
                                                      {
                                                        key: 1,
                                                        icon: a.icon,
                                                        variant: a.variant,
                                                        onClick: (V) =>
                                                          a.onClick(n),
                                                      },
                                                      null,
                                                      8,
                                                      [
                                                        "icon",
                                                        "variant",
                                                        "onClick",
                                                      ],
                                                    )),
                                              ],
                                              64,
                                            )
                                          ),
                                        ),
                                        128,
                                      )),
                                    ]),
                                  ]))
                                : b.value.length > 0
                                  ? (t(),
                                    r("td", pe, [
                                      u("div", ge, [
                                        (t(!0),
                                        r(
                                          m,
                                          null,
                                          P(
                                            b.value,
                                            (a, N) => (
                                              t(),
                                              r(
                                                m,
                                                { key: N },
                                                [
                                                  a.tooltip
                                                    ? (t(),
                                                      f(
                                                        B,
                                                        {
                                                          key: 0,
                                                          text: a.tooltip,
                                                        },
                                                        {
                                                          default: A(() => [
                                                            p(
                                                              S,
                                                              {
                                                                icon: a.icon,
                                                                variant:
                                                                  a.variant,
                                                                onClick: (V) =>
                                                                  a.onClick(n),
                                                              },
                                                              null,
                                                              8,
                                                              [
                                                                "icon",
                                                                "variant",
                                                                "onClick",
                                                              ],
                                                            ),
                                                          ]),
                                                          _: 2,
                                                        },
                                                        1032,
                                                        ["text"],
                                                      ))
                                                    : (t(),
                                                      f(
                                                        S,
                                                        {
                                                          key: 1,
                                                          icon: a.icon,
                                                          variant: a.variant,
                                                          onClick: (V) =>
                                                            a.onClick(n),
                                                        },
                                                        null,
                                                        8,
                                                        [
                                                          "icon",
                                                          "variant",
                                                          "onClick",
                                                        ],
                                                      )),
                                                ],
                                                64,
                                              )
                                            ),
                                          ),
                                          128,
                                        )),
                                      ]),
                                    ]))
                                  : T("", !0),
                            ]),
                          ],
                        ),
                      ),
                      128,
                    )),
                  ]),
                ]),
                e.data.length === 0
                  ? (t(), r("div", ye, [u("span", ke, x(e.emptyText), 1)]))
                  : T("", !0),
                e.itemsPerPage && e.totalItems
                  ? (t(),
                    r("div", be, [
                      u("span", fe, [
                        u("a", ve, x(G.value), 1),
                        o[1] || (o[1] = D(" de ")),
                        u("a", he, x(e.totalItems), 1),
                        o[2] || (o[2] = D(" resultados ")),
                      ]),
                      p(
                        Z,
                        {
                          "total-items": e.totalItems,
                          "items-per-page": e.itemsPerPage,
                          "model-value": l.value,
                          "onUpdate:modelValue": h,
                          onChange: y,
                        },
                        null,
                        8,
                        ["total-items", "items-per-page", "model-value"],
                      ),
                    ]))
                  : T("", !0),
              ])),
        ])
      );
    },
  });
w.__docgenInfo = {
  exportName: "default",
  displayName: "GenericTable",
  description: "",
  tags: {},
  props: [
    {
      name: "columns",
      required: !0,
      type: {
        name: "Array",
        elements: [{ name: "TableHeader", elements: [{ name: "T" }] }],
      },
    },
    {
      name: "data",
      required: !0,
      type: { name: "Array", elements: [{ name: "T" }] },
    },
    { name: "page", required: !1, type: { name: "number" } },
    { name: "itemsPerPage", required: !1, type: { name: "number" } },
    { name: "totalItems", required: !1, type: { name: "number" } },
    {
      name: "actions",
      required: !1,
      type: {
        name: "Array",
        elements: [{ name: "TableAction", elements: [{ name: "T" }] }],
      },
    },
    { name: "loading", required: !1, type: { name: "boolean" } },
    { name: "emptyText", required: !1, type: { name: "string" } },
  ],
  events: [
    { name: "update:page", type: { names: ["number"] } },
    { name: "changePage", type: { names: ["number"] } },
  ],
  slots: [
    {
      name: "row",
      scoped: !0,
      bindings: [
        { name: "rowData", title: "binding" },
        { name: "rowIndex", title: "binding" },
      ],
    },
    {
      name: "cell",
      scoped: !0,
      bindings: [
        { name: "rowData", title: "binding" },
        { name: "rowIndex", title: "binding" },
      ],
    },
    {
      name: "getCellName(col)",
      scoped: !0,
      bindings: [
        { name: "name", title: "binding" },
        { name: "rowData", title: "binding" },
        { name: "rowIndex", title: "binding" },
        { name: "cellData", title: "binding" },
      ],
    },
  ],
  sourceFiles: [
    "C:/leds-org/leds-conectafapes-biblioteca-componentes/src/components/GenericTable/GenericTable.vue",
  ],
};
const Se = {
    title: "Components/GenericTable",
    component: w,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: `
**GenericTable** é um componente de tabela tipado com suporte a genéricos e slots.

- Suporta configuração de colunas por meio de *array* de objetos
- Suporta dados das linhas por meio de *array* de objetos
- Agiliza implementação de funcionalidades costumeiras por meio de coluna de ações
- Suporta paginação *server-side*
- Oferece controle fino de exibição de colunas, linhas e até células especificas por meio de *slots* e *render functions*

### Exemplo:
\`\`\`vue
<script setup lang="ts">
import { GenericTable } from '@leds-ifes/components'
import type { TableHeader } from '@leds-ifes/components'

type Data = {
  name: string
  link: string
  date: string
  status: 'Ativo' | 'Inativo'
  currency: number
}

const columns: TableHeader<Data>[] = [
    { key: 'name', title: 'Nome', sortable: true },
    { key: 'link', title: 'Link', sortable: true },
    { key: 'date', title: 'Data', sortable: true },
    { key: 'status', title: 'Status', sortable: true },
    { key: 'currency', title: 'Dinheiro', sortable: true },
]

const data: Data[] = [
  { name: 'Nome 1', link: 'Link 1', date: '2025-05-07', status: 'Ativo', currency: 1000 },
  { name: 'Nome 2', link: 'Link 2', date: '2026-02-28', status: 'Inativo', currency: 2000 },
  { name: 'Nome 3', link: 'Link 3', date: '2023-07-10', status: 'Ativo', currency: 2000 },
  { name: 'Nome 4', link: 'Link 4', date: '2026-03-17', status: 'Ativo', currency: 7000 },
  { name: 'Nome 5', link: 'Link 5', date: '2025-02-15', status: 'Ativo', currency: 400 },
]
<\/script>
<template>
  <GenericTable
    :columns="columns"
    :data="data"
  />
</template>
\`\`\`
        `.trim(),
        },
        extractArgTypes: !1,
        extractComponentDescription: !1,
      },
    },
    argTypes: {
      columns: {
        control: "object",
        description: "Configurações da coluna da tabela",
        required: !0,
      },
      data: { control: "object", description: "Itens da tabela", required: !0 },
      page: { control: "number", description: "Página em exibição." },
      itemsPerPage: {
        control: "number",
        description:
          "Quantidade de registros por página. Se presente, ativa a paginação.",
      },
      action: {
        control: "object",
        description:
          "Configurações da coluna de ações. A coluna de ações apresenta botões para ações rotineiras como visualização, edição e exclusão de dados. Se presente, coluna de ações é exibida.",
      },
      loading: {
        control: "boolean",
        description:
          "Aponta se os dados da tabela estão sendo carregados ou não.",
      },
      emptyText: {
        control: "string",
        description:
          "Texto exibido quando os dados estão carregados, mas vazios.",
        table: {
          type: { summary: "string" },
          defaultValue: { summary: "'Nenhum resultado encontrado'" },
        },
      },
    },
  },
  C = {
    args: {
      columns: [
        { key: "name", title: "Nome", sortable: !0 },
        { key: "link", title: "Link", sortable: !0 },
        { key: "date", title: "Data", sortable: !0 },
        { key: "status", title: "Status", sortable: !0 },
        { key: "currency", title: "Dinheiro", sortable: !0 },
      ],
      data: [
        {
          name: "Nome 1",
          link: "Link 1",
          date: "2025-05-07",
          status: "Ativo",
          currency: 1e3,
        },
        {
          name: "Nome 2",
          link: "Link 2",
          date: "2026-02-28",
          status: "Inativo",
          currency: 2e3,
        },
        {
          name: "Nome 3",
          link: "Link 3",
          date: "2023-07-10",
          status: "Ativo",
          currency: 2e3,
        },
        {
          name: "Nome 4",
          link: "Link 4",
          date: "2026-03-17",
          status: "Ativo",
          currency: 7e3,
        },
        {
          name: "Nome 5",
          link: "Link 5",
          date: "2025-02-15",
          status: "Ativo",
          currency: 400,
        },
      ],
    },
  },
  I = {
    name: "Com Paginação",
    render: () => {
      const i = [
          { key: "name", title: "Nome", sortable: !0 },
          { key: "link", title: "Link", sortable: !0 },
          { key: "date", title: "Data", sortable: !0 },
          { key: "status", title: "Status", sortable: !0 },
          { key: "currency", title: "Dinheiro", sortable: !0 },
        ],
        g = [
          {
            name: "Nome 1",
            link: "Link 1",
            date: "2025-05-07",
            status: "Ativo",
            currency: 1e3,
          },
          {
            name: "Nome 2",
            link: "Link 2",
            date: "2026-02-28",
            status: "Inativo",
            currency: 2e3,
          },
          {
            name: "Nome 3",
            link: "Link 3",
            date: "2023-07-10",
            status: "Ativo",
            currency: 2e3,
          },
          {
            name: "Nome 4",
            link: "Link 4",
            date: "2026-03-17",
            status: "Ativo",
            currency: 7e3,
          },
          {
            name: "Nome 5",
            link: "Link 5",
            date: "2025-02-15",
            status: "Ativo",
            currency: 400,
          },
        ],
        c = Y(1),
        y = v(() => {
          const l = (c.value - 1) * 2,
            h = c.value * 2;
          return g.slice(l, h);
        });
      return () =>
        E(w, {
          columns: i,
          data: y.value,
          itemsPerPage: 2,
          totalItems: g.length,
          page: c.value,
          "onUpdate:page": (l) => (c.value = l),
        });
    },
    parameters: {
      docs: {
        source: {
          code: `
<script setup lang="ts">
const columns = [
  { key: 'name', title: 'Nome', sortable: true },
  { key: 'link', title: 'Link', sortable: true },
  { key: 'date', title: 'Data', sortable: true },
  { key: 'status', title: 'Status', sortable: true },
  { key: 'currency', title: 'Dinheiro', sortable: true },
]
const data = [
  { name: 'Nome 1', link: 'Link 1', date: '2025-05-07', status: 'Ativo', currency: 1000 },
  { name: 'Nome 2', link: 'Link 2', date: '2026-02-28', status: 'Inativo', currency: 2000 },
  { name: 'Nome 3', link: 'Link 3', date: '2023-07-10', status: 'Ativo', currency: 2000 },
  { name: 'Nome 4', link: 'Link 4', date: '2026-03-17', status: 'Ativo', currency: 7000 },
  { name: 'Nome 5', link: 'Link 5', date: '2025-02-15', status: 'Ativo', currency: 400 },
]
const page = ref(1)
const paginatedData = computed(() => {
  const sliceStart = (page.value - 1) * 2
  const sliceEnd = (page.value) * 2
  return data.slice(sliceStart, sliceEnd)
})
<\/script>
<template>
  <GenericSelect
    v-model:page="currentPage"
    :columns="columns"
    :data="paginatedData"
    :items-per-page="2"
    :total-items="data.length"
  />
</template>
        `.trim(),
        },
      },
    },
  },
  _ = {
    name: "Com Render Function em linha",
    render: () => {
      const i = [
          { key: "bandeira", title: "Bandeira" },
          { key: "significado", title: "Significado" },
        ],
        g = [
          { bandeira: "🏴‍☠️", significado: "Bandeira de pirata" },
          { bandeira: "🪦", significado: "Anuncio de um cemitério" },
          {
            bandeira: "💀",
            significado: "Prerigo!",
            render: (c, y, l, h) =>
              E("span", l === "significado" ? { class: "font-bold" } : null, c),
          },
        ];
      return () => E(w, { columns: i, data: g });
    },
    parameters: {
      docs: {
        source: {
          code: `
<script setup lang="ts">
import type { TableHeader, TableRender } from '@leds-ifes/components'
type Flag = {
  bandeira: string
  significado: string
}
const columns: TableHeader<Flag>[] = [
  { key: 'bandeira', title: 'Bandeira' },
  { key: 'significado', title: 'Significado' },
]
const data: (Flag & { render?: TableRender<Flag> })[] = [
  { bandeira: '🏴‍☠️', significado: 'Bandeira de pirata' },
  { bandeira: '🪦', significado: 'Anuncio de um cemitério' },
  {
    bandeira: '💀',
    significado: 'Prerigo!',
    render: (value, _row, col, _index) => {
      return h(
        'span',
        col === 'significado'
          ? { class: 'font-bold' }
          : null,
        value
      )
    }
  }
]
<\/script>
<template>
  <GenericSelect
    :columns="columns"
    :data="data"
  />
</template>
        `.trim(),
        },
      },
    },
  };
var z, H, O;
C.parameters = {
  ...C.parameters,
  docs: {
    ...((z = C.parameters) == null ? void 0 : z.docs),
    source: {
      originalSource: `{
  args: {
    columns: [{
      key: 'name',
      title: 'Nome',
      sortable: true
    }, {
      key: 'link',
      title: 'Link',
      sortable: true
    }, {
      key: 'date',
      title: 'Data',
      sortable: true
    }, {
      key: 'status',
      title: 'Status',
      sortable: true
    }, {
      key: 'currency',
      title: 'Dinheiro',
      sortable: true
    }],
    data: [{
      name: 'Nome 1',
      link: 'Link 1',
      date: '2025-05-07',
      status: 'Ativo',
      currency: 1000
    }, {
      name: 'Nome 2',
      link: 'Link 2',
      date: '2026-02-28',
      status: 'Inativo',
      currency: 2000
    }, {
      name: 'Nome 3',
      link: 'Link 3',
      date: '2023-07-10',
      status: 'Ativo',
      currency: 2000
    }, {
      name: 'Nome 4',
      link: 'Link 4',
      date: '2026-03-17',
      status: 'Ativo',
      currency: 7000
    }, {
      name: 'Nome 5',
      link: 'Link 5',
      date: '2025-02-15',
      status: 'Ativo',
      currency: 400
    }]
  }
}`,
      ...((O = (H = C.parameters) == null ? void 0 : H.docs) == null
        ? void 0
        : O.source),
    },
  },
};
var J, M, U;
I.parameters = {
  ...I.parameters,
  docs: {
    ...((J = I.parameters) == null ? void 0 : J.docs),
    source: {
      originalSource: `{
  name: 'Com Paginação',
  render: () => {
    const columns = [{
      key: 'name',
      title: 'Nome',
      sortable: true
    }, {
      key: 'link',
      title: 'Link',
      sortable: true
    }, {
      key: 'date',
      title: 'Data',
      sortable: true
    }, {
      key: 'status',
      title: 'Status',
      sortable: true
    }, {
      key: 'currency',
      title: 'Dinheiro',
      sortable: true
    }];
    const data = [{
      name: 'Nome 1',
      link: 'Link 1',
      date: '2025-05-07',
      status: 'Ativo',
      currency: 1000
    }, {
      name: 'Nome 2',
      link: 'Link 2',
      date: '2026-02-28',
      status: 'Inativo',
      currency: 2000
    }, {
      name: 'Nome 3',
      link: 'Link 3',
      date: '2023-07-10',
      status: 'Ativo',
      currency: 2000
    }, {
      name: 'Nome 4',
      link: 'Link 4',
      date: '2026-03-17',
      status: 'Ativo',
      currency: 7000
    }, {
      name: 'Nome 5',
      link: 'Link 5',
      date: '2025-02-15',
      status: 'Ativo',
      currency: 400
    }];
    const page = ref(1);
    const paginatedData = computed(() => {
      const sliceStart = (page.value - 1) * 2;
      const sliceEnd = page.value * 2;
      return data.slice(sliceStart, sliceEnd);
    });
    return () => h(
    // @ts-ignore
    GenericTable, {
      columns,
      data: paginatedData.value,
      itemsPerPage: 2,
      totalItems: data.length,
      page: page.value,
      'onUpdate:page': (value: number) => page.value = value
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`
<script setup lang="ts">
const columns = [
  { key: 'name', title: 'Nome', sortable: true },
  { key: 'link', title: 'Link', sortable: true },
  { key: 'date', title: 'Data', sortable: true },
  { key: 'status', title: 'Status', sortable: true },
  { key: 'currency', title: 'Dinheiro', sortable: true },
]
const data = [
  { name: 'Nome 1', link: 'Link 1', date: '2025-05-07', status: 'Ativo', currency: 1000 },
  { name: 'Nome 2', link: 'Link 2', date: '2026-02-28', status: 'Inativo', currency: 2000 },
  { name: 'Nome 3', link: 'Link 3', date: '2023-07-10', status: 'Ativo', currency: 2000 },
  { name: 'Nome 4', link: 'Link 4', date: '2026-03-17', status: 'Ativo', currency: 7000 },
  { name: 'Nome 5', link: 'Link 5', date: '2025-02-15', status: 'Ativo', currency: 400 },
]
const page = ref(1)
const paginatedData = computed(() => {
  const sliceStart = (page.value - 1) * 2
  const sliceEnd = (page.value) * 2
  return data.slice(sliceStart, sliceEnd)
})
<\/script>
<template>
  <GenericSelect
    v-model:page="currentPage"
    :columns="columns"
    :data="paginatedData"
    :items-per-page="2"
    :total-items="data.length"
  />
</template>
        \`.trim()
      }
    }
  }
}`,
      ...((U = (M = I.parameters) == null ? void 0 : M.docs) == null
        ? void 0
        : U.source),
    },
  },
};
var Q, W, K;
_.parameters = {
  ..._.parameters,
  docs: {
    ...((Q = _.parameters) == null ? void 0 : Q.docs),
    source: {
      originalSource: `{
  name: 'Com Render Function em linha',
  render: () => {
    type Flag = {
      bandeira: string;
      significado: string;
    };
    const columns: TableHeader<Flag>[] = [{
      key: 'bandeira',
      title: 'Bandeira'
    }, {
      key: 'significado',
      title: 'Significado'
    }];
    const data: (Flag & {
      render?: TableRender<Flag>;
    })[] = [{
      bandeira: '🏴‍☠️',
      significado: 'Bandeira de pirata'
    }, {
      bandeira: '🪦',
      significado: 'Anuncio de um cemitério'
    }, {
      bandeira: '💀',
      significado: 'Prerigo!',
      render: (value, _row, col, _index) => {
        return h('span', col === 'significado' ? {
          class: 'font-bold'
        } : null, value);
      }
    }];
    return () => h(
    // @ts-ignore
    GenericTable, {
      columns,
      data
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`
<script setup lang="ts">
import type { TableHeader, TableRender } from '@leds-ifes/components'
type Flag = {
  bandeira: string
  significado: string
}
const columns: TableHeader<Flag>[] = [
  { key: 'bandeira', title: 'Bandeira' },
  { key: 'significado', title: 'Significado' },
]
const data: (Flag & { render?: TableRender<Flag> })[] = [
  { bandeira: '🏴‍☠️', significado: 'Bandeira de pirata' },
  { bandeira: '🪦', significado: 'Anuncio de um cemitério' },
  {
    bandeira: '💀',
    significado: 'Prerigo!',
    render: (value, _row, col, _index) => {
      return h(
        'span',
        col === 'significado'
          ? { class: 'font-bold' }
          : null,
        value
      )
    }
  }
]
<\/script>
<template>
  <GenericSelect
    :columns="columns"
    :data="data"
  />
</template>
        \`.trim()
      }
    }
  }
}`,
      ...((K = (W = _.parameters) == null ? void 0 : W.docs) == null
        ? void 0
        : K.source),
    },
  },
};
const Ce = ["Default", "withPagination", "withRenderFunctionPerRow"];
export {
  C as Default,
  Ce as __namedExportsOrder,
  Se as default,
  I as withPagination,
  _ as withRenderFunctionPerRow,
};
