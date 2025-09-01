import {
  d as m,
  u as p,
  b as n,
  e as d,
  f,
  m as _,
  o as g,
  j as v,
} from "./vue.esm-bundler-C6JmKcWh.js";
import { c as C } from "./cn-eKfGxdXH.js";
import { _ as b } from "./GenericIcon-DAnoHuMU.js";
const h = m({
  inheritAttrs: !1,
  __name: "GenericCompactButton",
  props: { icon: {}, variant: { default: "default" } },
  emits: ["onClick"],
  setup(a, { emit: s }) {
    const t = a,
      r = s,
      c = () => {
        r("onClick");
      },
      o = p(),
      i = {
        default: "text-primary-500 hover:bg-slate-200",
        danger: "text-red-800 hover:bg-red-100",
      },
      l = n(() =>
        C(
          "w-11 h-11 rounded-lg p-2.5 bg-white text-2xl leading-tight easy-in-out duration-300 cursor-pointer",
          i[t.variant],
          o.class,
        ),
      ),
      u = n(() => {
        const { ...e } = o;
        return e;
      });
    return (e, B) => (
      g(),
      d(
        "button",
        _(u.value, { type: "button", class: l.value, onClick: c }),
        [
          f(e.$slots, "icon", {}, () => [
            v(b, { name: t.icon, filled: "" }, null, 8, ["name"]),
          ]),
        ],
        16,
      )
    );
  },
});
h.__docgenInfo = {
  exportName: "default",
  displayName: "GenericCompactButton",
  description: "",
  tags: {},
  props: [{ name: "variant", defaultValue: { func: !1, value: "'default'" } }],
  events: [{ name: "onClick" }],
  slots: [{ name: "icon" }],
  sourceFiles: [
    "C:/leds-org/leds-conectafapes-biblioteca-componentes/src/components/GenericCompactButton/GenericCompactButton.vue",
  ],
};
export { h as _ };
