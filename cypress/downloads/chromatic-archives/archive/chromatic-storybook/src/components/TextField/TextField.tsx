import { createHotContext as __vite__createHotContext } from "/chromatic-storybook/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/TextField/TextField.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/chromatic-storybook/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=edff2260"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/components/TextField/TextField.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import styles from "/chromatic-storybook/src/components/TextField/TextField.module.css";
export function TextField(props) {
  const { full, label, error, helperText, ...inputProps } = props;
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: styles.control,
      style: { display: full ? "block" : "inline-block" },
      children: [
        /* @__PURE__ */ jsxDEV("label", { children: [
          label,
          /* @__PURE__ */ jsxDEV("input", { ...inputProps, className: styles.input }, void 0, false, {
            fileName: "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/components/TextField/TextField.tsx",
            lineNumber: 20,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/components/TextField/TextField.tsx",
          lineNumber: 18,
          columnNumber: 7
        }, this),
        helperText && /* @__PURE__ */ jsxDEV("p", { className: styles.helper, children: helperText }, void 0, false, {
          fileName: "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/components/TextField/TextField.tsx",
          lineNumber: 22,
          columnNumber: 22
        }, this),
        error && /* @__PURE__ */ jsxDEV("p", { className: styles.error, children: error }, void 0, false, {
          fileName: "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/components/TextField/TextField.tsx",
          lineNumber: 23,
          columnNumber: 17
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/components/TextField/TextField.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
}
_c = TextField;
var _c;
$RefreshReg$(_c, "TextField");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/components/TextField/TextField.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBbUJRO0FBbkJSLE9BQU9BLG9CQUFZO0FBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNwQyxnQkFBU0MsVUFBVUMsT0FBdUI7QUFDL0MsUUFBTSxFQUFFQyxNQUFNQyxPQUFPQyxPQUFPQyxZQUFZLEdBQUdDLFdBQVcsSUFBSUw7QUFFMUQsU0FDRTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsV0FBV0YsT0FBT1E7QUFBQUEsTUFDbEIsT0FBTyxFQUFFQyxTQUFTTixPQUFPLFVBQVUsZUFBZTtBQUFBLE1BRWxEO0FBQUEsK0JBQUMsV0FDRUM7QUFBQUE7QUFBQUEsVUFDRCx1QkFBQyxXQUFNLEdBQUlHLFlBQVksV0FBV1AsT0FBT1UsU0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBK0M7QUFBQSxhQUZqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBR0E7QUFBQSxRQUNDSixjQUFjLHVCQUFDLE9BQUUsV0FBV04sT0FBT1csUUFBU0wsd0JBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBeUM7QUFBQSxRQUN2REQsU0FBUyx1QkFBQyxPQUFFLFdBQVdMLE9BQU9LLE9BQVFBLG1CQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQW1DO0FBQUE7QUFBQTtBQUFBLElBVC9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVVBO0FBRUo7QUFBQ08sS0FoQmVYO0FBQVMsSUFBQVc7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbInN0eWxlcyIsIlRleHRGaWVsZCIsInByb3BzIiwiZnVsbCIsImxhYmVsIiwiZXJyb3IiLCJoZWxwZXJUZXh0IiwiaW5wdXRQcm9wcyIsImNvbnRyb2wiLCJkaXNwbGF5IiwiaW5wdXQiLCJoZWxwZXIiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJUZXh0RmllbGQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVGV4dEZpZWxkLm1vZHVsZS5jc3NcIjtcblxudHlwZSBUZXh0RmllbGRQcm9wcyA9IHtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGVycm9yPzogc3RyaW5nO1xuICBoZWxwZXJUZXh0Pzogc3RyaW5nO1xuICBmdWxsPzogYm9vbGVhbjtcbn0gJiBSZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG5leHBvcnQgZnVuY3Rpb24gVGV4dEZpZWxkKHByb3BzOiBUZXh0RmllbGRQcm9wcykge1xuICBjb25zdCB7IGZ1bGwsIGxhYmVsLCBlcnJvciwgaGVscGVyVGV4dCwgLi4uaW5wdXRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sfVxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogZnVsbCA/IFwiYmxvY2tcIiA6IFwiaW5saW5lLWJsb2NrXCIgfX1cbiAgICA+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgICAgPGlucHV0IHsuLi5pbnB1dFByb3BzfSBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICB7aGVscGVyVGV4dCAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5oZWxwZXJ9PntoZWxwZXJUZXh0fTwvcD59XG4gICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9PntlcnJvcn08L3A+fVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sImZpbGUiOiIvVXNlcnMvbnRvbmlvY3AvRG9jdW1lbnRzL0Rldi9jaHJvbWF0aWMtc3Rvcnlib29rL3NyYy9jb21wb25lbnRzL1RleHRGaWVsZC9UZXh0RmllbGQudHN4In0=