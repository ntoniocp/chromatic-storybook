import { createHotContext as __vite__createHotContext } from "/chromatic-storybook/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/chromatic-storybook/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=edff2260"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/App.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import "/chromatic-storybook/src/App.css";
import __vite__cjsImport4_react from "/chromatic-storybook/node_modules/.vite/deps/react.js?v=edff2260"; const useState = __vite__cjsImport4_react["useState"];
import { Card } from "/chromatic-storybook/src/components/Card/Card.tsx";
import { Alert } from "/chromatic-storybook/src/components/Alert/Alert.tsx";
import { LoginForm } from "/chromatic-storybook/src/features/Login/LoginForm.tsx";
function App() {
  _s();
  const [loggedIn, setLoggedIn] = useState(false);
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        height: "100dvh"
      },
      children: /* @__PURE__ */ jsxDEV("div", { style: { width: 300 }, children: /* @__PURE__ */ jsxDEV(Card, { children: [
        loggedIn && /* @__PURE__ */ jsxDEV(
          Alert,
          {
            type: "success",
            text: "Logged in successfully!",
            onCloseClick: () => setLoggedIn(false)
          },
          void 0,
          false,
          {
            fileName: "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/App.tsx",
            lineNumber: 23,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("h1", { style: { margin: "12px 0px", textAlign: "center" }, children: "Login" }, void 0, false, {
          fileName: "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/App.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(LoginForm, { onSubmit: () => setLoggedIn(true) }, void 0, false, {
          fileName: "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/App.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/App.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/App.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/App.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}
_s(App, "rumETxDPcQWJcg8a6Y55ZSVDz7g=");
_c = App;
export default App;
var _c;
$RefreshReg$(_c, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBc0JZOzJCQXRCWjtBQUFrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNsQixTQUFTQSxnQkFBZ0I7QUFDekIsU0FBU0MsWUFBWTtBQUNyQixTQUFTQyxhQUFhO0FBQ3RCLFNBQVNDLGlCQUFpQjtBQUUxQixTQUFTQyxNQUFNO0FBQUFDLEtBQUE7QUFDYixRQUFNLENBQUNDLFVBQVVDLFdBQVcsSUFBSVAsU0FBUyxLQUFLO0FBRTlDLFNBQ0U7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLE9BQU87QUFBQSxRQUNMUSxTQUFTO0FBQUEsUUFDVEMsZ0JBQWdCO0FBQUEsUUFDaEJDLFlBQVk7QUFBQSxRQUNaQyxTQUFTO0FBQUEsUUFDVEMsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUVBLGlDQUFDLFNBQUksT0FBTyxFQUFFQyxPQUFPLElBQUksR0FDdkIsaUNBQUMsUUFDRVA7QUFBQUEsb0JBQ0M7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLE1BQUs7QUFBQSxZQUNMLE1BQUs7QUFBQSxZQUNMLGNBQWMsTUFBTUMsWUFBWSxLQUFLO0FBQUE7QUFBQSxVQUh2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFHeUM7QUFBQSxRQUczQyx1QkFBQyxRQUFHLE9BQU8sRUFBRU8sUUFBUSxZQUFZQyxXQUFXLFNBQVMsR0FBRyxxQkFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE2RDtBQUFBLFFBQzdELHVCQUFDLGFBQVUsVUFBVSxNQUFNUixZQUFZLElBQUksS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE2QztBQUFBLFdBVC9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFVQSxLQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFZQTtBQUFBO0FBQUEsSUFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBc0JBO0FBRUo7QUFBQ0YsR0E1QlFELEtBQUc7QUFBQVksS0FBSFo7QUE2QlQsZUFBZUE7QUFBSSxJQUFBWTtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsidXNlU3RhdGUiLCJDYXJkIiwiQWxlcnQiLCJMb2dpbkZvcm0iLCJBcHAiLCJfcyIsImxvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luIiwidGV4dEFsaWduIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL0FwcC5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4vY29tcG9uZW50cy9DYXJkL0NhcmRcIjtcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9BbGVydC9BbGVydFwiO1xuaW1wb3J0IHsgTG9naW5Gb3JtIH0gZnJvbSBcIi4vZmVhdHVyZXMvTG9naW4vTG9naW5Gb3JtXCI7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2xvZ2dlZEluLCBzZXRMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIHBhZGRpbmc6IDE2LFxuICAgICAgICBoZWlnaHQ6IFwiMTAwZHZoXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDMwMCB9fT5cbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAge2xvZ2dlZEluICYmIChcbiAgICAgICAgICAgIDxBbGVydFxuICAgICAgICAgICAgICB0eXBlPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgIHRleHQ9XCJMb2dnZWQgaW4gc3VjY2Vzc2Z1bGx5IVwiXG4gICAgICAgICAgICAgIG9uQ2xvc2VDbGljaz17KCkgPT4gc2V0TG9nZ2VkSW4oZmFsc2UpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW46IFwiMTJweCAwcHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PkxvZ2luPC9oMT5cbiAgICAgICAgICA8TG9naW5Gb3JtIG9uU3VibWl0PXsoKSA9PiBzZXRMb2dnZWRJbih0cnVlKX0gLz5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwiZmlsZSI6Ii9Vc2Vycy9udG9uaW9jcC9Eb2N1bWVudHMvRGV2L2Nocm9tYXRpYy1zdG9yeWJvb2svc3JjL0FwcC50c3gifQ==