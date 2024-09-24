import { createHotContext as __vite__createHotContext } from "/chromatic-storybook/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Button/Button.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/chromatic-storybook/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=edff2260"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/components/Button/Button.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import styles from "/chromatic-storybook/src/components/Button/Button.module.css";
export function Button(props) {
  const { full, ...buttonProps } = props;
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      ...buttonProps,
      className: styles.btn,
      style: { width: full ? "100%" : "auto" }
    },
    void 0,
    false,
    {
      fileName: "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/components/Button/Button.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}
_c = Button;
var _c;
$RefreshReg$(_c, "Button");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/components/Button/Button.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBVUk7QUFWSixPQUFPQSxvQkFBWTtBQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNakMsZ0JBQVNDLE9BQU9DLE9BQW9CO0FBQ3pDLFFBQU0sRUFBRUMsTUFBTSxHQUFHQyxZQUFZLElBQUlGO0FBRWpDLFNBQ0U7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLEdBQUlFO0FBQUFBLE1BQ0osV0FBV0osT0FBT0s7QUFBQUEsTUFDbEIsT0FBTyxFQUFFQyxPQUFPSCxPQUFPLFNBQVMsT0FBTztBQUFBO0FBQUEsSUFIekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRzJDO0FBRy9DO0FBQUNJLEtBVmVOO0FBQU0sSUFBQU07QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbInN0eWxlcyIsIkJ1dHRvbiIsInByb3BzIiwiZnVsbCIsImJ1dHRvblByb3BzIiwiYnRuIiwid2lkdGgiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJCdXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQnV0dG9uLm1vZHVsZS5jc3NcIjtcblxudHlwZSBCdXR0b25Qcm9wcyA9IHtcbiAgZnVsbD86IGJvb2xlYW47XG59ICYgUmVhY3QuQnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xuXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uKHByb3BzOiBCdXR0b25Qcm9wcykge1xuICBjb25zdCB7IGZ1bGwsIC4uLmJ1dHRvblByb3BzIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIHsuLi5idXR0b25Qcm9wc31cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ0bn1cbiAgICAgIHN0eWxlPXt7IHdpZHRoOiBmdWxsID8gXCIxMDAlXCIgOiBcImF1dG9cIiB9fVxuICAgIC8+XG4gICk7XG59XG4iXSwiZmlsZSI6Ii9Vc2Vycy9udG9uaW9jcC9Eb2N1bWVudHMvRGV2L2Nocm9tYXRpYy1zdG9yeWJvb2svc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi50c3gifQ==