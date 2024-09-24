import { createHotContext as __vite__createHotContext } from "/chromatic-storybook/@vite/client";import.meta.hot = __vite__createHotContext("/src/features/Login/LoginForm.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/chromatic-storybook/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=edff2260"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/features/Login/LoginForm.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/chromatic-storybook/node_modules/.vite/deps/react.js?v=edff2260"; const useState = __vite__cjsImport3_react["useState"]; const useRef = __vite__cjsImport3_react["useRef"];
import { hasErrors, validateEmail, validatePassword } from "/chromatic-storybook/src/utils/forms.ts";
import { TextField } from "/chromatic-storybook/src/components/TextField/TextField.tsx";
import { Button } from "/chromatic-storybook/src/components/Button/Button.tsx";
const validators = {
  email: validateEmail,
  password: validatePassword
};
const noOp = () => null;
export function LoginForm({ onSubmit = noOp }) {
  _s();
  const [errors, setErrors] = useState({});
  const firstSubmit = useRef(true);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    firstSubmit.current = false;
    const fd = new FormData(ev.currentTarget);
    const values = Object.fromEntries(fd.entries());
    const newErrors = {};
    for (const key in values) {
      const typedKey = key;
      newErrors[typedKey] = validators[typedKey](values[key]);
    }
    if (hasErrors(newErrors)) {
      setErrors(newErrors);
    } else {
      setErrors({});
      firstSubmit.current = true;
      onSubmit(values);
    }
  };
  const handleChange = (ev) => {
    const { name, value } = ev.currentTarget;
    if (!firstSubmit.current) {
      setErrors((prev) => ({
        ...prev,
        [name]: validators[name](value)
      }));
    }
  };
  return /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSubmit, noValidate: true, children: [
    /* @__PURE__ */ jsxDEV(
      TextField,
      {
        type: "email",
        label: "Email",
        name: "email",
        error: errors.email,
        onChange: handleChange,
        full: true
      },
      void 0,
      false,
      {
        fileName: "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/features/Login/LoginForm.tsx",
        lineNumber: 63,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      TextField,
      {
        type: "password",
        label: "Password",
        name: "password",
        error: errors.password,
        onChange: handleChange,
        full: true
      },
      void 0,
      false,
      {
        fileName: "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/features/Login/LoginForm.tsx",
        lineNumber: 71,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(Button, { type: "submit", full: true, children: "Log in" }, void 0, false, {
      fileName: "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/features/Login/LoginForm.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/features/Login/LoginForm.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}
_s(LoginForm, "UEx7F2Jym5GplFX8objzI1sDDEY=");
_c = LoginForm;
var _c;
$RefreshReg$(_c, "LoginForm");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/ntoniocp/Documents/Dev/chromatic-storybook/src/features/Login/LoginForm.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBOERNOzJCQTlETjtBQUFtQkEsTUFBTSxjQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3hDLFNBQVNDLFdBQVdDLGVBQWVDLHdCQUF3QjtBQUMzRCxTQUFTQyxpQkFBaUI7QUFDMUIsU0FBU0MsY0FBYztBQVN2QixNQUFNQyxhQUFhO0FBQUEsRUFDakJDLE9BQU9MO0FBQUFBLEVBQ1BNLFVBQVVMO0FBQ1o7QUFFQSxNQUFNTSxPQUFPQSxNQUFNO0FBS1osZ0JBQVNDLFVBQVUsRUFBRUMsV0FBV0YsS0FBcUIsR0FBRztBQUFBRyxLQUFBO0FBQzdELFFBQU0sQ0FBQ0MsUUFBUUMsU0FBUyxJQUFJQyxTQUFzQixDQUFDLENBQUM7QUFFcEQsUUFBTUMsY0FBY2hCLE9BQWdCLElBQUk7QUFDeEMsUUFBTWlCLGVBQWVBLENBQUNDLE9BQXlDO0FBQzdEQSxPQUFHQyxlQUFlO0FBRWxCSCxnQkFBWUksVUFBVTtBQUV0QixVQUFNQyxLQUFLLElBQUlDLFNBQVNKLEdBQUdLLGFBQWE7QUFDeEMsVUFBTUMsU0FBU0MsT0FBT0MsWUFBWUwsR0FBR00sUUFBUSxDQUFDO0FBQzlDLFVBQU1DLFlBQXlCLENBQUM7QUFFaEMsZUFBV0MsT0FBT0wsUUFBUTtBQUN4QixZQUFNTSxXQUFXRDtBQUNqQkQsZ0JBQVVFLFFBQVEsSUFBSXhCLFdBQVd3QixRQUFRLEVBQUVOLE9BQU9LLEdBQUcsQ0FBVztBQUFBLElBQ2xFO0FBRUEsUUFBSTVCLFVBQVUyQixTQUFTLEdBQUc7QUFDeEJkLGdCQUFVYyxTQUFTO0FBQUEsSUFDckIsT0FBTztBQUNMZCxnQkFBVSxDQUFDLENBQUM7QUFDWkUsa0JBQVlJLFVBQVU7QUFDdEJULGVBQVNhLE1BQXNCO0FBQUEsSUFDakM7QUFBQSxFQUNGO0FBRUEsUUFBTU8sZUFBZUEsQ0FBQ2IsT0FBNEM7QUFDaEUsVUFBTSxFQUFFYyxNQUFNQyxNQUFNLElBQUlmLEdBQUdLO0FBRTNCLFFBQUksQ0FBQ1AsWUFBWUksU0FBUztBQUN4Qk4sZ0JBQVUsQ0FBQ29CLFVBQVU7QUFBQSxRQUNuQixHQUFHQTtBQUFBQSxRQUNILENBQUNGLElBQUksR0FBRzFCLFdBQVcwQixJQUF5QixFQUFFQyxLQUFLO0FBQUEsTUFDckQsRUFBRTtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBRUEsU0FDRSx1QkFBQyxVQUFLLFVBQVVoQixjQUFjLFlBQVUsTUFDdEM7QUFBQTtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsTUFBSztBQUFBLFFBQ0wsT0FBTTtBQUFBLFFBQ04sTUFBSztBQUFBLFFBQ0wsT0FBT0osT0FBT047QUFBQUEsUUFDZCxVQUFVd0I7QUFBQUEsUUFDVixNQUFJO0FBQUE7QUFBQSxNQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU1NO0FBQUEsSUFFTjtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsTUFBSztBQUFBLFFBQ0wsT0FBTTtBQUFBLFFBQ04sTUFBSztBQUFBLFFBQ0wsT0FBT2xCLE9BQU9MO0FBQUFBLFFBQ2QsVUFBVXVCO0FBQUFBLFFBQ1YsTUFBSTtBQUFBO0FBQUEsTUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNTTtBQUFBLElBRU4sdUJBQUMsVUFBTyxNQUFLLFVBQVMsTUFBSSw0QkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUVBO0FBQUEsT0FuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQW9CQTtBQUVKO0FBQUNuQixHQTdEZUYsV0FBUztBQUFBeUIsS0FBVHpCO0FBQVMsSUFBQXlCO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJ1c2VSZWYiLCJoYXNFcnJvcnMiLCJ2YWxpZGF0ZUVtYWlsIiwidmFsaWRhdGVQYXNzd29yZCIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsInZhbGlkYXRvcnMiLCJlbWFpbCIsInBhc3N3b3JkIiwibm9PcCIsIkxvZ2luRm9ybSIsIm9uU3VibWl0IiwiX3MiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJ1c2VTdGF0ZSIsImZpcnN0U3VibWl0IiwiaGFuZGxlU3VibWl0IiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJmZCIsIkZvcm1EYXRhIiwiY3VycmVudFRhcmdldCIsInZhbHVlcyIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIm5ld0Vycm9ycyIsImtleSIsInR5cGVkS2V5IiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsInZhbHVlIiwicHJldiIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkxvZ2luRm9ybS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaGFzRXJyb3JzLCB2YWxpZGF0ZUVtYWlsLCB2YWxpZGF0ZVBhc3N3b3JkIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm1zXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UZXh0RmllbGQvVGV4dEZpZWxkXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uXCI7XG5cbnR5cGUgTG9naW5FcnJvcnMgPSB7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBwYXNzd29yZD86IHN0cmluZztcbn07XG5cbnR5cGUgU3VibWl0VmFsdWVzID0gUmVxdWlyZWQ8TG9naW5FcnJvcnM+O1xuXG5jb25zdCB2YWxpZGF0b3JzID0ge1xuICBlbWFpbDogdmFsaWRhdGVFbWFpbCxcbiAgcGFzc3dvcmQ6IHZhbGlkYXRlUGFzc3dvcmQsXG59O1xuXG5jb25zdCBub09wID0gKCkgPT4gbnVsbDtcblxuaW50ZXJmYWNlIExvZ2luRm9ybVByb3BzIHtcbiAgb25TdWJtaXQ/OiAodmFsdWVzOiBTdWJtaXRWYWx1ZXMpID0+IHZvaWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gTG9naW5Gb3JtKHsgb25TdWJtaXQgPSBub09wIH06IExvZ2luRm9ybVByb3BzKSB7XG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZTxMb2dpbkVycm9ycz4oe30pO1xuXG4gIGNvbnN0IGZpcnN0U3VibWl0ID0gdXNlUmVmPGJvb2xlYW4+KHRydWUpO1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXY6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgIGZpcnN0U3VibWl0LmN1cnJlbnQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKGV2LmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC5mcm9tRW50cmllcyhmZC5lbnRyaWVzKCkpO1xuICAgIGNvbnN0IG5ld0Vycm9yczogTG9naW5FcnJvcnMgPSB7fTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlcykge1xuICAgICAgY29uc3QgdHlwZWRLZXkgPSBrZXkgYXMga2V5b2YgTG9naW5FcnJvcnM7XG4gICAgICBuZXdFcnJvcnNbdHlwZWRLZXldID0gdmFsaWRhdG9yc1t0eXBlZEtleV0odmFsdWVzW2tleV0gYXMgc3RyaW5nKTtcbiAgICB9XG5cbiAgICBpZiAoaGFzRXJyb3JzKG5ld0Vycm9ycykpIHtcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvcnMoe30pO1xuICAgICAgZmlyc3RTdWJtaXQuY3VycmVudCA9IHRydWU7XG4gICAgICBvblN1Ym1pdCh2YWx1ZXMgYXMgU3VibWl0VmFsdWVzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2LmN1cnJlbnRUYXJnZXQ7XG5cbiAgICBpZiAoIWZpcnN0U3VibWl0LmN1cnJlbnQpIHtcbiAgICAgIHNldEVycm9ycygocHJldikgPT4gKHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgW25hbWVdOiB2YWxpZGF0b3JzW25hbWUgYXMga2V5b2YgTG9naW5FcnJvcnNdKHZhbHVlKSxcbiAgICAgIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBub1ZhbGlkYXRlPlxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgZXJyb3I9e2Vycm9ycy5lbWFpbH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgZnVsbFxuICAgICAgLz5cbiAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgIGVycm9yPXtlcnJvcnMucGFzc3dvcmR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIGZ1bGxcbiAgICAgIC8+XG4gICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBmdWxsPlxuICAgICAgICBMb2cgaW5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL1VzZXJzL250b25pb2NwL0RvY3VtZW50cy9EZXYvY2hyb21hdGljLXN0b3J5Ym9vay9zcmMvZmVhdHVyZXMvTG9naW4vTG9naW5Gb3JtLnRzeCJ9