import {
  d as a,
  e as n,
  o as l,
  t as s,
  n as t,
  k as o,
} from "./vue.esm-bundler-C6JmKcWh.js";
const r = a({
  __name: "GenericIcon",
  props: {
    name: {},
    variant: { default: "outlined" },
    className: { default: "" },
    filled: { type: Boolean, default: !1 },
    weight: { default: 300 },
  },
  setup(i) {
    return (e, u) => (
      l(),
      n(
        "span",
        {
          class: o([
            `material-symbols-${e.variant.toLowerCase()}`,
            e.className,
          ]),
          style: t({
            "font-variation-settings": `'FILL' ${e.filled ? 1 : 0}, 'wght' ${e.weight}`,
          }),
        },
        s(e.name),
        7,
      )
    );
  },
});
r.__docgenInfo = {
  exportName: "default",
  displayName: "GenericIcon",
  description: "",
  tags: {},
  props: [
    { name: "name", required: !0, type: { name: "string" } },
    {
      name: "variant",
      required: !1,
      type: { name: "IconVariant" },
      defaultValue: { func: !1, value: "'outlined'" },
    },
    {
      name: "className",
      required: !1,
      type: { name: "string" },
      defaultValue: { func: !1, value: "''" },
    },
    {
      name: "filled",
      required: !1,
      type: { name: "boolean" },
      defaultValue: { func: !1, value: "false" },
    },
    {
      name: "weight",
      required: !1,
      type: { name: "number" },
      defaultValue: { func: !1, value: "300" },
    },
  ],
  sourceFiles: [
    "C:/leds-org/leds-conectafapes-biblioteca-componentes/src/components/GenericIcon/GenericIcon.vue",
  ],
};
export { r as _ };
