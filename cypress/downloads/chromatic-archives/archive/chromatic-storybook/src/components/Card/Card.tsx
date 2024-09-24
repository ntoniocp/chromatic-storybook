import { createHotContext as __vite__createHotContext } from "/chromatic-storybook/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Card/Card.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/chromatic-storybook/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=edff2260"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/chromatic-storybook/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/components/Card/Card.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import styles from "/chromatic-storybook/src/components/Card/Card.module.css";
export function Card({ children }) {
  return /* @__PURE__ */ jsxDEV("div", { className: styles.card, children }, void 0, false, {
    fileName: "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/components/Card/Card.tsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}
_c = Card;
var _c;
$RefreshReg$(_c, "Card");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/components/Card/Card.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBT1M7QUFQVCxPQUFPQSxvQkFBWTtBQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNL0IsZ0JBQVNDLEtBQUssRUFBRUMsU0FBb0IsR0FBRztBQUM1QyxTQUFPLHVCQUFDLFNBQUksV0FBV0YsT0FBT0csTUFBT0QsWUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUF1QztBQUNoRDtBQUFDRSxLQUZlSDtBQUFJLElBQUFHO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJzdHlsZXMiLCJDYXJkIiwiY2hpbGRyZW4iLCJjYXJkIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQ2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9DYXJkLm1vZHVsZS5jc3NcIjtcblxudHlwZSBDYXJkUHJvcHMgPSB7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIENhcmQoeyBjaGlsZHJlbiB9OiBDYXJkUHJvcHMpIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+e2NoaWxkcmVufTwvZGl2Pjtcbn1cbiJdLCJmaWxlIjoiL1VzZXJzL250b25pb2NwL0RvY3VtZW50cy9EZXYvY2hyb21hdGljLXN0b3J5Ym9vay9zcmMvY29tcG9uZW50cy9DYXJkL0NhcmQudHN4In0=