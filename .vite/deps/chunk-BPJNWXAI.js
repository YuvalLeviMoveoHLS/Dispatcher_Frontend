import {
  __toESM,
  require_react
} from "./chunk-L7APZED3.js";

// node_modules/@mui/material/FormControl/useFormControl.js
var React2 = __toESM(require_react());

// node_modules/@mui/material/FormControl/FormControlContext.js
var React = __toESM(require_react());
var FormControlContext = React.createContext(void 0);
if (true) {
  FormControlContext.displayName = "FormControlContext";
}
var FormControlContext_default = FormControlContext;

// node_modules/@mui/material/FormControl/useFormControl.js
function useFormControl() {
  return React2.useContext(FormControlContext_default);
}

// node_modules/@mui/material/InputBase/utils.js
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
}
function isFilled(obj, SSR = false) {
  return obj && (hasValue(obj.value) && obj.value !== "" || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== "");
}
function isAdornedStart(obj) {
  return obj.startAdornment;
}

export {
  isFilled,
  isAdornedStart,
  FormControlContext_default,
  useFormControl
};
//# sourceMappingURL=chunk-BPJNWXAI.js.map
