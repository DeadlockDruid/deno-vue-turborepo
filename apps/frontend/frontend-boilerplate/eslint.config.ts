import { vueEslintConfig } from "@repo/eslint-config/vue-internal";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  ...vueEslintConfig,
  {
    files: ["src/components/ui/**/*.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/require-default-prop": "off",
    },
  },
];
