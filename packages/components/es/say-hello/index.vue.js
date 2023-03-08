import './index.css'
import { openBlock, createElementBlock, createTextVNode, pushScopeId, popScopeId, createElementVNode } from "vue";
import "./index.vue2.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _sfc_main = {};
const _withScopeId = (n) => (pushScopeId("data-v-e53af76c"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "red-bg" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" say ");
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", null, "hello", -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", { class: "haha" }, "...", -1));
const _hoisted_5 = [
  _hoisted_2,
  _hoisted_3,
  _hoisted_4
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_5);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e53af76c"]]);
export {
  index as default
};
