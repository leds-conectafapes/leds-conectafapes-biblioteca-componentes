import {
  d as i,
  b as n,
  e as r,
  o as c,
  f as o,
  x as p,
  g as m,
  t as d,
  k as u,
} from "./vue.esm-bundler-C6JmKcWh.js";
import { c as f } from "./cn-eKfGxdXH.js";
import { _ as g } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const x = { class: "relative group w-fit" },
  s = i({
    __name: "GenericTooltip",
    props: {
      text: {},
      position: { default: "top" },
      customPosition: {},
      width: { default: "w-max" },
    },
    setup(e) {
      const a = {
          top: "triangle-bottom bottom-full left-1/2 -translate-x-1/2 mb-2",
          right: "left-full top-1/2 -translate-y-1/2 ml-2",
          bottom: "triangle-top top-full left-1/2 -translate-x-1/2 mt-2",
          left: "right-full top-1/2 -translate-y-1/2 mr-2",
          custom: "",
        },
        l = n(() => {
          const t = `${e.width} ${e.customPosition || a[e.position]}`;
          return f(
            "absolute hidden group-hover:block bg-gray-900 text-sm text-white font-medium rounded-lg px-2 py-3",
            "shadow-lg shadow-zinc-600/10",
            t,
          );
        });
      return (t, b) => (
        c(),
        r("div", x, [
          o(t.$slots, "default", {}, void 0, !0),
          p(
            "div",
            { class: u(l.value) },
            [o(t.$slots, "text", {}, () => [m(d(t.text), 1)], !0)],
            2,
          ),
        ])
      );
    },
  }),
  w = g(s, [["__scopeId", "data-v-6531b857"]]);
s.__docgenInfo = {
  exportName: "default",
  displayName: "GenericTooltip",
  description: "",
  tags: {},
  slots: [{ name: "default" }, { name: "text" }],
  sourceFiles: [
    "C:/leds-org/leds-conectafapes-biblioteca-componentes/src/components/GenericTooltip/GenericTooltip.vue",
  ],
};
export { w as G };
