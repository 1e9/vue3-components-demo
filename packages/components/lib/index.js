(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.v3_ui = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    name: "index",
    props: {
      color: null
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("button", {
          style: vue.normalizeStyle({ color: __props.color })
        }, "测试按钮", 4);
      };
    }
  });
  const index_vue_vue_type_style_index_0_scoped_e53af76c_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main = {};
  const _withScopeId = (n) => (vue.pushScopeId("data-v-e53af76c"), n = n(), vue.popScopeId(), n);
  const _hoisted_1 = { class: "red-bg" };
  const _hoisted_2 = /* @__PURE__ */ vue.createTextVNode(" say ");
  const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("span", null, "hello", -1));
  const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "haha" }, "...", -1));
  const _hoisted_5 = [
    _hoisted_2,
    _hoisted_3,
    _hoisted_4
  ];
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, _hoisted_5);
  }
  const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e53af76c"]]);
  exports2.UIButton = _sfc_main$1;
  exports2.UIHello = index;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
