import './index.css'
import { defineComponent, openBlock, createElementBlock, normalizeStyle } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "index",
  props: {
    color: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        style: normalizeStyle({ color: __props.color })
      }, "测试按钮", 4);
    };
  }
});
export {
  _sfc_main as default
};
