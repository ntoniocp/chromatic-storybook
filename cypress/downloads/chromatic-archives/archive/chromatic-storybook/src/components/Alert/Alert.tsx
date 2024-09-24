import { createHotContext as __vite__createHotContext } from "/chromatic-storybook/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Alert/Alert.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/chromatic-storybook/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=edff2260"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/components/Alert/Alert.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import styles from "/chromatic-storybook/src/components/Alert/Alert.module.css";
const noOp = () => null;
export function Alert({ text, type, onCloseClick = noOp }) {
  return /* @__PURE__ */ jsxDEV("div", { className: `${styles.alert} ${styles[type]}`, children: [
    /* @__PURE__ */ jsxDEV("p", { children: text }, void 0, false, {
      fileName: "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/components/Alert/Alert.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        "aria-label": "Close success alert",
        className: styles.closeBtn,
        onClick: onCloseClick,
        children: /* @__PURE__ */ jsxDEV("span", { "aria-hidden": "true", children: "x" }, void 0, false, {
          fileName: "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/components/Alert/Alert.tsx",
          lineNumber: 19,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/components/Alert/Alert.tsx",
        lineNumber: 14,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/components/Alert/Alert.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
_c = Alert;
var _c;
$RefreshReg$(_c, "Alert");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/components/Alert/Alert.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBWU07QUFaTixPQUFPQSxvQkFBWTtBQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPdkMsTUFBTUMsT0FBT0EsTUFBTTtBQUVaLGdCQUFTQyxNQUFNLEVBQUVDLE1BQU1DLE1BQU1DLGVBQWVKLEtBQWlCLEdBQUc7QUFDckUsU0FDRSx1QkFBQyxTQUFJLFdBQVcsR0FBR0QsT0FBT00sS0FBSyxJQUFJTixPQUFPSSxJQUFjLENBQUMsSUFDdkQ7QUFBQSwyQkFBQyxPQUFHRCxrQkFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVM7QUFBQSxJQUNUO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFDQyxjQUFXO0FBQUEsUUFDWCxXQUFXSCxPQUFPTztBQUFBQSxRQUNsQixTQUFTRjtBQUFBQSxRQUVULGlDQUFDLFVBQUssZUFBWSxRQUFPLGlCQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTBCO0FBQUE7QUFBQSxNQUw1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNQTtBQUFBLE9BUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVNBO0FBRUo7QUFBQ0csS0FiZU47QUFBSyxJQUFBTTtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsic3R5bGVzIiwibm9PcCIsIkFsZXJ0IiwidGV4dCIsInR5cGUiLCJvbkNsb3NlQ2xpY2siLCJhbGVydCIsImNsb3NlQnRuIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQWxlcnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQWxlcnQubW9kdWxlLmNzc1wiO1xuaW50ZXJmYWNlIEFsZXJ0UHJvcHMge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHR5cGU6IFwic3VjY2Vzc1wiIHwgXCJlcnJvclwiO1xuICBvbkNsb3NlQ2xpY2s/OiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBub09wID0gKCkgPT4gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIEFsZXJ0KHsgdGV4dCwgdHlwZSwgb25DbG9zZUNsaWNrID0gbm9PcCB9OiBBbGVydFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5hbGVydH0gJHtzdHlsZXNbdHlwZSBhcyBzdHJpbmddfWB9PlxuICAgICAgPHA+e3RleHR9PC9wPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2Ugc3VjY2VzcyBhbGVydFwiXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlQnRufVxuICAgICAgICBvbkNsaWNrPXtvbkNsb3NlQ2xpY2t9XG4gICAgICA+XG4gICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPng8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL1VzZXJzL250b25pb2NwL0RvY3VtZW50cy9EZXYvY2hyb21hdGljLXN0b3J5Ym9vay9zcmMvY29tcG9uZW50cy9BbGVydC9BbGVydC50c3gifQ==