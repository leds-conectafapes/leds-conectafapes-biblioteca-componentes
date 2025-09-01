import {
  d as p,
  b as r,
  u as g,
  e as m,
  f as b,
  m as f,
  o as v,
  g as h,
  t as y,
} from "./vue.esm-bundler-C6JmKcWh.js";
import { c as x } from "./cn-eKfGxdXH.js";
const _ = ["disabled"],
  w = p({
    inheritAttrs: !1,
    __name: "GenericButton",
    props: { label: { default: "" }, variant: { default: "primary" } },
    emits: ["onClick"],
    setup(n, { emit: s }) {
      const e = n,
        i = s,
        l = () => {
          i("onClick");
        },
        a = r(() => e.variant === "disabled"),
        o = g(),
        c = {
          primary: "bg-primary-500 text-white hover:bg-primary-hover",
          danger: "bg-error-300 text-white hover:bg-error-hover",
          warning: "bg-warning-100 text-white hover:bg-warning-hover",
          secondary: "bg-white text-gray-700 hover:bg-gray-hover",
          secondaryDanger:
            "bg-white text-error-300 hover:bg-error-secondaryHover",
          disabled: "bg-gray-200 text-gray-500",
        },
        u = r(() =>
          x(
            "w-full flex gap-2.5 items-center justify-center px-6 py-4 leading-tight rounded-lg text-base font-inter font-medium easy-in-out duration-300",
            c[e.variant],
            a.value ? void 0 : "cursor-pointer",
            o.class,
          ),
        ),
        d = r(() => {
          const { ...t } = o;
          return t;
        });
      return (t, B) => (
        v(),
        m(
          "button",
          f(d.value, {
            type: "button",
            class: u.value,
            disabled: a.value,
            onClick: l,
          }),
          [b(t.$slots, "label", {}, () => [h(y(e.label), 1)])],
          16,
          _,
        )
      );
    },
  });
w.__docgenInfo = {
  exportName: "default",
  displayName: "GenericButton",
  description: "",
  tags: {},
  props: [
    { name: "label", defaultValue: { func: !1, value: "''" } },
    { name: "variant", defaultValue: { func: !1, value: "'primary'" } },
  ],
  events: [{ name: "onClick" }],
  slots: [{ name: "label" }],
  sourceFiles: [
    "C:/leds-org/leds-conectafapes-biblioteca-componentes/src/components/GenericButton/GenericButton.vue",
  ],
};
export { w as _ };
