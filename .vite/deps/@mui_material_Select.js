"use client";
import {
  ListContext_default,
  Transition_default,
  useEnhancedEffect_default as useEnhancedEffect_default2,
  useForkRef_default
} from "./chunk-BKPP3D3N.js";
import {
  require_react_dom
} from "./chunk-MDIHFEFG.js";
import {
  FormControlContext_default,
  isFilled,
  useFormControl
} from "./chunk-BPJNWXAI.js";
import {
  GlobalStyles_default,
  HTMLElementType,
  _extends,
  _objectWithoutPropertiesLoose,
  alpha,
  capitalize_default,
  chainPropTypes,
  clsx_default,
  composeClasses,
  createChainedFunction,
  debounce,
  deepmerge,
  defaultTheme_default,
  elementAcceptingRef_default,
  elementTypeAcceptingRef_default,
  exactProp,
  generateUtilityClass,
  generateUtilityClasses,
  getScrollbarSize,
  identifier_default,
  integerPropType_default,
  ownerDocument,
  ownerWindow,
  refType_default,
  require_jsx_runtime,
  require_prop_types,
  rootShouldForwardProp,
  setRef,
  slotShouldForwardProp,
  styled_default,
  useControlled,
  useEnhancedEffect_default,
  useEventCallback_default,
  useForkRef,
  useId,
  useIsFocusVisible,
  usePreviousProps_default,
  useThemeProps,
  useTheme_default,
  visuallyHidden_default
} from "./chunk-ALPUVBS4.js";
import "./chunk-JKGW3AQO.js";
import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-L7APZED3.js";

// node_modules/@mui/material/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/@mui/material/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_SERVER_CONTEXT_TYPE:
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment13 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal3 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement2(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment4(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object) {
          return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment13;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal3;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.SuspenseList = SuspenseList;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement2;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment4;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isSuspenseList = isSuspenseList;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/@mui/material/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/@mui/material/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/@mui/material/Select/Select.js
var React87 = __toESM(require_react());
var import_prop_types46 = __toESM(require_prop_types());

// node_modules/@mui/material/Select/SelectInput.js
var React77 = __toESM(require_react());
var import_react_is3 = __toESM(require_react_is());
var import_prop_types38 = __toESM(require_prop_types());

// node_modules/@mui/material/utils/ownerDocument.js
var ownerDocument_default = ownerDocument;

// node_modules/@mui/material/Menu/Menu.js
var React75 = __toESM(require_react());
var import_react_is2 = __toESM(require_react_is());
var import_prop_types36 = __toESM(require_prop_types());

// node_modules/@mui/base/utils/isHostComponent.js
function isHostComponent(element) {
  return typeof element === "string";
}

// node_modules/@mui/base/utils/appendOwnerState.js
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === void 0 || isHostComponent(elementType)) {
    return otherProps;
  }
  return _extends({}, otherProps, {
    ownerState: _extends({}, otherProps.ownerState, ownerState)
  });
}

// node_modules/@mui/base/utils/areArraysEqual.js
function areArraysEqual(array1, array2, itemComparer = (a, b) => a === b) {
  return array1.length === array2.length && array1.every((value, index) => itemComparer(value, array2[index]));
}

// node_modules/@mui/base/utils/ClassNameConfigurator.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var defaultContextValue = {
  disableDefaultClasses: false
};
var ClassNameConfiguratorContext = React.createContext(defaultContextValue);
function useClassNamesOverride(generateUtilityClass2) {
  const {
    disableDefaultClasses
  } = React.useContext(ClassNameConfiguratorContext);
  return (slot) => {
    if (disableDefaultClasses) {
      return "";
    }
    return generateUtilityClass2(slot);
  };
}

// node_modules/@mui/base/utils/extractEventHandlers.js
function extractEventHandlers(object, excludeKeys = []) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] === "function" && !excludeKeys.includes(prop)).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}

// node_modules/@mui/base/utils/resolveComponentProps.js
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === "function") {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}

// node_modules/@mui/base/utils/omitEventHandlers.js
function omitEventHandlers(object) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => !(prop.match(/^on[A-Z]/) && typeof object[prop] === "function")).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}

// node_modules/@mui/base/utils/mergeSlotProps.js
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    const joinedClasses2 = clsx_default(externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className, className, additionalProps == null ? void 0 : additionalProps.className);
    const mergedStyle2 = _extends({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
    const props2 = _extends({}, additionalProps, externalForwardedProps, externalSlotProps);
    if (joinedClasses2.length > 0) {
      props2.className = joinedClasses2;
    }
    if (Object.keys(mergedStyle2).length > 0) {
      props2.style = mergedStyle2;
    }
    return {
      props: props2,
      internalRef: void 0
    };
  }
  const eventHandlers = extractEventHandlers(_extends({}, externalForwardedProps, externalSlotProps));
  const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);
  const joinedClasses = clsx_default(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  const mergedStyle = _extends({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
  const props = _extends({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}

// node_modules/@mui/base/utils/useSlotProps.js
var _excluded = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function useSlotProps(parameters) {
  var _parameters$additiona;
  const {
    elementType,
    externalSlotProps,
    ownerState,
    skipResolvingSlotProps = false
  } = parameters, rest = _objectWithoutPropertiesLoose(parameters, _excluded);
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps(_extends({}, rest, {
    externalSlotProps: resolvedComponentsProps
  }));
  const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
  const props = appendOwnerState(elementType, _extends({}, mergedProps, {
    ref
  }), ownerState);
  return props;
}

// node_modules/@mui/material/MenuList/MenuList.js
var React3 = __toESM(require_react());
var import_react_is = __toESM(require_react_is());
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/@mui/material/List/List.js
var React2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/material/List/listClasses.js
function getListUtilityClass(slot) {
  return generateUtilityClass("MuiList", slot);
}
var listClasses = generateUtilityClasses("MuiList", ["root", "padding", "dense", "subheader"]);

// node_modules/@mui/material/List/List.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var _excluded2 = ["children", "className", "component", "dense", "disablePadding", "subheader"];
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    disablePadding,
    dense,
    subheader
  } = ownerState;
  const slots = {
    root: ["root", !disablePadding && "padding", dense && "dense", subheader && "subheader"]
  };
  return composeClasses(slots, getListUtilityClass, classes);
};
var ListRoot = styled_default("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, !ownerState.disablePadding && styles4.padding, ownerState.dense && styles4.dense, ownerState.subheader && styles4.subheader];
  }
})(({
  ownerState
}) => _extends({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !ownerState.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, ownerState.subheader && {
  paddingTop: 0
}));
var List = React2.forwardRef(function List2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiList"
  });
  const {
    children,
    className,
    component = "ul",
    dense = false,
    disablePadding = false,
    subheader
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const context = React2.useMemo(() => ({
    dense
  }), [dense]);
  const ownerState = _extends({}, props, {
    component,
    dense,
    disablePadding
  });
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime3.jsx)(ListContext_default.Provider, {
    value: context,
    children: (0, import_jsx_runtime2.jsxs)(ListRoot, _extends({
      as: component,
      className: clsx_default(classes.root, className),
      ref,
      ownerState
    }, other, {
      children: [subheader, children]
    }))
  });
});
true ? List.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: import_prop_types.default.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: import_prop_types.default.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: import_prop_types.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var List_default = List;

// node_modules/@mui/material/utils/getScrollbarSize.js
var getScrollbarSize_default = getScrollbarSize;

// node_modules/@mui/material/MenuList/MenuList.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var _excluded3 = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return disableListWrap ? null : list.firstChild;
}
function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return disableListWrap ? null : list.lastChild;
}
function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === void 0) {
    return true;
  }
  let text = nextFocus.innerText;
  if (text === void 0) {
    text = nextFocus.textContent;
  }
  text = text.trim().toLowerCase();
  if (text.length === 0) {
    return false;
  }
  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }
  return text.indexOf(textCriteria.keys.join("")) === 0;
}
function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);
  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return false;
      }
      wrappedOnce = true;
    }
    const nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return true;
    }
  }
  return false;
}
var MenuList = React3.forwardRef(function MenuList2(props, ref) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions,
    autoFocus = false,
    autoFocusItem = false,
    children,
    className,
    disabledItemsFocusable = false,
    disableListWrap = false,
    onKeyDown,
    variant = "selectedMenu"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const listRef = React3.useRef(null);
  const textCriteriaRef = React3.useRef({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect_default2(() => {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  React3.useImperativeHandle(actions, () => ({
    adjustStyleForScrollbar: (containerElement, theme) => {
      const noExplicitWidth = !listRef.current.style.width;
      if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
        const scrollbarSize = `${getScrollbarSize_default(ownerDocument_default(containerElement))}px`;
        listRef.current.style[theme.direction === "rtl" ? "paddingLeft" : "paddingRight"] = scrollbarSize;
        listRef.current.style.width = `calc(100% + ${scrollbarSize})`;
      }
      return listRef.current;
    }
  }), []);
  const handleKeyDown2 = (event) => {
    const list = listRef.current;
    const key = event.key;
    const currentFocus = ownerDocument_default(list).activeElement;
    if (key === "ArrowDown") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "ArrowUp") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === "Home") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "End") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      const criteria = textCriteriaRef.current;
      const lowerKey = key.toLowerCase();
      const currTime = performance.now();
      if (criteria.keys.length > 0) {
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }
      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      const keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleRef = useForkRef_default(listRef, ref);
  let activeItemIndex = -1;
  React3.Children.forEach(children, (child, index) => {
    if (!React3.isValidElement(child)) {
      if (activeItemIndex === index) {
        activeItemIndex += 1;
        if (activeItemIndex >= children.length) {
          activeItemIndex = -1;
        }
      }
      return;
    }
    if (true) {
      if ((0, import_react_is.isFragment)(child)) {
        console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
    if (activeItemIndex === index && (child.props.disabled || child.props.muiSkipListHighlight || child.type.muiSkipListHighlight)) {
      activeItemIndex += 1;
      if (activeItemIndex >= children.length) {
        activeItemIndex = -1;
      }
    }
  });
  const items = React3.Children.map(children, (child, index) => {
    if (index === activeItemIndex) {
      const newChildProps = {};
      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }
      if (child.props.tabIndex === void 0 && variant === "selectedMenu") {
        newChildProps.tabIndex = 0;
      }
      return React3.cloneElement(child, newChildProps);
    }
    return child;
  });
  return (0, import_jsx_runtime4.jsx)(List_default, _extends({
    role: "menu",
    ref: handleRef,
    className,
    onKeyDown: handleKeyDown2,
    tabIndex: autoFocus ? 0 : -1
  }, other, {
    children: items
  }));
});
true ? MenuList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: import_prop_types2.default.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: import_prop_types2.default.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: import_prop_types2.default.node,
  /**
   * @ignore
   */
  className: import_prop_types2.default.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: import_prop_types2.default.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: import_prop_types2.default.bool,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types2.default.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: import_prop_types2.default.oneOf(["menu", "selectedMenu"])
} : void 0;
var MenuList_default = MenuList;

// node_modules/@mui/material/Popover/Popover.js
var React74 = __toESM(require_react());
var import_prop_types35 = __toESM(require_prop_types());

// node_modules/@mui/base/Badge/Badge.js
var React4 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@mui/base/useBadge/useBadge.js
function useBadge(parameters) {
  const {
    badgeContent: badgeContentProp,
    invisible: invisibleProp = false,
    max: maxProp = 99,
    showZero = false
  } = parameters;
  const prevProps = usePreviousProps_default({
    badgeContent: badgeContentProp,
    max: maxProp
  });
  let invisible = invisibleProp;
  if (invisibleProp === false && badgeContentProp === 0 && !showZero) {
    invisible = true;
  }
  const {
    badgeContent,
    max: max2 = maxProp
  } = invisible ? prevProps : parameters;
  const displayValue = badgeContent && Number(badgeContent) > max2 ? `${max2}+` : badgeContent;
  return {
    badgeContent,
    invisible,
    max: max2,
    displayValue
  };
}

// node_modules/@mui/base/Badge/badgeClasses.js
function getBadgeUtilityClass(slot) {
  return generateUtilityClass("MuiBadge", slot);
}
var badgeClasses = generateUtilityClasses("MuiBadge", ["root", "badge", "invisible"]);

// node_modules/@mui/base/Badge/Badge.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var _excluded4 = ["badgeContent", "children", "invisible", "max", "slotProps", "slots", "showZero"];
var useUtilityClasses2 = (ownerState) => {
  const {
    invisible
  } = ownerState;
  const slots = {
    root: ["root"],
    badge: ["badge", invisible && "invisible"]
  };
  return composeClasses(slots, useClassNamesOverride(getBadgeUtilityClass));
};
var Badge = React4.forwardRef(function Badge2(props, forwardedRef) {
  var _slots$root, _slots$badge;
  const {
    children,
    max: maxProp = 99,
    slotProps = {},
    slots = {},
    showZero = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const {
    badgeContent,
    max: max2,
    displayValue,
    invisible
  } = useBadge(_extends({}, props, {
    max: maxProp
  }));
  const ownerState = _extends({}, props, {
    badgeContent,
    invisible,
    max: max2,
    showZero
  });
  const classes = useUtilityClasses2(ownerState);
  const Root = (_slots$root = slots.root) != null ? _slots$root : "span";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  const BadgeComponent = (_slots$badge = slots.badge) != null ? _slots$badge : "span";
  const badgeProps = useSlotProps({
    elementType: BadgeComponent,
    externalSlotProps: slotProps.badge,
    ownerState,
    className: classes.badge
  });
  return (0, import_jsx_runtime6.jsxs)(Root, _extends({}, rootProps, {
    children: [children, (0, import_jsx_runtime5.jsx)(BadgeComponent, _extends({}, badgeProps, {
      children: displayValue
    }))]
  }));
});
true ? Badge.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content rendered within the badge.
   */
  badgeContent: import_prop_types3.default.node,
  /**
   * The badge will be added relative to this node.
   */
  children: import_prop_types3.default.node,
  /**
   * If `true`, the badge is invisible.
   * @default false
   */
  invisible: import_prop_types3.default.bool,
  /**
   * Max count to show.
   * @default 99
   */
  max: import_prop_types3.default.number,
  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   * @default false
   */
  showZero: import_prop_types3.default.bool,
  /**
   * The props used for each slot inside the Badge.
   * @default {}
   */
  slotProps: import_prop_types3.default.shape({
    badge: import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object]),
    root: import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object])
  }),
  /**
   * The components used for each slot inside the Badge.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types3.default.shape({
    badge: import_prop_types3.default.elementType,
    root: import_prop_types3.default.elementType
  })
} : void 0;

// node_modules/@mui/base/Button/Button.js
var React6 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());

// node_modules/@mui/base/Button/buttonClasses.js
function getButtonUtilityClass(slot) {
  return generateUtilityClass("MuiButton", slot);
}
var buttonClasses = generateUtilityClasses("MuiButton", ["root", "active", "disabled", "focusVisible"]);

// node_modules/@mui/base/useButton/useButton.js
var React5 = __toESM(require_react());
function useButton(parameters = {}) {
  const {
    disabled = false,
    focusableWhenDisabled,
    href,
    rootRef: externalRef,
    tabIndex,
    to,
    type
  } = parameters;
  const buttonRef = React5.useRef();
  const [active, setActive] = React5.useState(false);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = React5.useState(false);
  if (disabled && !focusableWhenDisabled && focusVisible) {
    setFocusVisible(false);
  }
  React5.useEffect(() => {
    isFocusVisibleRef.current = focusVisible;
  }, [focusVisible, isFocusVisibleRef]);
  const [hostElementName, setHostElementName] = React5.useState("");
  const createHandleMouseLeave = (otherHandlers) => (event) => {
    var _otherHandlers$onMous;
    if (focusVisible) {
      event.preventDefault();
    }
    (_otherHandlers$onMous = otherHandlers.onMouseLeave) == null ? void 0 : _otherHandlers$onMous.call(otherHandlers, event);
  };
  const createHandleBlur = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur;
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);
  };
  const createHandleFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu2;
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      var _otherHandlers$onFocu;
      setFocusVisible(true);
      (_otherHandlers$onFocu = otherHandlers.onFocusVisible) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);
    }
    (_otherHandlers$onFocu2 = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu2.call(otherHandlers, event);
  };
  const isNativeButton = () => {
    const button = buttonRef.current;
    return hostElementName === "BUTTON" || hostElementName === "INPUT" && ["button", "submit", "reset"].includes(button == null ? void 0 : button.type) || hostElementName === "A" && (button == null ? void 0 : button.href);
  };
  const createHandleClick = (otherHandlers) => (event) => {
    if (!disabled) {
      var _otherHandlers$onClic;
      (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);
    }
  };
  const createHandleMouseDown = (otherHandlers) => (event) => {
    var _otherHandlers$onMous2;
    if (!disabled) {
      setActive(true);
      document.addEventListener("mouseup", () => {
        setActive(false);
      }, {
        once: true
      });
    }
    (_otherHandlers$onMous2 = otherHandlers.onMouseDown) == null ? void 0 : _otherHandlers$onMous2.call(otherHandlers, event);
  };
  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null ? void 0 : _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if (event.target === event.currentTarget && !isNativeButton() && event.key === " ") {
      event.preventDefault();
    }
    if (event.target === event.currentTarget && event.key === " " && !disabled) {
      setActive(true);
    }
    if (event.target === event.currentTarget && !isNativeButton() && event.key === "Enter" && !disabled) {
      var _otherHandlers$onClic2;
      (_otherHandlers$onClic2 = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic2.call(otherHandlers, event);
      event.preventDefault();
    }
  };
  const createHandleKeyUp = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyU;
    if (event.target === event.currentTarget) {
      setActive(false);
    }
    (_otherHandlers$onKeyU = otherHandlers.onKeyUp) == null ? void 0 : _otherHandlers$onKeyU.call(otherHandlers, event);
    if (event.target === event.currentTarget && !isNativeButton() && !disabled && event.key === " " && !event.defaultMuiPrevented) {
      var _otherHandlers$onClic3;
      (_otherHandlers$onClic3 = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic3.call(otherHandlers, event);
    }
  };
  const updateHostElementName = React5.useCallback((instance) => {
    var _instance$tagName;
    setHostElementName((_instance$tagName = instance == null ? void 0 : instance.tagName) != null ? _instance$tagName : "");
  }, []);
  const handleRef = useForkRef(updateHostElementName, externalRef, focusVisibleRef, buttonRef);
  const buttonProps = {};
  if (hostElementName === "BUTTON") {
    buttonProps.type = type != null ? type : "button";
    if (focusableWhenDisabled) {
      buttonProps["aria-disabled"] = disabled;
    } else {
      buttonProps.disabled = disabled;
    }
  } else if (hostElementName !== "") {
    if (!href && !to) {
      buttonProps.role = "button";
      buttonProps.tabIndex = tabIndex != null ? tabIndex : 0;
    }
    if (disabled) {
      buttonProps["aria-disabled"] = disabled;
      buttonProps.tabIndex = focusableWhenDisabled ? tabIndex != null ? tabIndex : 0 : -1;
    }
  }
  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters);
    const externalEventHandlers = _extends({}, propsEventHandlers, otherHandlers);
    delete externalEventHandlers.onFocusVisible;
    return _extends({
      type
    }, externalEventHandlers, buttonProps, {
      onBlur: createHandleBlur(externalEventHandlers),
      onClick: createHandleClick(externalEventHandlers),
      onFocus: createHandleFocus(externalEventHandlers),
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      onKeyUp: createHandleKeyUp(externalEventHandlers),
      onMouseDown: createHandleMouseDown(externalEventHandlers),
      onMouseLeave: createHandleMouseLeave(externalEventHandlers),
      ref: handleRef
    });
  };
  return {
    getRootProps,
    focusVisible,
    setFocusVisible,
    active,
    rootRef: handleRef
  };
}

// node_modules/@mui/base/Button/Button.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var _excluded5 = ["action", "children", "disabled", "focusableWhenDisabled", "onFocusVisible", "slotProps", "slots"];
var useUtilityClasses3 = (ownerState) => {
  const {
    active,
    disabled,
    focusVisible
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible", active && "active"]
  };
  return composeClasses(slots, useClassNamesOverride(getButtonUtilityClass));
};
var Button = React6.forwardRef(function Button2(props, forwardedRef) {
  var _slots$root;
  const {
    action,
    children,
    focusableWhenDisabled = false,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const buttonRef = React6.useRef();
  const {
    active,
    focusVisible,
    setFocusVisible,
    getRootProps
  } = useButton(_extends({}, props, {
    focusableWhenDisabled
  }));
  React6.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), [setFocusVisible]);
  const ownerState = _extends({}, props, {
    active,
    focusableWhenDisabled,
    focusVisible
  });
  const classes = useUtilityClasses3(ownerState);
  const defaultElement = other.href || other.to ? "a" : "button";
  const Root = (_slots$root = slots.root) != null ? _slots$root : defaultElement;
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    externalSlotProps: slotProps.root,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime7.jsx)(Root, _extends({}, rootProps, {
    children
  }));
});
true ? Button.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.shape({
    current: import_prop_types4.default.shape({
      focusVisible: import_prop_types4.default.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  children: import_prop_types4.default.node,
  /**
   * @ignore
   */
  className: import_prop_types4.default.string,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types4.default.bool,
  /**
   * If `true`, allows a disabled button to receive focus.
   * @default false
   */
  focusableWhenDisabled: import_prop_types4.default.bool,
  /**
   * @ignore
   */
  href: import_prop_types4.default.string,
  /**
   * @ignore
   */
  onFocusVisible: import_prop_types4.default.func,
  /**
   * The props used for each slot inside the Button.
   * @default {}
   */
  slotProps: import_prop_types4.default.shape({
    root: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object])
  }),
  /**
   * The components used for each slot inside the Button.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types4.default.shape({
    root: import_prop_types4.default.elementType
  }),
  /**
   * @ignore
   */
  to: import_prop_types4.default.string
} : void 0;

// node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js
var React7 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
function ClickAwayListener(props) {
  const {
    children,
    disableReactTree = false,
    mouseEvent = "onClick",
    onClickAway,
    touchEvent = "onTouchEnd"
  } = props;
  const movedRef = React7.useRef(false);
  const nodeRef = React7.useRef(null);
  const activatedRef = React7.useRef(false);
  const syntheticEventRef = React7.useRef(false);
  React7.useEffect(() => {
    setTimeout(() => {
      activatedRef.current = true;
    }, 0);
    return () => {
      activatedRef.current = false;
    };
  }, []);
  const handleRef = useForkRef(
    // @ts-expect-error TODO upstream fix
    children.ref,
    nodeRef
  );
  const handleClickAway = useEventCallback_default((event) => {
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current);
    if (!activatedRef.current || !nodeRef.current || "clientX" in event && clickedRootScrollbar(event, doc)) {
      return;
    }
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;
    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains(
        // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target
      ) || nodeRef.current.contains(
        // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target
      );
    }
    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  });
  const createHandleSynthetic = (handlerName) => (event) => {
    syntheticEventRef.current = true;
    const childrenPropsHandler = children.props[handlerName];
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const childrenProps = {
    ref: handleRef
  };
  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }
  React7.useEffect(() => {
    if (touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);
      const doc = ownerDocument(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener("touchmove", handleTouchMove);
      return () => {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener("touchmove", handleTouchMove);
      };
    }
    return void 0;
  }, [handleClickAway, touchEvent]);
  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }
  React7.useEffect(() => {
    if (mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return () => {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }
    return void 0;
  }, [handleClickAway, mouseEvent]);
  return (0, import_jsx_runtime8.jsx)(React7.Fragment, {
    children: React7.cloneElement(children, childrenProps)
  });
}
true ? ClickAwayListener.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The wrapped element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * If `true`, the React tree is ignored and only the DOM tree is considered.
   * This prop changes how portaled elements are handled.
   * @default false
   */
  disableReactTree: import_prop_types5.default.bool,
  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   * @default 'onClick'
   */
  mouseEvent: import_prop_types5.default.oneOf(["onClick", "onMouseDown", "onMouseUp", "onPointerDown", "onPointerUp", false]),
  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: import_prop_types5.default.func.isRequired,
  /**
   * The touch event to listen to. You can disable the listener by providing `false`.
   * @default 'onTouchEnd'
   */
  touchEvent: import_prop_types5.default.oneOf(["onTouchEnd", "onTouchStart", false])
} : void 0;
if (true) {
  ClickAwayListener["propTypes"] = exactProp(ClickAwayListener.propTypes);
}

// node_modules/@mui/base/Dropdown/Dropdown.js
var React11 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());

// node_modules/@mui/base/useDropdown/DropdownContext.js
var React8 = __toESM(require_react());
var DropdownContext = React8.createContext(null);

// node_modules/@mui/base/useDropdown/useDropdown.js
var React10 = __toESM(require_react());

// node_modules/@mui/base/utils/useControllableReducer.js
var React9 = __toESM(require_react());
function areEqual(a, b) {
  return a === b;
}
var EMPTY_OBJECT = {};
var NOOP = () => {
};
function getControlledState(internalState, controlledProps) {
  const augmentedState = _extends({}, internalState);
  Object.keys(controlledProps).forEach((key) => {
    if (controlledProps[key] !== void 0) {
      augmentedState[key] = controlledProps[key];
    }
  });
  return augmentedState;
}
function useStateChangeDetection(parameters) {
  const {
    nextState,
    initialState,
    stateComparers,
    onStateChange,
    controlledProps,
    lastActionRef
  } = parameters;
  const internalPreviousStateRef = React9.useRef(initialState);
  React9.useEffect(() => {
    if (lastActionRef.current === null) {
      return;
    }
    const previousState = getControlledState(internalPreviousStateRef.current, controlledProps);
    Object.keys(nextState).forEach((key) => {
      var _stateComparers$key;
      const stateComparer = (_stateComparers$key = stateComparers[key]) != null ? _stateComparers$key : areEqual;
      const nextStateItem = nextState[key];
      const previousStateItem = previousState[key];
      if (previousStateItem == null && nextStateItem != null || previousStateItem != null && nextStateItem == null || previousStateItem != null && nextStateItem != null && !stateComparer(nextStateItem, previousStateItem)) {
        var _event, _type;
        onStateChange == null ? void 0 : onStateChange((_event = lastActionRef.current.event) != null ? _event : null, key, nextStateItem, (_type = lastActionRef.current.type) != null ? _type : "", nextState);
      }
    });
    internalPreviousStateRef.current = nextState;
    lastActionRef.current = null;
  }, [internalPreviousStateRef, nextState, lastActionRef, onStateChange, stateComparers, controlledProps]);
}
function useControllableReducer(parameters) {
  const lastActionRef = React9.useRef(null);
  const {
    reducer,
    initialState,
    controlledProps = EMPTY_OBJECT,
    stateComparers = EMPTY_OBJECT,
    onStateChange = NOOP,
    actionContext
  } = parameters;
  const reducerWithControlledState = React9.useCallback((state, action) => {
    lastActionRef.current = action;
    const controlledState = getControlledState(state, controlledProps);
    const newState = reducer(controlledState, action);
    return newState;
  }, [controlledProps, reducer]);
  const [nextState, dispatch] = React9.useReducer(reducerWithControlledState, initialState);
  const dispatchWithContext = React9.useCallback((action) => {
    dispatch(_extends({}, action, {
      context: actionContext
    }));
  }, [actionContext]);
  useStateChangeDetection({
    nextState,
    initialState,
    stateComparers: stateComparers != null ? stateComparers : EMPTY_OBJECT,
    onStateChange: onStateChange != null ? onStateChange : NOOP,
    controlledProps,
    lastActionRef
  });
  return [getControlledState(nextState, controlledProps), dispatchWithContext];
}

// node_modules/@mui/base/useDropdown/useDropdown.types.js
var DropdownActionTypes = {
  blur: "dropdown:blur",
  escapeKeyDown: "dropdown:escapeKeyDown",
  toggle: "dropdown:toggle",
  open: "dropdown:open",
  close: "dropdown:close"
};

// node_modules/@mui/base/useDropdown/dropdownReducer.js
function dropdownReducer(state, action) {
  switch (action.type) {
    case DropdownActionTypes.blur:
      return {
        open: false
      };
    case DropdownActionTypes.escapeKeyDown:
      return {
        open: false
      };
    case DropdownActionTypes.toggle:
      return {
        open: !state.open
      };
    case DropdownActionTypes.open:
      return {
        open: true
      };
    case DropdownActionTypes.close:
      return {
        open: false
      };
    default:
      throw new Error(`Unhandled action`);
  }
}

// node_modules/@mui/base/useDropdown/useDropdown.js
function useDropdown(parameters = {}) {
  const {
    defaultOpen,
    onOpenChange,
    open: openProp
  } = parameters;
  const [popupId, setPopupId] = React10.useState("");
  const [triggerElement, setTriggerElement] = React10.useState(null);
  const lastActionType = React10.useRef(null);
  const handleStateChange = React10.useCallback((event, field, value, reason) => {
    if (field === "open") {
      onOpenChange == null ? void 0 : onOpenChange(event, value);
    }
    lastActionType.current = reason;
  }, [onOpenChange]);
  const controlledProps = React10.useMemo(() => openProp !== void 0 ? {
    open: openProp
  } : {}, [openProp]);
  const [state, dispatch] = useControllableReducer({
    controlledProps,
    initialState: defaultOpen ? {
      open: true
    } : {
      open: false
    },
    onStateChange: handleStateChange,
    reducer: dropdownReducer
  });
  React10.useEffect(() => {
    if (!state.open && lastActionType.current !== null && lastActionType.current !== DropdownActionTypes.blur) {
      triggerElement == null ? void 0 : triggerElement.focus();
    }
  }, [state.open, triggerElement]);
  const contextValue = {
    state,
    dispatch,
    popupId,
    registerPopup: setPopupId,
    registerTrigger: setTriggerElement,
    triggerElement
  };
  return {
    contextValue,
    open: state.open
  };
}

// node_modules/@mui/base/Dropdown/Dropdown.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
function Dropdown(props) {
  const {
    children,
    open,
    defaultOpen,
    onOpenChange
  } = props;
  const {
    contextValue
  } = useDropdown({
    defaultOpen,
    onOpenChange,
    open
  });
  return (0, import_jsx_runtime9.jsx)(DropdownContext.Provider, {
    value: contextValue,
    children
  });
}
true ? Dropdown.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types6.default.node,
  /**
   * If `true`, the dropdown is initially open.
   */
  defaultOpen: import_prop_types6.default.bool,
  /**
   * Callback fired when the component requests to be opened or closed.
   */
  onOpenChange: import_prop_types6.default.func,
  /**
   * Allows to control whether the dropdown is open.
   * This is a controlled counterpart of `defaultOpen`.
   */
  open: import_prop_types6.default.bool
} : void 0;
if (true) {
  Dropdown["propTypes"] = exactProp(Dropdown.propTypes);
}

// node_modules/@mui/base/FocusTrap/FocusTrap.js
var React12 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var candidatesSelector = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function getTabIndex(node) {
  const tabindexAttr = parseInt(node.getAttribute("tabindex") || "", 10);
  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  }
  if (node.contentEditable === "true" || (node.nodeName === "AUDIO" || node.nodeName === "VIDEO" || node.nodeName === "DETAILS") && node.getAttribute("tabindex") === null) {
    return 0;
  }
  return node.tabIndex;
}
function isNonTabbableRadio(node) {
  if (node.tagName !== "INPUT" || node.type !== "radio") {
    return false;
  }
  if (!node.name) {
    return false;
  }
  const getRadio = (selector) => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);
  let roving = getRadio(`[name="${node.name}"]:checked`);
  if (!roving) {
    roving = getRadio(`[name="${node.name}"]`);
  }
  return roving !== node;
}
function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || node.tagName === "INPUT" && node.type === "hidden" || isNonTabbableRadio(node)) {
    return false;
  }
  return true;
}
function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node);
    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }
    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node
      });
    }
  });
  return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map((a) => a.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
  return true;
}
function FocusTrap(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = React12.useRef(false);
  const sentinelStart = React12.useRef(null);
  const sentinelEnd = React12.useRef(null);
  const nodeToRestore = React12.useRef(null);
  const reactFocusEventTarget = React12.useRef(null);
  const activated = React12.useRef(false);
  const rootRef = React12.useRef(null);
  const handleRef = useForkRef(children.ref, rootRef);
  const lastKeydown = React12.useRef(null);
  React12.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  React12.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute("tabIndex")) {
        if (true) {
          console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join("\n"));
        }
        rootRef.current.setAttribute("tabIndex", "-1");
      }
      if (activated.current) {
        rootRef.current.focus();
      }
    }
    return () => {
      if (!disableRestoreFocus) {
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
  }, [open]);
  React12.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    const contain = (nativeEvent) => {
      const {
        current: rootElement
      } = rootRef;
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }
      if (!rootElement.contains(doc.activeElement)) {
        if (nativeEvent && reactFocusEventTarget.current !== nativeEvent.target || doc.activeElement !== reactFocusEventTarget.current) {
          reactFocusEventTarget.current = null;
        } else if (reactFocusEventTarget.current !== null) {
          return;
        }
        if (!activated.current) {
          return;
        }
        let tabbable = [];
        if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
          tabbable = getTabbable(rootRef.current);
        }
        if (tabbable.length > 0) {
          var _lastKeydown$current, _lastKeydown$current2;
          const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === "Tab");
          const focusNext = tabbable[0];
          const focusPrevious = tabbable[tabbable.length - 1];
          if (typeof focusNext !== "string" && typeof focusPrevious !== "string") {
            if (isShiftTab) {
              focusPrevious.focus();
            } else {
              focusNext.focus();
            }
          }
        } else {
          rootElement.focus();
        }
      }
    };
    const loopFocus = (nativeEvent) => {
      lastKeydown.current = nativeEvent;
      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== "Tab") {
        return;
      }
      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        ignoreNextEnforceFocus.current = true;
        if (sentinelEnd.current) {
          sentinelEnd.current.focus();
        }
      }
    };
    doc.addEventListener("focusin", contain);
    doc.addEventListener("keydown", loopFocus, true);
    const interval = setInterval(() => {
      if (doc.activeElement && doc.activeElement.tagName === "BODY") {
        contain(null);
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener("focusin", contain);
      doc.removeEventListener("keydown", loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
  const onFocus = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const handleFocusSentinel = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
  };
  return (0, import_jsx_runtime11.jsxs)(React12.Fragment, {
    children: [(0, import_jsx_runtime10.jsx)("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-testid": "sentinelStart"
    }), React12.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), (0, import_jsx_runtime10.jsx)("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-testid": "sentinelEnd"
    })]
  });
}
true ? FocusTrap.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: import_prop_types7.default.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: import_prop_types7.default.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: import_prop_types7.default.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: import_prop_types7.default.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: import_prop_types7.default.func,
  /**
   * If `true`, focus is locked.
   */
  open: import_prop_types7.default.bool.isRequired
} : void 0;
if (true) {
  FocusTrap["propTypes"] = exactProp(FocusTrap.propTypes);
}

// node_modules/@mui/base/FormControl/FormControl.js
var React14 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());

// node_modules/@mui/base/FormControl/FormControlContext.js
var React13 = __toESM(require_react());
var FormControlContext = React13.createContext(void 0);
if (true) {
  FormControlContext.displayName = "FormControlContext";
}

// node_modules/@mui/base/FormControl/formControlClasses.js
function getFormControlUtilityClass(slot) {
  return generateUtilityClass("MuiFormControl", slot);
}
var formControlClasses = generateUtilityClasses("MuiFormControl", ["root", "disabled", "error", "filled", "focused", "required"]);

// node_modules/@mui/base/FormControl/FormControl.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var _excluded6 = ["defaultValue", "children", "disabled", "error", "onChange", "required", "slotProps", "slots", "value"];
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0) && value !== "";
}
function useUtilityClasses4(ownerState) {
  const {
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focused && "focused", error && "error", filled && "filled", required && "required"]
  };
  return composeClasses(slots, useClassNamesOverride(getFormControlUtilityClass));
}
var FormControl = React14.forwardRef(function FormControl2(props, forwardedRef) {
  var _slots$root;
  const {
    defaultValue,
    children,
    disabled = false,
    error = false,
    onChange,
    required = false,
    slotProps = {},
    slots = {},
    value: incomingValue
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
  const [value, setValue] = useControlled({
    controlled: incomingValue,
    default: defaultValue,
    name: "FormControl",
    state: "value"
  });
  const filled = hasValue(value);
  const [focusedState, setFocused] = React14.useState(false);
  const focused = focusedState && !disabled;
  React14.useEffect(() => setFocused((isFocused) => disabled ? false : isFocused), [disabled]);
  const ownerState = _extends({}, props, {
    disabled,
    error,
    filled,
    focused,
    required
  });
  const childContext = React14.useMemo(() => {
    return {
      disabled,
      error,
      filled,
      focused,
      onBlur: () => {
        setFocused(false);
      },
      onChange: (event) => {
        setValue(event.target.value);
        onChange == null ? void 0 : onChange(event);
      },
      onFocus: () => {
        setFocused(true);
      },
      required,
      value: value != null ? value : ""
    };
  }, [disabled, error, filled, focused, onChange, required, setValue, value]);
  const classes = useUtilityClasses4(ownerState);
  const renderChildren = () => {
    if (typeof children === "function") {
      return children(childContext);
    }
    return children;
  };
  const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef,
      children: renderChildren()
    },
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime12.jsx)(FormControlContext.Provider, {
    value: childContext,
    children: (0, import_jsx_runtime12.jsx)(Root, _extends({}, rootProps))
  });
});
true ? FormControl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types8.default.oneOfType([import_prop_types8.default.node, import_prop_types8.default.func]),
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types8.default.string,
  /**
   * @ignore
   */
  defaultValue: import_prop_types8.default.any,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: import_prop_types8.default.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: import_prop_types8.default.bool,
  /**
   * Callback fired when the form element's value is modified.
   */
  onChange: import_prop_types8.default.func,
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: import_prop_types8.default.bool,
  /**
   * The props used for each slot inside the FormControl.
   * @default {}
   */
  slotProps: import_prop_types8.default.shape({
    root: import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object])
  }),
  /**
   * The components used for each slot inside the FormControl.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types8.default.shape({
    root: import_prop_types8.default.elementType
  }),
  /**
   * The value of the form element.
   */
  value: import_prop_types8.default.any
} : void 0;

// node_modules/@mui/base/FormControl/useFormControlContext.js
var React15 = __toESM(require_react());
function useFormControlContext() {
  return React15.useContext(FormControlContext);
}

// node_modules/@mui/base/Input/Input.js
var React17 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());

// node_modules/@mui/base/Input/inputClasses.js
function getInputUtilityClass(slot) {
  return generateUtilityClass("MuiInput", slot);
}
var inputClasses = generateUtilityClasses("MuiInput", ["root", "formControl", "focused", "disabled", "error", "multiline", "input", "inputMultiline", "inputTypeSearch", "adornedStart", "adornedEnd"]);

// node_modules/@mui/base/useInput/useInput.js
var React16 = __toESM(require_react());
function useInput(parameters) {
  const {
    defaultValue: defaultValueProp,
    disabled: disabledProp = false,
    error: errorProp = false,
    onBlur,
    onChange,
    onFocus,
    required: requiredProp = false,
    value: valueProp,
    inputRef: inputRefProp
  } = parameters;
  const formControlContext = useFormControlContext();
  let defaultValue;
  let disabled;
  let error;
  let required;
  let value;
  if (formControlContext) {
    var _formControlContext$d, _formControlContext$e, _formControlContext$r;
    defaultValue = void 0;
    disabled = (_formControlContext$d = formControlContext.disabled) != null ? _formControlContext$d : false;
    error = (_formControlContext$e = formControlContext.error) != null ? _formControlContext$e : false;
    required = (_formControlContext$r = formControlContext.required) != null ? _formControlContext$r : false;
    value = formControlContext.value;
    if (true) {
      const definedLocalProps = ["defaultValue", "disabled", "error", "required", "value"].filter((prop) => parameters[prop] !== void 0);
      if (definedLocalProps.length > 0) {
        console.warn(["MUI: You have set props on an input that is inside a FormControl.", "Set these props on a FormControl instead. Otherwise they will be ignored.", `Ignored props: ${definedLocalProps.join(", ")}`].join("\n"));
      }
    }
  } else {
    defaultValue = defaultValueProp;
    disabled = disabledProp;
    error = errorProp;
    required = requiredProp;
    value = valueProp;
  }
  const {
    current: isControlled
  } = React16.useRef(value != null);
  const handleInputRefWarning = React16.useCallback((instance) => {
    if (true) {
      if (instance && instance.nodeName !== "INPUT" && !instance.focus) {
        console.error(["MUI: You have provided a `slots.input` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join("\n"));
      }
    }
  }, []);
  const inputRef = React16.useRef(null);
  const handleInputRef = useForkRef(inputRef, inputRefProp, handleInputRefWarning);
  const [focused, setFocused] = React16.useState(false);
  React16.useEffect(() => {
    if (!formControlContext && disabled && focused) {
      setFocused(false);
      onBlur == null ? void 0 : onBlur();
    }
  }, [formControlContext, disabled, focused, onBlur]);
  const handleFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu;
    if (formControlContext != null && formControlContext.disabled) {
      event.stopPropagation();
      return;
    }
    (_otherHandlers$onFocu = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);
    if (formControlContext && formControlContext.onFocus) {
      var _formControlContext$o;
      formControlContext == null || (_formControlContext$o = formControlContext.onFocus) == null ? void 0 : _formControlContext$o.call(formControlContext);
    } else {
      setFocused(true);
    }
  };
  const handleBlur2 = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur;
    (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);
    if (formControlContext && formControlContext.onBlur) {
      formControlContext.onBlur();
    } else {
      setFocused(false);
    }
  };
  const handleChange = (otherHandlers) => (event, ...args) => {
    var _formControlContext$o2, _otherHandlers$onChan;
    if (!isControlled) {
      const element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(true ? `MUI: Expected valid input target. Did you use a custom \`slots.input\` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info.` : formatMuiErrorMessage(17));
      }
    }
    formControlContext == null || (_formControlContext$o2 = formControlContext.onChange) == null ? void 0 : _formControlContext$o2.call(formControlContext, event);
    (_otherHandlers$onChan = otherHandlers.onChange) == null ? void 0 : _otherHandlers$onChan.call(otherHandlers, event, ...args);
  };
  const handleClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);
  };
  const getRootProps = (externalProps = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters, ["onBlur", "onChange", "onFocus"]);
    const externalEventHandlers = _extends({}, propsEventHandlers, extractEventHandlers(externalProps));
    return _extends({}, externalProps, externalEventHandlers, {
      onClick: handleClick(externalEventHandlers)
    });
  };
  const getInputProps = (externalProps = {}) => {
    const propsEventHandlers = {
      onBlur,
      onChange,
      onFocus
    };
    const externalEventHandlers = _extends({}, propsEventHandlers, extractEventHandlers(externalProps));
    const mergedEventHandlers = _extends({}, externalProps, externalEventHandlers, {
      onBlur: handleBlur2(externalEventHandlers),
      onChange: handleChange(externalEventHandlers),
      onFocus: handleFocus(externalEventHandlers)
    });
    return _extends({}, mergedEventHandlers, {
      "aria-invalid": error || void 0,
      defaultValue,
      ref: handleInputRef,
      value,
      required,
      disabled
    });
  };
  return {
    disabled,
    error,
    focused,
    formControlContext,
    getInputProps,
    getRootProps,
    inputRef: handleInputRef,
    required,
    value
  };
}

// node_modules/@mui/base/Input/Input.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var _excluded7 = ["aria-describedby", "aria-label", "aria-labelledby", "autoComplete", "autoFocus", "className", "defaultValue", "disabled", "endAdornment", "error", "id", "multiline", "name", "onClick", "onChange", "onKeyDown", "onKeyUp", "onFocus", "onBlur", "placeholder", "readOnly", "required", "startAdornment", "value", "type", "rows", "slotProps", "slots", "minRows", "maxRows"];
var useUtilityClasses5 = (ownerState) => {
  const {
    disabled,
    error,
    focused,
    formControlContext,
    multiline,
    startAdornment,
    endAdornment
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", error && "error", focused && "focused", Boolean(formControlContext) && "formControl", multiline && "multiline", Boolean(startAdornment) && "adornedStart", Boolean(endAdornment) && "adornedEnd"],
    input: ["input", disabled && "disabled", multiline && "multiline"]
  };
  return composeClasses(slots, useClassNamesOverride(getInputUtilityClass));
};
var Input = React17.forwardRef(function Input2(props, forwardedRef) {
  var _slots$root, _slots$textarea, _slots$input;
  const {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    autoComplete,
    autoFocus,
    className,
    defaultValue,
    disabled,
    endAdornment,
    error,
    id,
    multiline = false,
    name,
    onClick,
    onChange,
    onKeyDown,
    onKeyUp,
    onFocus,
    onBlur,
    placeholder,
    readOnly,
    required,
    startAdornment,
    value,
    type: typeProp,
    rows,
    slotProps = {},
    slots = {},
    minRows,
    maxRows
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded7);
  const {
    getRootProps,
    getInputProps,
    focused,
    formControlContext,
    error: errorState,
    disabled: disabledState
  } = useInput({
    disabled,
    defaultValue,
    error,
    onBlur,
    onClick,
    onChange,
    onFocus,
    required,
    value
  });
  const type = !multiline ? typeProp != null ? typeProp : "text" : void 0;
  const ownerState = _extends({}, props, {
    disabled: disabledState,
    error: errorState,
    focused,
    formControlContext,
    multiline,
    type
  });
  const classes = useUtilityClasses5(ownerState);
  const propsToForward = {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    autoComplete,
    autoFocus,
    id,
    onKeyDown,
    onKeyUp,
    name,
    placeholder,
    readOnly,
    type
  };
  const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: [classes.root, className]
  });
  const InputComponent = multiline ? (_slots$textarea = slots.textarea) != null ? _slots$textarea : "textarea" : (_slots$input = slots.input) != null ? _slots$input : "input";
  const inputProps = useSlotProps({
    elementType: InputComponent,
    getSlotProps: (otherHandlers) => {
      return getInputProps(_extends({}, propsToForward, otherHandlers));
    },
    externalSlotProps: slotProps.input,
    additionalProps: _extends({
      rows: multiline ? rows : void 0
    }, multiline && !isHostComponent(InputComponent) && {
      minRows: rows || minRows,
      maxRows: rows || maxRows
    }),
    ownerState,
    className: classes.input
  });
  if (true) {
    if (multiline) {
      if (rows) {
        if (minRows || maxRows) {
          console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set.");
        }
      }
    }
  }
  return (0, import_jsx_runtime14.jsxs)(Root, _extends({}, rootProps, {
    children: [startAdornment, (0, import_jsx_runtime13.jsx)(InputComponent, _extends({}, inputProps)), endAdornment]
  }));
});
true ? Input.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  "aria-describedby": import_prop_types9.default.string,
  /**
   * @ignore
   */
  "aria-label": import_prop_types9.default.string,
  /**
   * @ignore
   */
  "aria-labelledby": import_prop_types9.default.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types9.default.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: import_prop_types9.default.bool,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types9.default.string,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types9.default.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: import_prop_types9.default.bool,
  /**
   * Trailing adornment for this input.
   */
  endAdornment: import_prop_types9.default.node,
  /**
   * If `true`, the `input` will indicate an error by setting the `aria-invalid` attribute on the input and the `Mui-error` class on the root element.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: import_prop_types9.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types9.default.string,
  /**
   * @ignore
   */
  inputRef: import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.shape({
    current: import_prop_types9.default.object
  })]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types9.default.number,
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: import_prop_types9.default.number,
  /**
   * If `true`, a `textarea` element is rendered.
   * @default false
   */
  multiline: import_prop_types9.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types9.default.string,
  /**
   * @ignore
   */
  onBlur: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onChange: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onKeyUp: import_prop_types9.default.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: import_prop_types9.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types9.default.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: import_prop_types9.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types9.default.number,
  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  slotProps: import_prop_types9.default.shape({
    input: import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object]),
    root: import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object])
  }),
  /**
   * The components used for each slot inside the InputBase.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types9.default.shape({
    input: import_prop_types9.default.elementType,
    root: import_prop_types9.default.elementType,
    textarea: import_prop_types9.default.elementType
  }),
  /**
   * Leading adornment for this input.
   */
  startAdornment: import_prop_types9.default.node,
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: import_prop_types9.default.oneOf(["button", "checkbox", "color", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"]),
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types9.default.any
} : void 0;

// node_modules/@mui/base/Menu/Menu.js
var React31 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());

// node_modules/@mui/base/Menu/menuClasses.js
function getMenuUtilityClass(slot) {
  return generateUtilityClass("MuiMenu", slot);
}
var menuClasses = generateUtilityClasses("MuiMenu", ["root", "listbox", "expanded"]);

// node_modules/@mui/base/useMenu/useMenu.js
var React27 = __toESM(require_react());

// node_modules/@mui/base/useList/useList.js
var React22 = __toESM(require_react());

// node_modules/@mui/base/useList/listActions.types.js
var ListActionTypes = {
  blur: "list:blur",
  focus: "list:focus",
  itemClick: "list:itemClick",
  itemHover: "list:itemHover",
  itemsChange: "list:itemsChange",
  keyDown: "list:keyDown",
  resetHighlight: "list:resetHighlight",
  textNavigation: "list:textNavigation"
};

// node_modules/@mui/base/useList/listReducer.js
function findValidItemToHighlight(currentIndex, lookupDirection, items, includeDisabledItems, isItemDisabled, wrapAround) {
  if (items.length === 0 || !includeDisabledItems && items.every((item, itemIndex) => isItemDisabled(item, itemIndex))) {
    return -1;
  }
  let nextFocus = currentIndex;
  for (; ; ) {
    if (!wrapAround && lookupDirection === "next" && nextFocus === items.length || !wrapAround && lookupDirection === "previous" && nextFocus === -1) {
      return -1;
    }
    const nextFocusDisabled = includeDisabledItems ? false : isItemDisabled(items[nextFocus], nextFocus);
    if (nextFocusDisabled) {
      nextFocus += lookupDirection === "next" ? 1 : -1;
      if (wrapAround) {
        nextFocus = (nextFocus + items.length) % items.length;
      }
    } else {
      return nextFocus;
    }
  }
}
function moveHighlight(previouslyHighlightedValue, offset2, context) {
  var _items$nextIndex;
  const {
    items,
    isItemDisabled,
    disableListWrap,
    disabledItemsFocusable,
    itemComparer,
    focusManagement
  } = context;
  const defaultHighlightedIndex = focusManagement === "DOM" ? 0 : -1;
  const maxIndex = items.length - 1;
  const previouslyHighlightedIndex = previouslyHighlightedValue == null ? -1 : items.findIndex((item) => itemComparer(item, previouslyHighlightedValue));
  let nextIndexCandidate;
  let lookupDirection;
  let wrapAround = !disableListWrap;
  switch (offset2) {
    case "reset":
      if (defaultHighlightedIndex === -1) {
        return null;
      }
      nextIndexCandidate = 0;
      lookupDirection = "next";
      wrapAround = false;
      break;
    case "start":
      nextIndexCandidate = 0;
      lookupDirection = "next";
      wrapAround = false;
      break;
    case "end":
      nextIndexCandidate = maxIndex;
      lookupDirection = "previous";
      wrapAround = false;
      break;
    default: {
      const newIndex = previouslyHighlightedIndex + offset2;
      if (newIndex < 0) {
        if (!wrapAround && previouslyHighlightedIndex !== -1 || Math.abs(offset2) > 1) {
          nextIndexCandidate = 0;
          lookupDirection = "next";
        } else {
          nextIndexCandidate = maxIndex;
          lookupDirection = "previous";
        }
      } else if (newIndex > maxIndex) {
        if (!wrapAround || Math.abs(offset2) > 1) {
          nextIndexCandidate = maxIndex;
          lookupDirection = "previous";
        } else {
          nextIndexCandidate = 0;
          lookupDirection = "next";
        }
      } else {
        nextIndexCandidate = newIndex;
        lookupDirection = offset2 >= 0 ? "next" : "previous";
      }
    }
  }
  const nextIndex = findValidItemToHighlight(nextIndexCandidate, lookupDirection, items, disabledItemsFocusable, isItemDisabled, wrapAround);
  if (nextIndex === -1 && previouslyHighlightedValue !== null && !isItemDisabled(previouslyHighlightedValue, previouslyHighlightedIndex)) {
    return previouslyHighlightedValue;
  }
  return (_items$nextIndex = items[nextIndex]) != null ? _items$nextIndex : null;
}
function toggleSelection(item, selectedValues, selectionMode, itemComparer) {
  if (selectionMode === "none") {
    return [];
  }
  if (selectionMode === "single") {
    if (itemComparer(selectedValues[0], item)) {
      return selectedValues;
    }
    return [item];
  }
  if (selectedValues.some((sv) => itemComparer(sv, item))) {
    return selectedValues.filter((sv) => !itemComparer(sv, item));
  }
  return [...selectedValues, item];
}
function handleItemSelection(item, state, context) {
  const {
    itemComparer,
    isItemDisabled,
    selectionMode,
    items
  } = context;
  const {
    selectedValues
  } = state;
  const itemIndex = items.findIndex((i) => itemComparer(item, i));
  if (isItemDisabled(item, itemIndex)) {
    return state;
  }
  const newSelectedValues = toggleSelection(item, selectedValues, selectionMode, itemComparer);
  return _extends({}, state, {
    selectedValues: newSelectedValues,
    highlightedValue: item
  });
}
function handleKeyDown(key, state, context) {
  const previouslySelectedValue = state.highlightedValue;
  const {
    orientation,
    pageSize
  } = context;
  switch (key) {
    case "Home":
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, "start", context)
      });
    case "End":
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, "end", context)
      });
    case "PageUp":
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, -pageSize, context)
      });
    case "PageDown":
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, pageSize, context)
      });
    case "ArrowUp":
      if (orientation !== "vertical") {
        break;
      }
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, -1, context)
      });
    case "ArrowDown":
      if (orientation !== "vertical") {
        break;
      }
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, 1, context)
      });
    case "ArrowLeft": {
      if (orientation === "vertical") {
        break;
      }
      const offset2 = orientation === "horizontal-ltr" ? -1 : 1;
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, offset2, context)
      });
    }
    case "ArrowRight": {
      if (orientation === "vertical") {
        break;
      }
      const offset2 = orientation === "horizontal-ltr" ? 1 : -1;
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, offset2, context)
      });
    }
    case "Enter":
    case " ":
      if (state.highlightedValue === null) {
        return state;
      }
      return handleItemSelection(state.highlightedValue, state, context);
    default:
      break;
  }
  return state;
}
function handleBlur(state, context) {
  if (context.focusManagement === "DOM") {
    return state;
  }
  return _extends({}, state, {
    highlightedValue: null
  });
}
function textCriteriaMatches2(nextFocus, searchString, stringifyItem) {
  var _stringifyItem;
  const text = (_stringifyItem = stringifyItem(nextFocus)) == null ? void 0 : _stringifyItem.trim().toLowerCase();
  if (!text || text.length === 0) {
    return false;
  }
  return text.indexOf(searchString) === 0;
}
function handleTextNavigation(state, searchString, context) {
  const {
    items,
    isItemDisabled,
    disabledItemsFocusable,
    getItemAsString
  } = context;
  const startWithCurrentItem = searchString.length > 1;
  let nextItem2 = startWithCurrentItem ? state.highlightedValue : moveHighlight(state.highlightedValue, 1, context);
  for (let index = 0; index < items.length; index += 1) {
    if (!nextItem2 || !startWithCurrentItem && state.highlightedValue === nextItem2) {
      return state;
    }
    if (textCriteriaMatches2(nextItem2, searchString, getItemAsString) && (!isItemDisabled(nextItem2, items.indexOf(nextItem2)) || disabledItemsFocusable)) {
      return _extends({}, state, {
        highlightedValue: nextItem2
      });
    }
    nextItem2 = moveHighlight(nextItem2, 1, context);
  }
  return state;
}
function handleItemsChange(items, previousItems, state, context) {
  var _state$selectedValues;
  const {
    itemComparer,
    focusManagement
  } = context;
  let newHighlightedValue = null;
  if (state.highlightedValue != null) {
    var _items$find;
    newHighlightedValue = (_items$find = items.find((item) => itemComparer(item, state.highlightedValue))) != null ? _items$find : null;
  } else if (focusManagement === "DOM" && previousItems.length === 0) {
    newHighlightedValue = moveHighlight(null, "reset", context);
  }
  const selectedValues = (_state$selectedValues = state.selectedValues) != null ? _state$selectedValues : [];
  const newSelectedValues = selectedValues.filter((selectedValue) => items.some((item) => itemComparer(item, selectedValue)));
  return _extends({}, state, {
    highlightedValue: newHighlightedValue,
    selectedValues: newSelectedValues
  });
}
function handleResetHighlight(state, context) {
  return _extends({}, state, {
    highlightedValue: moveHighlight(null, "reset", context)
  });
}
function listReducer(state, action) {
  const {
    type,
    context
  } = action;
  switch (type) {
    case ListActionTypes.keyDown:
      return handleKeyDown(action.key, state, context);
    case ListActionTypes.itemClick:
      return handleItemSelection(action.item, state, context);
    case ListActionTypes.blur:
      return handleBlur(state, context);
    case ListActionTypes.textNavigation:
      return handleTextNavigation(state, action.searchString, context);
    case ListActionTypes.itemsChange:
      return handleItemsChange(action.items, action.previousItems, state, context);
    case ListActionTypes.resetHighlight:
      return handleResetHighlight(state, context);
    default:
      return state;
  }
}

// node_modules/@mui/base/useList/useListChangeNotifiers.js
var React19 = __toESM(require_react());

// node_modules/@mui/base/utils/useMessageBus.js
var React18 = __toESM(require_react());
function createMessageBus() {
  const listeners = /* @__PURE__ */ new Map();
  function subscribe(topic, callback) {
    let topicListeners = listeners.get(topic);
    if (!topicListeners) {
      topicListeners = /* @__PURE__ */ new Set([callback]);
      listeners.set(topic, topicListeners);
    } else {
      topicListeners.add(callback);
    }
    return () => {
      topicListeners.delete(callback);
      if (topicListeners.size === 0) {
        listeners.delete(topic);
      }
    };
  }
  function publish(topic, ...args) {
    const topicListeners = listeners.get(topic);
    if (topicListeners) {
      topicListeners.forEach((callback) => callback(...args));
    }
  }
  return {
    subscribe,
    publish
  };
}
function useMessageBus() {
  const bus = React18.useRef();
  if (!bus.current) {
    bus.current = createMessageBus();
  }
  return bus.current;
}

// node_modules/@mui/base/useList/useListChangeNotifiers.js
var SELECTION_CHANGE_TOPIC = "select:change-selection";
var HIGHLIGHT_CHANGE_TOPIC = "select:change-highlight";
function useListChangeNotifiers() {
  const messageBus = useMessageBus();
  const notifySelectionChanged = React19.useCallback((newSelectedItems) => {
    messageBus.publish(SELECTION_CHANGE_TOPIC, newSelectedItems);
  }, [messageBus]);
  const notifyHighlightChanged = React19.useCallback((newHighlightedItem) => {
    messageBus.publish(HIGHLIGHT_CHANGE_TOPIC, newHighlightedItem);
  }, [messageBus]);
  const registerSelectionChangeHandler = React19.useCallback((handler) => {
    return messageBus.subscribe(SELECTION_CHANGE_TOPIC, handler);
  }, [messageBus]);
  const registerHighlightChangeHandler = React19.useCallback((handler) => {
    return messageBus.subscribe(HIGHLIGHT_CHANGE_TOPIC, handler);
  }, [messageBus]);
  return {
    notifySelectionChanged,
    notifyHighlightChanged,
    registerSelectionChangeHandler,
    registerHighlightChangeHandler
  };
}

// node_modules/@mui/base/utils/useLatest.js
var React20 = __toESM(require_react());
function useLatest(value, deps) {
  const ref = React20.useRef(value);
  React20.useEffect(() => {
    ref.current = value;
  }, deps != null ? deps : [value]);
  return ref;
}

// node_modules/@mui/base/utils/useTextNavigation.js
var React21 = __toESM(require_react());
var TEXT_NAVIGATION_RESET_TIMEOUT = 500;
function useTextNavigation(callback) {
  const textCriteriaRef = React21.useRef({
    searchString: "",
    lastTime: null
  });
  return React21.useCallback((event) => {
    if (event.key.length === 1 && event.key !== " ") {
      const textCriteria = textCriteriaRef.current;
      const lowerKey = event.key.toLowerCase();
      const currentTime = performance.now();
      if (textCriteria.searchString.length > 0 && textCriteria.lastTime && currentTime - textCriteria.lastTime > TEXT_NAVIGATION_RESET_TIMEOUT) {
        textCriteria.searchString = lowerKey;
      } else if (textCriteria.searchString.length !== 1 || lowerKey !== textCriteria.searchString) {
        textCriteria.searchString += lowerKey;
      }
      textCriteria.lastTime = currentTime;
      callback(textCriteria.searchString, event);
    }
  }, [callback]);
}

// node_modules/@mui/base/useList/useList.js
var EMPTY_OBJECT2 = {};
var NOOP2 = () => {
};
var defaultItemComparer = (optionA, optionB) => optionA === optionB;
var defaultIsItemDisabled = () => false;
var defaultItemStringifier = (item) => typeof item === "string" ? item : String(item);
var defaultGetInitialState = () => ({
  highlightedValue: null,
  selectedValues: []
});
function useList(params) {
  const {
    controlledProps = EMPTY_OBJECT2,
    disabledItemsFocusable = false,
    disableListWrap = false,
    focusManagement = "activeDescendant",
    getInitialState = defaultGetInitialState,
    getItemDomElement,
    getItemId,
    isItemDisabled = defaultIsItemDisabled,
    rootRef: externalListRef,
    onStateChange = NOOP2,
    items,
    itemComparer = defaultItemComparer,
    getItemAsString = defaultItemStringifier,
    onChange,
    onHighlightChange,
    onItemsChange,
    orientation = "vertical",
    pageSize = 5,
    reducerActionContext = EMPTY_OBJECT2,
    selectionMode = "single",
    stateReducer: externalReducer
  } = params;
  if (true) {
    if (focusManagement === "DOM" && getItemDomElement == null) {
      throw new Error("useList: The `getItemDomElement` prop is required when using the `DOM` focus management.");
    }
    if (focusManagement === "activeDescendant" && getItemId == null) {
      throw new Error("useList: The `getItemId` prop is required when using the `activeDescendant` focus management.");
    }
  }
  const listRef = React22.useRef(null);
  const handleRef = useForkRef(externalListRef, listRef);
  const handleHighlightChange = React22.useCallback((event, value, reason) => {
    onHighlightChange == null ? void 0 : onHighlightChange(event, value, reason);
    if (focusManagement === "DOM" && value != null && (reason === ListActionTypes.itemClick || reason === ListActionTypes.keyDown || reason === ListActionTypes.textNavigation)) {
      var _getItemDomElement;
      getItemDomElement == null || (_getItemDomElement = getItemDomElement(value)) == null ? void 0 : _getItemDomElement.focus();
    }
  }, [getItemDomElement, onHighlightChange, focusManagement]);
  const stateComparers = React22.useMemo(() => ({
    highlightedValue: itemComparer,
    selectedValues: (valuesArray1, valuesArray2) => areArraysEqual(valuesArray1, valuesArray2, itemComparer)
  }), [itemComparer]);
  const handleStateChange = React22.useCallback((event, field, value, reason, state2) => {
    onStateChange == null ? void 0 : onStateChange(event, field, value, reason, state2);
    switch (field) {
      case "highlightedValue":
        handleHighlightChange(event, value, reason);
        break;
      case "selectedValues":
        onChange == null ? void 0 : onChange(event, value, reason);
        break;
      default:
        break;
    }
  }, [handleHighlightChange, onChange, onStateChange]);
  const listActionContext = React22.useMemo(() => {
    return {
      disabledItemsFocusable,
      disableListWrap,
      focusManagement,
      isItemDisabled,
      itemComparer,
      items,
      getItemAsString,
      onHighlightChange: handleHighlightChange,
      orientation,
      pageSize,
      selectionMode,
      stateComparers
    };
  }, [disabledItemsFocusable, disableListWrap, focusManagement, isItemDisabled, itemComparer, items, getItemAsString, handleHighlightChange, orientation, pageSize, selectionMode, stateComparers]);
  const initialState = getInitialState();
  const reducer = externalReducer != null ? externalReducer : listReducer;
  const actionContext = React22.useMemo(() => _extends({}, reducerActionContext, listActionContext), [reducerActionContext, listActionContext]);
  const [state, dispatch] = useControllableReducer({
    reducer,
    actionContext,
    initialState,
    controlledProps,
    stateComparers,
    onStateChange: handleStateChange
  });
  const {
    highlightedValue,
    selectedValues
  } = state;
  const handleTextNavigation2 = useTextNavigation((searchString, event) => dispatch({
    type: ListActionTypes.textNavigation,
    event,
    searchString
  }));
  const latestSelectedValues = useLatest(selectedValues);
  const latestHighlightedValue = useLatest(highlightedValue);
  const previousItems = React22.useRef([]);
  React22.useEffect(() => {
    if (areArraysEqual(previousItems.current, items, itemComparer)) {
      return;
    }
    dispatch({
      type: ListActionTypes.itemsChange,
      event: null,
      items,
      previousItems: previousItems.current
    });
    previousItems.current = items;
    onItemsChange == null ? void 0 : onItemsChange(items);
  }, [items, itemComparer, dispatch, onItemsChange]);
  const {
    notifySelectionChanged,
    notifyHighlightChanged,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler
  } = useListChangeNotifiers();
  React22.useEffect(() => {
    notifySelectionChanged(selectedValues);
  }, [selectedValues, notifySelectionChanged]);
  React22.useEffect(() => {
    notifyHighlightChanged(highlightedValue);
  }, [highlightedValue, notifyHighlightChanged]);
  const createHandleKeyDown = (other) => (event) => {
    var _other$onKeyDown;
    (_other$onKeyDown = other.onKeyDown) == null ? void 0 : _other$onKeyDown.call(other, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    const keysToPreventDefault = ["Home", "End", "PageUp", "PageDown"];
    if (orientation === "vertical") {
      keysToPreventDefault.push("ArrowUp", "ArrowDown");
    } else {
      keysToPreventDefault.push("ArrowLeft", "ArrowRight");
    }
    if (focusManagement === "activeDescendant") {
      keysToPreventDefault.push(" ", "Enter");
    }
    if (keysToPreventDefault.includes(event.key)) {
      event.preventDefault();
    }
    dispatch({
      type: ListActionTypes.keyDown,
      key: event.key,
      event
    });
    handleTextNavigation2(event);
  };
  const createHandleBlur = (other) => (event) => {
    var _other$onBlur, _listRef$current;
    (_other$onBlur = other.onBlur) == null ? void 0 : _other$onBlur.call(other, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if ((_listRef$current = listRef.current) != null && _listRef$current.contains(event.relatedTarget)) {
      return;
    }
    dispatch({
      type: ListActionTypes.blur,
      event
    });
  };
  const getRootProps = (otherHandlers = {}) => {
    return _extends({}, otherHandlers, {
      "aria-activedescendant": focusManagement === "activeDescendant" && highlightedValue != null ? getItemId(highlightedValue) : void 0,
      onBlur: createHandleBlur(otherHandlers),
      onKeyDown: createHandleKeyDown(otherHandlers),
      tabIndex: focusManagement === "DOM" ? -1 : 0,
      ref: handleRef
    });
  };
  const getItemState = React22.useCallback((item) => {
    var _latestSelectedValues;
    const index = items.findIndex((i) => itemComparer(i, item));
    const selected = ((_latestSelectedValues = latestSelectedValues.current) != null ? _latestSelectedValues : []).some((value) => value != null && itemComparer(item, value));
    const disabled = isItemDisabled(item, index);
    const highlighted = latestHighlightedValue.current != null && itemComparer(item, latestHighlightedValue.current);
    const focusable = focusManagement === "DOM";
    return {
      disabled,
      focusable,
      highlighted,
      index,
      selected
    };
  }, [items, isItemDisabled, itemComparer, latestSelectedValues, latestHighlightedValue, focusManagement]);
  const contextValue = React22.useMemo(() => ({
    dispatch,
    getItemState,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler
  }), [dispatch, getItemState, registerHighlightChangeHandler, registerSelectionChangeHandler]);
  React22.useDebugValue({
    state
  });
  return {
    contextValue,
    dispatch,
    getRootProps,
    rootRef: handleRef,
    state
  };
}

// node_modules/@mui/base/useList/useListItem.js
var React25 = __toESM(require_react());

// node_modules/@mui/base/utils/useForcedRerendering.js
var React23 = __toESM(require_react());
function useForcedRerendering() {
  const [, setState] = React23.useState({});
  return React23.useCallback(() => {
    setState({});
  }, []);
}

// node_modules/@mui/base/useList/ListContext.js
var React24 = __toESM(require_react());
var ListContext = React24.createContext(null);
if (true) {
  ListContext.displayName = "ListContext";
}

// node_modules/@mui/base/useList/useListItem.js
function useListItem(parameters) {
  const {
    handlePointerOverEvents = false,
    item,
    rootRef: externalRef
  } = parameters;
  const itemRef = React25.useRef(null);
  const handleRef = useForkRef(itemRef, externalRef);
  const listContext = React25.useContext(ListContext);
  if (!listContext) {
    throw new Error("useListItem must be used within a ListProvider");
  }
  const {
    dispatch,
    getItemState,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler
  } = listContext;
  const {
    highlighted,
    selected,
    focusable
  } = getItemState(item);
  const rerender = useForcedRerendering();
  useEnhancedEffect_default(() => {
    function updateHighlightedState(highlightedItem) {
      if (highlightedItem === item && !highlighted) {
        rerender();
      } else if (highlightedItem !== item && highlighted) {
        rerender();
      }
    }
    return registerHighlightChangeHandler(updateHighlightedState);
  });
  useEnhancedEffect_default(() => {
    function updateSelectedState(selectedItems) {
      if (!selected) {
        if (selectedItems.includes(item)) {
          rerender();
        }
      } else if (!selectedItems.includes(item)) {
        rerender();
      }
    }
    return registerSelectionChangeHandler(updateSelectedState);
  }, [registerSelectionChangeHandler, rerender, selected, item]);
  const createHandleClick = React25.useCallback((other) => (event) => {
    var _other$onClick;
    (_other$onClick = other.onClick) == null ? void 0 : _other$onClick.call(other, event);
    if (event.defaultPrevented) {
      return;
    }
    dispatch({
      type: ListActionTypes.itemClick,
      item,
      event
    });
  }, [dispatch, item]);
  const createHandlePointerOver = React25.useCallback((other) => (event) => {
    var _other$onMouseOver;
    (_other$onMouseOver = other.onMouseOver) == null ? void 0 : _other$onMouseOver.call(other, event);
    if (event.defaultPrevented) {
      return;
    }
    dispatch({
      type: ListActionTypes.itemHover,
      item,
      event
    });
  }, [dispatch, item]);
  let tabIndex;
  if (focusable) {
    tabIndex = highlighted ? 0 : -1;
  }
  const getRootProps = (otherHandlers = {}) => _extends({}, otherHandlers, {
    onClick: createHandleClick(otherHandlers),
    onPointerOver: handlePointerOverEvents ? createHandlePointerOver(otherHandlers) : void 0,
    ref: handleRef,
    tabIndex
  });
  return {
    getRootProps,
    highlighted,
    rootRef: handleRef,
    selected
  };
}

// node_modules/@mui/base/useMenu/menuReducer.js
function menuReducer(state, action) {
  if (action.type === ListActionTypes.itemHover) {
    return state;
  }
  const newState = listReducer(state, action);
  if (newState.highlightedValue === null && action.context.items.length > 0) {
    return _extends({}, newState, {
      highlightedValue: action.context.items[0]
    });
  }
  if (action.type === ListActionTypes.keyDown) {
    if (action.event.key === "Escape") {
      return _extends({}, newState, {
        open: false
      });
    }
  }
  if (action.type === ListActionTypes.blur) {
    var _action$context$listb;
    if (!((_action$context$listb = action.context.listboxRef.current) != null && _action$context$listb.contains(action.event.relatedTarget))) {
      var _action$context$listb2, _action$event$related;
      const listboxId = (_action$context$listb2 = action.context.listboxRef.current) == null ? void 0 : _action$context$listb2.getAttribute("id");
      const controlledBy = (_action$event$related = action.event.relatedTarget) == null ? void 0 : _action$event$related.getAttribute("aria-controls");
      if (listboxId && controlledBy && listboxId === controlledBy) {
        return newState;
      }
      return _extends({}, newState, {
        open: false,
        highlightedValue: action.context.items[0]
      });
    }
  }
  return newState;
}

// node_modules/@mui/base/utils/useCompound.js
var React26 = __toESM(require_react());
var CompoundComponentContext = React26.createContext(null);
CompoundComponentContext.displayName = "CompoundComponentContext";
function sortSubitems(subitems) {
  const subitemsArray = Array.from(subitems.keys()).map((key) => {
    const subitem = subitems.get(key);
    return {
      key,
      subitem
    };
  });
  subitemsArray.sort((a, b) => {
    const aNode = a.subitem.ref.current;
    const bNode = b.subitem.ref.current;
    if (aNode === null || bNode === null || aNode === bNode) {
      return 0;
    }
    return aNode.compareDocumentPosition(bNode) & Node.DOCUMENT_POSITION_PRECEDING ? 1 : -1;
  });
  return new Map(subitemsArray.map((item) => [item.key, item.subitem]));
}
function useCompoundParent() {
  const [subitems, setSubitems] = React26.useState(/* @__PURE__ */ new Map());
  const subitemKeys = React26.useRef(/* @__PURE__ */ new Set());
  const deregisterItem = React26.useCallback(function deregisterItem2(id) {
    subitemKeys.current.delete(id);
    setSubitems((previousState) => {
      const newState = new Map(previousState);
      newState.delete(id);
      return newState;
    });
  }, []);
  const registerItem = React26.useCallback(function registerItem2(id, item) {
    let providedOrGeneratedId;
    if (typeof id === "function") {
      providedOrGeneratedId = id(subitemKeys.current);
    } else {
      providedOrGeneratedId = id;
    }
    subitemKeys.current.add(providedOrGeneratedId);
    setSubitems((previousState) => {
      const newState = new Map(previousState);
      newState.set(providedOrGeneratedId, item);
      return newState;
    });
    return {
      id: providedOrGeneratedId,
      deregister: () => deregisterItem(providedOrGeneratedId)
    };
  }, [deregisterItem]);
  const sortedSubitems = React26.useMemo(() => sortSubitems(subitems), [subitems]);
  const getItemIndex = React26.useCallback(function getItemIndex2(id) {
    return Array.from(sortedSubitems.keys()).indexOf(id);
  }, [sortedSubitems]);
  const contextValue = React26.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount: subitems.size
  }), [getItemIndex, registerItem, subitems.size]);
  return {
    contextValue,
    subitems: sortedSubitems
  };
}

// node_modules/@mui/base/utils/combineHooksSlotProps.js
function combineHooksSlotProps(getFirstProps, getSecondProps) {
  return function getCombinedProps(external = {}) {
    const firstResult = _extends({}, external, getFirstProps(external));
    const result = _extends({}, firstResult, getSecondProps(firstResult));
    return result;
  };
}

// node_modules/@mui/base/useMenu/useMenu.js
var FALLBACK_MENU_CONTEXT = {
  dispatch: () => {
  },
  popupId: "",
  registerPopup: () => {
  },
  registerTrigger: () => {
  },
  state: {
    open: true
  },
  triggerElement: null
};
function useMenu(parameters = {}) {
  var _useId, _React$useContext;
  const {
    listboxRef: listboxRefProp,
    onItemsChange,
    id: idParam
  } = parameters;
  const rootRef = React27.useRef(null);
  const handleRef = useForkRef(rootRef, listboxRefProp);
  const listboxId = (_useId = useId(idParam)) != null ? _useId : "";
  const {
    state: {
      open
    },
    dispatch: menuDispatch,
    triggerElement,
    registerPopup
  } = (_React$useContext = React27.useContext(DropdownContext)) != null ? _React$useContext : FALLBACK_MENU_CONTEXT;
  const isInitiallyOpen = React27.useRef(open);
  const {
    subitems,
    contextValue: compoundComponentContextValue
  } = useCompoundParent();
  const subitemKeys = React27.useMemo(() => Array.from(subitems.keys()), [subitems]);
  const getItemDomElement = React27.useCallback((itemId) => {
    var _subitems$get$ref$cur, _subitems$get;
    if (itemId == null) {
      return null;
    }
    return (_subitems$get$ref$cur = (_subitems$get = subitems.get(itemId)) == null ? void 0 : _subitems$get.ref.current) != null ? _subitems$get$ref$cur : null;
  }, [subitems]);
  const {
    dispatch: listDispatch,
    getRootProps: getListRootProps,
    contextValue: listContextValue,
    state: {
      highlightedValue
    },
    rootRef: mergedListRef
  } = useList({
    disabledItemsFocusable: true,
    focusManagement: "DOM",
    getItemDomElement,
    getInitialState: () => ({
      selectedValues: [],
      highlightedValue: null
    }),
    isItemDisabled: (id) => {
      var _subitems$get2;
      return (subitems == null || (_subitems$get2 = subitems.get(id)) == null ? void 0 : _subitems$get2.disabled) || false;
    },
    items: subitemKeys,
    getItemAsString: (id) => {
      var _subitems$get3, _subitems$get4;
      return ((_subitems$get3 = subitems.get(id)) == null ? void 0 : _subitems$get3.label) || ((_subitems$get4 = subitems.get(id)) == null || (_subitems$get4 = _subitems$get4.ref.current) == null ? void 0 : _subitems$get4.innerText);
    },
    rootRef: handleRef,
    onItemsChange,
    reducerActionContext: {
      listboxRef: rootRef
    },
    selectionMode: "none",
    stateReducer: menuReducer
  });
  useEnhancedEffect_default(() => {
    registerPopup(listboxId);
  }, [listboxId, registerPopup]);
  React27.useEffect(() => {
    if (open && highlightedValue === subitemKeys[0] && !isInitiallyOpen.current) {
      var _subitems$get5;
      (_subitems$get5 = subitems.get(subitemKeys[0])) == null || (_subitems$get5 = _subitems$get5.ref) == null || (_subitems$get5 = _subitems$get5.current) == null ? void 0 : _subitems$get5.focus();
    }
  }, [open, highlightedValue, subitems, subitemKeys]);
  React27.useEffect(() => {
    var _rootRef$current;
    if ((_rootRef$current = rootRef.current) != null && _rootRef$current.contains(document.activeElement) && highlightedValue !== null) {
      var _subitems$get6;
      subitems == null || (_subitems$get6 = subitems.get(highlightedValue)) == null || (_subitems$get6 = _subitems$get6.ref.current) == null ? void 0 : _subitems$get6.focus();
    }
  }, [highlightedValue, subitems]);
  const createHandleBlur = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur, _rootRef$current2;
    (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if ((_rootRef$current2 = rootRef.current) != null && _rootRef$current2.contains(event.relatedTarget) || event.relatedTarget === triggerElement) {
      return;
    }
    menuDispatch({
      type: DropdownActionTypes.blur,
      event
    });
  };
  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null ? void 0 : _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if (event.key === "Escape") {
      menuDispatch({
        type: DropdownActionTypes.escapeKeyDown,
        event
      });
    }
  };
  const getOwnListboxHandlers = (otherHandlers = {}) => ({
    onBlur: createHandleBlur(otherHandlers),
    onKeyDown: createHandleKeyDown(otherHandlers)
  });
  const getListboxProps = (otherHandlers = {}) => {
    const getCombinedRootProps = combineHooksSlotProps(getOwnListboxHandlers, getListRootProps);
    return _extends({}, getCombinedRootProps(otherHandlers), {
      id: listboxId,
      role: "menu"
    });
  };
  React27.useDebugValue({
    subitems,
    highlightedValue
  });
  return {
    contextValue: _extends({}, compoundComponentContextValue, listContextValue),
    dispatch: listDispatch,
    getListboxProps,
    highlightedValue,
    listboxRef: mergedListRef,
    menuItems: subitems,
    open,
    triggerElement
  };
}

// node_modules/@mui/base/useMenu/MenuProvider.js
var React28 = __toESM(require_react());
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
function MenuProvider(props) {
  const {
    value,
    children
  } = props;
  const {
    dispatch,
    getItemIndex,
    getItemState,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler,
    registerItem,
    totalSubitemCount
  } = value;
  const listContextValue = React28.useMemo(() => ({
    dispatch,
    getItemState,
    getItemIndex,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler
  }), [dispatch, getItemIndex, getItemState, registerHighlightChangeHandler, registerSelectionChangeHandler]);
  const compoundComponentContextValue = React28.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount
  }), [registerItem, getItemIndex, totalSubitemCount]);
  return (0, import_jsx_runtime15.jsx)(CompoundComponentContext.Provider, {
    value: compoundComponentContextValue,
    children: (0, import_jsx_runtime15.jsx)(ListContext.Provider, {
      value: listContextValue,
      children
    })
  });
}

// node_modules/@mui/base/Popper/Popper.js
var React30 = __toESM(require_react());

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument2 = node.ownerDocument;
    return ownerDocument2 ? ownerDocument2.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce2(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce2(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/@mui/base/Popper/Popper.js
var import_prop_types11 = __toESM(require_prop_types());

// node_modules/@mui/base/Portal/Portal.js
var React29 = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());
var import_prop_types10 = __toESM(require_prop_types());
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
function getContainer(container) {
  return typeof container === "function" ? container() : container;
}
var Portal = React29.forwardRef(function Portal2(props, forwardedRef) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = React29.useState(null);
  const handleRef = useForkRef(React29.isValidElement(children) ? children.ref : null, forwardedRef);
  useEnhancedEffect_default(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect_default(() => {
    if (mountNode && !disablePortal) {
      setRef(forwardedRef, mountNode);
      return () => {
        setRef(forwardedRef, null);
      };
    }
    return void 0;
  }, [forwardedRef, mountNode, disablePortal]);
  if (disablePortal) {
    if (React29.isValidElement(children)) {
      const newProps = {
        ref: handleRef
      };
      return React29.cloneElement(children, newProps);
    }
    return (0, import_jsx_runtime16.jsx)(React29.Fragment, {
      children
    });
  }
  return (0, import_jsx_runtime16.jsx)(React29.Fragment, {
    children: mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode
  });
});
true ? Portal.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The children to render into the `container`.
   */
  children: import_prop_types10.default.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types10.default.oneOfType([HTMLElementType, import_prop_types10.default.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types10.default.bool
} : void 0;
if (true) {
  Portal["propTypes"] = exactProp(Portal.propTypes);
}

// node_modules/@mui/base/Popper/popperClasses.js
function getPopperUtilityClass(slot) {
  return generateUtilityClass("MuiPopper", slot);
}
var popperClasses = generateUtilityClasses("MuiPopper", ["root"]);

// node_modules/@mui/base/Popper/Popper.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var _excluded8 = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"];
var _excluded22 = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function flipPlacement(placement, direction) {
  if (direction === "ltr") {
    return placement;
  }
  switch (placement) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return placement;
  }
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
function isHTMLElement2(element) {
  return element.nodeType !== void 0;
}
function isVirtualElement(element) {
  return !isHTMLElement2(element);
}
var useUtilityClasses6 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, useClassNamesOverride(getPopperUtilityClass));
};
var defaultPopperOptions = {};
var PopperTooltip = React30.forwardRef(function PopperTooltip2(props, forwardedRef) {
  var _slots$root;
  const {
    anchorEl,
    children,
    direction,
    disablePortal,
    modifiers,
    open,
    placement: initialPlacement,
    popperOptions,
    popperRef: popperRefProp,
    slotProps = {},
    slots = {},
    TransitionProps
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded8);
  const tooltipRef = React30.useRef(null);
  const ownRef = useForkRef(tooltipRef, forwardedRef);
  const popperRef = React30.useRef(null);
  const handlePopperRef = useForkRef(popperRef, popperRefProp);
  const handlePopperRefRef = React30.useRef(handlePopperRef);
  useEnhancedEffect_default(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  React30.useImperativeHandle(popperRefProp, () => popperRef.current, []);
  const rtlPlacement = flipPlacement(initialPlacement, direction);
  const [placement, setPlacement] = React30.useState(rtlPlacement);
  const [resolvedAnchorElement, setResolvedAnchorElement] = React30.useState(resolveAnchorEl(anchorEl));
  React30.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });
  React30.useEffect(() => {
    if (anchorEl) {
      setResolvedAnchorElement(resolveAnchorEl(anchorEl));
    }
  }, [anchorEl]);
  useEnhancedEffect_default(() => {
    if (!resolvedAnchorElement || !open) {
      return void 0;
    }
    const handlePopperUpdate = (data) => {
      setPlacement(data.placement);
    };
    if (true) {
      if (resolvedAnchorElement && isHTMLElement2(resolvedAnchorElement) && resolvedAnchorElement.nodeType === 1) {
        const box = resolvedAnchorElement.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      }
    }
    let popperModifiers = [{
      name: "preventOverflow",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "flip",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "onUpdate",
      enabled: true,
      phase: "afterWrite",
      fn: ({
        state
      }) => {
        handlePopperUpdate(state);
      }
    }];
    if (modifiers != null) {
      popperModifiers = popperModifiers.concat(modifiers);
    }
    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }
    const popper2 = createPopper3(resolvedAnchorElement, tooltipRef.current, _extends({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: popperModifiers
    }));
    handlePopperRefRef.current(popper2);
    return () => {
      popper2.destroy();
      handlePopperRefRef.current(null);
    };
  }, [resolvedAnchorElement, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
  const childProps = {
    placement
  };
  if (TransitionProps !== null) {
    childProps.TransitionProps = TransitionProps;
  }
  const classes = useUtilityClasses6();
  const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      role: "tooltip",
      ref: ownRef
    },
    ownerState: props,
    className: classes.root
  });
  return (0, import_jsx_runtime17.jsx)(Root, _extends({}, rootProps, {
    children: typeof children === "function" ? children(childProps) : children
  }));
});
var Popper = React30.forwardRef(function Popper2(props, forwardedRef) {
  const {
    anchorEl,
    children,
    container: containerProp,
    direction = "ltr",
    disablePortal = false,
    keepMounted = false,
    modifiers,
    open,
    placement = "bottom",
    popperOptions = defaultPopperOptions,
    popperRef,
    style,
    transition = false,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded22);
  const [exited, setExited] = React30.useState(true);
  const handleEnter = () => {
    setExited(false);
  };
  const handleExited = () => {
    setExited(true);
  };
  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }
  let container;
  if (containerProp) {
    container = containerProp;
  } else if (anchorEl) {
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);
    container = resolvedAnchorEl && isHTMLElement2(resolvedAnchorEl) ? ownerDocument(resolvedAnchorEl).body : ownerDocument(null).body;
  }
  const display = !open && keepMounted && (!transition || exited) ? "none" : void 0;
  const transitionProps = transition ? {
    in: open,
    onEnter: handleEnter,
    onExited: handleExited
  } : void 0;
  return (0, import_jsx_runtime17.jsx)(Portal, {
    disablePortal,
    container,
    children: (0, import_jsx_runtime17.jsx)(PopperTooltip, _extends({
      anchorEl,
      direction,
      disablePortal,
      modifiers,
      ref: forwardedRef,
      open: transition ? !exited : open,
      placement,
      popperOptions,
      popperRef,
      slotProps,
      slots
    }, other, {
      style: _extends({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display
      }, style),
      TransitionProps: transitionProps,
      children
    }))
  });
});
true ? Popper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: chainPropTypes(import_prop_types11.default.oneOfType([HTMLElementType, import_prop_types11.default.object, import_prop_types11.default.func]), (props) => {
    if (props.open) {
      const resolvedAnchorEl = resolveAnchorEl(props.anchorEl);
      if (resolvedAnchorEl && isHTMLElement2(resolvedAnchorEl) && resolvedAnchorEl.nodeType === 1) {
        const box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      } else if (!resolvedAnchorEl || typeof resolvedAnchorEl.getBoundingClientRect !== "function" || isVirtualElement(resolvedAnchorEl) && resolvedAnchorEl.contextElement != null && resolvedAnchorEl.contextElement.nodeType !== 1) {
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join("\n"));
      }
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: import_prop_types11.default.oneOfType([import_prop_types11.default.node, import_prop_types11.default.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types11.default.oneOfType([HTMLElementType, import_prop_types11.default.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: import_prop_types11.default.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types11.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: import_prop_types11.default.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: import_prop_types11.default.arrayOf(import_prop_types11.default.shape({
    data: import_prop_types11.default.object,
    effect: import_prop_types11.default.func,
    enabled: import_prop_types11.default.bool,
    fn: import_prop_types11.default.func,
    name: import_prop_types11.default.any,
    options: import_prop_types11.default.object,
    phase: import_prop_types11.default.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: import_prop_types11.default.arrayOf(import_prop_types11.default.string),
    requiresIfExists: import_prop_types11.default.arrayOf(import_prop_types11.default.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types11.default.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: import_prop_types11.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: import_prop_types11.default.shape({
    modifiers: import_prop_types11.default.array,
    onFirstUpdate: import_prop_types11.default.func,
    placement: import_prop_types11.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: import_prop_types11.default.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: refType_default,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: import_prop_types11.default.shape({
    root: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types11.default.shape({
    root: import_prop_types11.default.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: import_prop_types11.default.bool
} : void 0;

// node_modules/@mui/base/Menu/Menu.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var _excluded9 = ["actions", "children", "onItemsChange", "slotProps", "slots"];
function useUtilityClasses7(ownerState) {
  const {
    open
  } = ownerState;
  const slots = {
    root: ["root", open && "expanded"],
    listbox: ["listbox", open && "expanded"]
  };
  return composeClasses(slots, useClassNamesOverride(getMenuUtilityClass));
}
var Menu = React31.forwardRef(function Menu2(props, forwardedRef) {
  var _slots$root, _slots$listbox;
  const {
    actions,
    children,
    onItemsChange,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded9);
  const {
    contextValue,
    getListboxProps,
    dispatch,
    open,
    triggerElement
  } = useMenu({
    onItemsChange
  });
  React31.useImperativeHandle(actions, () => ({
    dispatch,
    resetHighlight: () => dispatch({
      type: ListActionTypes.resetHighlight,
      event: null
    })
  }), [dispatch]);
  const ownerState = _extends({}, props, {
    open
  });
  const classes = useUtilityClasses7(ownerState);
  const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef,
      role: void 0
    },
    className: classes.root,
    ownerState
  });
  const Listbox = (_slots$listbox = slots.listbox) != null ? _slots$listbox : "ul";
  const listboxProps = useSlotProps({
    elementType: Listbox,
    getSlotProps: getListboxProps,
    externalSlotProps: slotProps.listbox,
    className: classes.listbox,
    ownerState
  });
  if (open === true && triggerElement == null) {
    return (0, import_jsx_runtime18.jsx)(Root, _extends({}, rootProps, {
      children: (0, import_jsx_runtime18.jsx)(Listbox, _extends({}, listboxProps, {
        children: (0, import_jsx_runtime18.jsx)(MenuProvider, {
          value: contextValue,
          children
        })
      }))
    }));
  }
  return (0, import_jsx_runtime18.jsx)(Popper, _extends({}, rootProps, {
    open,
    anchorEl: triggerElement,
    slots: {
      root: Root
    },
    children: (0, import_jsx_runtime18.jsx)(Listbox, _extends({}, listboxProps, {
      children: (0, import_jsx_runtime18.jsx)(MenuProvider, {
        value: contextValue,
        children
      })
    }))
  }));
});
true ? Menu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref with imperative actions that can be performed on the menu.
   */
  actions: refType_default,
  /**
   * @ignore
   */
  children: import_prop_types12.default.node,
  /**
   * @ignore
   */
  className: import_prop_types12.default.string,
  /**
   * Function called when the items displayed in the menu change.
   */
  onItemsChange: import_prop_types12.default.func,
  /**
   * The props used for each slot inside the Menu.
   * @default {}
   */
  slotProps: import_prop_types12.default.shape({
    listbox: import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object]),
    root: import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object])
  }),
  /**
   * The components used for each slot inside the Menu.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types12.default.shape({
    listbox: import_prop_types12.default.elementType,
    root: import_prop_types12.default.elementType
  })
} : void 0;

// node_modules/@mui/base/MenuButton/MenuButton.js
var React33 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());

// node_modules/@mui/base/useMenuButton/useMenuButton.js
var React32 = __toESM(require_react());
function useMenuButton(parameters = {}) {
  const {
    disabled = false,
    focusableWhenDisabled,
    rootRef: externalRef
  } = parameters;
  const menuContext = React32.useContext(DropdownContext);
  if (menuContext === null) {
    throw new Error("useMenuButton: no menu context available.");
  }
  const {
    state,
    dispatch,
    registerTrigger,
    popupId
  } = menuContext;
  const {
    getRootProps: getButtonRootProps,
    rootRef: buttonRootRef,
    active
  } = useButton({
    disabled,
    focusableWhenDisabled,
    rootRef: externalRef
  });
  const handleRef = useForkRef(buttonRootRef, registerTrigger);
  const createHandleClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;
    (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    dispatch({
      type: DropdownActionTypes.toggle,
      event
    });
  };
  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null ? void 0 : _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      dispatch({
        type: DropdownActionTypes.open,
        event
      });
    }
  };
  const getOwnRootProps = (otherHandlers = {}) => ({
    onClick: createHandleClick(otherHandlers),
    onKeyDown: createHandleKeyDown(otherHandlers)
  });
  const getRootProps = (otherHandlers = {}) => {
    const getCombinedProps = combineHooksSlotProps(getButtonRootProps, getOwnRootProps);
    return _extends({}, getCombinedProps(otherHandlers), {
      "aria-haspopup": "menu",
      "aria-expanded": state.open,
      "aria-controls": popupId,
      ref: handleRef
    });
  };
  return {
    active,
    getRootProps,
    open: state.open,
    rootRef: handleRef
  };
}

// node_modules/@mui/base/MenuButton/menuButtonClasses.js
function getMenuButtonUtilityClass(slot) {
  return generateUtilityClass("MuiMenuButton", slot);
}
var menuButtonClasses = generateUtilityClasses("MuiMenuButton", ["root", "active", "disabled", "expanded"]);

// node_modules/@mui/base/MenuButton/MenuButton.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var _excluded10 = ["children", "disabled", "label", "slots", "slotProps", "focusableWhenDisabled"];
var useUtilityClasses8 = (ownerState) => {
  const {
    active,
    disabled,
    open
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", active && "active", open && "expanded"]
  };
  return composeClasses(slots, useClassNamesOverride(getMenuButtonUtilityClass));
};
var MenuButton = React33.forwardRef(function MenuButton2(props, forwardedRef) {
  const {
    children,
    disabled = false,
    slots = {},
    slotProps = {},
    focusableWhenDisabled = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded10);
  const {
    getRootProps,
    open,
    active
  } = useMenuButton({
    disabled,
    focusableWhenDisabled,
    rootRef: forwardedRef
  });
  const ownerState = _extends({}, props, {
    open,
    active,
    disabled,
    focusableWhenDisabled
  });
  const classes = useUtilityClasses8(ownerState);
  const Root = slots.root || "button";
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    externalSlotProps: slotProps.root,
    additionalProps: {
      ref: forwardedRef,
      type: "button"
    },
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime19.jsx)(Root, _extends({}, rootProps, {
    children
  }));
});
true ? MenuButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types13.default.node,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types13.default.string,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types13.default.bool,
  /**
   * If `true`, allows a disabled button to receive focus.
   * @default false
   */
  focusableWhenDisabled: import_prop_types13.default.bool,
  /**
   * Label of the button
   */
  label: import_prop_types13.default.string,
  /**
   * The components used for each slot inside the MenuButton.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slotProps: import_prop_types13.default.shape({
    root: import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object])
  }),
  /**
   * The props used for each slot inside the MenuButton.
   * @default {}
   */
  slots: import_prop_types13.default.shape({
    root: import_prop_types13.default.elementType
  })
} : void 0;

// node_modules/@mui/base/MenuItem/MenuItem.js
var React36 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());

// node_modules/@mui/base/MenuItem/menuItemClasses.js
function getMenuItemUtilityClass(slot) {
  return generateUtilityClass("MuiMenuItem", slot);
}
var menuItemClasses = generateUtilityClasses("MuiMenuItem", ["root", "disabled", "focusVisible"]);

// node_modules/@mui/base/useMenuItem/useMenuItem.js
var React35 = __toESM(require_react());

// node_modules/@mui/base/utils/useCompoundItem.js
var React34 = __toESM(require_react());
function useCompoundItem(id, itemMetadata) {
  const context = React34.useContext(CompoundComponentContext);
  if (context === null) {
    throw new Error("useCompoundItem must be used within a useCompoundParent");
  }
  const {
    registerItem
  } = context;
  const [registeredId, setRegisteredId] = React34.useState(typeof id === "function" ? void 0 : id);
  useEnhancedEffect_default(() => {
    const {
      id: returnedId,
      deregister
    } = registerItem(id, itemMetadata);
    setRegisteredId(returnedId);
    return deregister;
  }, [registerItem, itemMetadata, id]);
  return {
    id: registeredId,
    index: registeredId !== void 0 ? context.getItemIndex(registeredId) : -1,
    totalItemCount: context.totalSubitemCount
  };
}

// node_modules/@mui/base/useMenuItem/useMenuItem.js
function idGenerator(existingKeys) {
  return `menu-item-${existingKeys.size}`;
}
var FALLBACK_MENU_CONTEXT2 = {
  dispatch: () => {
  },
  popupId: "",
  registerPopup: () => {
  },
  registerTrigger: () => {
  },
  state: {
    open: true
  },
  triggerElement: null
};
function useMenuItem(params) {
  var _React$useContext;
  const {
    disabled = false,
    id: idParam,
    rootRef: externalRef,
    label
  } = params;
  const id = useId(idParam);
  const itemRef = React35.useRef(null);
  const itemMetadata = React35.useMemo(() => ({
    disabled,
    id: id != null ? id : "",
    label,
    ref: itemRef
  }), [disabled, id, label]);
  const {
    dispatch
  } = (_React$useContext = React35.useContext(DropdownContext)) != null ? _React$useContext : FALLBACK_MENU_CONTEXT2;
  const {
    getRootProps: getListRootProps,
    highlighted,
    rootRef: listItemRefHandler
  } = useListItem({
    item: id
  });
  const {
    index,
    totalItemCount
  } = useCompoundItem(id != null ? id : idGenerator, itemMetadata);
  const {
    getRootProps: getButtonProps,
    focusVisible,
    rootRef: buttonRefHandler
  } = useButton({
    disabled,
    focusableWhenDisabled: true
  });
  const handleRef = useForkRef(listItemRefHandler, buttonRefHandler, externalRef, itemRef);
  React35.useDebugValue({
    id,
    highlighted,
    disabled,
    label
  });
  const createHandleClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;
    (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    dispatch({
      type: DropdownActionTypes.close,
      event
    });
  };
  const getOwnHandlers = (otherHandlers = {}) => _extends({}, otherHandlers, {
    onClick: createHandleClick(otherHandlers)
  });
  function getRootProps(otherHandlers = {}) {
    const getCombinedRootProps = combineHooksSlotProps(getOwnHandlers, combineHooksSlotProps(getButtonProps, getListRootProps));
    return _extends({}, getCombinedRootProps(otherHandlers), {
      ref: handleRef,
      role: "menuitem"
    });
  }
  if (id === void 0) {
    return {
      getRootProps,
      disabled: false,
      focusVisible,
      highlighted: false,
      index: -1,
      totalItemCount: 0,
      rootRef: handleRef
    };
  }
  return {
    getRootProps,
    disabled,
    focusVisible,
    highlighted,
    index,
    totalItemCount,
    rootRef: handleRef
  };
}

// node_modules/@mui/base/MenuItem/MenuItem.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var _excluded11 = ["children", "disabled", "label", "slotProps", "slots"];
function useUtilityClasses9(ownerState) {
  const {
    disabled,
    focusVisible
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
  };
  return composeClasses(slots, useClassNamesOverride(getMenuItemUtilityClass));
}
var MenuItem = React36.forwardRef(function MenuItem2(props, forwardedRef) {
  var _slots$root;
  const {
    children,
    disabled: disabledProp = false,
    label,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
  const {
    getRootProps,
    disabled,
    focusVisible,
    highlighted
  } = useMenuItem({
    disabled: disabledProp,
    rootRef: forwardedRef,
    label
  });
  const ownerState = _extends({}, props, {
    disabled,
    focusVisible,
    highlighted
  });
  const classes = useUtilityClasses9(ownerState);
  const Root = (_slots$root = slots.root) != null ? _slots$root : "li";
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    className: classes.root,
    ownerState
  });
  return (0, import_jsx_runtime20.jsx)(Root, _extends({}, rootProps, {
    children
  }));
});
true ? MenuItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types14.default.node,
  /**
   * @ignore
   */
  className: import_prop_types14.default.string,
  /**
   * @ignore
   */
  disabled: import_prop_types14.default.bool,
  /**
   * A text representation of the menu item's content.
   * Used for keyboard text navigation matching.
   */
  label: import_prop_types14.default.string,
  /**
   * @ignore
   */
  onClick: import_prop_types14.default.func,
  /**
   * The props used for each slot inside the MenuItem.
   * @default {}
   */
  slotProps: import_prop_types14.default.shape({
    root: import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object])
  }),
  /**
   * The components used for each slot inside the MenuItem.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types14.default.shape({
    root: import_prop_types14.default.elementType
  })
} : void 0;

// node_modules/@mui/base/Modal/Modal.js
var React37 = __toESM(require_react());
var import_prop_types15 = __toESM(require_prop_types());

// node_modules/@mui/base/Modal/ModalManager.js
function isOverflowing(container) {
  const doc = ownerDocument(container);
  if (doc.body === container) {
    return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, show) {
  if (show) {
    element.setAttribute("aria-hidden", "true");
  } else {
    element.removeAttribute("aria-hidden");
  }
}
function getPaddingRight(element) {
  return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
  const forbiddenTagNames = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"];
  const isForbiddenTagName = forbiddenTagNames.indexOf(element.tagName) !== -1;
  const isInputHidden = element.tagName === "INPUT" && element.getAttribute("type") === "hidden";
  return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, show) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, (element) => {
    const isNotExcludedElement = blacklist.indexOf(element) === -1;
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, show);
    }
  });
}
function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      const scrollbarSize = getScrollbarSize(ownerDocument(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: "padding-right",
        el: container
      });
      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;
      const fixedElements = ownerDocument(container).querySelectorAll(".mui-fixed");
      [].forEach.call(fixedElements, (element) => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: "padding-right",
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    }
    let scrollContainer;
    if (container.parentNode instanceof DocumentFragment) {
      scrollContainer = ownerDocument(container).body;
    } else {
      const parent = container.parentElement;
      const containerWindow = ownerWindow(container);
      scrollContainer = (parent == null ? void 0 : parent.nodeName) === "HTML" && containerWindow.getComputedStyle(parent).overflowY === "scroll" ? parent : container;
    }
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: "overflow",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: "overflow-x",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: "overflow-y",
      el: scrollContainer
    });
    scrollContainer.style.overflow = "hidden";
  }
  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, (element) => {
    if (element.getAttribute("aria-hidden") === "true") {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}
var ModalManager = class {
  constructor() {
    this.containers = void 0;
    this.modals = void 0;
    this.modals = [];
    this.containers = [];
  }
  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }
    modalIndex = this.modals.length;
    this.modals.push(modal);
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }
    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, (item) => item.container === container);
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }
    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }
  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }
  remove(modal, ariaHiddenState = true) {
    const modalIndex = this.modals.indexOf(modal);
    if (modalIndex === -1) {
      return modalIndex;
    }
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);
    if (containerInfo.modals.length === 0) {
      if (containerInfo.restore) {
        containerInfo.restore();
      }
      if (modal.modalRef) {
        ariaHidden(modal.modalRef, ariaHiddenState);
      }
      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }
    return modalIndex;
  }
  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
};

// node_modules/@mui/base/Modal/modalClasses.js
function getModalUtilityClass(slot) {
  return generateUtilityClass("MuiModal", slot);
}
var modalClasses = generateUtilityClasses("MuiModal", ["root", "hidden", "backdrop"]);

// node_modules/@mui/base/Modal/Modal.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var _excluded12 = ["children", "closeAfterTransition", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"];
var useUtilityClasses10 = (ownerState) => {
  const {
    open,
    exited
  } = ownerState;
  const slots = {
    root: ["root", !open && exited && "hidden"],
    backdrop: ["backdrop"]
  };
  return composeClasses(slots, useClassNamesOverride(getModalUtilityClass));
};
function getContainer2(container) {
  return typeof container === "function" ? container() : container;
}
function getHasTransition(children) {
  return children ? children.props.hasOwnProperty("in") : false;
}
var defaultManager = new ModalManager();
var Modal = React37.forwardRef(function Modal2(props, forwardedRef) {
  var _props$ariaHidden, _slots$root;
  const {
    children,
    closeAfterTransition = false,
    container,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    // private
    manager: managerProp = defaultManager,
    onBackdropClick,
    onClose,
    onKeyDown,
    open,
    onTransitionEnter,
    onTransitionExited,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded12);
  const manager = managerProp;
  const [exited, setExited] = React37.useState(!open);
  const modal = React37.useRef({});
  const mountNodeRef = React37.useRef(null);
  const modalRef = React37.useRef(null);
  const handleRef = useForkRef(modalRef, forwardedRef);
  const hasTransition = getHasTransition(children);
  const ariaHiddenProp = (_props$ariaHidden = props["aria-hidden"]) != null ? _props$ariaHidden : true;
  const getDoc = () => ownerDocument(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };
  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    });
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };
  const handleOpen = useEventCallback_default(() => {
    const resolvedContainer = getContainer2(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);
    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = React37.useCallback(() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = useEventCallback_default((node) => {
    mountNodeRef.current = node;
    if (!node || !modalRef.current) {
      return;
    }
    if (open && isTopModal()) {
      handleMounted();
    } else {
      ariaHidden(modalRef.current, ariaHiddenProp);
    }
  });
  const handleClose = React37.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [manager, ariaHiddenProp]);
  React37.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  React37.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  const ownerState = _extends({}, props, {
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    exited,
    hideBackdrop,
    keepMounted
  });
  const classes = useUtilityClasses10(ownerState);
  const handleEnter = () => {
    setExited(false);
    if (onTransitionEnter) {
      onTransitionEnter();
    }
  };
  const handleExited = () => {
    setExited(true);
    if (onTransitionExited) {
      onTransitionExited();
    }
    if (closeAfterTransition) {
      handleClose();
    }
  };
  const handleBackdropClick = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onBackdropClick) {
      onBackdropClick(event);
    }
    if (onClose) {
      onClose(event, "backdropClick");
    }
  };
  const handleKeyDown2 = (event) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (event.key !== "Escape" || !isTopModal()) {
      return;
    }
    if (!disableEscapeKeyDown) {
      event.stopPropagation();
      if (onClose) {
        onClose(event, "escapeKeyDown");
      }
    }
  };
  const childProps = {};
  if (children.props.tabIndex === void 0) {
    childProps.tabIndex = "-1";
  }
  if (hasTransition) {
    childProps.onEnter = createChainedFunction(handleEnter, children.props.onEnter);
    childProps.onExited = createChainedFunction(handleExited, children.props.onExited);
  }
  const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: handleRef,
      role: "presentation",
      onKeyDown: handleKeyDown2
    },
    className: classes.root,
    ownerState
  });
  const BackdropComponent = slots.backdrop;
  const backdropProps = useSlotProps({
    elementType: BackdropComponent,
    externalSlotProps: slotProps.backdrop,
    additionalProps: {
      "aria-hidden": true,
      onClick: handleBackdropClick,
      open
    },
    className: classes.backdrop,
    ownerState
  });
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  return (0, import_jsx_runtime21.jsx)(
    Portal,
    {
      ref: handlePortalRef,
      container,
      disablePortal,
      children: (0, import_jsx_runtime22.jsxs)(Root, _extends({}, rootProps, {
        children: [!hideBackdrop && BackdropComponent ? (0, import_jsx_runtime21.jsx)(BackdropComponent, _extends({}, backdropProps)) : null, (0, import_jsx_runtime21.jsx)(FocusTrap, {
          disableEnforceFocus,
          disableAutoFocus,
          disableRestoreFocus,
          isEnabled: isTopModal,
          open,
          children: React37.cloneElement(children, childProps)
        })]
      }))
    }
  );
});
true ? Modal.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: import_prop_types15.default.bool,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types15.default.oneOfType([HTMLElementType, import_prop_types15.default.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: import_prop_types15.default.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: import_prop_types15.default.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: import_prop_types15.default.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types15.default.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: import_prop_types15.default.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: import_prop_types15.default.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: import_prop_types15.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: import_prop_types15.default.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: import_prop_types15.default.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: import_prop_types15.default.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: import_prop_types15.default.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: import_prop_types15.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types15.default.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: import_prop_types15.default.shape({
    backdrop: import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object]),
    root: import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types15.default.shape({
    backdrop: import_prop_types15.default.elementType,
    root: import_prop_types15.default.elementType
  })
} : void 0;

// node_modules/@mui/base/NoSsr/NoSsr.js
var React38 = __toESM(require_react());
var import_prop_types16 = __toESM(require_prop_types());
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
function NoSsr(props) {
  const {
    children,
    defer = false,
    fallback = null
  } = props;
  const [mountedState, setMountedState] = React38.useState(false);
  useEnhancedEffect_default(() => {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);
  React38.useEffect(() => {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]);
  return (0, import_jsx_runtime23.jsx)(React38.Fragment, {
    children: mountedState ? children : fallback
  });
}
true ? NoSsr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * You can wrap a node.
   */
  children: import_prop_types16.default.node,
  /**
   * If `true`, the component will not only prevent server-side rendering.
   * It will also defer the rendering of the children into a different screen frame.
   * @default false
   */
  defer: import_prop_types16.default.bool,
  /**
   * The fallback content to display.
   * @default null
   */
  fallback: import_prop_types16.default.node
} : void 0;
if (true) {
  NoSsr["propTypes"] = exactProp(NoSsr.propTypes);
}

// node_modules/@mui/base/Unstable_NumberInput/NumberInput.js
var React40 = __toESM(require_react());
var import_prop_types17 = __toESM(require_prop_types());

// node_modules/@mui/base/Unstable_NumberInput/numberInputClasses.js
function getNumberInputUtilityClass(slot) {
  return generateUtilityClass("MuiNumberInput", slot);
}
var numberInputClasses = generateUtilityClasses("MuiNumberInput", [
  "root",
  "formControl",
  "focused",
  "disabled",
  "readOnly",
  "error",
  "input",
  "incrementButton",
  "decrementButton"
  // 'adornedStart',
  // 'adornedEnd',
]);

// node_modules/@mui/base/unstable_useNumberInput/useNumberInput.js
var React39 = __toESM(require_react());

// node_modules/@mui/base/unstable_useNumberInput/utils.js
function simpleClamp(val, min2 = Number.MIN_SAFE_INTEGER, max2 = Number.MAX_SAFE_INTEGER) {
  return Math.max(min2, Math.min(val, max2));
}
function clamp(val, min2 = Number.MIN_SAFE_INTEGER, max2 = Number.MAX_SAFE_INTEGER, stepProp = NaN) {
  if (Number.isNaN(stepProp)) {
    return simpleClamp(val, min2, max2);
  }
  const step = stepProp || 1;
  const remainder = val % step;
  const positivity = Math.sign(remainder);
  if (Math.abs(remainder) > step / 2) {
    return simpleClamp(val + positivity * (step - Math.abs(remainder)), min2, max2);
  }
  return simpleClamp(val - positivity * Math.abs(remainder), min2, max2);
}
function isNumber(val) {
  return typeof val === "number" && !Number.isNaN(val) && Number.isFinite(val);
}

// node_modules/@mui/base/unstable_useNumberInput/useNumberInput.js
var STEP_KEYS = ["ArrowUp", "ArrowDown", "PageUp", "PageDown"];
var SUPPORTED_KEYS = [...STEP_KEYS, "Home", "End"];
function parseInput(v) {
  return v ? String(v.trim()) : String(v);
}
function useNumberInput(parameters) {
  const {
    min: min2,
    max: max2,
    step,
    shiftMultiplier = 10,
    defaultValue: defaultValueProp,
    disabled: disabledProp = false,
    error: errorProp = false,
    onBlur,
    onInputChange,
    onFocus,
    onChange,
    required: requiredProp = false,
    readOnly: readOnlyProp = false,
    value: valueProp,
    inputRef: inputRefProp,
    inputId: inputIdProp
  } = parameters;
  const formControlContext = useFormControlContext();
  const {
    current: isControlled
  } = React39.useRef(valueProp != null);
  const handleInputRefWarning = React39.useCallback((instance) => {
    if (true) {
      if (instance && instance.nodeName !== "INPUT" && !instance.focus) {
        console.error(["MUI: You have provided a `slots.input` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join("\n"));
      }
    }
  }, []);
  const inputRef = React39.useRef(null);
  const handleInputRef = useForkRef(inputRef, inputRefProp, handleInputRefWarning);
  const inputId = useId(inputIdProp);
  const [focused, setFocused] = React39.useState(false);
  const [value, setValue] = React39.useState(valueProp != null ? valueProp : defaultValueProp);
  const [dirtyValue, setDirtyValue] = React39.useState(value ? String(value) : void 0);
  React39.useEffect(() => {
    if (!formControlContext && disabledProp && focused) {
      setFocused(false);
      onBlur == null ? void 0 : onBlur();
    }
  }, [formControlContext, disabledProp, focused, onBlur]);
  const handleFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu;
    (_otherHandlers$onFocu = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    if (formControlContext && formControlContext.onFocus) {
      var _formControlContext$o;
      formControlContext == null || (_formControlContext$o = formControlContext.onFocus) == null ? void 0 : _formControlContext$o.call(formControlContext);
    }
    setFocused(true);
  };
  const handleValueChange = () => (event, val) => {
    let newValue;
    if (val === void 0) {
      newValue = val;
      setDirtyValue("");
    } else {
      newValue = clamp(val, min2, max2, step);
      setDirtyValue(String(newValue));
    }
    setValue(newValue);
    if (isNumber(newValue)) {
      onChange == null ? void 0 : onChange(event, newValue);
    } else {
      onChange == null ? void 0 : onChange(event, void 0);
    }
  };
  const handleInputChange = (otherHandlers) => (event) => {
    var _formControlContext$o2, _otherHandlers$onInpu;
    if (!isControlled && event.target === null) {
      throw new Error(true ? `MUI: Expected valid input target. Did you use a custom \`slots.input\` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info.` : formatMuiErrorMessage(17));
    }
    formControlContext == null || (_formControlContext$o2 = formControlContext.onChange) == null ? void 0 : _formControlContext$o2.call(formControlContext, event);
    (_otherHandlers$onInpu = otherHandlers.onInputChange) == null ? void 0 : _otherHandlers$onInpu.call(otherHandlers, event);
    const val = parseInput(event.currentTarget.value);
    if (val === "" || val === "-") {
      setDirtyValue(val);
      setValue(void 0);
    }
    if (val.match(/^-?\d+?$/)) {
      setDirtyValue(val);
      setValue(parseInt(val, 10));
    }
  };
  const handleBlur2 = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur;
    const val = parseInput(event.currentTarget.value);
    (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);
    if (val === "" || val === "-") {
      handleValueChange()(event, void 0);
    } else {
      handleValueChange()(event, parseInt(val, 10));
    }
    if (formControlContext && formControlContext.onBlur) {
      formControlContext.onBlur();
    }
    setFocused(false);
  };
  const handleClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);
  };
  const handleStep = (direction) => (event) => {
    let newValue;
    if (isNumber(value)) {
      const multiplier = event.shiftKey || event.key === "PageUp" || event.key === "PageDown" ? shiftMultiplier : 1;
      newValue = {
        up: value + (step != null ? step : 1) * multiplier,
        down: value - (step != null ? step : 1) * multiplier
      }[direction];
    } else {
      newValue = {
        up: min2 != null ? min2 : 0,
        down: max2 != null ? max2 : 0
      }[direction];
    }
    handleValueChange()(event, newValue);
  };
  const handleKeyDown2 = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null ? void 0 : _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    if (SUPPORTED_KEYS.includes(event.key)) {
      event.preventDefault();
    }
    if (STEP_KEYS.includes(event.key)) {
      const direction = {
        ArrowUp: "up",
        ArrowDown: "down",
        PageUp: "up",
        PageDown: "down"
      }[event.key];
      handleStep(direction)(event);
    }
    if (event.key === "Home" && isNumber(max2)) {
      handleValueChange()(event, max2);
    }
    if (event.key === "End" && isNumber(min2)) {
      handleValueChange()(event, min2);
    }
  };
  const getRootProps = (externalProps = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters, ["onBlur", "onInputChange", "onFocus", "onChange"]);
    const externalEventHandlers = _extends({}, propsEventHandlers, extractEventHandlers(externalProps));
    return _extends({}, externalProps, externalEventHandlers, {
      onClick: handleClick(externalEventHandlers)
    });
  };
  const getInputProps = (externalProps = {}) => {
    var _ref;
    const externalEventHandlers = _extends({
      onBlur,
      onFocus
    }, extractEventHandlers(externalProps, ["onInputChange"]));
    const mergedEventHandlers = _extends({}, externalProps, externalEventHandlers, {
      onFocus: handleFocus(externalEventHandlers),
      onChange: handleInputChange(_extends({}, externalEventHandlers, {
        onInputChange
      })),
      onBlur: handleBlur2(externalEventHandlers),
      onKeyDown: handleKeyDown2(externalEventHandlers)
    });
    const displayValue = (_ref = focused ? dirtyValue : value) != null ? _ref : "";
    return _extends({}, mergedEventHandlers, {
      type: "text",
      id: inputId,
      "aria-invalid": errorProp || void 0,
      defaultValue: void 0,
      ref: handleInputRef,
      value: displayValue,
      "aria-valuenow": displayValue,
      "aria-valuetext": String(displayValue),
      "aria-valuemin": min2,
      "aria-valuemax": max2,
      autoComplete: "off",
      autoCorrect: "off",
      spellCheck: "false",
      required: requiredProp,
      readOnly: readOnlyProp,
      "aria-disabled": disabledProp,
      disabled: disabledProp
    });
  };
  const handleStepperButtonMouseDown = (event) => {
    event.preventDefault();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const stepperButtonCommonProps = {
    "aria-controls": inputId,
    tabIndex: -1
  };
  const isIncrementDisabled = disabledProp || (isNumber(value) ? value >= (max2 != null ? max2 : Number.MAX_SAFE_INTEGER) : false);
  const getIncrementButtonProps = (externalProps = {}) => {
    return _extends({}, externalProps, stepperButtonCommonProps, {
      disabled: isIncrementDisabled,
      "aria-disabled": isIncrementDisabled,
      onMouseDown: handleStepperButtonMouseDown,
      onClick: handleStep("up")
    });
  };
  const isDecrementDisabled = disabledProp || (isNumber(value) ? value <= (min2 != null ? min2 : Number.MIN_SAFE_INTEGER) : false);
  const getDecrementButtonProps = (externalProps = {}) => {
    return _extends({}, externalProps, stepperButtonCommonProps, {
      disabled: isDecrementDisabled,
      "aria-disabled": isDecrementDisabled,
      onMouseDown: handleStepperButtonMouseDown,
      onClick: handleStep("down")
    });
  };
  return {
    disabled: disabledProp,
    error: errorProp,
    focused,
    formControlContext,
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    getRootProps,
    required: requiredProp,
    value: focused ? dirtyValue : value,
    isIncrementDisabled,
    isDecrementDisabled,
    inputValue: dirtyValue
  };
}

// node_modules/@mui/base/Unstable_NumberInput/NumberInput.js
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
var _excluded13 = ["className", "defaultValue", "disabled", "error", "id", "max", "min", "onBlur", "onInputChange", "onFocus", "onChange", "placeholder", "required", "readOnly", "shiftMultiplier", "step", "value", "slotProps", "slots"];
var useUtilityClasses11 = (ownerState) => {
  const {
    disabled,
    error,
    focused,
    readOnly,
    formControlContext,
    isIncrementDisabled,
    isDecrementDisabled
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", error && "error", focused && "focused", readOnly && "readOnly", Boolean(formControlContext) && "formControl"],
    input: ["input", disabled && "disabled", readOnly && "readOnly"],
    incrementButton: ["incrementButton", isIncrementDisabled && "disabled"],
    decrementButton: ["decrementButton", isDecrementDisabled && "disabled"]
  };
  return composeClasses(slots, useClassNamesOverride(getNumberInputUtilityClass));
};
var NumberInput = React40.forwardRef(function NumberInput2(props, forwardedRef) {
  var _slots$root, _slots$input, _slots$incrementButto, _slots$decrementButto;
  const {
    className,
    defaultValue,
    disabled,
    error,
    id,
    max: max2,
    min: min2,
    onBlur,
    onInputChange,
    onFocus,
    onChange,
    placeholder,
    required,
    readOnly = false,
    shiftMultiplier,
    step,
    value,
    slotProps = {},
    slots = {}
  } = props, rest = _objectWithoutPropertiesLoose(props, _excluded13);
  const {
    getRootProps,
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    focused,
    error: errorState,
    disabled: disabledState,
    formControlContext,
    isIncrementDisabled,
    isDecrementDisabled
  } = useNumberInput({
    min: min2,
    max: max2,
    step,
    shiftMultiplier,
    defaultValue,
    disabled,
    error,
    onFocus,
    onInputChange,
    onBlur,
    onChange,
    required,
    readOnly,
    value,
    inputId: id
  });
  const ownerState = _extends({}, props, {
    disabled: disabledState,
    error: errorState,
    focused,
    readOnly,
    formControlContext,
    isIncrementDisabled,
    isDecrementDisabled
  });
  const classes = useUtilityClasses11(ownerState);
  const propsForwardedToInputSlot = {
    placeholder
  };
  const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: rest,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: [classes.root, className]
  });
  const Input5 = (_slots$input = slots.input) != null ? _slots$input : "input";
  const inputProps = useSlotProps({
    elementType: Input5,
    getSlotProps: (otherHandlers) => getInputProps(_extends({}, otherHandlers, propsForwardedToInputSlot)),
    externalSlotProps: slotProps.input,
    ownerState,
    className: classes.input
  });
  const IncrementButton = (_slots$incrementButto = slots.incrementButton) != null ? _slots$incrementButto : "button";
  const incrementButtonProps = useSlotProps({
    elementType: IncrementButton,
    getSlotProps: getIncrementButtonProps,
    externalSlotProps: slotProps.incrementButton,
    ownerState,
    className: classes.incrementButton
  });
  const DecrementButton = (_slots$decrementButto = slots.decrementButton) != null ? _slots$decrementButto : "button";
  const decrementButtonProps = useSlotProps({
    elementType: DecrementButton,
    getSlotProps: getDecrementButtonProps,
    externalSlotProps: slotProps.decrementButton,
    ownerState,
    className: classes.decrementButton
  });
  return (0, import_jsx_runtime25.jsxs)(Root, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime24.jsx)(DecrementButton, _extends({}, decrementButtonProps)), (0, import_jsx_runtime24.jsx)(IncrementButton, _extends({}, incrementButtonProps)), (0, import_jsx_runtime24.jsx)(Input5, _extends({}, inputProps))]
  }));
});
true ? NumberInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types17.default.node,
  /**
   * @ignore
   */
  className: import_prop_types17.default.string,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types17.default.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: import_prop_types17.default.bool,
  /**
   * If `true`, the `input` will indicate an error by setting the `aria-invalid` attribute on the input and the `Mui-error` class on the root element.
   */
  error: import_prop_types17.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types17.default.string,
  /**
   * The maximum value.
   */
  max: import_prop_types17.default.number,
  /**
   * The minimum value.
   */
  min: import_prop_types17.default.number,
  /**
   * @ignore
   */
  onBlur: import_prop_types17.default.func,
  /**
   * Callback fired after the value is clamped and changes - when the `input` is blurred or when
   * the stepper buttons are triggered.
   * Called with `undefined` when the value is unset.
   *
   * @param {React.FocusEvent<HTMLInputElement>|React.PointerEvent|React.KeyboardEvent} event The event source of the callback
   * @param {number|undefined} value The new value of the component
   */
  onChange: import_prop_types17.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types17.default.func,
  /**
   * Callback fired when the `input` value changes after each keypress, before clamping is applied.
   * Note that `event.target.value` may contain values that fall outside of `min` and `max` or
   * are otherwise "invalid".
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   */
  onInputChange: import_prop_types17.default.func,
  /**
   * @ignore
   */
  placeholder: import_prop_types17.default.string,
  /**
   * If `true`, the `input` element becomes read-only. The stepper buttons remain active,
   * with the addition that they are now keyboard focusable.
   * @default false
   */
  readOnly: import_prop_types17.default.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: import_prop_types17.default.bool,
  /**
   * Multiplier applied to `step` if the shift key is held while incrementing
   * or decrementing the value. Defaults to `10`.
   */
  shiftMultiplier: import_prop_types17.default.number,
  /**
   * The props used for each slot inside the NumberInput.
   * @default {}
   */
  slotProps: import_prop_types17.default.shape({
    decrementButton: import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.object]),
    incrementButton: import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.object]),
    input: import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.object]),
    root: import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.object])
  }),
  /**
   * The components used for each slot inside the InputBase.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types17.default.shape({
    decrementButton: import_prop_types17.default.elementType,
    incrementButton: import_prop_types17.default.elementType,
    input: import_prop_types17.default.elementType,
    root: import_prop_types17.default.elementType
  }),
  /**
   * The amount that the value changes on each increment or decrement.
   */
  step: import_prop_types17.default.number,
  /**
   * The current value. Use when the component is controlled.
   */
  value: import_prop_types17.default.any
} : void 0;

// node_modules/@mui/base/OptionGroup/OptionGroup.js
var React41 = __toESM(require_react());
var import_prop_types18 = __toESM(require_prop_types());

// node_modules/@mui/base/OptionGroup/optionGroupClasses.js
function getOptionGroupUtilityClass(slot) {
  return generateUtilityClass("MuiOptionGroup", slot);
}
var optionGroupClasses = generateUtilityClasses("MuiOptionGroup", ["root", "disabled", "label", "list"]);

// node_modules/@mui/base/OptionGroup/OptionGroup.js
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
var _excluded14 = ["disabled", "slotProps", "slots"];
function useUtilityClasses12(disabled) {
  const slots = {
    root: ["root", disabled && "disabled"],
    label: ["label"],
    list: ["list"]
  };
  return composeClasses(slots, useClassNamesOverride(getOptionGroupUtilityClass));
}
var OptionGroup = React41.forwardRef(function OptionGroup2(props, forwardedRef) {
  const {
    disabled = false,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded14);
  const Root = (slots == null ? void 0 : slots.root) || "li";
  const Label = (slots == null ? void 0 : slots.label) || "span";
  const List3 = (slots == null ? void 0 : slots.list) || "ul";
  const classes = useUtilityClasses12(disabled);
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState: props,
    className: classes.root
  });
  const labelProps = useSlotProps({
    elementType: Label,
    externalSlotProps: slotProps.label,
    ownerState: props,
    className: classes.label
  });
  const listProps = useSlotProps({
    elementType: List3,
    externalSlotProps: slotProps.list,
    ownerState: props,
    className: classes.list
  });
  return (0, import_jsx_runtime27.jsxs)(Root, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime26.jsx)(Label, _extends({}, labelProps, {
      children: props.label
    })), (0, import_jsx_runtime26.jsx)(List3, _extends({}, listProps, {
      children: props.children
    }))]
  }));
});
true ? OptionGroup.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types18.default.node,
  /**
   * @ignore
   */
  className: import_prop_types18.default.string,
  /**
   * If `true` all the options in the group will be disabled.
   * @default false
   */
  disabled: import_prop_types18.default.bool,
  /**
   * The human-readable description of the group.
   */
  label: import_prop_types18.default.node,
  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  slotProps: import_prop_types18.default.shape({
    label: import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object]),
    list: import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object]),
    root: import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object])
  }),
  /**
   * The components used for each slot inside the OptionGroup.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types18.default.shape({
    label: import_prop_types18.default.elementType,
    list: import_prop_types18.default.elementType,
    root: import_prop_types18.default.elementType
  })
} : void 0;

// node_modules/@mui/base/Option/Option.js
var React43 = __toESM(require_react());
var import_prop_types19 = __toESM(require_prop_types());

// node_modules/@mui/base/Option/optionClasses.js
function getOptionUtilityClass(slot) {
  return generateUtilityClass("MuiOption", slot);
}
var optionClasses = generateUtilityClasses("MuiOption", ["root", "disabled", "selected", "highlighted"]);

// node_modules/@mui/base/useOption/useOption.js
var React42 = __toESM(require_react());
function useOption(params) {
  const {
    value,
    label,
    disabled,
    rootRef: optionRefParam,
    id: idParam
  } = params;
  const {
    getRootProps: getListItemProps,
    rootRef: listItemRefHandler,
    highlighted,
    selected
  } = useListItem({
    item: value
  });
  const id = useId(idParam);
  const optionRef = React42.useRef(null);
  const selectOption = React42.useMemo(() => ({
    disabled,
    label,
    value,
    ref: optionRef,
    id
  }), [disabled, label, value, id]);
  const {
    index
  } = useCompoundItem(value, selectOption);
  const handleRef = useForkRef(optionRefParam, optionRef, listItemRefHandler);
  return {
    getRootProps: (otherHandlers = {}) => _extends({}, otherHandlers, getListItemProps(otherHandlers), {
      id,
      ref: handleRef,
      role: "option",
      "aria-selected": selected
    }),
    highlighted,
    index,
    selected,
    rootRef: handleRef
  };
}

// node_modules/@mui/base/Option/Option.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
var _excluded15 = ["children", "disabled", "label", "slotProps", "slots", "value"];
function useUtilityClasses13(ownerState) {
  const {
    disabled,
    highlighted,
    selected
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", highlighted && "highlighted", selected && "selected"]
  };
  return composeClasses(slots, useClassNamesOverride(getOptionUtilityClass));
}
var Option = React43.memo(React43.forwardRef(function Option2(props, forwardedRef) {
  var _slots$root, _optionRef$current;
  const {
    children,
    disabled = false,
    label,
    slotProps = {},
    slots = {},
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded15);
  const Root = (_slots$root = slots.root) != null ? _slots$root : "li";
  const optionRef = React43.useRef(null);
  const combinedRef = useForkRef(optionRef, forwardedRef);
  const computedLabel = label != null ? label : typeof children === "string" ? children : (_optionRef$current = optionRef.current) == null ? void 0 : _optionRef$current.innerText;
  const {
    getRootProps,
    selected,
    highlighted,
    index
  } = useOption({
    disabled,
    label: computedLabel,
    rootRef: combinedRef,
    value
  });
  const ownerState = _extends({}, props, {
    disabled,
    highlighted,
    index,
    selected
  });
  const classes = useUtilityClasses13(ownerState);
  const rootProps = useSlotProps({
    getSlotProps: getRootProps,
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    className: classes.root,
    ownerState
  });
  return (0, import_jsx_runtime28.jsx)(Root, _extends({}, rootProps, {
    children
  }));
}));
true ? Option.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types19.default.node,
  /**
   * @ignore
   */
  className: import_prop_types19.default.string,
  /**
   * If `true`, the option will be disabled.
   * @default false
   */
  disabled: import_prop_types19.default.bool,
  /**
   * A text representation of the option's content.
   * Used for keyboard text navigation matching.
   */
  label: import_prop_types19.default.string,
  /**
   * The props used for each slot inside the Option.
   * @default {}
   */
  slotProps: import_prop_types19.default.shape({
    root: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object])
  }),
  /**
   * The components used for each slot inside the Option.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types19.default.shape({
    root: import_prop_types19.default.elementType
  }),
  /**
   * The value of the option.
   */
  value: import_prop_types19.default.any.isRequired
} : void 0;

// node_modules/@mui/base/Select/Select.js
var React46 = __toESM(require_react());
var import_prop_types20 = __toESM(require_prop_types());

// node_modules/@mui/base/useSelect/useSelect.js
var React44 = __toESM(require_react());

// node_modules/@mui/base/useSelect/useSelect.types.js
var SelectActionTypes = {
  buttonClick: "buttonClick"
};

// node_modules/@mui/base/useSelect/defaultOptionStringifier.js
var defaultOptionStringifier = (option) => {
  const {
    label,
    value
  } = option;
  if (typeof label === "string") {
    return label;
  }
  if (typeof value === "string") {
    return value;
  }
  return String(option);
};

// node_modules/@mui/base/useSelect/selectReducer.js
function selectReducer(state, action) {
  const {
    open
  } = state;
  const {
    context: {
      selectionMode
    }
  } = action;
  if (action.type === SelectActionTypes.buttonClick) {
    var _state$selectedValues;
    const itemToHighlight = (_state$selectedValues = state.selectedValues[0]) != null ? _state$selectedValues : moveHighlight(null, "start", action.context);
    return _extends({}, state, {
      open: !open,
      highlightedValue: !open ? itemToHighlight : null
    });
  }
  const newState = listReducer(state, action);
  switch (action.type) {
    case ListActionTypes.keyDown:
      if (state.open) {
        if (action.event.key === "Escape") {
          return _extends({}, newState, {
            open: false
          });
        }
        if (selectionMode === "single" && (action.event.key === "Enter" || action.event.key === " ")) {
          return _extends({}, newState, {
            open: false
          });
        }
      } else {
        if (action.event.key === "Enter" || action.event.key === " " || action.event.key === "ArrowDown") {
          var _state$selectedValues2;
          return _extends({}, state, {
            open: true,
            highlightedValue: (_state$selectedValues2 = state.selectedValues[0]) != null ? _state$selectedValues2 : moveHighlight(null, "start", action.context)
          });
        }
        if (action.event.key === "ArrowUp") {
          var _state$selectedValues3;
          return _extends({}, state, {
            open: true,
            highlightedValue: (_state$selectedValues3 = state.selectedValues[0]) != null ? _state$selectedValues3 : moveHighlight(null, "end", action.context)
          });
        }
      }
      break;
    case ListActionTypes.itemClick:
      if (selectionMode === "single") {
        return _extends({}, newState, {
          open: false
        });
      }
      break;
    case ListActionTypes.blur:
      return _extends({}, newState, {
        open: false
      });
    default:
      return newState;
  }
  return newState;
}

// node_modules/@mui/base/useSelect/useSelect.js
function preventDefault(event) {
  event.preventDefault();
}
function useSelect(props) {
  const {
    areOptionsEqual,
    buttonRef: buttonRefProp,
    defaultOpen = false,
    defaultValue: defaultValueProp,
    disabled = false,
    listboxId: listboxIdProp,
    listboxRef: listboxRefProp,
    multiple = false,
    onChange,
    onHighlightChange,
    onOpenChange,
    open: openProp,
    options: optionsParam,
    getOptionAsString = defaultOptionStringifier,
    value: valueProp
  } = props;
  const buttonRef = React44.useRef(null);
  const handleButtonRef = useForkRef(buttonRefProp, buttonRef);
  const listboxRef = React44.useRef(null);
  const listboxId = useId(listboxIdProp);
  let defaultValue;
  if (valueProp === void 0 && defaultValueProp === void 0) {
    defaultValue = [];
  } else if (defaultValueProp !== void 0) {
    if (multiple) {
      defaultValue = defaultValueProp;
    } else {
      defaultValue = defaultValueProp == null ? [] : [defaultValueProp];
    }
  }
  const value = React44.useMemo(() => {
    if (valueProp !== void 0) {
      if (multiple) {
        return valueProp;
      }
      return valueProp == null ? [] : [valueProp];
    }
    return void 0;
  }, [valueProp, multiple]);
  const {
    subitems,
    contextValue: compoundComponentContextValue
  } = useCompoundParent();
  const options = React44.useMemo(() => {
    if (optionsParam != null) {
      return new Map(optionsParam.map((option, index) => [option.value, {
        value: option.value,
        label: option.label,
        disabled: option.disabled,
        ref: React44.createRef(),
        id: `${listboxId}_${index}`
      }]));
    }
    return subitems;
  }, [optionsParam, subitems, listboxId]);
  const handleListboxRef = useForkRef(listboxRefProp, listboxRef);
  const {
    getRootProps: getButtonRootProps,
    active: buttonActive,
    focusVisible: buttonFocusVisible,
    rootRef: mergedButtonRef
  } = useButton({
    disabled,
    rootRef: handleButtonRef
  });
  const optionValues = React44.useMemo(() => Array.from(options.keys()), [options]);
  const getOptionByValue = React44.useCallback((valueToGet) => {
    if (areOptionsEqual !== void 0) {
      const similarValue = optionValues.find((optionValue) => areOptionsEqual(optionValue, valueToGet));
      return options.get(similarValue);
    }
    return options.get(valueToGet);
  }, [options, areOptionsEqual, optionValues]);
  const isItemDisabled = React44.useCallback((valueToCheck) => {
    var _option$disabled;
    const option = getOptionByValue(valueToCheck);
    return (_option$disabled = option == null ? void 0 : option.disabled) != null ? _option$disabled : false;
  }, [getOptionByValue]);
  const stringifyOption = React44.useCallback((valueToCheck) => {
    const option = getOptionByValue(valueToCheck);
    if (!option) {
      return "";
    }
    return getOptionAsString(option);
  }, [getOptionByValue, getOptionAsString]);
  const controlledState = React44.useMemo(() => ({
    selectedValues: value,
    open: openProp
  }), [value, openProp]);
  const getItemId = React44.useCallback((itemValue) => {
    var _options$get;
    return (_options$get = options.get(itemValue)) == null ? void 0 : _options$get.id;
  }, [options]);
  const handleSelectionChange = React44.useCallback((event, newValues) => {
    if (multiple) {
      onChange == null ? void 0 : onChange(event, newValues);
    } else {
      var _newValues$;
      onChange == null ? void 0 : onChange(event, (_newValues$ = newValues[0]) != null ? _newValues$ : null);
    }
  }, [multiple, onChange]);
  const handleHighlightChange = React44.useCallback((event, newValue) => {
    onHighlightChange == null ? void 0 : onHighlightChange(event, newValue != null ? newValue : null);
  }, [onHighlightChange]);
  const handleStateChange = React44.useCallback((event, field, fieldValue) => {
    if (field === "open") {
      onOpenChange == null ? void 0 : onOpenChange(fieldValue);
      if (fieldValue === false && (event == null ? void 0 : event.type) !== "blur") {
        var _buttonRef$current;
        (_buttonRef$current = buttonRef.current) == null ? void 0 : _buttonRef$current.focus();
      }
    }
  }, [onOpenChange]);
  const useListParameters = {
    getInitialState: () => {
      var _defaultValue;
      return {
        highlightedValue: null,
        selectedValues: (_defaultValue = defaultValue) != null ? _defaultValue : [],
        open: defaultOpen
      };
    },
    getItemId,
    controlledProps: controlledState,
    itemComparer: areOptionsEqual,
    isItemDisabled,
    rootRef: mergedButtonRef,
    onChange: handleSelectionChange,
    onHighlightChange: handleHighlightChange,
    onStateChange: handleStateChange,
    reducerActionContext: React44.useMemo(() => ({
      multiple
    }), [multiple]),
    items: optionValues,
    getItemAsString: stringifyOption,
    selectionMode: multiple ? "multiple" : "single",
    stateReducer: selectReducer
  };
  const {
    dispatch,
    getRootProps: getListboxRootProps,
    contextValue: listContextValue,
    state: {
      open,
      highlightedValue: highlightedOption,
      selectedValues: selectedOptions
    },
    rootRef: mergedListRootRef
  } = useList(useListParameters);
  const createHandleButtonMouseDown = (otherHandlers) => (event) => {
    var _otherHandlers$onMous;
    otherHandlers == null || (_otherHandlers$onMous = otherHandlers.onMouseDown) == null ? void 0 : _otherHandlers$onMous.call(otherHandlers, event);
    if (!event.defaultMuiPrevented) {
      const action = {
        type: SelectActionTypes.buttonClick,
        event
      };
      dispatch(action);
    }
  };
  useEnhancedEffect_default(() => {
    if (highlightedOption != null) {
      var _getOptionByValue;
      const optionRef = (_getOptionByValue = getOptionByValue(highlightedOption)) == null ? void 0 : _getOptionByValue.ref;
      if (!listboxRef.current || !(optionRef != null && optionRef.current)) {
        return;
      }
      const listboxClientRect = listboxRef.current.getBoundingClientRect();
      const optionClientRect = optionRef.current.getBoundingClientRect();
      if (optionClientRect.top < listboxClientRect.top) {
        listboxRef.current.scrollTop -= listboxClientRect.top - optionClientRect.top;
      } else if (optionClientRect.bottom > listboxClientRect.bottom) {
        listboxRef.current.scrollTop += optionClientRect.bottom - listboxClientRect.bottom;
      }
    }
  }, [highlightedOption, getOptionByValue]);
  const getOptionMetadata = React44.useCallback((optionValue) => getOptionByValue(optionValue), [getOptionByValue]);
  const getSelectTriggerProps = (otherHandlers = {}) => {
    return _extends({}, otherHandlers, {
      onMouseDown: createHandleButtonMouseDown(otherHandlers),
      ref: mergedListRootRef,
      role: "combobox",
      "aria-expanded": open,
      "aria-controls": listboxId
    });
  };
  const getButtonProps = (otherHandlers = {}) => {
    const listboxAndButtonProps = combineHooksSlotProps(getButtonRootProps, getListboxRootProps);
    const combinedProps = combineHooksSlotProps(listboxAndButtonProps, getSelectTriggerProps);
    return combinedProps(otherHandlers);
  };
  const getListboxProps = (otherHandlers = {}) => {
    return _extends({}, otherHandlers, {
      id: listboxId,
      role: "listbox",
      "aria-multiselectable": multiple ? "true" : void 0,
      ref: handleListboxRef,
      onMouseDown: preventDefault
      // to prevent the button from losing focus when interacting with the listbox
    });
  };
  React44.useDebugValue({
    selectedOptions,
    highlightedOption,
    open
  });
  const contextValue = React44.useMemo(() => _extends({}, listContextValue, compoundComponentContextValue), [listContextValue, compoundComponentContextValue]);
  let selectValue;
  if (props.multiple) {
    selectValue = selectedOptions;
  } else {
    selectValue = selectedOptions.length > 0 ? selectedOptions[0] : null;
  }
  return {
    buttonActive,
    buttonFocusVisible,
    buttonRef: mergedButtonRef,
    contextValue,
    disabled,
    dispatch,
    getButtonProps,
    getListboxProps,
    getOptionMetadata,
    listboxRef: mergedListRootRef,
    open,
    options: optionValues,
    value: selectValue,
    highlightedOption
  };
}

// node_modules/@mui/base/useSelect/SelectProvider.js
var React45 = __toESM(require_react());
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
function SelectProvider(props) {
  const {
    value,
    children
  } = props;
  const {
    dispatch,
    getItemIndex,
    getItemState,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler,
    registerItem,
    totalSubitemCount
  } = value;
  const listContextValue = React45.useMemo(() => ({
    dispatch,
    getItemState,
    getItemIndex,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler
  }), [dispatch, getItemIndex, getItemState, registerHighlightChangeHandler, registerSelectionChangeHandler]);
  const compoundComponentContextValue = React45.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount
  }), [registerItem, getItemIndex, totalSubitemCount]);
  return (0, import_jsx_runtime29.jsx)(CompoundComponentContext.Provider, {
    value: compoundComponentContextValue,
    children: (0, import_jsx_runtime29.jsx)(ListContext.Provider, {
      value: listContextValue,
      children
    })
  });
}

// node_modules/@mui/base/Select/selectClasses.js
function getSelectUtilityClass(slot) {
  return generateUtilityClass("MuiSelect", slot);
}
var selectClasses = generateUtilityClasses("MuiSelect", ["root", "button", "listbox", "popper", "active", "expanded", "disabled", "focusVisible"]);

// node_modules/@mui/base/Select/Select.js
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
var _excluded16 = ["areOptionsEqual", "autoFocus", "children", "defaultValue", "defaultListboxOpen", "disabled", "getSerializedValue", "listboxId", "listboxOpen", "multiple", "name", "onChange", "onListboxOpenChange", "getOptionAsString", "renderValue", "slotProps", "slots", "value"];
function defaultRenderValue(selectedOptions) {
  var _selectedOptions$labe;
  if (Array.isArray(selectedOptions)) {
    return (0, import_jsx_runtime30.jsx)(React46.Fragment, {
      children: selectedOptions.map((o) => o.label).join(", ")
    });
  }
  return (_selectedOptions$labe = selectedOptions == null ? void 0 : selectedOptions.label) != null ? _selectedOptions$labe : "";
}
function defaultFormValueProvider(selectedOption) {
  if (Array.isArray(selectedOption)) {
    if (selectedOption.length === 0) {
      return "";
    }
    if (selectedOption.every((o) => typeof o.value === "string" || typeof o.value === "number" || typeof o.value === "boolean")) {
      return selectedOption.map((o) => String(o.value));
    }
    return JSON.stringify(selectedOption.map((o) => o.value));
  }
  if ((selectedOption == null ? void 0 : selectedOption.value) == null) {
    return "";
  }
  if (typeof selectedOption.value === "string" || typeof selectedOption.value === "number") {
    return selectedOption.value;
  }
  return JSON.stringify(selectedOption.value);
}
function useUtilityClasses14(ownerState) {
  const {
    active,
    disabled,
    open,
    focusVisible
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible", active && "active", open && "expanded"],
    listbox: ["listbox", disabled && "disabled"],
    popper: ["popper"]
  };
  return composeClasses(slots, useClassNamesOverride(getSelectUtilityClass));
}
var Select = React46.forwardRef(function Select2(props, forwardedRef) {
  var _slots$root, _slots$listbox, _slots$popper;
  const {
    areOptionsEqual,
    autoFocus,
    children,
    defaultValue,
    defaultListboxOpen = false,
    disabled: disabledProp,
    getSerializedValue = defaultFormValueProvider,
    listboxId,
    listboxOpen: listboxOpenProp,
    multiple = false,
    name,
    onChange,
    onListboxOpenChange,
    getOptionAsString = defaultOptionStringifier,
    renderValue: renderValueProp,
    slotProps = {},
    slots = {},
    value: valueProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded16);
  const renderValue = renderValueProp != null ? renderValueProp : defaultRenderValue;
  const [buttonDefined, setButtonDefined] = React46.useState(false);
  const buttonRef = React46.useRef(null);
  const listboxRef = React46.useRef(null);
  const Button3 = (_slots$root = slots.root) != null ? _slots$root : "button";
  const ListboxRoot = (_slots$listbox = slots.listbox) != null ? _slots$listbox : "ul";
  const PopperComponent = (_slots$popper = slots.popper) != null ? _slots$popper : Popper;
  const handleButtonRefChange = React46.useCallback((element) => {
    setButtonDefined(element != null);
  }, []);
  const handleButtonRef = useForkRef(forwardedRef, buttonRef, handleButtonRefChange);
  React46.useEffect(() => {
    if (autoFocus) {
      buttonRef.current.focus();
    }
  }, [autoFocus]);
  const {
    buttonActive,
    buttonFocusVisible,
    contextValue,
    disabled,
    getButtonProps,
    getListboxProps,
    getOptionMetadata,
    value,
    open
  } = useSelect({
    areOptionsEqual,
    buttonRef: handleButtonRef,
    defaultOpen: defaultListboxOpen,
    defaultValue,
    disabled: disabledProp,
    listboxId,
    multiple,
    open: listboxOpenProp,
    onChange,
    onOpenChange: onListboxOpenChange,
    getOptionAsString,
    value: valueProp
  });
  const ownerState = _extends({}, props, {
    active: buttonActive,
    defaultListboxOpen,
    disabled,
    focusVisible: buttonFocusVisible,
    open,
    multiple,
    renderValue,
    value
  });
  const classes = useUtilityClasses14(ownerState);
  const buttonProps = useSlotProps({
    elementType: Button3,
    getSlotProps: getButtonProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    ownerState,
    className: classes.root
  });
  const listboxProps = useSlotProps({
    elementType: ListboxRoot,
    getSlotProps: getListboxProps,
    externalSlotProps: slotProps.listbox,
    additionalProps: {
      ref: listboxRef
    },
    ownerState,
    className: classes.listbox
  });
  const popperProps = useSlotProps({
    elementType: PopperComponent,
    externalSlotProps: slotProps.popper,
    additionalProps: {
      anchorEl: buttonRef.current,
      keepMounted: true,
      open,
      placement: "bottom-start",
      role: void 0
    },
    ownerState,
    className: classes.popper
  });
  let selectedOptionsMetadata;
  if (multiple) {
    selectedOptionsMetadata = value.map((v) => getOptionMetadata(v)).filter((o) => o !== void 0);
  } else {
    var _getOptionMetadata;
    selectedOptionsMetadata = (_getOptionMetadata = getOptionMetadata(value)) != null ? _getOptionMetadata : null;
  }
  return (0, import_jsx_runtime31.jsxs)(React46.Fragment, {
    children: [(0, import_jsx_runtime30.jsx)(Button3, _extends({}, buttonProps, {
      children: renderValue(selectedOptionsMetadata)
    })), buttonDefined && (0, import_jsx_runtime30.jsx)(PopperComponent, _extends({}, popperProps, {
      children: (0, import_jsx_runtime30.jsx)(ListboxRoot, _extends({}, listboxProps, {
        children: (0, import_jsx_runtime30.jsx)(SelectProvider, {
          value: contextValue,
          children
        })
      }))
    })), name && (0, import_jsx_runtime30.jsx)("input", {
      type: "hidden",
      name,
      value: getSerializedValue(selectedOptionsMetadata)
    })]
  });
});
true ? Select.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A function used to determine if two options' values are equal.
   * By default, reference equality is used.
   *
   * There is a performance impact when using the `areOptionsEqual` prop (proportional to the number of options).
   * Therefore, it's recommented to use the default reference equality comparison whenever possible.
   */
  areOptionsEqual: import_prop_types20.default.func,
  /**
   * If `true`, the select element is focused during the first mount
   * @default false
   */
  autoFocus: import_prop_types20.default.bool,
  /**
   * @ignore
   */
  children: import_prop_types20.default.node,
  /**
   * @ignore
   */
  className: import_prop_types20.default.string,
  /**
   * If `true`, the select will be initially open.
   * @default false
   */
  defaultListboxOpen: import_prop_types20.default.bool,
  /**
   * The default selected value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types20.default.any,
  /**
   * If `true`, the select is disabled.
   * @default false
   */
  disabled: import_prop_types20.default.bool,
  /**
   * A function used to convert the option label to a string.
   * It's useful when labels are elements and need to be converted to plain text
   * to enable navigation using character keys on a keyboard.
   *
   * @default defaultOptionStringifier
   */
  getOptionAsString: import_prop_types20.default.func,
  /**
   * A function to convert the currently selected value to a string.
   * Used to set a value of a hidden input associated with the select,
   * so that the selected value can be posted with a form.
   */
  getSerializedValue: import_prop_types20.default.func,
  /**
   * `id` attribute of the listbox element.
   */
  listboxId: import_prop_types20.default.string,
  /**
   * Controls the open state of the select's listbox.
   * @default undefined
   */
  listboxOpen: import_prop_types20.default.bool,
  /**
   * If `true`, selecting multiple values is allowed.
   * This affects the type of the `value`, `defaultValue`, and `onChange` props.
   *
   * @default false
   */
  multiple: import_prop_types20.default.bool,
  /**
   * Name of the element. For example used by the server to identify the fields in form submits.
   * If the name is provided, the component will render a hidden input element that can be submitted to a server.
   */
  name: import_prop_types20.default.string,
  /**
   * Callback fired when an option is selected.
   */
  onChange: import_prop_types20.default.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see listboxOpen).
   */
  onListboxOpenChange: import_prop_types20.default.func,
  /**
   * Function that customizes the rendering of the selected value.
   */
  renderValue: import_prop_types20.default.func,
  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  slotProps: import_prop_types20.default.shape({
    listbox: import_prop_types20.default.oneOfType([import_prop_types20.default.func, import_prop_types20.default.object]),
    popper: import_prop_types20.default.oneOfType([import_prop_types20.default.func, import_prop_types20.default.object]),
    root: import_prop_types20.default.oneOfType([import_prop_types20.default.func, import_prop_types20.default.object])
  }),
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types20.default.shape({
    listbox: import_prop_types20.default.elementType,
    popper: import_prop_types20.default.elementType,
    root: import_prop_types20.default.elementType
  }),
  /**
   * The selected value.
   * Set to `null` to deselect all options.
   */
  value: import_prop_types20.default.any
} : void 0;

// node_modules/@mui/base/Slider/Slider.js
var React48 = __toESM(require_react());
var import_prop_types21 = __toESM(require_prop_types());

// node_modules/@mui/base/Slider/sliderClasses.js
function getSliderUtilityClass(slot) {
  return generateUtilityClass("MuiSlider", slot);
}
var sliderClasses = generateUtilityClasses("MuiSlider", ["root", "active", "focusVisible", "disabled", "dragging", "marked", "vertical", "trackInverted", "trackFalse", "rail", "track", "mark", "markActive", "markLabel", "markLabelActive", "thumb"]);

// node_modules/@mui/base/useSlider/useSlider.js
var React47 = __toESM(require_react());
var INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;
function asc(a, b) {
  return a - b;
}
function clamp2(value, min2, max2) {
  if (value == null) {
    return min2;
  }
  return Math.min(Math.max(min2, value), max2);
}
function findClosest(values, currentValue) {
  var _values$reduce;
  const {
    index: closestIndex
  } = (_values$reduce = values.reduce((acc, value, index) => {
    const distance = Math.abs(currentValue - value);
    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index
      };
    }
    return acc;
  }, null)) != null ? _values$reduce : {};
  return closestIndex;
}
function trackFinger(event, touchId) {
  if (touchId.current !== void 0 && event.changedTouches) {
    const touchEvent = event;
    for (let i = 0; i < touchEvent.changedTouches.length; i += 1) {
      const touch = touchEvent.changedTouches[i];
      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }
    return false;
  }
  return {
    x: event.clientX,
    y: event.clientY
  };
}
function valueToPercent(value, min2, max2) {
  return (value - min2) * 100 / (max2 - min2);
}
function percentToValue(percent, min2, max2) {
  return (max2 - min2) * percent + min2;
}
function getDecimalPrecision(num) {
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split("e-");
    const matissaDecimalPart = parts[0].split(".")[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }
  const decimalPart = num.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToStep(value, step, min2) {
  const nearest = Math.round((value - min2) / step) * step + min2;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}
function setValueIndex({
  values,
  newValue,
  index
}) {
  const output = values.slice();
  output[index] = newValue;
  return output.sort(asc);
}
function focusThumb({
  sliderRef,
  activeIndex,
  setActive
}) {
  var _sliderRef$current, _doc$activeElement;
  const doc = ownerDocument(sliderRef.current);
  if (!((_sliderRef$current = sliderRef.current) != null && _sliderRef$current.contains(doc.activeElement)) || Number(doc == null || (_doc$activeElement = doc.activeElement) == null ? void 0 : _doc$activeElement.getAttribute("data-index")) !== activeIndex) {
    var _sliderRef$current2;
    (_sliderRef$current2 = sliderRef.current) == null ? void 0 : _sliderRef$current2.querySelector(`[type="range"][data-index="${activeIndex}"]`).focus();
  }
  if (setActive) {
    setActive(activeIndex);
  }
}
function areValuesEqual(newValue, oldValue) {
  if (typeof newValue === "number" && typeof oldValue === "number") {
    return newValue === oldValue;
  }
  if (typeof newValue === "object" && typeof oldValue === "object") {
    return areArraysEqual(newValue, oldValue);
  }
  return false;
}
var axisProps = {
  horizontal: {
    offset: (percent) => ({
      left: `${percent}%`
    }),
    leap: (percent) => ({
      width: `${percent}%`
    })
  },
  "horizontal-reverse": {
    offset: (percent) => ({
      right: `${percent}%`
    }),
    leap: (percent) => ({
      width: `${percent}%`
    })
  },
  vertical: {
    offset: (percent) => ({
      bottom: `${percent}%`
    }),
    leap: (percent) => ({
      height: `${percent}%`
    })
  }
};
var Identity = (x) => x;
var cachedSupportsTouchActionNone;
function doesSupportTouchActionNone() {
  if (cachedSupportsTouchActionNone === void 0) {
    if (typeof CSS !== "undefined" && typeof CSS.supports === "function") {
      cachedSupportsTouchActionNone = CSS.supports("touch-action", "none");
    } else {
      cachedSupportsTouchActionNone = true;
    }
  }
  return cachedSupportsTouchActionNone;
}
function useSlider(parameters) {
  const {
    "aria-labelledby": ariaLabelledby,
    defaultValue,
    disabled = false,
    disableSwap = false,
    isRtl = false,
    marks: marksProp = false,
    max: max2 = 100,
    min: min2 = 0,
    name,
    onChange,
    onChangeCommitted,
    orientation = "horizontal",
    rootRef: ref,
    scale = Identity,
    step = 1,
    tabIndex,
    value: valueProp
  } = parameters;
  const touchId = React47.useRef();
  const [active, setActive] = React47.useState(-1);
  const [open, setOpen] = React47.useState(-1);
  const [dragging, setDragging] = React47.useState(false);
  const moveCount = React47.useRef(0);
  const [valueDerived, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue != null ? defaultValue : min2,
    name: "Slider"
  });
  const handleChange = onChange && ((event, value, thumbIndex) => {
    const nativeEvent = event.nativeEvent || event;
    const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
    Object.defineProperty(clonedEvent, "target", {
      writable: true,
      value: {
        value,
        name
      }
    });
    onChange(clonedEvent, value, thumbIndex);
  });
  const range = Array.isArray(valueDerived);
  let values = range ? valueDerived.slice().sort(asc) : [valueDerived];
  values = values.map((value) => clamp2(value, min2, max2));
  const marks = marksProp === true && step !== null ? [...Array(Math.floor((max2 - min2) / step) + 1)].map((_, index) => ({
    value: min2 + step * index
  })) : marksProp || [];
  const marksValues = marks.map((mark) => mark.value);
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusedThumbIndex, setFocusedThumbIndex] = React47.useState(-1);
  const sliderRef = React47.useRef();
  const handleFocusRef = useForkRef(focusVisibleRef, sliderRef);
  const handleRef = useForkRef(ref, handleFocusRef);
  const createHandleHiddenInputFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu;
    const index = Number(event.currentTarget.getAttribute("data-index"));
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusedThumbIndex(index);
    }
    setOpen(index);
    otherHandlers == null || (_otherHandlers$onFocu = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);
  };
  const createHandleHiddenInputBlur = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur;
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusedThumbIndex(-1);
    }
    setOpen(-1);
    otherHandlers == null || (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);
  };
  useEnhancedEffect_default(() => {
    if (disabled && sliderRef.current.contains(document.activeElement)) {
      var _document$activeEleme;
      (_document$activeEleme = document.activeElement) == null ? void 0 : _document$activeEleme.blur();
    }
  }, [disabled]);
  if (disabled && active !== -1) {
    setActive(-1);
  }
  if (disabled && focusedThumbIndex !== -1) {
    setFocusedThumbIndex(-1);
  }
  const createHandleHiddenInputChange = (otherHandlers) => (event) => {
    var _otherHandlers$onChan;
    (_otherHandlers$onChan = otherHandlers.onChange) == null ? void 0 : _otherHandlers$onChan.call(otherHandlers, event);
    const index = Number(event.currentTarget.getAttribute("data-index"));
    const value = values[index];
    const marksIndex = marksValues.indexOf(value);
    let newValue = event.target.valueAsNumber;
    if (marks && step == null) {
      const maxMarksValue = marksValues[marksValues.length - 1];
      if (newValue > maxMarksValue) {
        newValue = maxMarksValue;
      } else if (newValue < marksValues[0]) {
        newValue = marksValues[0];
      } else {
        newValue = newValue < value ? marksValues[marksIndex - 1] : marksValues[marksIndex + 1];
      }
    }
    newValue = clamp2(newValue, min2, max2);
    if (range) {
      if (disableSwap) {
        newValue = clamp2(newValue, values[index - 1] || -Infinity, values[index + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        newValue,
        index
      });
      let activeIndex = index;
      if (!disableSwap) {
        activeIndex = newValue.indexOf(previousValue);
      }
      focusThumb({
        sliderRef,
        activeIndex
      });
    }
    setValueState(newValue);
    setFocusedThumbIndex(index);
    if (handleChange && !areValuesEqual(newValue, valueDerived)) {
      handleChange(event, newValue, index);
    }
    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
  };
  const previousIndex = React47.useRef();
  let axis = orientation;
  if (isRtl && orientation === "horizontal") {
    axis += "-reverse";
  }
  const getFingerNewValue = ({
    finger,
    move = false
  }) => {
    const {
      current: slider
    } = sliderRef;
    const {
      width,
      height,
      bottom: bottom2,
      left: left2
    } = slider.getBoundingClientRect();
    let percent;
    if (axis.indexOf("vertical") === 0) {
      percent = (bottom2 - finger.y) / height;
    } else {
      percent = (finger.x - left2) / width;
    }
    if (axis.indexOf("-reverse") !== -1) {
      percent = 1 - percent;
    }
    let newValue;
    newValue = percentToValue(percent, min2, max2);
    if (step) {
      newValue = roundValueToStep(newValue, step, min2);
    } else {
      const closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }
    newValue = clamp2(newValue, min2, max2);
    let activeIndex = 0;
    if (range) {
      if (!move) {
        activeIndex = findClosest(values, newValue);
      } else {
        activeIndex = previousIndex.current;
      }
      if (disableSwap) {
        newValue = clamp2(newValue, values[activeIndex - 1] || -Infinity, values[activeIndex + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        newValue,
        index: activeIndex
      });
      if (!(disableSwap && move)) {
        activeIndex = newValue.indexOf(previousValue);
        previousIndex.current = activeIndex;
      }
    }
    return {
      newValue,
      activeIndex
    };
  };
  const handleTouchMove = useEventCallback_default((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId);
    if (!finger) {
      return;
    }
    moveCount.current += 1;
    if (nativeEvent.type === "mousemove" && nativeEvent.buttons === 0) {
      handleTouchEnd(nativeEvent);
      return;
    }
    const {
      newValue,
      activeIndex
    } = getFingerNewValue({
      finger,
      move: true
    });
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);
    if (!dragging && moveCount.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
      setDragging(true);
    }
    if (handleChange && !areValuesEqual(newValue, valueDerived)) {
      handleChange(nativeEvent, newValue, activeIndex);
    }
  });
  const handleTouchEnd = useEventCallback_default((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId);
    setDragging(false);
    if (!finger) {
      return;
    }
    const {
      newValue
    } = getFingerNewValue({
      finger,
      move: true
    });
    setActive(-1);
    if (nativeEvent.type === "touchend") {
      setOpen(-1);
    }
    if (onChangeCommitted) {
      onChangeCommitted(nativeEvent, newValue);
    }
    touchId.current = void 0;
    stopListening();
  });
  const handleTouchStart = useEventCallback_default((nativeEvent) => {
    if (disabled) {
      return;
    }
    if (!doesSupportTouchActionNone()) {
      nativeEvent.preventDefault();
    }
    const touch = nativeEvent.changedTouches[0];
    if (touch != null) {
      touchId.current = touch.identifier;
    }
    const finger = trackFinger(nativeEvent, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(nativeEvent, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener("touchmove", handleTouchMove);
    doc.addEventListener("touchend", handleTouchEnd);
  });
  const stopListening = React47.useCallback(() => {
    const doc = ownerDocument(sliderRef.current);
    doc.removeEventListener("mousemove", handleTouchMove);
    doc.removeEventListener("mouseup", handleTouchEnd);
    doc.removeEventListener("touchmove", handleTouchMove);
    doc.removeEventListener("touchend", handleTouchEnd);
  }, [handleTouchEnd, handleTouchMove]);
  React47.useEffect(() => {
    const {
      current: slider
    } = sliderRef;
    slider.addEventListener("touchstart", handleTouchStart, {
      passive: doesSupportTouchActionNone()
    });
    return () => {
      slider.removeEventListener("touchstart", handleTouchStart, {
        passive: doesSupportTouchActionNone()
      });
      stopListening();
    };
  }, [stopListening, handleTouchStart]);
  React47.useEffect(() => {
    if (disabled) {
      stopListening();
    }
  }, [disabled, stopListening]);
  const createHandleMouseDown = (otherHandlers) => (event) => {
    var _otherHandlers$onMous;
    (_otherHandlers$onMous = otherHandlers.onMouseDown) == null ? void 0 : _otherHandlers$onMous.call(otherHandlers, event);
    if (disabled) {
      return;
    }
    if (event.defaultPrevented) {
      return;
    }
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    const finger = trackFinger(event, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(event, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener("mousemove", handleTouchMove);
    doc.addEventListener("mouseup", handleTouchEnd);
  };
  const trackOffset = valueToPercent(range ? values[0] : min2, min2, max2);
  const trackLeap = valueToPercent(values[values.length - 1], min2, max2) - trackOffset;
  const getRootProps = (otherHandlers = {}) => {
    const ownEventHandlers = {
      onMouseDown: createHandleMouseDown(otherHandlers || {})
    };
    const mergedEventHandlers = _extends({}, otherHandlers, ownEventHandlers);
    return _extends({
      ref: handleRef
    }, mergedEventHandlers);
  };
  const createHandleMouseOver = (otherHandlers) => (event) => {
    var _otherHandlers$onMous2;
    (_otherHandlers$onMous2 = otherHandlers.onMouseOver) == null ? void 0 : _otherHandlers$onMous2.call(otherHandlers, event);
    const index = Number(event.currentTarget.getAttribute("data-index"));
    setOpen(index);
  };
  const createHandleMouseLeave = (otherHandlers) => (event) => {
    var _otherHandlers$onMous3;
    (_otherHandlers$onMous3 = otherHandlers.onMouseLeave) == null ? void 0 : _otherHandlers$onMous3.call(otherHandlers, event);
    setOpen(-1);
  };
  const getThumbProps = (otherHandlers = {}) => {
    const ownEventHandlers = {
      onMouseOver: createHandleMouseOver(otherHandlers || {}),
      onMouseLeave: createHandleMouseLeave(otherHandlers || {})
    };
    return _extends({}, otherHandlers, ownEventHandlers);
  };
  const getThumbStyle = (index) => {
    return {
      // So the non active thumb doesn't show its label on hover.
      pointerEvents: active !== -1 && active !== index ? "none" : void 0
    };
  };
  const getHiddenInputProps = (otherHandlers = {}) => {
    var _parameters$step;
    const ownEventHandlers = {
      onChange: createHandleHiddenInputChange(otherHandlers || {}),
      onFocus: createHandleHiddenInputFocus(otherHandlers || {}),
      onBlur: createHandleHiddenInputBlur(otherHandlers || {})
    };
    const mergedEventHandlers = _extends({}, otherHandlers, ownEventHandlers);
    return _extends({
      tabIndex,
      "aria-labelledby": ariaLabelledby,
      "aria-orientation": orientation,
      "aria-valuemax": scale(max2),
      "aria-valuemin": scale(min2),
      name,
      type: "range",
      min: parameters.min,
      max: parameters.max,
      step: parameters.step === null && parameters.marks ? "any" : (_parameters$step = parameters.step) != null ? _parameters$step : void 0,
      disabled
    }, mergedEventHandlers, {
      style: _extends({}, visuallyHidden_default, {
        direction: isRtl ? "rtl" : "ltr",
        // So that VoiceOver's focus indicator matches the thumb's dimensions
        width: "100%",
        height: "100%"
      })
    });
  };
  return {
    active,
    axis,
    axisProps,
    dragging,
    focusedThumbIndex,
    getHiddenInputProps,
    getRootProps,
    getThumbProps,
    marks,
    open,
    range,
    rootRef: handleRef,
    trackLeap,
    trackOffset,
    values,
    getThumbStyle
  };
}

// node_modules/@mui/base/Slider/Slider.js
var import_jsx_runtime32 = __toESM(require_jsx_runtime());
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
var _excluded17 = ["aria-label", "aria-valuetext", "aria-labelledby", "className", "disableSwap", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "orientation", "scale", "step", "tabIndex", "track", "value", "valueLabelFormat", "isRtl", "defaultValue", "slotProps", "slots"];
function Identity2(x) {
  return x;
}
var useUtilityClasses15 = (ownerState) => {
  const {
    disabled,
    dragging,
    marked,
    orientation,
    track
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", dragging && "dragging", marked && "marked", orientation === "vertical" && "vertical", track === "inverted" && "trackInverted", track === false && "trackFalse"],
    rail: ["rail"],
    track: ["track"],
    mark: ["mark"],
    markActive: ["markActive"],
    markLabel: ["markLabel"],
    markLabelActive: ["markLabelActive"],
    valueLabel: ["valueLabel"],
    thumb: ["thumb", disabled && "disabled"],
    active: ["active"],
    disabled: ["disabled"],
    focusVisible: ["focusVisible"]
  };
  return composeClasses(slots, useClassNamesOverride(getSliderUtilityClass));
};
var Slider = React48.forwardRef(function Slider2(props, forwardedRef) {
  var _slots$root, _slots$rail, _slots$track, _slots$thumb, _slots$mark, _slots$markLabel;
  const {
    "aria-label": ariaLabel,
    "aria-valuetext": ariaValuetext,
    "aria-labelledby": ariaLabelledby,
    className,
    disableSwap = false,
    disabled = false,
    getAriaLabel,
    getAriaValueText,
    marks: marksProp = false,
    max: max2 = 100,
    min: min2 = 0,
    orientation = "horizontal",
    scale = Identity2,
    step = 1,
    track = "normal",
    valueLabelFormat = Identity2,
    isRtl = false,
    defaultValue,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded17);
  const partialOwnerState = _extends({}, props, {
    marks: marksProp,
    disabled,
    disableSwap,
    isRtl,
    defaultValue,
    max: max2,
    min: min2,
    orientation,
    scale,
    step,
    track,
    valueLabelFormat
  });
  const {
    axisProps: axisProps2,
    getRootProps,
    getHiddenInputProps,
    getThumbProps,
    active,
    axis,
    range,
    focusedThumbIndex,
    dragging,
    marks,
    values,
    trackOffset,
    trackLeap,
    getThumbStyle
  } = useSlider(_extends({}, partialOwnerState, {
    rootRef: forwardedRef
  }));
  const ownerState = _extends({}, partialOwnerState, {
    marked: marks.length > 0 && marks.some((mark) => mark.label),
    dragging,
    focusedThumbIndex,
    activeThumbIndex: active
  });
  const classes = useUtilityClasses15(ownerState);
  const Root = (_slots$root = slots.root) != null ? _slots$root : "span";
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    ownerState,
    className: [classes.root, className]
  });
  const Rail = (_slots$rail = slots.rail) != null ? _slots$rail : "span";
  const railProps = useSlotProps({
    elementType: Rail,
    externalSlotProps: slotProps.rail,
    ownerState,
    className: classes.rail
  });
  const Track = (_slots$track = slots.track) != null ? _slots$track : "span";
  const trackProps = useSlotProps({
    elementType: Track,
    externalSlotProps: slotProps.track,
    additionalProps: {
      style: _extends({}, axisProps2[axis].offset(trackOffset), axisProps2[axis].leap(trackLeap))
    },
    ownerState,
    className: classes.track
  });
  const Thumb = (_slots$thumb = slots.thumb) != null ? _slots$thumb : "span";
  const thumbProps = useSlotProps({
    elementType: Thumb,
    getSlotProps: getThumbProps,
    externalSlotProps: slotProps.thumb,
    ownerState,
    skipResolvingSlotProps: true
  });
  const ValueLabel = slots.valueLabel;
  const valueLabelProps = useSlotProps({
    elementType: ValueLabel,
    externalSlotProps: slotProps.valueLabel,
    ownerState
  });
  const Mark = (_slots$mark = slots.mark) != null ? _slots$mark : "span";
  const markProps = useSlotProps({
    elementType: Mark,
    externalSlotProps: slotProps.mark,
    ownerState,
    className: classes.mark
  });
  const MarkLabel = (_slots$markLabel = slots.markLabel) != null ? _slots$markLabel : "span";
  const markLabelProps = useSlotProps({
    elementType: MarkLabel,
    externalSlotProps: slotProps.markLabel,
    ownerState
  });
  const Input5 = slots.input || "input";
  const inputProps = useSlotProps({
    elementType: Input5,
    getSlotProps: getHiddenInputProps,
    externalSlotProps: slotProps.input,
    ownerState
  });
  return (0, import_jsx_runtime33.jsxs)(Root, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime32.jsx)(Rail, _extends({}, railProps)), (0, import_jsx_runtime32.jsx)(Track, _extends({}, trackProps)), marks.filter((mark) => mark.value >= min2 && mark.value <= max2).map((mark, index) => {
      const percent = valueToPercent(mark.value, min2, max2);
      const style = axisProps2[axis].offset(percent);
      let markActive;
      if (track === false) {
        markActive = values.indexOf(mark.value) !== -1;
      } else {
        markActive = track === "normal" && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === "inverted" && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
      }
      return (0, import_jsx_runtime33.jsxs)(React48.Fragment, {
        children: [(0, import_jsx_runtime32.jsx)(Mark, _extends({
          "data-index": index
        }, markProps, !isHostComponent(Mark) && {
          markActive
        }, {
          style: _extends({}, style, markProps.style),
          className: clsx_default(markProps.className, markActive && classes.markActive)
        })), mark.label != null ? (0, import_jsx_runtime32.jsx)(MarkLabel, _extends({
          "aria-hidden": true,
          "data-index": index
        }, markLabelProps, !isHostComponent(MarkLabel) && {
          markLabelActive: markActive
        }, {
          style: _extends({}, style, markLabelProps.style),
          className: clsx_default(classes.markLabel, markLabelProps.className, markActive && classes.markLabelActive),
          children: mark.label
        })) : null]
      }, index);
    }), values.map((value, index) => {
      const percent = valueToPercent(value, min2, max2);
      const style = axisProps2[axis].offset(percent);
      const resolvedSlotProps = resolveComponentProps(slotProps.thumb, ownerState, {
        index,
        focused: focusedThumbIndex === index,
        active: active === index
      });
      return (0, import_jsx_runtime33.jsxs)(Thumb, _extends({
        "data-index": index
      }, thumbProps, resolvedSlotProps, {
        className: clsx_default(classes.thumb, thumbProps.className, resolvedSlotProps == null ? void 0 : resolvedSlotProps.className, active === index && classes.active, focusedThumbIndex === index && classes.focusVisible),
        style: _extends({}, style, getThumbStyle(index), thumbProps.style, resolvedSlotProps == null ? void 0 : resolvedSlotProps.style),
        children: [(0, import_jsx_runtime32.jsx)(Input5, _extends({
          "data-index": index,
          "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
          "aria-valuenow": scale(value),
          "aria-labelledby": ariaLabelledby,
          "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
          value: values[index]
        }, inputProps)), ValueLabel ? (0, import_jsx_runtime32.jsx)(ValueLabel, _extends({}, !isHostComponent(ValueLabel) && {
          valueLabelFormat,
          index,
          disabled
        }, valueLabelProps, {
          children: typeof valueLabelFormat === "function" ? valueLabelFormat(scale(value), index) : valueLabelFormat
        })) : null]
      }), index);
    })]
  }));
});
true ? Slider.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The label of the slider.
   */
  "aria-label": chainPropTypes(import_prop_types21.default.string, (props) => {
    const range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-label"] != null) {
      return new Error("MUI: You need to use the `getAriaLabel` prop instead of `aria-label` when using a range slider.");
    }
    return null;
  }),
  /**
   * The id of the element containing a label for the slider.
   */
  "aria-labelledby": import_prop_types21.default.string,
  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  "aria-valuetext": chainPropTypes(import_prop_types21.default.string, (props) => {
    const range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-valuetext"] != null) {
      return new Error("MUI: You need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range slider.");
    }
    return null;
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types21.default.oneOfType([import_prop_types21.default.arrayOf(import_prop_types21.default.number), import_prop_types21.default.number]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types21.default.bool,
  /**
   * If `true`, the active thumb doesn't swap when moving pointer over a thumb while dragging another thumb.
   * @default false
   */
  disableSwap: import_prop_types21.default.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider.
   * This is important for screen reader users.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaLabel: import_prop_types21.default.func,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
   * This is important for screen reader users.
   * @param {number} value The thumb label's value to format.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaValueText: import_prop_types21.default.func,
  /**
   * If `true` the Slider will be rendered right-to-left (with the lowest value on the right-hand side).
   * @default false
   */
  isRtl: import_prop_types21.default.bool,
  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks are spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   * @default false
   */
  marks: import_prop_types21.default.oneOfType([import_prop_types21.default.arrayOf(import_prop_types21.default.shape({
    label: import_prop_types21.default.node,
    value: import_prop_types21.default.number.isRequired
  })), import_prop_types21.default.bool]),
  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   * @default 100
   */
  max: import_prop_types21.default.number,
  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   * @default 0
   */
  min: import_prop_types21.default.number,
  /**
   * Name attribute of the hidden `input` element.
   */
  name: import_prop_types21.default.string,
  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {Event} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   * @param {number} activeThumb Index of the currently moved thumb.
   */
  onChange: import_prop_types21.default.func,
  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param {React.SyntheticEvent | Event} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   */
  onChangeCommitted: import_prop_types21.default.func,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: import_prop_types21.default.oneOf(["horizontal", "vertical"]),
  /**
   * A transformation function, to change the scale of the slider.
   * @param {any} x
   * @returns {any}
   * @default function Identity(x) {
   *   return x;
   * }
   */
  scale: import_prop_types21.default.func,
  /**
   * The props used for each slot inside the Slider.
   * @default {}
   */
  slotProps: import_prop_types21.default.shape({
    input: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object]),
    mark: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object]),
    markLabel: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object]),
    rail: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object]),
    root: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object]),
    thumb: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object]),
    track: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object]),
    valueLabel: import_prop_types21.default.oneOfType([import_prop_types21.default.any, import_prop_types21.default.func])
  }),
  /**
   * The components used for each slot inside the Slider.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types21.default.shape({
    input: import_prop_types21.default.elementType,
    mark: import_prop_types21.default.elementType,
    markLabel: import_prop_types21.default.elementType,
    rail: import_prop_types21.default.elementType,
    root: import_prop_types21.default.elementType,
    thumb: import_prop_types21.default.elementType,
    track: import_prop_types21.default.elementType,
    valueLabel: import_prop_types21.default.elementType
  }),
  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   *
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   * @default 1
   */
  step: import_prop_types21.default.number,
  /**
   * Tab index attribute of the hidden `input` element.
   */
  tabIndex: import_prop_types21.default.number,
  /**
   * The track presentation:
   *
   * - `normal` the track will render a bar representing the slider value.
   * - `inverted` the track will render a bar representing the remaining slider value.
   * - `false` the track will render without a bar.
   * @default 'normal'
   */
  track: import_prop_types21.default.oneOf(["inverted", "normal", false]),
  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value: import_prop_types21.default.oneOfType([import_prop_types21.default.arrayOf(import_prop_types21.default.number), import_prop_types21.default.number]),
  /**
   * The format function the value label's value.
   *
   * When a function is provided, it should have the following signature:
   *
   * - {number} value The value label's value to format
   * - {number} index The value label's index to format
   * @param {any} x
   * @returns {any}
   * @default function Identity(x) {
   *   return x;
   * }
   */
  valueLabelFormat: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.string])
} : void 0;

// node_modules/@mui/base/Snackbar/Snackbar.js
var React50 = __toESM(require_react());
var import_prop_types22 = __toESM(require_prop_types());

// node_modules/@mui/base/Snackbar/snackbarClasses.js
function getSnackbarUtilityClass(slot) {
  return generateUtilityClass("MuiSnackbar", slot);
}
var snackbarClasses = generateUtilityClasses("MuiSnackbar", ["root"]);

// node_modules/@mui/base/useSnackbar/useSnackbar.js
var React49 = __toESM(require_react());
function useSnackbar(parameters) {
  const {
    autoHideDuration = null,
    disableWindowBlurListener = false,
    onClose,
    open,
    resumeHideDuration
  } = parameters;
  const timerAutoHide = React49.useRef();
  React49.useEffect(() => {
    if (!open) {
      return void 0;
    }
    function handleKeyDown2(nativeEvent) {
      if (!nativeEvent.defaultPrevented) {
        if (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") {
          onClose == null ? void 0 : onClose(nativeEvent, "escapeKeyDown");
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown2);
    return () => {
      document.removeEventListener("keydown", handleKeyDown2);
    };
  }, [open, onClose]);
  const handleClose = useEventCallback_default((event, reason) => {
    onClose == null ? void 0 : onClose(event, reason);
  });
  const setAutoHideTimer = useEventCallback_default((autoHideDurationParam) => {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }
    clearTimeout(timerAutoHide.current);
    timerAutoHide.current = setTimeout(() => {
      handleClose(null, "timeout");
    }, autoHideDurationParam);
  });
  React49.useEffect(() => {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }
    return () => {
      clearTimeout(timerAutoHide.current);
    };
  }, [open, autoHideDuration, setAutoHideTimer]);
  const handleClickAway = (event) => {
    onClose == null ? void 0 : onClose(event, "clickaway");
  };
  const handlePause = () => {
    clearTimeout(timerAutoHide.current);
  };
  const handleResume = React49.useCallback(() => {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);
  const createHandleBlur = (otherHandlers) => (event) => {
    const onBlurCallback = otherHandlers.onBlur;
    onBlurCallback == null ? void 0 : onBlurCallback(event);
    handleResume();
  };
  const createHandleFocus = (otherHandlers) => (event) => {
    const onFocusCallback = otherHandlers.onFocus;
    onFocusCallback == null ? void 0 : onFocusCallback(event);
    handlePause();
  };
  const createMouseEnter = (otherHandlers) => (event) => {
    const onMouseEnterCallback = otherHandlers.onMouseEnter;
    onMouseEnterCallback == null ? void 0 : onMouseEnterCallback(event);
    handlePause();
  };
  const createMouseLeave = (otherHandlers) => (event) => {
    const onMouseLeaveCallback = otherHandlers.onMouseLeave;
    onMouseLeaveCallback == null ? void 0 : onMouseLeaveCallback(event);
    handleResume();
  };
  React49.useEffect(() => {
    if (!disableWindowBlurListener && open) {
      window.addEventListener("focus", handleResume);
      window.addEventListener("blur", handlePause);
      return () => {
        window.removeEventListener("focus", handleResume);
        window.removeEventListener("blur", handlePause);
      };
    }
    return void 0;
  }, [disableWindowBlurListener, handleResume, open]);
  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters);
    const externalEventHandlers = _extends({}, propsEventHandlers, otherHandlers);
    return _extends({
      // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
      // See https://github.com/mui/material-ui/issues/29080
      role: "presentation"
    }, externalEventHandlers, {
      onBlur: createHandleBlur(externalEventHandlers),
      onFocus: createHandleFocus(externalEventHandlers),
      onMouseEnter: createMouseEnter(externalEventHandlers),
      onMouseLeave: createMouseLeave(externalEventHandlers)
    });
  };
  return {
    getRootProps,
    onClickAway: handleClickAway
  };
}

// node_modules/@mui/base/Snackbar/Snackbar.js
var import_jsx_runtime34 = __toESM(require_jsx_runtime());
var _excluded18 = ["autoHideDuration", "children", "disableWindowBlurListener", "exited", "onBlur", "onClose", "onFocus", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "slotProps", "slots"];
var useUtilityClasses16 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, useClassNamesOverride(getSnackbarUtilityClass));
};
var Snackbar = React50.forwardRef(function Snackbar2(props, forwardedRef) {
  const {
    autoHideDuration = null,
    children,
    disableWindowBlurListener = false,
    exited = true,
    onClose,
    open,
    resumeHideDuration,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded18);
  const classes = useUtilityClasses16();
  const {
    getRootProps,
    onClickAway
  } = useSnackbar(_extends({}, props, {
    autoHideDuration,
    disableWindowBlurListener,
    onClose,
    open,
    resumeHideDuration
  }));
  const ownerState = props;
  const Root = slots.root || "div";
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    externalSlotProps: slotProps.root,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  const clickAwayListenerProps = useSlotProps({
    elementType: ClickAwayListener,
    externalSlotProps: slotProps.clickAwayListener,
    additionalProps: {
      onClickAway
    },
    ownerState
  });
  delete clickAwayListenerProps.ownerState;
  if (!open && exited) {
    return null;
  }
  return (0, import_jsx_runtime34.jsx)(ClickAwayListener, _extends({}, clickAwayListenerProps, {
    children: (0, import_jsx_runtime34.jsx)(Root, _extends({}, rootProps, {
      children
    }))
  }));
});
true ? Snackbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   * @default null
   */
  autoHideDuration: import_prop_types22.default.number,
  /**
   * @ignore
   */
  children: import_prop_types22.default.node,
  /**
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   * @default false
   */
  disableWindowBlurListener: import_prop_types22.default.bool,
  /**
   * The prop used to handle exited transition and unmount the component.
   * @default true
   */
  exited: import_prop_types22.default.bool,
  /**
   * Callback fired when the component requests to be closed.
   * Typically `onClose` is used to set state in the parent component,
   * which is used to control the `Snackbar` `open` prop.
   * The `reason` parameter can optionally be used to control the response to `onClose`,
   * for example ignoring `clickaway`.
   *
   * @param {React.SyntheticEvent<any> | Event} event The event source of the callback.
   * @param {string} reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`, or `"escapeKeyDown"`.
   */
  onClose: import_prop_types22.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types22.default.bool,
  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` prop isn't specified, it does nothing.
   * If `autoHideDuration` prop is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration: import_prop_types22.default.number,
  /**
   * The props used for each slot inside the Snackbar.
   * @default {}
   */
  slotProps: import_prop_types22.default.shape({
    clickAwayListener: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.shape({
      children: import_prop_types22.default.element.isRequired,
      disableReactTree: import_prop_types22.default.bool,
      mouseEvent: import_prop_types22.default.oneOf(["onClick", "onMouseDown", "onMouseUp", "onPointerDown", "onPointerUp", false]),
      onClickAway: import_prop_types22.default.func,
      touchEvent: import_prop_types22.default.oneOf(["onTouchEnd", "onTouchStart", false])
    })]),
    root: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object])
  }),
  /**
   * The components used for each slot inside the Snackbar.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types22.default.shape({
    root: import_prop_types22.default.elementType
  })
} : void 0;

// node_modules/@mui/base/Switch/Switch.js
var React52 = __toESM(require_react());
var import_prop_types23 = __toESM(require_prop_types());

// node_modules/@mui/base/useSwitch/useSwitch.js
var React51 = __toESM(require_react());
function useSwitch(props) {
  const {
    checked: checkedProp,
    defaultChecked,
    disabled,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly,
    required
  } = props;
  const [checked, setCheckedState] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: "Switch",
    state: "checked"
  });
  const createHandleInputChange = (otherProps) => (event) => {
    var _otherProps$onChange;
    if (event.nativeEvent.defaultPrevented) {
      return;
    }
    setCheckedState(event.target.checked);
    onChange == null ? void 0 : onChange(event);
    (_otherProps$onChange = otherProps.onChange) == null ? void 0 : _otherProps$onChange.call(otherProps, event);
  };
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = React51.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  React51.useEffect(() => {
    isFocusVisibleRef.current = focusVisible;
  }, [focusVisible, isFocusVisibleRef]);
  const inputRef = React51.useRef(null);
  const createHandleFocus = (otherProps) => (event) => {
    var _otherProps$onFocus;
    if (!inputRef.current) {
      inputRef.current = event.currentTarget;
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
      onFocusVisible == null ? void 0 : onFocusVisible(event);
    }
    onFocus == null ? void 0 : onFocus(event);
    (_otherProps$onFocus = otherProps.onFocus) == null ? void 0 : _otherProps$onFocus.call(otherProps, event);
  };
  const createHandleBlur = (otherProps) => (event) => {
    var _otherProps$onBlur;
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    onBlur == null ? void 0 : onBlur(event);
    (_otherProps$onBlur = otherProps.onBlur) == null ? void 0 : _otherProps$onBlur.call(otherProps, event);
  };
  const handleInputRef = useForkRef(focusVisibleRef, inputRef);
  const getInputProps = (otherProps = {}) => _extends({
    checked: checkedProp,
    defaultChecked,
    disabled,
    readOnly,
    ref: handleInputRef,
    required,
    type: "checkbox"
  }, otherProps, {
    onChange: createHandleInputChange(otherProps),
    onFocus: createHandleFocus(otherProps),
    onBlur: createHandleBlur(otherProps)
  });
  return {
    checked,
    disabled: Boolean(disabled),
    focusVisible,
    getInputProps,
    inputRef: handleInputRef,
    readOnly: Boolean(readOnly)
  };
}

// node_modules/@mui/base/Switch/switchClasses.js
function getSwitchUtilityClass(slot) {
  return generateUtilityClass("MuiSwitch", slot);
}
var switchClasses = generateUtilityClasses("MuiSwitch", ["root", "input", "track", "thumb", "checked", "disabled", "focusVisible", "readOnly"]);

// node_modules/@mui/base/Switch/Switch.js
var import_jsx_runtime35 = __toESM(require_jsx_runtime());
var import_jsx_runtime36 = __toESM(require_jsx_runtime());
var _excluded19 = ["checked", "defaultChecked", "disabled", "onBlur", "onChange", "onFocus", "onFocusVisible", "readOnly", "required", "slotProps", "slots"];
var useUtilityClasses17 = (ownerState) => {
  const {
    checked,
    disabled,
    focusVisible,
    readOnly
  } = ownerState;
  const slots = {
    root: ["root", checked && "checked", disabled && "disabled", focusVisible && "focusVisible", readOnly && "readOnly"],
    thumb: ["thumb"],
    input: ["input"],
    track: ["track"]
  };
  return composeClasses(slots, useClassNamesOverride(getSwitchUtilityClass));
};
var Switch = React52.forwardRef(function Switch2(props, forwardedRef) {
  var _slots$root, _slots$thumb, _slots$input, _slots$track;
  const {
    checked: checkedProp,
    defaultChecked,
    disabled: disabledProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly: readOnlyProp,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded19);
  const useSwitchProps = {
    checked: checkedProp,
    defaultChecked,
    disabled: disabledProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly: readOnlyProp
  };
  const {
    getInputProps,
    checked,
    disabled,
    focusVisible,
    readOnly
  } = useSwitch(useSwitchProps);
  const ownerState = _extends({}, props, {
    checked,
    disabled,
    focusVisible,
    readOnly
  });
  const classes = useUtilityClasses17(ownerState);
  const Root = (_slots$root = slots.root) != null ? _slots$root : "span";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  const Thumb = (_slots$thumb = slots.thumb) != null ? _slots$thumb : "span";
  const thumbProps = useSlotProps({
    elementType: Thumb,
    externalSlotProps: slotProps.thumb,
    ownerState,
    className: classes.thumb
  });
  const Input5 = (_slots$input = slots.input) != null ? _slots$input : "input";
  const inputProps = useSlotProps({
    elementType: Input5,
    getSlotProps: getInputProps,
    externalSlotProps: slotProps.input,
    ownerState,
    className: classes.input
  });
  const Track = slots.track === null ? () => null : (_slots$track = slots.track) != null ? _slots$track : "span";
  const trackProps = useSlotProps({
    elementType: Track,
    externalSlotProps: slotProps.track,
    ownerState,
    className: classes.track
  });
  return (0, import_jsx_runtime36.jsxs)(Root, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime35.jsx)(Track, _extends({}, trackProps)), (0, import_jsx_runtime35.jsx)(Thumb, _extends({}, thumbProps)), (0, import_jsx_runtime35.jsx)(Input5, _extends({}, inputProps))]
  }));
});
true ? Switch.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the component is checked.
   */
  checked: import_prop_types23.default.bool,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types23.default.string,
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: import_prop_types23.default.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: import_prop_types23.default.bool,
  /**
   * @ignore
   */
  onBlur: import_prop_types23.default.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: import_prop_types23.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types23.default.func,
  /**
   * @ignore
   */
  onFocusVisible: import_prop_types23.default.func,
  /**
   * If `true`, the component is read only.
   */
  readOnly: import_prop_types23.default.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: import_prop_types23.default.bool,
  /**
   * The props used for each slot inside the Switch.
   * @default {}
   */
  slotProps: import_prop_types23.default.shape({
    input: import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object]),
    root: import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object]),
    thumb: import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object]),
    track: import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object])
  }),
  /**
   * The components used for each slot inside the Switch.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types23.default.shape({
    input: import_prop_types23.default.elementType,
    root: import_prop_types23.default.elementType,
    thumb: import_prop_types23.default.elementType,
    track: import_prop_types23.default.oneOfType([import_prop_types23.default.elementType, import_prop_types23.default.oneOf([null])])
  })
} : void 0;

// node_modules/@mui/base/TablePagination/TablePagination.js
var React54 = __toESM(require_react());
var import_prop_types24 = __toESM(require_prop_types());

// node_modules/@mui/base/TablePagination/TablePaginationActions.js
var React53 = __toESM(require_react());
var import_jsx_runtime37 = __toESM(require_jsx_runtime());
var import_jsx_runtime38 = __toESM(require_jsx_runtime());
var _excluded20 = ["count", "getItemAriaLabel", "onPageChange", "page", "rowsPerPage", "showFirstButton", "showLastButton", "direction", "ownerState", "slotProps", "slots"];
var _span;
var _span2;
var _span3;
var _span4;
function LastPageIconDefault() {
  return _span || (_span = (0, import_jsx_runtime37.jsx)("span", {
    children: "⇾|"
  }));
}
function FirstPageIconDefault() {
  return _span2 || (_span2 = (0, import_jsx_runtime37.jsx)("span", {
    children: "|⇽"
  }));
}
function NextPageIconDefault() {
  return _span3 || (_span3 = (0, import_jsx_runtime37.jsx)("span", {
    children: "⇾"
  }));
}
function BackPageIconDefault() {
  return _span4 || (_span4 = (0, import_jsx_runtime37.jsx)("span", {
    children: "⇽"
  }));
}
function defaultGetAriaLabel(type) {
  return `Go to ${type} page`;
}
var TablePaginationActions = React53.forwardRef(function TablePaginationActions2(props, forwardedRef) {
  var _slots$root, _slots$firstButton, _slots$lastButton, _slots$nextButton, _slots$backButton, _slots$lastPageIcon, _slots$firstPageIcon, _slots$nextPageIcon, _slots$backPageIcon;
  const {
    count,
    getItemAriaLabel = defaultGetAriaLabel,
    onPageChange,
    page,
    rowsPerPage,
    showFirstButton = false,
    showLastButton = false,
    direction,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded20);
  const ownerState = props;
  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };
  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };
  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };
  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState
  });
  const FirstButton = (_slots$firstButton = slots.firstButton) != null ? _slots$firstButton : "button";
  const firstButtonProps = useSlotProps({
    elementType: FirstButton,
    externalSlotProps: slotProps.firstButton,
    additionalProps: {
      onClick: handleFirstPageButtonClick,
      disabled: page === 0,
      "aria-label": getItemAriaLabel("first", page),
      title: getItemAriaLabel("first", page)
    },
    ownerState
  });
  const LastButton = (_slots$lastButton = slots.lastButton) != null ? _slots$lastButton : "button";
  const lastButtonProps = useSlotProps({
    elementType: LastButton,
    externalSlotProps: slotProps.lastButton,
    additionalProps: {
      onClick: handleLastPageButtonClick,
      disabled: page >= Math.ceil(count / rowsPerPage) - 1,
      "aria-label": getItemAriaLabel("last", page),
      title: getItemAriaLabel("last", page)
    },
    ownerState
  });
  const NextButton = (_slots$nextButton = slots.nextButton) != null ? _slots$nextButton : "button";
  const nextButtonProps = useSlotProps({
    elementType: NextButton,
    externalSlotProps: slotProps.nextButton,
    additionalProps: {
      onClick: handleNextButtonClick,
      disabled: count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false,
      "aria-label": getItemAriaLabel("next", page),
      title: getItemAriaLabel("next", page)
    },
    ownerState
  });
  const BackButton = (_slots$backButton = slots.backButton) != null ? _slots$backButton : "button";
  const backButtonProps = useSlotProps({
    elementType: BackButton,
    externalSlotProps: slotProps.backButton,
    additionalProps: {
      onClick: handleBackButtonClick,
      disabled: page === 0,
      "aria-label": getItemAriaLabel("previous", page),
      title: getItemAriaLabel("previous", page)
    },
    ownerState
  });
  const LastPageIcon = (_slots$lastPageIcon = slots.lastPageIcon) != null ? _slots$lastPageIcon : LastPageIconDefault;
  const FirstPageIcon = (_slots$firstPageIcon = slots.firstPageIcon) != null ? _slots$firstPageIcon : FirstPageIconDefault;
  const NextPageIcon = (_slots$nextPageIcon = slots.nextPageIcon) != null ? _slots$nextPageIcon : NextPageIconDefault;
  const BackPageIcon = (_slots$backPageIcon = slots.backPageIcon) != null ? _slots$backPageIcon : BackPageIconDefault;
  return (0, import_jsx_runtime38.jsxs)(Root, _extends({}, rootProps, {
    children: [showFirstButton && (0, import_jsx_runtime37.jsx)(FirstButton, _extends({}, firstButtonProps, {
      children: direction === "rtl" ? (0, import_jsx_runtime37.jsx)(LastPageIcon, {}) : (0, import_jsx_runtime37.jsx)(FirstPageIcon, {})
    })), (0, import_jsx_runtime37.jsx)(BackButton, _extends({}, backButtonProps, {
      children: direction === "rtl" ? (0, import_jsx_runtime37.jsx)(NextPageIcon, {}) : (0, import_jsx_runtime37.jsx)(BackPageIcon, {})
    })), (0, import_jsx_runtime37.jsx)(NextButton, _extends({}, nextButtonProps, {
      children: direction === "rtl" ? (0, import_jsx_runtime37.jsx)(BackPageIcon, {}) : (0, import_jsx_runtime37.jsx)(NextPageIcon, {})
    })), showLastButton && (0, import_jsx_runtime37.jsx)(LastButton, _extends({}, lastButtonProps, {
      children: direction === "rtl" ? (0, import_jsx_runtime37.jsx)(FirstPageIcon, {}) : (0, import_jsx_runtime37.jsx)(LastPageIcon, {})
    }))]
  }));
});

// node_modules/@mui/base/TablePagination/tablePaginationClasses.js
function getTablePaginationUtilityClass(slot) {
  return generateUtilityClass("MuiTablePagination", slot);
}
var tablePaginationClasses = generateUtilityClasses("MuiTablePagination", ["root", "toolbar", "spacer", "selectLabel", "selectRoot", "select", "selectIcon", "input", "menuItem", "displayedRows", "actions"]);

// node_modules/@mui/base/TablePagination/TablePagination.js
var import_jsx_runtime39 = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
var import_jsx_runtime40 = __toESM(require_jsx_runtime());
var _excluded21 = ["colSpan", "count", "getItemAriaLabel", "labelDisplayedRows", "labelId", "labelRowsPerPage", "onPageChange", "onRowsPerPageChange", "page", "rowsPerPage", "rowsPerPageOptions", "selectId", "slotProps", "slots"];
function defaultLabelDisplayedRows({
  from,
  to,
  count
}) {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}
function defaultGetAriaLabel2(type) {
  return `Go to ${type} page`;
}
var useUtilityClasses18 = () => {
  const slots = {
    root: ["root"],
    toolbar: ["toolbar"],
    spacer: ["spacer"],
    selectLabel: ["selectLabel"],
    select: ["select"],
    input: ["input"],
    selectIcon: ["selectIcon"],
    menuItem: ["menuItem"],
    displayedRows: ["displayedRows"],
    actions: ["actions"]
  };
  return composeClasses(slots, useClassNamesOverride(getTablePaginationUtilityClass));
};
var TablePagination = React54.forwardRef(function TablePagination2(props, forwardedRef) {
  var _slots$root, _slots$select, _slots$actions, _slots$menuItem, _slots$selectLabel, _slots$displayedRows, _slots$toolbar, _slots$spacer;
  const {
    colSpan: colSpanProp,
    count,
    getItemAriaLabel = defaultGetAriaLabel2,
    labelDisplayedRows = defaultLabelDisplayedRows,
    labelId: labelIdProp,
    labelRowsPerPage = "Rows per page:",
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    rowsPerPageOptions = [10, 25, 50, 100],
    selectId: selectIdProp,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded21);
  const ownerState = props;
  const classes = useUtilityClasses18();
  let colSpan;
  const Root = (_slots$root = slots.root) != null ? _slots$root : "td";
  if (Root === "td" || !isHostComponent(Root)) {
    colSpan = colSpanProp || 1e3;
  }
  const getLabelDisplayedRowsTo = () => {
    if (count === -1) {
      return (page + 1) * rowsPerPage;
    }
    return rowsPerPage === -1 ? count : Math.min(count, (page + 1) * rowsPerPage);
  };
  const selectId = useId(selectIdProp);
  const labelId = useId(labelIdProp);
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      colSpan,
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  const Select5 = (_slots$select = slots.select) != null ? _slots$select : "select";
  const selectProps = useSlotProps({
    elementType: Select5,
    externalSlotProps: slotProps.select,
    additionalProps: {
      value: rowsPerPage,
      id: selectId,
      onChange: (event) => onRowsPerPageChange && onRowsPerPageChange(event),
      "aria-label": rowsPerPage.toString(),
      "aria-labelledby": [labelId, selectId].filter(Boolean).join(" ") || void 0
    },
    ownerState,
    className: classes.select
  });
  const Actions = (_slots$actions = slots.actions) != null ? _slots$actions : TablePaginationActions;
  const actionsProps = useSlotProps({
    elementType: Actions,
    externalSlotProps: slotProps.actions,
    additionalProps: {
      page,
      rowsPerPage,
      count,
      onPageChange,
      getItemAriaLabel
    },
    ownerState,
    className: classes.actions
  });
  const MenuItem3 = (_slots$menuItem = slots.menuItem) != null ? _slots$menuItem : "option";
  const menuItemProps = useSlotProps({
    elementType: MenuItem3,
    externalSlotProps: slotProps.menuItem,
    additionalProps: {
      value: void 0
    },
    ownerState,
    className: classes.menuItem
  });
  const SelectLabel = (_slots$selectLabel = slots.selectLabel) != null ? _slots$selectLabel : "p";
  const selectLabelProps = useSlotProps({
    elementType: SelectLabel,
    externalSlotProps: slotProps.selectLabel,
    additionalProps: {
      id: labelId
    },
    ownerState,
    className: classes.selectLabel
  });
  const DisplayedRows = (_slots$displayedRows = slots.displayedRows) != null ? _slots$displayedRows : "p";
  const displayedRowsProps = useSlotProps({
    elementType: DisplayedRows,
    externalSlotProps: slotProps.displayedRows,
    ownerState,
    className: classes.displayedRows
  });
  const Toolbar = (_slots$toolbar = slots.toolbar) != null ? _slots$toolbar : "div";
  const toolbarProps = useSlotProps({
    elementType: Toolbar,
    externalSlotProps: slotProps.toolbar,
    ownerState,
    className: classes.toolbar
  });
  const Spacer = (_slots$spacer = slots.spacer) != null ? _slots$spacer : "div";
  const spacerProps = useSlotProps({
    elementType: Spacer,
    externalSlotProps: slotProps.spacer,
    ownerState,
    className: classes.spacer
  });
  return (0, import_jsx_runtime39.jsx)(Root, _extends({}, rootProps, {
    children: (0, import_jsx_runtime40.jsxs)(Toolbar, _extends({}, toolbarProps, {
      children: [(0, import_jsx_runtime39.jsx)(Spacer, _extends({}, spacerProps)), rowsPerPageOptions.length > 1 && (0, import_jsx_runtime39.jsx)(SelectLabel, _extends({}, selectLabelProps, {
        children: labelRowsPerPage
      })), rowsPerPageOptions.length > 1 && (0, import_jsx_runtime39.jsx)(Select5, _extends({}, selectProps, {
        children: rowsPerPageOptions.map((rowsPerPageOption) => (0, import_react.createElement)(MenuItem3, _extends({}, menuItemProps, {
          key: typeof rowsPerPageOption !== "number" && rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption,
          value: typeof rowsPerPageOption !== "number" && rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption
        }), typeof rowsPerPageOption !== "number" && rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption))
      })), (0, import_jsx_runtime39.jsx)(DisplayedRows, _extends({}, displayedRowsProps, {
        children: labelDisplayedRows({
          from: count === 0 ? 0 : page * rowsPerPage + 1,
          to: getLabelDisplayedRowsTo(),
          count: count === -1 ? -1 : count,
          page
        })
      })), (0, import_jsx_runtime39.jsx)(Actions, _extends({}, actionsProps))]
    }))
  }));
});
true ? TablePagination.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  colSpan: import_prop_types24.default.number,
  /**
   * The total number of rows.
   *
   * To enable server side pagination for an unknown number of items, provide -1.
   */
  count: import_prop_types24.default.number.isRequired,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @param {string} type The link or button type to format ('first' | 'last' | 'next' | 'previous').
   * @returns {string}
   * @default function defaultGetAriaLabel(type: ItemAriaLabelType) {
   *   return `Go to ${type} page`;
   * }
   */
  getItemAriaLabel: import_prop_types24.default.func,
  /**
   * Customize the displayed rows label. Invoked with a `{ from, to, count, page }`
   * object.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default function defaultLabelDisplayedRows({ from, to, count }: LabelDisplayedRowsArgs) {
   *   return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
   * }
   */
  labelDisplayedRows: import_prop_types24.default.func,
  /**
   * Id of the label element within the pagination.
   */
  labelId: import_prop_types24.default.string,
  /**
   * Customize the rows per page label.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Rows per page:'
   */
  labelRowsPerPage: import_prop_types24.default.node,
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.MouseEvent<HTMLButtonElement> | null} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onPageChange: import_prop_types24.default.func.isRequired,
  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   */
  onRowsPerPageChange: import_prop_types24.default.func,
  /**
   * The zero-based index of the current page.
   */
  page: chainPropTypes(integerPropType_default.isRequired, (props) => {
    const {
      count,
      page,
      rowsPerPage
    } = props;
    if (count === -1) {
      return null;
    }
    const newLastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);
    if (page < 0 || page > newLastPage) {
      return new Error(`MUI: The page prop of a TablePagination is out of range (0 to ${newLastPage}, but page is ${page}).`);
    }
    return null;
  }),
  /**
   * The number of rows per page.
   *
   * Set -1 to display all the rows.
   */
  rowsPerPage: integerPropType_default.isRequired,
  /**
   * Customizes the options of the rows per page select field. If less than two options are
   * available, no select field will be displayed.
   * Use -1 for the value with a custom label to show all the rows.
   * @default [10, 25, 50, 100]
   */
  rowsPerPageOptions: import_prop_types24.default.arrayOf(import_prop_types24.default.oneOfType([import_prop_types24.default.number, import_prop_types24.default.shape({
    label: import_prop_types24.default.string.isRequired,
    value: import_prop_types24.default.number.isRequired
  })]).isRequired),
  /**
   * Id of the select element within the pagination.
   */
  selectId: import_prop_types24.default.string,
  /**
   * The props used for each slot inside the TablePagination.
   * @default {}
   */
  slotProps: import_prop_types24.default.shape({
    actions: import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object]),
    displayedRows: import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object]),
    menuItem: import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object]),
    root: import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object]),
    select: import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object]),
    selectLabel: import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object]),
    spacer: import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object]),
    toolbar: import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object])
  }),
  /**
   * The components used for each slot inside the TablePagination.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types24.default.shape({
    actions: import_prop_types24.default.elementType,
    displayedRows: import_prop_types24.default.elementType,
    menuItem: import_prop_types24.default.elementType,
    root: import_prop_types24.default.elementType,
    select: import_prop_types24.default.elementType,
    selectLabel: import_prop_types24.default.elementType,
    spacer: import_prop_types24.default.elementType,
    toolbar: import_prop_types24.default.elementType
  })
} : void 0;

// node_modules/@mui/base/TabPanel/TabPanel.js
var React60 = __toESM(require_react());
var import_prop_types26 = __toESM(require_prop_types());

// node_modules/@mui/base/TabPanel/tabPanelClasses.js
function getTabPanelUtilityClass(slot) {
  return generateUtilityClass("MuiTabPanel", slot);
}
var tabPanelClasses = generateUtilityClasses("MuiTabPanel", ["root", "hidden"]);

// node_modules/@mui/base/useTabPanel/useTabPanel.js
var React59 = __toESM(require_react());

// node_modules/@mui/base/Tabs/Tabs.js
var React58 = __toESM(require_react());
var import_prop_types25 = __toESM(require_prop_types());

// node_modules/@mui/base/Tabs/tabsClasses.js
function getTabsUtilityClass(slot) {
  return generateUtilityClass("MuiTabs", slot);
}
var tabsClasses = generateUtilityClasses("MuiTabs", ["root", "horizontal", "vertical"]);

// node_modules/@mui/base/useTabs/useTabs.js
var React55 = __toESM(require_react());
function useTabs(parameters) {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    orientation,
    direction,
    selectionFollowsFocus
  } = parameters;
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "Tabs",
    state: "value"
  });
  const onSelected = React55.useCallback((event, newValue) => {
    setValue(newValue);
    onChange == null ? void 0 : onChange(event, newValue);
  }, [onChange, setValue]);
  const {
    subitems: tabPanels,
    contextValue: compoundComponentContextValue
  } = useCompoundParent();
  const tabIdLookup = React55.useRef(() => void 0);
  const getTabPanelId = React55.useCallback((tabValue) => {
    var _tabPanels$get;
    return (_tabPanels$get = tabPanels.get(tabValue)) == null ? void 0 : _tabPanels$get.id;
  }, [tabPanels]);
  const getTabId = React55.useCallback((tabPanelId) => {
    return tabIdLookup.current(tabPanelId);
  }, []);
  const registerTabIdLookup = React55.useCallback((lookupFunction) => {
    tabIdLookup.current = lookupFunction;
  }, []);
  return {
    contextValue: _extends({
      direction,
      getTabId,
      getTabPanelId,
      onSelected,
      orientation,
      registerTabIdLookup,
      selectionFollowsFocus,
      value
    }, compoundComponentContextValue)
  };
}

// node_modules/@mui/base/useTabs/TabsProvider.js
var React57 = __toESM(require_react());

// node_modules/@mui/base/Tabs/TabsContext.js
var React56 = __toESM(require_react());
var TabsContext = React56.createContext(null);
if (true) {
  TabsContext.displayName = "TabsContext";
}
function useTabsContext() {
  const context = React56.useContext(TabsContext);
  if (context == null) {
    throw new Error("No TabsContext provided");
  }
  return context;
}

// node_modules/@mui/base/useTabs/TabsProvider.js
var import_jsx_runtime41 = __toESM(require_jsx_runtime());
function TabsProvider(props) {
  const {
    value: valueProp,
    children
  } = props;
  const {
    direction,
    getItemIndex,
    onSelected,
    orientation,
    registerItem,
    registerTabIdLookup,
    selectionFollowsFocus,
    totalSubitemCount,
    value,
    getTabId,
    getTabPanelId
  } = valueProp;
  const compoundComponentContextValue = React57.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount
  }), [registerItem, getItemIndex, totalSubitemCount]);
  const tabsContextValue = React57.useMemo(() => ({
    direction,
    getTabId,
    getTabPanelId,
    onSelected,
    orientation,
    registerTabIdLookup,
    selectionFollowsFocus,
    value
  }), [direction, getTabId, getTabPanelId, onSelected, orientation, registerTabIdLookup, selectionFollowsFocus, value]);
  return (0, import_jsx_runtime41.jsx)(CompoundComponentContext.Provider, {
    value: compoundComponentContextValue,
    children: (0, import_jsx_runtime41.jsx)(TabsContext.Provider, {
      value: tabsContextValue,
      children
    })
  });
}

// node_modules/@mui/base/Tabs/Tabs.js
var import_jsx_runtime42 = __toESM(require_jsx_runtime());
var _excluded23 = ["children", "value", "defaultValue", "orientation", "direction", "onChange", "selectionFollowsFocus", "slotProps", "slots"];
var useUtilityClasses19 = (ownerState) => {
  const {
    orientation
  } = ownerState;
  const slots = {
    root: ["root", orientation]
  };
  return composeClasses(slots, useClassNamesOverride(getTabsUtilityClass));
};
var Tabs = React58.forwardRef(function Tabs2(props, forwardedRef) {
  var _slots$root;
  const {
    children,
    orientation = "horizontal",
    direction = "ltr",
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded23);
  const {
    contextValue
  } = useTabs(props);
  const ownerState = _extends({}, props, {
    orientation,
    direction
  });
  const classes = useUtilityClasses19(ownerState);
  const TabsRoot = (_slots$root = slots.root) != null ? _slots$root : "div";
  const tabsRootProps = useSlotProps({
    elementType: TabsRoot,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime42.jsx)(TabsRoot, _extends({}, tabsRootProps, {
    children: (0, import_jsx_runtime42.jsx)(TabsProvider, {
      value: contextValue,
      children
    })
  }));
});
true ? Tabs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types25.default.node,
  /**
   * @ignore
   */
  className: import_prop_types25.default.string,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types25.default.oneOfType([import_prop_types25.default.number, import_prop_types25.default.string]),
  /**
   * The direction of the text.
   * @default 'ltr'
   */
  direction: import_prop_types25.default.oneOf(["ltr", "rtl"]),
  /**
   * Callback invoked when new value is being set.
   */
  onChange: import_prop_types25.default.func,
  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation: import_prop_types25.default.oneOf(["horizontal", "vertical"]),
  /**
   * If `true` the selected tab changes on focus. Otherwise it only
   * changes on activation.
   */
  selectionFollowsFocus: import_prop_types25.default.bool,
  /**
   * The props used for each slot inside the Tabs.
   * @default {}
   */
  slotProps: import_prop_types25.default.shape({
    root: import_prop_types25.default.oneOfType([import_prop_types25.default.func, import_prop_types25.default.object])
  }),
  /**
   * The components used for each slot inside the Tabs.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types25.default.shape({
    root: import_prop_types25.default.elementType
  }),
  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this prop to `null`.
   */
  value: import_prop_types25.default.oneOfType([import_prop_types25.default.number, import_prop_types25.default.string])
} : void 0;

// node_modules/@mui/base/useTabPanel/useTabPanel.js
function tabPanelValueGenerator(otherTabPanelValues) {
  return otherTabPanelValues.size;
}
function useTabPanel(parameters) {
  const {
    value: valueParam,
    id: idParam,
    rootRef: externalRef
  } = parameters;
  const context = useTabsContext();
  if (context === null) {
    throw new Error("No TabContext provided");
  }
  const {
    value: selectedTabValue,
    getTabId
  } = context;
  const id = useId(idParam);
  const ref = React59.useRef(null);
  const handleRef = useForkRef(ref, externalRef);
  const metadata = React59.useMemo(() => ({
    id,
    ref
  }), [id]);
  const {
    id: value
  } = useCompoundItem(valueParam != null ? valueParam : tabPanelValueGenerator, metadata);
  const hidden = value !== selectedTabValue;
  const correspondingTabId = value !== void 0 ? getTabId(value) : void 0;
  const getRootProps = () => {
    return {
      "aria-labelledby": correspondingTabId != null ? correspondingTabId : void 0,
      hidden,
      id: id != null ? id : void 0,
      ref: handleRef
    };
  };
  return {
    hidden,
    getRootProps,
    rootRef: handleRef
  };
}

// node_modules/@mui/base/TabPanel/TabPanel.js
var import_jsx_runtime43 = __toESM(require_jsx_runtime());
var _excluded24 = ["children", "value", "slotProps", "slots"];
var useUtilityClasses20 = (ownerState) => {
  const {
    hidden
  } = ownerState;
  const slots = {
    root: ["root", hidden && "hidden"]
  };
  return composeClasses(slots, useClassNamesOverride(getTabPanelUtilityClass));
};
var TabPanel = React60.forwardRef(function TabPanel2(props, forwardedRef) {
  var _slots$root;
  const {
    children,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded24);
  const {
    hidden,
    getRootProps
  } = useTabPanel(props);
  const ownerState = _extends({}, props, {
    hidden
  });
  const classes = useUtilityClasses20(ownerState);
  const TabPanelRoot = (_slots$root = slots.root) != null ? _slots$root : "div";
  const tabPanelRootProps = useSlotProps({
    elementType: TabPanelRoot,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      role: "tabpanel",
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime43.jsx)(TabPanelRoot, _extends({}, tabPanelRootProps, {
    children: !hidden && children
  }));
});
true ? TabPanel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types26.default.node,
  /**
   * @ignore
   */
  className: import_prop_types26.default.string,
  /**
   * The props used for each slot inside the TabPanel.
   * @default {}
   */
  slotProps: import_prop_types26.default.shape({
    root: import_prop_types26.default.oneOfType([import_prop_types26.default.func, import_prop_types26.default.object])
  }),
  /**
   * The components used for each slot inside the TabPanel.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types26.default.shape({
    root: import_prop_types26.default.elementType
  }),
  /**
   * The value of the TabPanel. It will be shown when the Tab with the corresponding value is selected.
   * If not provided, it will fall back to the index of the panel.
   * It is recommended to explicitly provide it, as it's required for the tab panel to be rendered on the server.
   */
  value: import_prop_types26.default.oneOfType([import_prop_types26.default.number, import_prop_types26.default.string])
} : void 0;

// node_modules/@mui/base/TabsList/TabsList.js
var React63 = __toESM(require_react());
var import_prop_types27 = __toESM(require_prop_types());

// node_modules/@mui/base/TabsList/tabsListClasses.js
function getTabsListUtilityClass(slot) {
  return generateUtilityClass("MuiTabsList", slot);
}
var tabsListClasses = generateUtilityClasses("MuiTabsList", ["root", "horizontal", "vertical"]);

// node_modules/@mui/base/useTabsList/useTabsList.js
var React61 = __toESM(require_react());

// node_modules/@mui/base/useTabsList/useTabsList.types.js
var TabsListActionTypes = {
  valueChange: "valueChange"
};

// node_modules/@mui/base/useTabsList/tabsListReducer.js
function tabsListReducer(state, action) {
  if (action.type === TabsListActionTypes.valueChange) {
    return _extends({}, state, {
      highlightedValue: action.value
    });
  }
  const newState = listReducer(state, action);
  const {
    context: {
      selectionFollowsFocus
    }
  } = action;
  if (action.type === ListActionTypes.itemsChange) {
    if (newState.selectedValues.length > 0) {
      return _extends({}, newState, {
        highlightedValue: newState.selectedValues[0]
      });
    }
    moveHighlight(null, "reset", action.context);
  }
  if (selectionFollowsFocus && newState.highlightedValue != null) {
    return _extends({}, newState, {
      selectedValues: [newState.highlightedValue]
    });
  }
  return newState;
}

// node_modules/@mui/base/useTabsList/useTabsList.js
function useTabsList(parameters) {
  var _selectedValues$;
  const {
    rootRef: externalRef
  } = parameters;
  const {
    direction = "ltr",
    onSelected,
    orientation = "horizontal",
    value,
    registerTabIdLookup,
    selectionFollowsFocus
  } = useTabsContext();
  const {
    subitems,
    contextValue: compoundComponentContextValue
  } = useCompoundParent();
  const tabIdLookup = React61.useCallback((tabValue) => {
    var _subitems$get;
    return (_subitems$get = subitems.get(tabValue)) == null ? void 0 : _subitems$get.id;
  }, [subitems]);
  registerTabIdLookup(tabIdLookup);
  const subitemKeys = React61.useMemo(() => Array.from(subitems.keys()), [subitems]);
  const getTabElement = React61.useCallback((tabValue) => {
    var _subitems$get$ref$cur, _subitems$get2;
    if (tabValue == null) {
      return null;
    }
    return (_subitems$get$ref$cur = (_subitems$get2 = subitems.get(tabValue)) == null ? void 0 : _subitems$get2.ref.current) != null ? _subitems$get$ref$cur : null;
  }, [subitems]);
  const isRtl = direction === "rtl";
  let listOrientation;
  if (orientation === "vertical") {
    listOrientation = "vertical";
  } else {
    listOrientation = isRtl ? "horizontal-rtl" : "horizontal-ltr";
  }
  const handleChange = React61.useCallback((event, newValue) => {
    var _newValue$;
    onSelected(event, (_newValue$ = newValue[0]) != null ? _newValue$ : null);
  }, [onSelected]);
  const controlledProps = React61.useMemo(() => {
    if (value === void 0) {
      return {};
    }
    return value != null ? {
      selectedValues: [value]
    } : {
      selectedValues: []
    };
  }, [value]);
  const isItemDisabled = React61.useCallback((item) => {
    var _subitems$get$disable, _subitems$get3;
    return (_subitems$get$disable = (_subitems$get3 = subitems.get(item)) == null ? void 0 : _subitems$get3.disabled) != null ? _subitems$get$disable : false;
  }, [subitems]);
  const {
    contextValue: listContextValue,
    dispatch,
    getRootProps: getListboxRootProps,
    state: {
      highlightedValue,
      selectedValues
    },
    rootRef: mergedRootRef
  } = useList({
    controlledProps,
    disabledItemsFocusable: !selectionFollowsFocus,
    focusManagement: "DOM",
    getItemDomElement: getTabElement,
    isItemDisabled,
    items: subitemKeys,
    rootRef: externalRef,
    onChange: handleChange,
    orientation: listOrientation,
    reducerActionContext: React61.useMemo(() => ({
      selectionFollowsFocus: selectionFollowsFocus || false
    }), [selectionFollowsFocus]),
    selectionMode: "single",
    stateReducer: tabsListReducer
  });
  React61.useEffect(() => {
    if (value === void 0) {
      return;
    }
    if (value != null) {
      dispatch({
        type: TabsListActionTypes.valueChange,
        value
      });
    }
  }, [dispatch, value]);
  const getRootProps = (otherHandlers = {}) => {
    return _extends({}, otherHandlers, getListboxRootProps(otherHandlers), {
      "aria-orientation": orientation === "vertical" ? "vertical" : void 0,
      role: "tablist"
    });
  };
  const contextValue = React61.useMemo(() => _extends({}, compoundComponentContextValue, listContextValue), [compoundComponentContextValue, listContextValue]);
  return {
    contextValue,
    dispatch,
    getRootProps,
    highlightedValue,
    isRtl,
    orientation,
    rootRef: mergedRootRef,
    selectedValue: (_selectedValues$ = selectedValues[0]) != null ? _selectedValues$ : null
  };
}

// node_modules/@mui/base/useTabsList/TabsListProvider.js
var React62 = __toESM(require_react());
var import_jsx_runtime44 = __toESM(require_jsx_runtime());
function TabsListProvider(props) {
  const {
    value,
    children
  } = props;
  const {
    dispatch,
    getItemIndex,
    getItemState,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler,
    registerItem,
    totalSubitemCount
  } = value;
  const listContextValue = React62.useMemo(() => ({
    dispatch,
    getItemState,
    getItemIndex,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler
  }), [dispatch, getItemIndex, getItemState, registerHighlightChangeHandler, registerSelectionChangeHandler]);
  const compoundComponentContextValue = React62.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount
  }), [registerItem, getItemIndex, totalSubitemCount]);
  return (0, import_jsx_runtime44.jsx)(CompoundComponentContext.Provider, {
    value: compoundComponentContextValue,
    children: (0, import_jsx_runtime44.jsx)(ListContext.Provider, {
      value: listContextValue,
      children
    })
  });
}

// node_modules/@mui/base/TabsList/TabsList.js
var import_jsx_runtime45 = __toESM(require_jsx_runtime());
var _excluded25 = ["children", "slotProps", "slots"];
var useUtilityClasses21 = (ownerState) => {
  const {
    orientation
  } = ownerState;
  const slots = {
    root: ["root", orientation]
  };
  return composeClasses(slots, useClassNamesOverride(getTabsListUtilityClass));
};
var TabsList = React63.forwardRef(function TabsList2(props, forwardedRef) {
  var _slots$root;
  const {
    children,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded25);
  const {
    isRtl,
    orientation,
    getRootProps,
    contextValue
  } = useTabsList({
    rootRef: forwardedRef
  });
  const ownerState = _extends({}, props, {
    isRtl,
    orientation
  });
  const classes = useUtilityClasses21(ownerState);
  const TabsListRoot = (_slots$root = slots.root) != null ? _slots$root : "div";
  const tabsListRootProps = useSlotProps({
    elementType: TabsListRoot,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime45.jsx)(TabsListProvider, {
    value: contextValue,
    children: (0, import_jsx_runtime45.jsx)(TabsListRoot, _extends({}, tabsListRootProps, {
      children
    }))
  });
});
true ? TabsList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types27.default.node,
  /**
   * @ignore
   */
  className: import_prop_types27.default.string,
  /**
   * The props used for each slot inside the TabsList.
   * @default {}
   */
  slotProps: import_prop_types27.default.shape({
    root: import_prop_types27.default.oneOfType([import_prop_types27.default.func, import_prop_types27.default.object])
  }),
  /**
   * The components used for each slot inside the TabsList.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types27.default.shape({
    root: import_prop_types27.default.elementType
  })
} : void 0;

// node_modules/@mui/base/Tab/Tab.js
var React65 = __toESM(require_react());
var import_prop_types28 = __toESM(require_prop_types());

// node_modules/@mui/base/Tab/tabClasses.js
function getTabUtilityClass(slot) {
  return generateUtilityClass("MuiTab", slot);
}
var tabClasses = generateUtilityClasses("MuiTab", ["root", "selected", "disabled"]);

// node_modules/@mui/base/useTab/useTab.js
var React64 = __toESM(require_react());
function tabValueGenerator(otherTabValues) {
  return otherTabValues.size;
}
function useTab(parameters) {
  const {
    value: valueParam,
    rootRef: externalRef,
    disabled = false,
    id: idParam
  } = parameters;
  const tabRef = React64.useRef(null);
  const id = useId(idParam);
  const {
    value: selectedValue,
    selectionFollowsFocus,
    getTabPanelId
  } = useTabsContext();
  const tabMetadata = React64.useMemo(() => ({
    disabled,
    ref: tabRef,
    id
  }), [disabled, tabRef, id]);
  const {
    id: value,
    index,
    totalItemCount: totalTabsCount
  } = useCompoundItem(valueParam != null ? valueParam : tabValueGenerator, tabMetadata);
  const {
    getRootProps: getTabProps,
    rootRef: listItemRefHandler,
    highlighted,
    selected
  } = useListItem({
    item: value
  });
  const {
    getRootProps: getButtonProps,
    rootRef: buttonRefHandler,
    active,
    focusVisible,
    setFocusVisible
  } = useButton({
    disabled,
    focusableWhenDisabled: !selectionFollowsFocus,
    type: "button"
  });
  const handleRef = useForkRef(tabRef, externalRef, listItemRefHandler, buttonRefHandler);
  const tabPanelId = value !== void 0 ? getTabPanelId(value) : void 0;
  const getRootProps = (otherHandlers = {}) => {
    const resolvedTabProps = _extends({}, otherHandlers, getTabProps(otherHandlers));
    const resolvedButtonProps = _extends({}, resolvedTabProps, getButtonProps(resolvedTabProps));
    return _extends({}, resolvedButtonProps, {
      role: "tab",
      "aria-controls": tabPanelId,
      "aria-selected": selected,
      id,
      ref: handleRef
    });
  };
  return {
    getRootProps,
    active,
    focusVisible,
    highlighted,
    index,
    rootRef: handleRef,
    // the `selected` state isn't set on the server (it relies on effects to be calculated),
    // so we fall back to checking the `value` prop with the selectedValue from the TabsContext
    selected: selected || value === selectedValue,
    setFocusVisible,
    totalTabsCount
  };
}

// node_modules/@mui/base/Tab/Tab.js
var import_jsx_runtime46 = __toESM(require_jsx_runtime());
var _excluded26 = ["action", "children", "value", "disabled", "onChange", "onClick", "onFocus", "slotProps", "slots"];
var useUtilityClasses22 = (ownerState) => {
  const {
    selected,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected", disabled && "disabled"]
  };
  return composeClasses(slots, useClassNamesOverride(getTabUtilityClass));
};
var Tab = React65.forwardRef(function Tab2(props, forwardedRef) {
  var _slots$root;
  const {
    children,
    disabled = false,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded26);
  const tabRef = React65.useRef();
  const handleRef = useForkRef(tabRef, forwardedRef);
  const {
    active,
    highlighted,
    selected,
    getRootProps
  } = useTab(_extends({}, props, {
    rootRef: handleRef
  }));
  const ownerState = _extends({}, props, {
    active,
    disabled,
    highlighted,
    selected
  });
  const classes = useUtilityClasses22(ownerState);
  const TabRoot = (_slots$root = slots.root) != null ? _slots$root : "button";
  const tabRootProps = useSlotProps({
    elementType: TabRoot,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime46.jsx)(TabRoot, _extends({}, tabRootProps, {
    children
  }));
});
true ? Tab.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: import_prop_types28.default.oneOfType([import_prop_types28.default.func, import_prop_types28.default.shape({
    current: import_prop_types28.default.shape({
      focusVisible: import_prop_types28.default.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  children: import_prop_types28.default.node,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types28.default.bool,
  /**
   * Callback invoked when new value is being set.
   */
  onChange: import_prop_types28.default.func,
  /**
   * The props used for each slot inside the Tab.
   * @default {}
   */
  slotProps: import_prop_types28.default.shape({
    root: import_prop_types28.default.oneOfType([import_prop_types28.default.func, import_prop_types28.default.object])
  }),
  /**
   * The components used for each slot inside the Tab.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types28.default.shape({
    root: import_prop_types28.default.elementType
  }),
  /**
   * You can provide your own value. Otherwise, it falls back to the child position index.
   */
  value: import_prop_types28.default.oneOfType([import_prop_types28.default.number, import_prop_types28.default.string])
} : void 0;

// node_modules/@mui/base/TextareaAutosize/TextareaAutosize.js
var React66 = __toESM(require_react());
var import_prop_types29 = __toESM(require_prop_types());
var ReactDOM2 = __toESM(require_react_dom());
var import_jsx_runtime47 = __toESM(require_jsx_runtime());
var import_jsx_runtime48 = __toESM(require_jsx_runtime());
var _excluded27 = ["onChange", "maxRows", "minRows", "style", "value"];
function getStyleValue(value) {
  return parseInt(value, 10) || 0;
}
var styles = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function isEmpty(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0 || obj.outerHeightStyle === 0 && !obj.overflow;
}
var TextareaAutosize = React66.forwardRef(function TextareaAutosize2(props, forwardedRef) {
  const {
    onChange,
    maxRows,
    minRows = 1,
    style,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded27);
  const {
    current: isControlled
  } = React66.useRef(value != null);
  const inputRef = React66.useRef(null);
  const handleRef = useForkRef(forwardedRef, inputRef);
  const shadowRef = React66.useRef(null);
  const renders = React66.useRef(0);
  const [state, setState] = React66.useState({
    outerHeightStyle: 0
  });
  const getUpdatedState = React66.useCallback(() => {
    const input = inputRef.current;
    const containerWindow = ownerWindow(input);
    const computedStyle = containerWindow.getComputedStyle(input);
    if (computedStyle.width === "0px") {
      return {
        outerHeightStyle: 0
      };
    }
    const inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || "x";
    if (inputShallow.value.slice(-1) === "\n") {
      inputShallow.value += " ";
    }
    const boxSizing = computedStyle.boxSizing;
    const padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
    const border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);
    const innerHeight = inputShallow.scrollHeight;
    inputShallow.value = "x";
    const singleRowHeight = inputShallow.scrollHeight;
    let outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);
    const outerHeightStyle = outerHeight + (boxSizing === "border-box" ? padding + border : 0);
    const overflow = Math.abs(outerHeight - innerHeight) <= 1;
    return {
      outerHeightStyle,
      overflow
    };
  }, [maxRows, minRows, props.placeholder]);
  const updateState = (prevState, newState) => {
    const {
      outerHeightStyle,
      overflow
    } = newState;
    if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
      renders.current += 1;
      return {
        overflow,
        outerHeightStyle
      };
    }
    if (true) {
      if (renders.current === 20) {
        console.error(["MUI: Too many re-renders. The layout is unstable.", "TextareaAutosize limits the number of renders to prevent an infinite loop."].join("\n"));
      }
    }
    return prevState;
  };
  const syncHeight = React66.useCallback(() => {
    const newState = getUpdatedState();
    if (isEmpty(newState)) {
      return;
    }
    setState((prevState) => {
      return updateState(prevState, newState);
    });
  }, [getUpdatedState]);
  const syncHeightWithFlushSync = () => {
    const newState = getUpdatedState();
    if (isEmpty(newState)) {
      return;
    }
    ReactDOM2.flushSync(() => {
      setState((prevState) => {
        return updateState(prevState, newState);
      });
    });
  };
  React66.useEffect(() => {
    const handleResize = debounce(() => {
      renders.current = 0;
      if (inputRef.current) {
        syncHeightWithFlushSync();
      }
    });
    let resizeObserver;
    const input = inputRef.current;
    const containerWindow = ownerWindow(input);
    containerWindow.addEventListener("resize", handleResize);
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(input);
    }
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  });
  useEnhancedEffect_default(() => {
    syncHeight();
  });
  React66.useEffect(() => {
    renders.current = 0;
  }, [value]);
  const handleChange = (event) => {
    renders.current = 0;
    if (!isControlled) {
      syncHeight();
    }
    if (onChange) {
      onChange(event);
    }
  };
  return (0, import_jsx_runtime48.jsxs)(React66.Fragment, {
    children: [(0, import_jsx_runtime47.jsx)("textarea", _extends({
      value,
      onChange: handleChange,
      ref: handleRef,
      rows: minRows,
      style: _extends({
        height: state.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: state.overflow ? "hidden" : void 0
      }, style)
    }, other)), (0, import_jsx_runtime47.jsx)("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: shadowRef,
      tabIndex: -1,
      style: _extends({}, styles.shadow, style, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
true ? TextareaAutosize.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  className: import_prop_types29.default.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: import_prop_types29.default.oneOfType([import_prop_types29.default.number, import_prop_types29.default.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: import_prop_types29.default.oneOfType([import_prop_types29.default.number, import_prop_types29.default.string]),
  /**
   * @ignore
   */
  onChange: import_prop_types29.default.func,
  /**
   * @ignore
   */
  placeholder: import_prop_types29.default.string,
  /**
   * @ignore
   */
  style: import_prop_types29.default.object,
  /**
   * @ignore
   */
  value: import_prop_types29.default.oneOfType([import_prop_types29.default.arrayOf(import_prop_types29.default.string), import_prop_types29.default.number, import_prop_types29.default.string])
} : void 0;

// node_modules/@mui/base/useAutocomplete/useAutocomplete.js
var React67 = __toESM(require_react());
function stripDiacritics(string) {
  return typeof string.normalize !== "undefined" ? string.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : string;
}
function createFilterOptions(config = {}) {
  const {
    ignoreAccents = true,
    ignoreCase = true,
    limit,
    matchFrom = "any",
    stringify,
    trim = false
  } = config;
  return (options, {
    inputValue,
    getOptionLabel
  }) => {
    let input = trim ? inputValue.trim() : inputValue;
    if (ignoreCase) {
      input = input.toLowerCase();
    }
    if (ignoreAccents) {
      input = stripDiacritics(input);
    }
    const filteredOptions = !input ? options : options.filter((option) => {
      let candidate = (stringify || getOptionLabel)(option);
      if (ignoreCase) {
        candidate = candidate.toLowerCase();
      }
      if (ignoreAccents) {
        candidate = stripDiacritics(candidate);
      }
      return matchFrom === "start" ? candidate.indexOf(input) === 0 : candidate.indexOf(input) > -1;
    });
    return typeof limit === "number" ? filteredOptions.slice(0, limit) : filteredOptions;
  };
}
var defaultFilterOptions = createFilterOptions();

// node_modules/@mui/material/utils/debounce.js
var debounce_default = debounce;

// node_modules/@mui/material/utils/ownerWindow.js
var ownerWindow_default = ownerWindow;

// node_modules/@mui/material/Grow/Grow.js
var React69 = __toESM(require_react());
var import_prop_types30 = __toESM(require_prop_types());

// node_modules/@mui/material/styles/useTheme.js
var React68 = __toESM(require_react());
function useTheme() {
  const theme = useTheme_default(defaultTheme_default);
  if (true) {
    React68.useDebugValue(theme);
  }
  return theme[identifier_default] || theme;
}

// node_modules/@mui/material/transitions/utils.js
var reflow = (node) => node.scrollTop;
function getTransitionProps(props, options) {
  var _style$transitionDura, _style$transitionTimi;
  const {
    timeout,
    easing,
    style = {}
  } = props;
  return {
    duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout === "number" ? timeout : timeout[options.mode] || 0,
    easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === "object" ? easing[options.mode] : easing,
    delay: style.transitionDelay
  };
}

// node_modules/@mui/material/Grow/Grow.js
var import_jsx_runtime49 = __toESM(require_jsx_runtime());
var _excluded28 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function getScale(value) {
  return `scale(${value}, ${value ** 2})`;
}
var styles2 = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
};
var isWebKit154 = typeof navigator !== "undefined" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);
var Grow = React69.forwardRef(function Grow2(props, ref) {
  const {
    addEndListener,
    appear = true,
    children,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition_default
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded28);
  const timer = React69.useRef();
  const autoTimeout = React69.useRef();
  const theme = useTheme();
  const nodeRef = React69.useRef(null);
  const handleRef = useForkRef_default(nodeRef, children.ref, ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node);
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: "enter"
    });
    let duration;
    if (timeout === "auto") {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration,
      delay
    }), theme.transitions.create("transform", {
      duration: isWebKit154 ? duration : duration * 0.666,
      delay,
      easing: transitionTimingFunction
    })].join(",");
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node) => {
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: "exit"
    });
    let duration;
    if (timeout === "auto") {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration,
      delay
    }), theme.transitions.create("transform", {
      duration: isWebKit154 ? duration : duration * 0.666,
      delay: isWebKit154 ? delay : delay || duration * 0.333,
      easing: transitionTimingFunction
    })].join(",");
    node.style.opacity = 0;
    node.style.transform = getScale(0.75);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next) => {
    if (timeout === "auto") {
      timer.current = setTimeout(next, autoTimeout.current || 0);
    }
    if (addEndListener) {
      addEndListener(nodeRef.current, next);
    }
  };
  React69.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  return (0, import_jsx_runtime49.jsx)(TransitionComponent, _extends({
    appear,
    in: inProp,
    nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout === "auto" ? null : timeout
  }, other, {
    children: (state, childProps) => {
      return React69.cloneElement(children, _extends({
        style: _extends({
          opacity: 0,
          transform: getScale(0.75),
          visibility: state === "exited" && !inProp ? "hidden" : void 0
        }, styles2[state], style, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
true ? Grow.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: import_prop_types30.default.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: import_prop_types30.default.bool,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: import_prop_types30.default.oneOfType([import_prop_types30.default.shape({
    enter: import_prop_types30.default.string,
    exit: import_prop_types30.default.string
  }), import_prop_types30.default.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: import_prop_types30.default.bool,
  /**
   * @ignore
   */
  onEnter: import_prop_types30.default.func,
  /**
   * @ignore
   */
  onEntered: import_prop_types30.default.func,
  /**
   * @ignore
   */
  onEntering: import_prop_types30.default.func,
  /**
   * @ignore
   */
  onExit: import_prop_types30.default.func,
  /**
   * @ignore
   */
  onExited: import_prop_types30.default.func,
  /**
   * @ignore
   */
  onExiting: import_prop_types30.default.func,
  /**
   * @ignore
   */
  style: import_prop_types30.default.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: import_prop_types30.default.oneOfType([import_prop_types30.default.oneOf(["auto"]), import_prop_types30.default.number, import_prop_types30.default.shape({
    appear: import_prop_types30.default.number,
    enter: import_prop_types30.default.number,
    exit: import_prop_types30.default.number
  })])
} : void 0;
Grow.muiSupportAuto = true;
var Grow_default = Grow;

// node_modules/@mui/material/Modal/Modal.js
var React72 = __toESM(require_react());
var import_prop_types33 = __toESM(require_prop_types());

// node_modules/@mui/material/Backdrop/Backdrop.js
var React71 = __toESM(require_react());
var import_prop_types32 = __toESM(require_prop_types());

// node_modules/@mui/material/Fade/Fade.js
var React70 = __toESM(require_react());
var import_prop_types31 = __toESM(require_prop_types());
var import_jsx_runtime50 = __toESM(require_jsx_runtime());
var _excluded29 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
var styles3 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
var Fade = React70.forwardRef(function Fade2(props, ref) {
  const theme = useTheme();
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    addEndListener,
    appear = true,
    children,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition_default
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded29);
  const enableStrictModeCompat = true;
  const nodeRef = React70.useRef(null);
  const handleRef = useForkRef_default(nodeRef, children.ref, ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node);
    const transitionProps = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: "enter"
    });
    node.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
    node.style.transition = theme.transitions.create("opacity", transitionProps);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node) => {
    const transitionProps = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: "exit"
    });
    node.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
    node.style.transition = theme.transitions.create("opacity", transitionProps);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next) => {
    if (addEndListener) {
      addEndListener(nodeRef.current, next);
    }
  };
  return (0, import_jsx_runtime50.jsx)(TransitionComponent, _extends({
    appear,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : void 0,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout
  }, other, {
    children: (state, childProps) => {
      return React70.cloneElement(children, _extends({
        style: _extends({
          opacity: 0,
          visibility: state === "exited" && !inProp ? "hidden" : void 0
        }, styles3[state], style, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
true ? Fade.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: import_prop_types31.default.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: import_prop_types31.default.bool,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: import_prop_types31.default.oneOfType([import_prop_types31.default.shape({
    enter: import_prop_types31.default.string,
    exit: import_prop_types31.default.string
  }), import_prop_types31.default.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: import_prop_types31.default.bool,
  /**
   * @ignore
   */
  onEnter: import_prop_types31.default.func,
  /**
   * @ignore
   */
  onEntered: import_prop_types31.default.func,
  /**
   * @ignore
   */
  onEntering: import_prop_types31.default.func,
  /**
   * @ignore
   */
  onExit: import_prop_types31.default.func,
  /**
   * @ignore
   */
  onExited: import_prop_types31.default.func,
  /**
   * @ignore
   */
  onExiting: import_prop_types31.default.func,
  /**
   * @ignore
   */
  style: import_prop_types31.default.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: import_prop_types31.default.oneOfType([import_prop_types31.default.number, import_prop_types31.default.shape({
    appear: import_prop_types31.default.number,
    enter: import_prop_types31.default.number,
    exit: import_prop_types31.default.number
  })])
} : void 0;
var Fade_default = Fade;

// node_modules/@mui/material/Backdrop/backdropClasses.js
function getBackdropUtilityClass(slot) {
  return generateUtilityClass("MuiBackdrop", slot);
}
var backdropClasses = generateUtilityClasses("MuiBackdrop", ["root", "invisible"]);

// node_modules/@mui/material/Backdrop/Backdrop.js
var import_jsx_runtime51 = __toESM(require_jsx_runtime());
var _excluded30 = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"];
var useUtilityClasses23 = (ownerState) => {
  const {
    classes,
    invisible
  } = ownerState;
  const slots = {
    root: ["root", invisible && "invisible"]
  };
  return composeClasses(slots, getBackdropUtilityClass, classes);
};
var BackdropRoot = styled_default("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, ownerState.invisible && styles4.invisible];
  }
})(({
  ownerState
}) => _extends({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, ownerState.invisible && {
  backgroundColor: "transparent"
}));
var Backdrop = React71.forwardRef(function Backdrop2(inProps, ref) {
  var _slotProps$root, _ref, _slots$root;
  const props = useThemeProps({
    props: inProps,
    name: "MuiBackdrop"
  });
  const {
    children,
    className,
    component = "div",
    components = {},
    componentsProps = {},
    invisible = false,
    open,
    slotProps = {},
    slots = {},
    TransitionComponent = Fade_default,
    transitionDuration
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded30);
  const ownerState = _extends({}, props, {
    component,
    invisible
  });
  const classes = useUtilityClasses23(ownerState);
  const rootSlotProps = (_slotProps$root = slotProps.root) != null ? _slotProps$root : componentsProps.root;
  return (0, import_jsx_runtime51.jsx)(TransitionComponent, _extends({
    in: open,
    timeout: transitionDuration
  }, other, {
    children: (0, import_jsx_runtime51.jsx)(BackdropRoot, _extends({
      "aria-hidden": true
    }, rootSlotProps, {
      as: (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : component,
      className: clsx_default(classes.root, className, rootSlotProps == null ? void 0 : rootSlotProps.className),
      ownerState: _extends({}, ownerState, rootSlotProps == null ? void 0 : rootSlotProps.ownerState),
      classes,
      ref,
      children
    }))
  }));
});
true ? Backdrop.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types32.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types32.default.object,
  /**
   * @ignore
   */
  className: import_prop_types32.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types32.default.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: import_prop_types32.default.shape({
    Root: import_prop_types32.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: import_prop_types32.default.shape({
    root: import_prop_types32.default.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: import_prop_types32.default.bool,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types32.default.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: import_prop_types32.default.shape({
    root: import_prop_types32.default.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: import_prop_types32.default.shape({
    root: import_prop_types32.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types32.default.oneOfType([import_prop_types32.default.arrayOf(import_prop_types32.default.oneOfType([import_prop_types32.default.func, import_prop_types32.default.object, import_prop_types32.default.bool])), import_prop_types32.default.func, import_prop_types32.default.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: import_prop_types32.default.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: import_prop_types32.default.oneOfType([import_prop_types32.default.number, import_prop_types32.default.shape({
    appear: import_prop_types32.default.number,
    enter: import_prop_types32.default.number,
    exit: import_prop_types32.default.number
  })])
} : void 0;
var Backdrop_default = Backdrop;

// node_modules/@mui/material/Modal/Modal.js
var import_jsx_runtime52 = __toESM(require_jsx_runtime());
var _excluded31 = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "open", "slotProps", "slots", "theme"];
var ModalRoot = styled_default("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, !ownerState.open && ownerState.exited && styles4.hidden];
  }
})(({
  theme,
  ownerState
}) => _extends({
  position: "fixed",
  zIndex: (theme.vars || theme).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !ownerState.open && ownerState.exited && {
  visibility: "hidden"
}));
var ModalBackdrop = styled_default(Backdrop_default, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (props, styles4) => {
    return styles4.backdrop;
  }
})({
  zIndex: -1
});
var Modal3 = React72.forwardRef(function Modal4(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$backdrop, _slotProps$root, _slotProps$backdrop;
  const props = useThemeProps({
    name: "MuiModal",
    props: inProps
  });
  const {
    BackdropComponent = ModalBackdrop,
    BackdropProps,
    classes,
    className,
    closeAfterTransition = false,
    children,
    container,
    component,
    components = {},
    componentsProps = {},
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    onBackdropClick,
    onClose,
    open,
    slotProps,
    slots,
    // eslint-disable-next-line react/prop-types
    theme
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded31);
  const [exited, setExited] = React72.useState(true);
  const commonProps = {
    container,
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted,
    onBackdropClick,
    onClose,
    open
  };
  const ownerState = _extends({}, props, commonProps, {
    exited
  });
  const RootSlot = (_ref = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components.Root) != null ? _ref : ModalRoot;
  const BackdropSlot = (_ref2 = (_slots$backdrop = slots == null ? void 0 : slots.backdrop) != null ? _slots$backdrop : components.Backdrop) != null ? _ref2 : BackdropComponent;
  const rootSlotProps = (_slotProps$root = slotProps == null ? void 0 : slotProps.root) != null ? _slotProps$root : componentsProps.root;
  const backdropSlotProps = (_slotProps$backdrop = slotProps == null ? void 0 : slotProps.backdrop) != null ? _slotProps$backdrop : componentsProps.backdrop;
  return (0, import_jsx_runtime52.jsx)(Modal, _extends({
    slots: {
      root: RootSlot,
      backdrop: BackdropSlot
    },
    slotProps: {
      root: () => _extends({}, resolveComponentProps(rootSlotProps, ownerState), !isHostComponent(RootSlot) && {
        as: component,
        theme
      }, {
        className: clsx_default(className, rootSlotProps == null ? void 0 : rootSlotProps.className, classes == null ? void 0 : classes.root, !ownerState.open && ownerState.exited && (classes == null ? void 0 : classes.hidden))
      }),
      backdrop: () => _extends({}, BackdropProps, resolveComponentProps(backdropSlotProps, ownerState), {
        className: clsx_default(backdropSlotProps == null ? void 0 : backdropSlotProps.className, BackdropProps == null ? void 0 : BackdropProps.className, classes == null ? void 0 : classes.backdrop)
      })
    },
    onTransitionEnter: () => setExited(false),
    onTransitionExited: () => setExited(true),
    ref
  }, other, commonProps, {
    children
  }));
});
true ? Modal3.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: import_prop_types33.default.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: import_prop_types33.default.object,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types33.default.object,
  /**
   * @ignore
   */
  className: import_prop_types33.default.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: import_prop_types33.default.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types33.default.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: import_prop_types33.default.shape({
    Backdrop: import_prop_types33.default.elementType,
    Root: import_prop_types33.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: import_prop_types33.default.shape({
    backdrop: import_prop_types33.default.oneOfType([import_prop_types33.default.func, import_prop_types33.default.object]),
    root: import_prop_types33.default.oneOfType([import_prop_types33.default.func, import_prop_types33.default.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types33.default.oneOfType([HTMLElementType, import_prop_types33.default.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: import_prop_types33.default.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: import_prop_types33.default.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: import_prop_types33.default.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types33.default.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: import_prop_types33.default.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: import_prop_types33.default.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: import_prop_types33.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: import_prop_types33.default.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: import_prop_types33.default.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: import_prop_types33.default.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: import_prop_types33.default.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: import_prop_types33.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types33.default.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: import_prop_types33.default.shape({
    backdrop: import_prop_types33.default.oneOfType([import_prop_types33.default.func, import_prop_types33.default.object]),
    root: import_prop_types33.default.oneOfType([import_prop_types33.default.func, import_prop_types33.default.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types33.default.shape({
    backdrop: import_prop_types33.default.elementType,
    root: import_prop_types33.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types33.default.oneOfType([import_prop_types33.default.arrayOf(import_prop_types33.default.oneOfType([import_prop_types33.default.func, import_prop_types33.default.object, import_prop_types33.default.bool])), import_prop_types33.default.func, import_prop_types33.default.object])
} : void 0;
var Modal_default = Modal3;

// node_modules/@mui/material/Paper/Paper.js
var React73 = __toESM(require_react());
var import_prop_types34 = __toESM(require_prop_types());

// node_modules/@mui/material/styles/getOverlayAlpha.js
var getOverlayAlpha = (elevation) => {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return (alphaValue / 100).toFixed(2);
};
var getOverlayAlpha_default = getOverlayAlpha;

// node_modules/@mui/material/Paper/paperClasses.js
function getPaperUtilityClass(slot) {
  return generateUtilityClass("MuiPaper", slot);
}
var paperClasses = generateUtilityClasses("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);

// node_modules/@mui/material/Paper/Paper.js
var import_jsx_runtime53 = __toESM(require_jsx_runtime());
var _excluded32 = ["className", "component", "elevation", "square", "variant"];
var useUtilityClasses24 = (ownerState) => {
  const {
    square,
    elevation,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, !square && "rounded", variant === "elevation" && `elevation${elevation}`]
  };
  return composeClasses(slots, getPaperUtilityClass, classes);
};
var PaperRoot = styled_default("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, styles4[ownerState.variant], !ownerState.square && styles4.rounded, ownerState.variant === "elevation" && styles4[`elevation${ownerState.elevation}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$vars$overlays;
  return _extends({
    backgroundColor: (theme.vars || theme).palette.background.paper,
    color: (theme.vars || theme).palette.text.primary,
    transition: theme.transitions.create("box-shadow")
  }, !ownerState.square && {
    borderRadius: theme.shape.borderRadius
  }, ownerState.variant === "outlined" && {
    border: `1px solid ${(theme.vars || theme).palette.divider}`
  }, ownerState.variant === "elevation" && _extends({
    boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
  }, !theme.vars && theme.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${alpha("#fff", getOverlayAlpha_default(ownerState.elevation))}, ${alpha("#fff", getOverlayAlpha_default(ownerState.elevation))})`
  }, theme.vars && {
    backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
  }));
});
var Paper = React73.forwardRef(function Paper2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPaper"
  });
  const {
    className,
    component = "div",
    elevation = 1,
    square = false,
    variant = "elevation"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded32);
  const ownerState = _extends({}, props, {
    component,
    elevation,
    square,
    variant
  });
  const classes = useUtilityClasses24(ownerState);
  if (true) {
    const theme = useTheme();
    if (theme.shadows[elevation] === void 0) {
      console.error([`MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${elevation}]\` is defined.`].join("\n"));
    }
  }
  return (0, import_jsx_runtime53.jsx)(PaperRoot, _extends({
    as: component,
    ownerState,
    className: clsx_default(classes.root, className),
    ref
  }, other));
});
true ? Paper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types34.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types34.default.object,
  /**
   * @ignore
   */
  className: import_prop_types34.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types34.default.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: chainPropTypes(integerPropType_default, (props) => {
    const {
      elevation,
      variant
    } = props;
    if (elevation > 0 && variant === "outlined") {
      return new Error(`MUI: Combining \`elevation={${elevation}}\` with \`variant="${variant}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`);
    }
    return null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: import_prop_types34.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types34.default.oneOfType([import_prop_types34.default.arrayOf(import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object, import_prop_types34.default.bool])), import_prop_types34.default.func, import_prop_types34.default.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: import_prop_types34.default.oneOfType([import_prop_types34.default.oneOf(["elevation", "outlined"]), import_prop_types34.default.string])
} : void 0;
var Paper_default = Paper;

// node_modules/@mui/material/Popover/popoverClasses.js
function getPopoverUtilityClass(slot) {
  return generateUtilityClass("MuiPopover", slot);
}
var popoverClasses = generateUtilityClasses("MuiPopover", ["root", "paper"]);

// node_modules/@mui/material/Popover/Popover.js
var import_jsx_runtime54 = __toESM(require_jsx_runtime());
var _excluded33 = ["onEntering"];
var _excluded210 = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"];
var _excluded34 = ["slotProps"];
function getOffsetTop(rect, vertical) {
  let offset2 = 0;
  if (typeof vertical === "number") {
    offset2 = vertical;
  } else if (vertical === "center") {
    offset2 = rect.height / 2;
  } else if (vertical === "bottom") {
    offset2 = rect.height;
  }
  return offset2;
}
function getOffsetLeft(rect, horizontal) {
  let offset2 = 0;
  if (typeof horizontal === "number") {
    offset2 = horizontal;
  } else if (horizontal === "center") {
    offset2 = rect.width / 2;
  } else if (horizontal === "right") {
    offset2 = rect.width;
  }
  return offset2;
}
function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map((n) => typeof n === "number" ? `${n}px` : n).join(" ");
}
function resolveAnchorEl2(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
var useUtilityClasses25 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"]
  };
  return composeClasses(slots, getPopoverUtilityClass, classes);
};
var PopoverRoot = styled_default(Modal_default, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (props, styles4) => styles4.root
})({});
var PopoverPaper = styled_default(Paper_default, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (props, styles4) => styles4.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
});
var Popover = React74.forwardRef(function Popover2(inProps, ref) {
  var _slotProps$paper, _slots$root, _slots$paper;
  const props = useThemeProps({
    props: inProps,
    name: "MuiPopover"
  });
  const {
    action,
    anchorEl,
    anchorOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition,
    anchorReference = "anchorEl",
    children,
    className,
    container: containerProp,
    elevation = 8,
    marginThreshold = 16,
    open,
    PaperProps: PaperPropsProp = {},
    slots,
    slotProps,
    transformOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent = Grow_default,
    transitionDuration: transitionDurationProp = "auto",
    TransitionProps: {
      onEntering
    } = {}
  } = props, TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded33), other = _objectWithoutPropertiesLoose(props, _excluded210);
  const externalPaperSlotProps = (_slotProps$paper = slotProps == null ? void 0 : slotProps.paper) != null ? _slotProps$paper : PaperPropsProp;
  const paperRef = React74.useRef();
  const handlePaperRef = useForkRef_default(paperRef, externalPaperSlotProps.ref);
  const ownerState = _extends({}, props, {
    anchorOrigin,
    anchorReference,
    elevation,
    marginThreshold,
    externalPaperSlotProps,
    transformOrigin,
    TransitionComponent,
    transitionDuration: transitionDurationProp,
    TransitionProps
  });
  const classes = useUtilityClasses25(ownerState);
  const getAnchorOffset = React74.useCallback(() => {
    if (anchorReference === "anchorPosition") {
      if (true) {
        if (!anchorPosition) {
          console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.');
        }
      }
      return anchorPosition;
    }
    const resolvedAnchorEl = resolveAnchorEl2(anchorEl);
    const anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument_default(paperRef.current).body;
    const anchorRect = anchorElement.getBoundingClientRect();
    if (true) {
      const box = anchorElement.getBoundingClientRect();
      if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
        console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
      }
    }
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]);
  const getTransformOrigin = React74.useCallback((elemRect) => {
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical),
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  const getPositioningStyle = React74.useCallback((element) => {
    const elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
    const elemTransformOrigin = getTransformOrigin(elemRect);
    if (anchorReference === "none") {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }
    const anchorOffset = getAnchorOffset();
    let top2 = anchorOffset.top - elemTransformOrigin.vertical;
    let left2 = anchorOffset.left - elemTransformOrigin.horizontal;
    const bottom2 = top2 + elemRect.height;
    const right2 = left2 + elemRect.width;
    const containerWindow = ownerWindow_default(resolveAnchorEl2(anchorEl));
    const heightThreshold = containerWindow.innerHeight - marginThreshold;
    const widthThreshold = containerWindow.innerWidth - marginThreshold;
    if (top2 < marginThreshold) {
      const diff = top2 - marginThreshold;
      top2 -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (bottom2 > heightThreshold) {
      const diff = bottom2 - heightThreshold;
      top2 -= diff;
      elemTransformOrigin.vertical += diff;
    }
    if (true) {
      if (elemRect.height > heightThreshold && elemRect.height && heightThreshold) {
        console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${elemRect.height - heightThreshold}px).`, "Please consider adding a `max-height` to improve the user-experience."].join("\n"));
      }
    }
    if (left2 < marginThreshold) {
      const diff = left2 - marginThreshold;
      left2 -= diff;
      elemTransformOrigin.horizontal += diff;
    } else if (right2 > widthThreshold) {
      const diff = right2 - widthThreshold;
      left2 -= diff;
      elemTransformOrigin.horizontal += diff;
    }
    return {
      top: `${Math.round(top2)}px`,
      left: `${Math.round(left2)}px`,
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold]);
  const [isPositioned, setIsPositioned] = React74.useState(open);
  const setPositioningStyles = React74.useCallback(() => {
    const element = paperRef.current;
    if (!element) {
      return;
    }
    const positioning = getPositioningStyle(element);
    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }
    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }
    element.style.transformOrigin = positioning.transformOrigin;
    setIsPositioned(true);
  }, [getPositioningStyle]);
  const handleEntering = (element, isAppearing) => {
    if (onEntering) {
      onEntering(element, isAppearing);
    }
    setPositioningStyles();
  };
  const handleExited = () => {
    setIsPositioned(false);
  };
  React74.useEffect(() => {
    if (open) {
      setPositioningStyles();
    }
  });
  React74.useImperativeHandle(action, () => open ? {
    updatePosition: () => {
      setPositioningStyles();
    }
  } : null, [open, setPositioningStyles]);
  React74.useEffect(() => {
    if (!open) {
      return void 0;
    }
    const handleResize = debounce_default(() => {
      setPositioningStyles();
    });
    const containerWindow = ownerWindow_default(anchorEl);
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [anchorEl, open, setPositioningStyles]);
  let transitionDuration = transitionDurationProp;
  if (transitionDurationProp === "auto" && !TransitionComponent.muiSupportAuto) {
    transitionDuration = void 0;
  }
  const container = containerProp || (anchorEl ? ownerDocument_default(resolveAnchorEl2(anchorEl)).body : void 0);
  const RootSlot = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : PopoverRoot;
  const PaperSlot = (_slots$paper = slots == null ? void 0 : slots.paper) != null ? _slots$paper : PopoverPaper;
  const paperProps = useSlotProps({
    elementType: PaperSlot,
    externalSlotProps: _extends({}, externalPaperSlotProps, {
      style: isPositioned ? externalPaperSlotProps.style : _extends({}, externalPaperSlotProps.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation,
      ref: handlePaperRef
    },
    ownerState,
    className: clsx_default(classes.paper, externalPaperSlotProps == null ? void 0 : externalPaperSlotProps.className)
  });
  const _useSlotProps = useSlotProps({
    elementType: RootSlot,
    externalSlotProps: (slotProps == null ? void 0 : slotProps.root) || {},
    externalForwardedProps: other,
    additionalProps: {
      ref,
      slotProps: {
        backdrop: {
          invisible: true
        }
      },
      container,
      open
    },
    ownerState,
    className: clsx_default(classes.root, className)
  }), {
    slotProps: rootSlotPropsProp
  } = _useSlotProps, rootProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded34);
  return (0, import_jsx_runtime54.jsx)(RootSlot, _extends({}, rootProps, !isHostComponent(RootSlot) && {
    slotProps: rootSlotPropsProp
  }, {
    children: (0, import_jsx_runtime54.jsx)(TransitionComponent, _extends({
      appear: true,
      in: open,
      onEntering: handleEntering,
      onExited: handleExited,
      timeout: transitionDuration
    }, TransitionProps, {
      children: (0, import_jsx_runtime54.jsx)(PaperSlot, _extends({}, paperProps, {
        children
      }))
    }))
  }));
});
true ? Popover.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: refType_default,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: chainPropTypes(import_prop_types35.default.oneOfType([HTMLElementType, import_prop_types35.default.func]), (props) => {
    if (props.open && (!props.anchorReference || props.anchorReference === "anchorEl")) {
      const resolvedAnchorEl = resolveAnchorEl2(props.anchorEl);
      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        const box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      } else {
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${resolvedAnchorEl}\` instead.`].join("\n"));
      }
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: import_prop_types35.default.shape({
    horizontal: import_prop_types35.default.oneOfType([import_prop_types35.default.oneOf(["center", "left", "right"]), import_prop_types35.default.number]).isRequired,
    vertical: import_prop_types35.default.oneOfType([import_prop_types35.default.oneOf(["bottom", "center", "top"]), import_prop_types35.default.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: import_prop_types35.default.shape({
    left: import_prop_types35.default.number.isRequired,
    top: import_prop_types35.default.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: import_prop_types35.default.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: import_prop_types35.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types35.default.object,
  /**
   * @ignore
   */
  className: import_prop_types35.default.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types35.default.oneOfType([HTMLElementType, import_prop_types35.default.func]),
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: integerPropType_default,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * @default 16
   */
  marginThreshold: import_prop_types35.default.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: import_prop_types35.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types35.default.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: import_prop_types35.default.shape({
    component: elementTypeAcceptingRef_default
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: import_prop_types35.default.shape({
    paper: import_prop_types35.default.oneOfType([import_prop_types35.default.func, import_prop_types35.default.object]),
    root: import_prop_types35.default.oneOfType([import_prop_types35.default.func, import_prop_types35.default.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: import_prop_types35.default.shape({
    paper: import_prop_types35.default.elementType,
    root: import_prop_types35.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types35.default.oneOfType([import_prop_types35.default.arrayOf(import_prop_types35.default.oneOfType([import_prop_types35.default.func, import_prop_types35.default.object, import_prop_types35.default.bool])), import_prop_types35.default.func, import_prop_types35.default.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: import_prop_types35.default.shape({
    horizontal: import_prop_types35.default.oneOfType([import_prop_types35.default.oneOf(["center", "left", "right"]), import_prop_types35.default.number]).isRequired,
    vertical: import_prop_types35.default.oneOfType([import_prop_types35.default.oneOf(["bottom", "center", "top"]), import_prop_types35.default.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: import_prop_types35.default.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: import_prop_types35.default.oneOfType([import_prop_types35.default.oneOf(["auto"]), import_prop_types35.default.number, import_prop_types35.default.shape({
    appear: import_prop_types35.default.number,
    enter: import_prop_types35.default.number,
    exit: import_prop_types35.default.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: import_prop_types35.default.object
} : void 0;
var Popover_default = Popover;

// node_modules/@mui/material/Menu/menuClasses.js
function getMenuUtilityClass2(slot) {
  return generateUtilityClass("MuiMenu", slot);
}
var menuClasses2 = generateUtilityClasses("MuiMenu", ["root", "paper", "list"]);

// node_modules/@mui/material/Menu/Menu.js
var import_jsx_runtime55 = __toESM(require_jsx_runtime());
var _excluded35 = ["onEntering"];
var _excluded211 = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"];
var RTL_ORIGIN = {
  vertical: "top",
  horizontal: "right"
};
var LTR_ORIGIN = {
  vertical: "top",
  horizontal: "left"
};
var useUtilityClasses26 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  };
  return composeClasses(slots, getMenuUtilityClass2, classes);
};
var MenuRoot = styled_default(Popover_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (props, styles4) => styles4.root
})({});
var MenuPaper = styled_default(PopoverPaper, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (props, styles4) => styles4.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
});
var MenuMenuList = styled_default(MenuList_default, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (props, styles4) => styles4.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
});
var Menu3 = React75.forwardRef(function Menu4(inProps, ref) {
  var _slots$paper, _slotProps$paper;
  const props = useThemeProps({
    props: inProps,
    name: "MuiMenu"
  });
  const {
    autoFocus = true,
    children,
    className,
    disableAutoFocusItem = false,
    MenuListProps = {},
    onClose,
    open,
    PaperProps = {},
    PopoverClasses,
    transitionDuration = "auto",
    TransitionProps: {
      onEntering
    } = {},
    variant = "selectedMenu",
    slots = {},
    slotProps = {}
  } = props, TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded35), other = _objectWithoutPropertiesLoose(props, _excluded211);
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";
  const ownerState = _extends({}, props, {
    autoFocus,
    disableAutoFocusItem,
    MenuListProps,
    onEntering,
    PaperProps,
    transitionDuration,
    TransitionProps,
    variant
  });
  const classes = useUtilityClasses26(ownerState);
  const autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  const menuListActionsRef = React75.useRef(null);
  const handleEntering = (element, isAppearing) => {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
    }
    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };
  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      if (onClose) {
        onClose(event, "tabKeyDown");
      }
    }
  };
  let activeItemIndex = -1;
  React75.Children.map(children, (child, index) => {
    if (!React75.isValidElement(child)) {
      return;
    }
    if (true) {
      if ((0, import_react_is2.isFragment)(child)) {
        console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  const PaperSlot = (_slots$paper = slots.paper) != null ? _slots$paper : MenuPaper;
  const paperExternalSlotProps = (_slotProps$paper = slotProps.paper) != null ? _slotProps$paper : PaperProps;
  const rootSlotProps = useSlotProps({
    elementType: slots.root,
    externalSlotProps: slotProps.root,
    ownerState,
    className: [classes.root, className]
  });
  const paperSlotProps = useSlotProps({
    elementType: PaperSlot,
    externalSlotProps: paperExternalSlotProps,
    ownerState,
    className: classes.paper
  });
  return (0, import_jsx_runtime55.jsx)(MenuRoot, _extends({
    onClose,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: isRtl ? "right" : "left"
    },
    transformOrigin: isRtl ? RTL_ORIGIN : LTR_ORIGIN,
    slots: {
      paper: PaperSlot,
      root: slots.root
    },
    slotProps: {
      root: rootSlotProps,
      paper: paperSlotProps
    },
    open,
    ref,
    transitionDuration,
    TransitionProps: _extends({
      onEntering: handleEntering
    }, TransitionProps),
    ownerState
  }, other, {
    classes: PopoverClasses,
    children: (0, import_jsx_runtime55.jsx)(MenuMenuList, _extends({
      onKeyDown: handleListKeyDown,
      actions: menuListActionsRef,
      autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
      autoFocusItem,
      variant
    }, MenuListProps, {
      className: clsx_default(classes.list, MenuListProps.className),
      children
    }))
  }));
});
true ? Menu3.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: import_prop_types36.default.oneOfType([HTMLElementType, import_prop_types36.default.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: import_prop_types36.default.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: import_prop_types36.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types36.default.object,
  /**
   * @ignore
   */
  className: import_prop_types36.default.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: import_prop_types36.default.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: import_prop_types36.default.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: import_prop_types36.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types36.default.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: import_prop_types36.default.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: import_prop_types36.default.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: import_prop_types36.default.shape({
    paper: import_prop_types36.default.oneOfType([import_prop_types36.default.func, import_prop_types36.default.object]),
    root: import_prop_types36.default.oneOfType([import_prop_types36.default.func, import_prop_types36.default.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: import_prop_types36.default.shape({
    paper: import_prop_types36.default.elementType,
    root: import_prop_types36.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types36.default.oneOfType([import_prop_types36.default.arrayOf(import_prop_types36.default.oneOfType([import_prop_types36.default.func, import_prop_types36.default.object, import_prop_types36.default.bool])), import_prop_types36.default.func, import_prop_types36.default.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: import_prop_types36.default.oneOfType([import_prop_types36.default.oneOf(["auto"]), import_prop_types36.default.number, import_prop_types36.default.shape({
    appear: import_prop_types36.default.number,
    enter: import_prop_types36.default.number,
    exit: import_prop_types36.default.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: import_prop_types36.default.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: import_prop_types36.default.oneOf(["menu", "selectedMenu"])
} : void 0;
var Menu_default = Menu3;

// node_modules/@mui/material/NativeSelect/NativeSelectInput.js
var React76 = __toESM(require_react());
var import_prop_types37 = __toESM(require_prop_types());

// node_modules/@mui/material/NativeSelect/nativeSelectClasses.js
function getNativeSelectUtilityClasses(slot) {
  return generateUtilityClass("MuiNativeSelect", slot);
}
var nativeSelectClasses = generateUtilityClasses("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var nativeSelectClasses_default = nativeSelectClasses;

// node_modules/@mui/material/NativeSelect/NativeSelectInput.js
var import_jsx_runtime56 = __toESM(require_jsx_runtime());
var import_jsx_runtime57 = __toESM(require_jsx_runtime());
var _excluded36 = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"];
var useUtilityClasses27 = (ownerState) => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open,
    error
  } = ownerState;
  const slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple", error && "error"],
    icon: ["icon", `icon${capitalize_default(variant)}`, open && "iconOpen", disabled && "disabled"]
  };
  return composeClasses(slots, getNativeSelectUtilityClasses, classes);
};
var nativeSelectSelectStyles = ({
  ownerState,
  theme
}) => _extends({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": _extends({}, theme.vars ? {
    backgroundColor: `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${nativeSelectClasses_default.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (theme.vars || theme).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, ownerState.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, ownerState.variant === "outlined" && {
  borderRadius: (theme.vars || theme).shape.borderRadius,
  "&:focus": {
    borderRadius: (theme.vars || theme).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
});
var NativeSelectSelect = styled_default("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: rootShouldForwardProp,
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.select, styles4[ownerState.variant], ownerState.error && styles4.error, {
      [`&.${nativeSelectClasses_default.multiple}`]: styles4.multiple
    }];
  }
})(nativeSelectSelectStyles);
var nativeSelectIconStyles = ({
  ownerState,
  theme
}) => _extends({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (theme.vars || theme).palette.action.active,
  [`&.${nativeSelectClasses_default.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled
  }
}, ownerState.open && {
  transform: "rotate(180deg)"
}, ownerState.variant === "filled" && {
  right: 7
}, ownerState.variant === "outlined" && {
  right: 7
});
var NativeSelectIcon = styled_default("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.icon, ownerState.variant && styles4[`icon${capitalize_default(ownerState.variant)}`], ownerState.open && styles4.iconOpen];
  }
})(nativeSelectIconStyles);
var NativeSelectInput = React76.forwardRef(function NativeSelectInput2(props, ref) {
  const {
    className,
    disabled,
    error,
    IconComponent,
    inputRef,
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded36);
  const ownerState = _extends({}, props, {
    disabled,
    variant,
    error
  });
  const classes = useUtilityClasses27(ownerState);
  return (0, import_jsx_runtime57.jsxs)(React76.Fragment, {
    children: [(0, import_jsx_runtime56.jsx)(NativeSelectSelect, _extends({
      ownerState,
      className: clsx_default(classes.select, className),
      disabled,
      ref: inputRef || ref
    }, other)), props.multiple ? null : (0, import_jsx_runtime56.jsx)(NativeSelectIcon, {
      as: IconComponent,
      ownerState,
      className: classes.icon
    })]
  });
});
true ? NativeSelectInput.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: import_prop_types37.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types37.default.object,
  /**
   * The CSS class name of the select element.
   */
  className: import_prop_types37.default.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: import_prop_types37.default.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: import_prop_types37.default.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: import_prop_types37.default.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: refType_default,
  /**
   * @ignore
   */
  multiple: import_prop_types37.default.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: import_prop_types37.default.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types37.default.func,
  /**
   * The input value.
   */
  value: import_prop_types37.default.any,
  /**
   * The variant to use.
   */
  variant: import_prop_types37.default.oneOf(["standard", "outlined", "filled"])
} : void 0;
var NativeSelectInput_default = NativeSelectInput;

// node_modules/@mui/material/utils/useControlled.js
var useControlled_default = useControlled;

// node_modules/@mui/material/Select/selectClasses.js
function getSelectUtilityClasses(slot) {
  return generateUtilityClass("MuiSelect", slot);
}
var selectClasses2 = generateUtilityClasses("MuiSelect", ["select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var selectClasses_default = selectClasses2;

// node_modules/@mui/material/Select/SelectInput.js
var import_jsx_runtime58 = __toESM(require_jsx_runtime());
var import_jsx_runtime59 = __toESM(require_jsx_runtime());
var _span5;
var _excluded37 = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"];
var SelectSelect = styled_default("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [
      // Win specificity over the input base
      {
        [`&.${selectClasses_default.select}`]: styles4.select
      },
      {
        [`&.${selectClasses_default.select}`]: styles4[ownerState.variant]
      },
      {
        [`&.${selectClasses_default.error}`]: styles4.error
      },
      {
        [`&.${selectClasses_default.multiple}`]: styles4.multiple
      }
    ];
  }
})(nativeSelectSelectStyles, {
  // Win specificity over the input base
  [`&.${selectClasses_default.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
});
var SelectIcon = styled_default("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.icon, ownerState.variant && styles4[`icon${capitalize_default(ownerState.variant)}`], ownerState.open && styles4.iconOpen];
  }
})(nativeSelectIconStyles);
var SelectNativeInput = styled_default("input", {
  shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (props, styles4) => styles4.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function areEqualValues(a, b) {
  if (typeof b === "object" && b !== null) {
    return a === b;
  }
  return String(a) === String(b);
}
function isEmpty2(display) {
  return display == null || typeof display === "string" && !display.trim();
}
var useUtilityClasses28 = (ownerState) => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open,
    error
  } = ownerState;
  const slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple", error && "error"],
    icon: ["icon", `icon${capitalize_default(variant)}`, open && "iconOpen", disabled && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return composeClasses(slots, getSelectUtilityClasses, classes);
};
var SelectInput = React77.forwardRef(function SelectInput2(props, ref) {
  const {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    autoFocus,
    autoWidth,
    children,
    className,
    defaultOpen,
    defaultValue,
    disabled,
    displayEmpty,
    error = false,
    IconComponent,
    inputRef: inputRefProp,
    labelId,
    MenuProps = {},
    multiple,
    name,
    onBlur,
    onChange,
    onClose,
    onFocus,
    onOpen,
    open: openProp,
    readOnly,
    renderValue,
    SelectDisplayProps = {},
    tabIndex: tabIndexProp,
    value: valueProp,
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded37);
  const [value, setValueState] = useControlled_default({
    controlled: valueProp,
    default: defaultValue,
    name: "Select"
  });
  const [openState, setOpenState] = useControlled_default({
    controlled: openProp,
    default: defaultOpen,
    name: "Select"
  });
  const inputRef = React77.useRef(null);
  const displayRef = React77.useRef(null);
  const [displayNode, setDisplayNode] = React77.useState(null);
  const {
    current: isOpenControlled
  } = React77.useRef(openProp != null);
  const [menuMinWidthState, setMenuMinWidthState] = React77.useState();
  const handleRef = useForkRef_default(ref, inputRefProp);
  const handleDisplayRef = React77.useCallback((node) => {
    displayRef.current = node;
    if (node) {
      setDisplayNode(node);
    }
  }, []);
  const anchorElement = displayNode == null ? void 0 : displayNode.parentNode;
  React77.useImperativeHandle(handleRef, () => ({
    focus: () => {
      displayRef.current.focus();
    },
    node: inputRef.current,
    value
  }), [value]);
  React77.useEffect(() => {
    if (defaultOpen && openState && displayNode && !isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
      displayRef.current.focus();
    }
  }, [displayNode, autoWidth]);
  React77.useEffect(() => {
    if (autoFocus) {
      displayRef.current.focus();
    }
  }, [autoFocus]);
  React77.useEffect(() => {
    if (!labelId) {
      return void 0;
    }
    const label = ownerDocument_default(displayRef.current).getElementById(labelId);
    if (label) {
      const handler = () => {
        if (getSelection().isCollapsed) {
          displayRef.current.focus();
        }
      };
      label.addEventListener("click", handler);
      return () => {
        label.removeEventListener("click", handler);
      };
    }
    return void 0;
  }, [labelId]);
  const update = (open2, event) => {
    if (open2) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }
    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
      setOpenState(open2);
    }
  };
  const handleMouseDown = (event) => {
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    displayRef.current.focus();
    update(true, event);
  };
  const handleClose = (event) => {
    update(false, event);
  };
  const childrenArray = React77.Children.toArray(children);
  const handleChange = (event) => {
    const child = childrenArray.find((childItem) => childItem.props.value === event.target.value);
    if (child === void 0) {
      return;
    }
    setValueState(child.props.value);
    if (onChange) {
      onChange(event, child);
    }
  };
  const handleItemClick = (child) => (event) => {
    let newValue;
    if (!event.currentTarget.hasAttribute("tabindex")) {
      return;
    }
    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];
      const itemIndex = value.indexOf(child.props.value);
      if (itemIndex === -1) {
        newValue.push(child.props.value);
      } else {
        newValue.splice(itemIndex, 1);
      }
    } else {
      newValue = child.props.value;
    }
    if (child.props.onClick) {
      child.props.onClick(event);
    }
    if (value !== newValue) {
      setValueState(newValue);
      if (onChange) {
        const nativeEvent = event.nativeEvent || event;
        const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
        Object.defineProperty(clonedEvent, "target", {
          writable: true,
          value: {
            value: newValue,
            name
          }
        });
        onChange(clonedEvent, child);
      }
    }
    if (!multiple) {
      update(false, event);
    }
  };
  const handleKeyDown2 = (event) => {
    if (!readOnly) {
      const validKeys = [
        " ",
        "ArrowUp",
        "ArrowDown",
        // The native select doesn't respond to enter on macOS, but it's recommended by
        // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
        "Enter"
      ];
      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        update(true, event);
      }
    }
  };
  const open = displayNode !== null && openState;
  const handleBlur2 = (event) => {
    if (!open && onBlur) {
      Object.defineProperty(event, "target", {
        writable: true,
        value: {
          value,
          name
        }
      });
      onBlur(event);
    }
  };
  delete other["aria-invalid"];
  let display;
  let displaySingle;
  const displayMultiple = [];
  let computeDisplay = false;
  let foundMatch = false;
  if (isFilled({
    value
  }) || displayEmpty) {
    if (renderValue) {
      display = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }
  const items = childrenArray.map((child) => {
    if (!React77.isValidElement(child)) {
      return null;
    }
    if (true) {
      if ((0, import_react_is3.isFragment)(child)) {
        console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    let selected;
    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error(true ? `MUI: The \`value\` prop must be an array when using the \`Select\` component with \`multiple\`.` : formatMuiErrorMessage(2));
      }
      selected = value.some((v) => areEqualValues(v, child.props.value));
      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);
      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }
    if (selected) {
      foundMatch = true;
    }
    return React77.cloneElement(child, {
      "aria-selected": selected ? "true" : "false",
      onClick: handleItemClick(child),
      onKeyUp: (event) => {
        if (event.key === " ") {
          event.preventDefault();
        }
        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: "option",
      selected,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": child.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  if (true) {
    React77.useEffect(() => {
      if (!foundMatch && !multiple && value !== "") {
        const values = childrenArray.map((child) => child.props.value);
        console.warn([`MUI: You have provided an out-of-range value \`${value}\` for the select ${name ? `(name="${name}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${values.filter((x) => x != null).map((x) => `\`${x}\``).join(", ") || '""'}.`].join("\n"));
      }
    }, [foundMatch, childrenArray, multiple, name, value]);
  }
  if (computeDisplay) {
    if (multiple) {
      if (displayMultiple.length === 0) {
        display = null;
      } else {
        display = displayMultiple.reduce((output, child, index) => {
          output.push(child);
          if (index < displayMultiple.length - 1) {
            output.push(", ");
          }
          return output;
        }, []);
      }
    } else {
      display = displaySingle;
    }
  }
  let menuMinWidth = menuMinWidthState;
  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = anchorElement.clientWidth;
  }
  let tabIndex;
  if (typeof tabIndexProp !== "undefined") {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }
  const buttonId = SelectDisplayProps.id || (name ? `mui-component-select-${name}` : void 0);
  const ownerState = _extends({}, props, {
    variant,
    value,
    open,
    error
  });
  const classes = useUtilityClasses28(ownerState);
  return (0, import_jsx_runtime59.jsxs)(React77.Fragment, {
    children: [(0, import_jsx_runtime58.jsx)(SelectSelect, _extends({
      ref: handleDisplayRef,
      tabIndex,
      role: "button",
      "aria-disabled": disabled ? "true" : void 0,
      "aria-expanded": open ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": ariaLabel,
      "aria-labelledby": [labelId, buttonId].filter(Boolean).join(" ") || void 0,
      "aria-describedby": ariaDescribedby,
      onKeyDown: handleKeyDown2,
      onMouseDown: disabled || readOnly ? null : handleMouseDown,
      onBlur: handleBlur2,
      onFocus
    }, SelectDisplayProps, {
      ownerState,
      className: clsx_default(SelectDisplayProps.className, classes.select, className),
      id: buttonId,
      children: isEmpty2(display) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _span5 || (_span5 = (0, import_jsx_runtime58.jsx)("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : display
    })), (0, import_jsx_runtime58.jsx)(SelectNativeInput, _extends({
      "aria-invalid": error,
      value: Array.isArray(value) ? value.join(",") : value,
      name,
      ref: inputRef,
      "aria-hidden": true,
      onChange: handleChange,
      tabIndex: -1,
      disabled,
      className: classes.nativeInput,
      autoFocus,
      ownerState
    }, other)), (0, import_jsx_runtime58.jsx)(SelectIcon, {
      as: IconComponent,
      className: classes.icon,
      ownerState
    }), (0, import_jsx_runtime58.jsx)(Menu_default, _extends({
      id: `menu-${name || ""}`,
      anchorEl: anchorElement,
      open,
      onClose: handleClose,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, MenuProps, {
      MenuListProps: _extends({
        "aria-labelledby": labelId,
        role: "listbox",
        disableListWrap: true
      }, MenuProps.MenuListProps),
      PaperProps: _extends({}, MenuProps.PaperProps, {
        style: _extends({
          minWidth: menuMinWidth
        }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
      }),
      children: items
    }))]
  });
});
true ? SelectInput.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": import_prop_types38.default.string,
  /**
   * @ignore
   */
  "aria-label": import_prop_types38.default.string,
  /**
   * @ignore
   */
  autoFocus: import_prop_types38.default.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: import_prop_types38.default.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: import_prop_types38.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types38.default.object,
  /**
   * The CSS class name of the select element.
   */
  className: import_prop_types38.default.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: import_prop_types38.default.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types38.default.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: import_prop_types38.default.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: import_prop_types38.default.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: import_prop_types38.default.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: import_prop_types38.default.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: refType_default,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: import_prop_types38.default.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: import_prop_types38.default.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: import_prop_types38.default.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: import_prop_types38.default.string,
  /**
   * @ignore
   */
  onBlur: import_prop_types38.default.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: import_prop_types38.default.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: import_prop_types38.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types38.default.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: import_prop_types38.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types38.default.bool,
  /**
   * @ignore
   */
  readOnly: import_prop_types38.default.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: import_prop_types38.default.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: import_prop_types38.default.object,
  /**
   * @ignore
   */
  tabIndex: import_prop_types38.default.oneOfType([import_prop_types38.default.number, import_prop_types38.default.string]),
  /**
   * @ignore
   */
  type: import_prop_types38.default.any,
  /**
   * The input value.
   */
  value: import_prop_types38.default.any,
  /**
   * The variant to use.
   */
  variant: import_prop_types38.default.oneOf(["standard", "outlined", "filled"])
} : void 0;
var SelectInput_default = SelectInput;

// node_modules/@mui/material/FormControl/formControlState.js
function formControlState({
  props,
  states,
  muiFormControl
}) {
  return states.reduce((acc, state) => {
    acc[state] = props[state];
    if (muiFormControl) {
      if (typeof props[state] === "undefined") {
        acc[state] = muiFormControl[state];
      }
    }
    return acc;
  }, {});
}

// node_modules/@mui/material/internal/svg-icons/ArrowDropDown.js
var React80 = __toESM(require_react());

// node_modules/@mui/material/utils/createSvgIcon.js
var React79 = __toESM(require_react());

// node_modules/@mui/material/SvgIcon/SvgIcon.js
var React78 = __toESM(require_react());
var import_prop_types39 = __toESM(require_prop_types());

// node_modules/@mui/material/SvgIcon/svgIconClasses.js
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);

// node_modules/@mui/material/SvgIcon/SvgIcon.js
var import_jsx_runtime60 = __toESM(require_jsx_runtime());
var import_jsx_runtime61 = __toESM(require_jsx_runtime());
var _excluded38 = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];
var useUtilityClasses29 = (ownerState) => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ["root", color !== "inherit" && `color${capitalize_default(color)}`, `fontSize${capitalize_default(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
};
var SvgIconRoot = styled_default("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, ownerState.color !== "inherit" && styles4[`color${capitalize_default(ownerState.color)}`], styles4[`fontSize${capitalize_default(ownerState.fontSize)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette2, _palette3;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: ownerState.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (_theme$transitions = theme.transitions) == null || (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, "fill", {
      duration: (_theme$transitions2 = theme.transitions) == null || (_theme$transitions2 = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((_theme$typography = theme.typography) == null || (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || "1.25rem",
      medium: ((_theme$typography2 = theme.typography) == null || (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || "1.5rem",
      large: ((_theme$typography3 = theme.typography) == null || (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || "2.1875rem"
    }[ownerState.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (_palette$ownerState$c = (_palette = (theme.vars || theme).palette) == null || (_palette = _palette[ownerState.color]) == null ? void 0 : _palette.main) != null ? _palette$ownerState$c : {
      action: (_palette2 = (theme.vars || theme).palette) == null || (_palette2 = _palette2.action) == null ? void 0 : _palette2.active,
      disabled: (_palette3 = (theme.vars || theme).palette) == null || (_palette3 = _palette3.action) == null ? void 0 : _palette3.disabled,
      inherit: void 0
    }[ownerState.color]
  };
});
var SvgIcon = React78.forwardRef(function SvgIcon2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiSvgIcon"
  });
  const {
    children,
    className,
    color = "inherit",
    component = "svg",
    fontSize = "medium",
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = "0 0 24 24"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded38);
  const hasSvgAsChild = React78.isValidElement(children) && children.type === "svg";
  const ownerState = _extends({}, props, {
    color,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  });
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = useUtilityClasses29(ownerState);
  return (0, import_jsx_runtime61.jsxs)(SvgIconRoot, _extends({
    as: component,
    className: clsx_default(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : true,
    role: titleAccess ? "img" : void 0,
    ref
  }, more, other, hasSvgAsChild && children.props, {
    ownerState,
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? (0, import_jsx_runtime60.jsx)("title", {
      children: titleAccess
    }) : null]
  }));
});
true ? SvgIcon.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: import_prop_types39.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types39.default.object,
  /**
   * @ignore
   */
  className: import_prop_types39.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: import_prop_types39.default.oneOfType([import_prop_types39.default.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types39.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types39.default.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: import_prop_types39.default.oneOfType([import_prop_types39.default.oneOf(["inherit", "large", "medium", "small"]), import_prop_types39.default.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: import_prop_types39.default.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: import_prop_types39.default.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: import_prop_types39.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types39.default.oneOfType([import_prop_types39.default.arrayOf(import_prop_types39.default.oneOfType([import_prop_types39.default.func, import_prop_types39.default.object, import_prop_types39.default.bool])), import_prop_types39.default.func, import_prop_types39.default.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: import_prop_types39.default.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: import_prop_types39.default.string
} : void 0;
SvgIcon.muiName = "SvgIcon";
var SvgIcon_default = SvgIcon;

// node_modules/@mui/material/utils/createSvgIcon.js
var import_jsx_runtime62 = __toESM(require_jsx_runtime());
function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return (0, import_jsx_runtime62.jsx)(SvgIcon_default, _extends({
      "data-testid": `${displayName}Icon`,
      ref
    }, props, {
      children: path
    }));
  }
  if (true) {
    Component.displayName = `${displayName}Icon`;
  }
  Component.muiName = SvgIcon_default.muiName;
  return React79.memo(React79.forwardRef(Component));
}

// node_modules/@mui/material/internal/svg-icons/ArrowDropDown.js
var import_jsx_runtime63 = __toESM(require_jsx_runtime());
var ArrowDropDown_default = createSvgIcon((0, import_jsx_runtime63.jsx)("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");

// node_modules/@mui/material/Input/Input.js
var React83 = __toESM(require_react());
var import_prop_types42 = __toESM(require_prop_types());

// node_modules/@mui/material/InputBase/InputBase.js
var React82 = __toESM(require_react());
var import_prop_types41 = __toESM(require_prop_types());

// node_modules/@mui/material/GlobalStyles/GlobalStyles.js
var React81 = __toESM(require_react());
var import_prop_types40 = __toESM(require_prop_types());
var import_jsx_runtime64 = __toESM(require_jsx_runtime());
function GlobalStyles(props) {
  return (0, import_jsx_runtime64.jsx)(GlobalStyles_default, _extends({}, props, {
    defaultTheme: defaultTheme_default,
    themeId: identifier_default
  }));
}
true ? GlobalStyles.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The styles you want to apply globally.
   */
  styles: import_prop_types40.default.oneOfType([import_prop_types40.default.array, import_prop_types40.default.func, import_prop_types40.default.number, import_prop_types40.default.object, import_prop_types40.default.string, import_prop_types40.default.bool])
} : void 0;
var GlobalStyles_default2 = GlobalStyles;

// node_modules/@mui/material/InputBase/inputBaseClasses.js
function getInputBaseUtilityClass(slot) {
  return generateUtilityClass("MuiInputBase", slot);
}
var inputBaseClasses = generateUtilityClasses("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var inputBaseClasses_default = inputBaseClasses;

// node_modules/@mui/material/InputBase/InputBase.js
var import_jsx_runtime65 = __toESM(require_jsx_runtime());
var import_jsx_runtime66 = __toESM(require_jsx_runtime());
var _excluded39 = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"];
var rootOverridesResolver = (props, styles4) => {
  const {
    ownerState
  } = props;
  return [styles4.root, ownerState.formControl && styles4.formControl, ownerState.startAdornment && styles4.adornedStart, ownerState.endAdornment && styles4.adornedEnd, ownerState.error && styles4.error, ownerState.size === "small" && styles4.sizeSmall, ownerState.multiline && styles4.multiline, ownerState.color && styles4[`color${capitalize_default(ownerState.color)}`], ownerState.fullWidth && styles4.fullWidth, ownerState.hiddenLabel && styles4.hiddenLabel];
};
var inputOverridesResolver = (props, styles4) => {
  const {
    ownerState
  } = props;
  return [styles4.input, ownerState.size === "small" && styles4.inputSizeSmall, ownerState.multiline && styles4.inputMultiline, ownerState.type === "search" && styles4.inputTypeSearch, ownerState.startAdornment && styles4.inputAdornedStart, ownerState.endAdornment && styles4.inputAdornedEnd, ownerState.hiddenLabel && styles4.inputHiddenLabel];
};
var useUtilityClasses30 = (ownerState) => {
  const {
    classes,
    color,
    disabled,
    error,
    endAdornment,
    focused,
    formControl,
    fullWidth,
    hiddenLabel,
    multiline,
    readOnly,
    size,
    startAdornment,
    type
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize_default(color)}`, disabled && "disabled", error && "error", fullWidth && "fullWidth", focused && "focused", formControl && "formControl", size === "small" && "sizeSmall", multiline && "multiline", startAdornment && "adornedStart", endAdornment && "adornedEnd", hiddenLabel && "hiddenLabel", readOnly && "readOnly"],
    input: ["input", disabled && "disabled", type === "search" && "inputTypeSearch", multiline && "inputMultiline", size === "small" && "inputSizeSmall", hiddenLabel && "inputHiddenLabel", startAdornment && "inputAdornedStart", endAdornment && "inputAdornedEnd", readOnly && "readOnly"]
  };
  return composeClasses(slots, getInputBaseUtilityClass, classes);
};
var InputBaseRoot = styled_default("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(({
  theme,
  ownerState
}) => _extends({}, theme.typography.body1, {
  color: (theme.vars || theme).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${inputBaseClasses_default.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled,
    cursor: "default"
  }
}, ownerState.multiline && _extends({
  padding: "4px 0 5px"
}, ownerState.size === "small" && {
  paddingTop: 1
}), ownerState.fullWidth && {
  width: "100%"
}));
var InputBaseComponent = styled_default("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => {
  const light = theme.palette.mode === "light";
  const placeholder = _extends({
    color: "currentColor"
  }, theme.vars ? {
    opacity: theme.vars.opacity.inputPlaceholder
  } : {
    opacity: light ? 0.42 : 0.5
  }, {
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shorter
    })
  });
  const placeholderHidden = {
    opacity: "0 !important"
  };
  const placeholderVisible = theme.vars ? {
    opacity: theme.vars.opacity.inputPlaceholder
  } : {
    opacity: light ? 0.42 : 0.5
  };
  return _extends({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": placeholder,
    "&::-moz-placeholder": placeholder,
    // Firefox 19+
    "&:-ms-input-placeholder": placeholder,
    // IE11
    "&::-ms-input-placeholder": placeholder,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${inputBaseClasses_default.formControl} &`]: {
      "&::-webkit-input-placeholder": placeholderHidden,
      "&::-moz-placeholder": placeholderHidden,
      // Firefox 19+
      "&:-ms-input-placeholder": placeholderHidden,
      // IE11
      "&::-ms-input-placeholder": placeholderHidden,
      // Edge
      "&:focus::-webkit-input-placeholder": placeholderVisible,
      "&:focus::-moz-placeholder": placeholderVisible,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": placeholderVisible,
      // IE11
      "&:focus::-ms-input-placeholder": placeholderVisible
      // Edge
    },
    [`&.${inputBaseClasses_default.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (theme.vars || theme).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, ownerState.size === "small" && {
    paddingTop: 1
  }, ownerState.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, ownerState.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
});
var inputGlobalStyles = (0, import_jsx_runtime65.jsx)(GlobalStyles_default2, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
});
var InputBase = React82.forwardRef(function InputBase2(inProps, ref) {
  var _slotProps$input;
  const props = useThemeProps({
    props: inProps,
    name: "MuiInputBase"
  });
  const {
    "aria-describedby": ariaDescribedby,
    autoComplete,
    autoFocus,
    className,
    components = {},
    componentsProps = {},
    defaultValue,
    disabled,
    disableInjectingGlobalStyles,
    endAdornment,
    fullWidth = false,
    id,
    inputComponent = "input",
    inputProps: inputPropsProp = {},
    inputRef: inputRefProp,
    maxRows,
    minRows,
    multiline = false,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    readOnly,
    renderSuffix,
    rows,
    slotProps = {},
    slots = {},
    startAdornment,
    type = "text",
    value: valueProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded39);
  const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
  const {
    current: isControlled
  } = React82.useRef(value != null);
  const inputRef = React82.useRef();
  const handleInputRefWarning = React82.useCallback((instance) => {
    if (true) {
      if (instance && instance.nodeName !== "INPUT" && !instance.focus) {
        console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join("\n"));
      }
    }
  }, []);
  const handleInputRef = useForkRef_default(inputRef, inputRefProp, inputPropsProp.ref, handleInputRefWarning);
  const [focused, setFocused] = React82.useState(false);
  const muiFormControl = useFormControl();
  if (true) {
    React82.useEffect(() => {
      if (muiFormControl) {
        return muiFormControl.registerEffect();
      }
      return void 0;
    }, [muiFormControl]);
  }
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused;
  React82.useEffect(() => {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);
      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  const onFilled = muiFormControl && muiFormControl.onFilled;
  const onEmpty = muiFormControl && muiFormControl.onEmpty;
  const checkDirty = React82.useCallback((obj) => {
    if (isFilled(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect_default2(() => {
    if (isControlled) {
      checkDirty({
        value
      });
    }
  }, [value, checkDirty, isControlled]);
  const handleFocus = (event) => {
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }
    if (onFocus) {
      onFocus(event);
    }
    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };
  const handleBlur2 = (event) => {
    if (onBlur) {
      onBlur(event);
    }
    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };
  const handleChange = (event, ...args) => {
    if (!isControlled) {
      const element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(true ? `MUI: Expected valid input target. Did you use a custom \`inputComponent\` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info.` : formatMuiErrorMessage(1));
      }
      checkDirty({
        value: element.value
      });
    }
    if (inputPropsProp.onChange) {
      inputPropsProp.onChange(event, ...args);
    }
    if (onChange) {
      onChange(event, ...args);
    }
  };
  React82.useEffect(() => {
    checkDirty(inputRef.current);
  }, []);
  const handleClick = (event) => {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    if (onClick && !fcs.disabled) {
      onClick(event);
    }
  };
  let InputComponent = inputComponent;
  let inputProps = inputPropsProp;
  if (multiline && InputComponent === "input") {
    if (rows) {
      if (true) {
        if (minRows || maxRows) {
          console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set.");
        }
      }
      inputProps = _extends({
        type: void 0,
        minRows: rows,
        maxRows: rows
      }, inputProps);
    } else {
      inputProps = _extends({
        type: void 0,
        maxRows,
        minRows
      }, inputProps);
    }
    InputComponent = TextareaAutosize;
  }
  const handleAutoFill = (event) => {
    checkDirty(event.animationName === "mui-auto-fill-cancel" ? inputRef.current : {
      value: "x"
    });
  };
  React82.useEffect(() => {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  const ownerState = _extends({}, props, {
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    endAdornment,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    startAdornment,
    type
  });
  const classes = useUtilityClasses30(ownerState);
  const Root = slots.root || components.Root || InputBaseRoot;
  const rootProps = slotProps.root || componentsProps.root || {};
  const Input5 = slots.input || components.Input || InputBaseComponent;
  inputProps = _extends({}, inputProps, (_slotProps$input = slotProps.input) != null ? _slotProps$input : componentsProps.input);
  return (0, import_jsx_runtime66.jsxs)(React82.Fragment, {
    children: [!disableInjectingGlobalStyles && inputGlobalStyles, (0, import_jsx_runtime66.jsxs)(Root, _extends({}, rootProps, !isHostComponent(Root) && {
      ownerState: _extends({}, ownerState, rootProps.ownerState)
    }, {
      ref,
      onClick: handleClick
    }, other, {
      className: clsx_default(classes.root, rootProps.className, className, readOnly && "MuiInputBase-readOnly"),
      children: [startAdornment, (0, import_jsx_runtime65.jsx)(FormControlContext_default.Provider, {
        value: null,
        children: (0, import_jsx_runtime65.jsx)(Input5, _extends({
          ownerState,
          "aria-invalid": fcs.error,
          "aria-describedby": ariaDescribedby,
          autoComplete,
          autoFocus,
          defaultValue,
          disabled: fcs.disabled,
          id,
          onAnimationStart: handleAutoFill,
          name,
          placeholder,
          readOnly,
          required: fcs.required,
          rows,
          value,
          onKeyDown,
          onKeyUp,
          type
        }, inputProps, !isHostComponent(Input5) && {
          as: InputComponent,
          ownerState: _extends({}, ownerState, inputProps.ownerState)
        }, {
          ref: handleInputRef,
          className: clsx_default(classes.input, inputProps.className, readOnly && "MuiInputBase-readOnly"),
          onBlur: handleBlur2,
          onChange: handleChange,
          onFocus: handleFocus
        }))
      }), endAdornment, renderSuffix ? renderSuffix(_extends({}, fcs, {
        startAdornment
      })) : null]
    }))]
  });
});
true ? InputBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  "aria-describedby": import_prop_types41.default.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types41.default.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: import_prop_types41.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types41.default.object,
  /**
   * @ignore
   */
  className: import_prop_types41.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: import_prop_types41.default.oneOfType([import_prop_types41.default.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), import_prop_types41.default.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: import_prop_types41.default.shape({
    Input: import_prop_types41.default.elementType,
    Root: import_prop_types41.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: import_prop_types41.default.shape({
    input: import_prop_types41.default.object,
    root: import_prop_types41.default.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types41.default.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: import_prop_types41.default.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: import_prop_types41.default.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: import_prop_types41.default.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: import_prop_types41.default.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types41.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types41.default.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: elementTypeAcceptingRef_default,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: import_prop_types41.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: import_prop_types41.default.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types41.default.oneOfType([import_prop_types41.default.number, import_prop_types41.default.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: import_prop_types41.default.oneOfType([import_prop_types41.default.number, import_prop_types41.default.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: import_prop_types41.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types41.default.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: import_prop_types41.default.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types41.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types41.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types41.default.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: import_prop_types41.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types41.default.func,
  /**
   * @ignore
   */
  onKeyUp: import_prop_types41.default.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: import_prop_types41.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types41.default.bool,
  /**
   * @ignore
   */
  renderSuffix: import_prop_types41.default.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: import_prop_types41.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types41.default.oneOfType([import_prop_types41.default.number, import_prop_types41.default.string]),
  /**
   * The size of the component.
   */
  size: import_prop_types41.default.oneOfType([import_prop_types41.default.oneOf(["medium", "small"]), import_prop_types41.default.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: import_prop_types41.default.shape({
    input: import_prop_types41.default.object,
    root: import_prop_types41.default.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: import_prop_types41.default.shape({
    input: import_prop_types41.default.elementType,
    root: import_prop_types41.default.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: import_prop_types41.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types41.default.oneOfType([import_prop_types41.default.arrayOf(import_prop_types41.default.oneOfType([import_prop_types41.default.func, import_prop_types41.default.object, import_prop_types41.default.bool])), import_prop_types41.default.func, import_prop_types41.default.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: import_prop_types41.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types41.default.any
} : void 0;
var InputBase_default = InputBase;

// node_modules/@mui/material/Input/inputClasses.js
function getInputUtilityClass2(slot) {
  return generateUtilityClass("MuiInput", slot);
}
var inputClasses2 = _extends({}, inputBaseClasses_default, generateUtilityClasses("MuiInput", ["root", "underline", "input"]));
var inputClasses_default = inputClasses2;

// node_modules/@mui/material/Input/Input.js
var import_jsx_runtime67 = __toESM(require_jsx_runtime());
var _excluded40 = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"];
var useUtilityClasses31 = (ownerState) => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getInputUtilityClass2, classes);
  return _extends({}, classes, composedClasses);
};
var InputRoot = styled_default(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles4), !ownerState.disableUnderline && styles4.underline];
  }
})(({
  theme,
  ownerState
}) => {
  const light = theme.palette.mode === "light";
  let bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  if (theme.vars) {
    bottomLineColor = `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})`;
  }
  return _extends({
    position: "relative"
  }, ownerState.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !ownerState.disableUnderline && {
    "&:after": {
      borderBottom: `2px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${inputClasses_default.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${inputClasses_default.error}`]: {
      "&:before, &:after": {
        borderBottomColor: (theme.vars || theme).palette.error.main
      }
    },
    "&:before": {
      borderBottom: `1px solid ${bottomLineColor}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: theme.transitions.create("border-bottom-color", {
        duration: theme.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${inputClasses_default.disabled}, .${inputClasses_default.error}):before`]: {
      borderBottom: `2px solid ${(theme.vars || theme).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${bottomLineColor}`
      }
    },
    [`&.${inputClasses_default.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
});
var InputInput = styled_default(InputBaseComponent, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})({});
var Input3 = React83.forwardRef(function Input4(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input;
  const props = useThemeProps({
    props: inProps,
    name: "MuiInput"
  });
  const {
    disableUnderline,
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    inputComponent = "input",
    multiline = false,
    slotProps,
    slots = {},
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded40);
  const classes = useUtilityClasses31(props);
  const ownerState = {
    disableUnderline
  };
  const inputComponentsProps = {
    root: {
      ownerState
    }
  };
  const componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? deepmerge(slotProps != null ? slotProps : componentsPropsProp, inputComponentsProps) : inputComponentsProps;
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : InputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : InputInput;
  return (0, import_jsx_runtime67.jsx)(InputBase_default, _extends({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    slotProps: componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes
  }));
});
true ? Input3.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types42.default.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: import_prop_types42.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types42.default.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: import_prop_types42.default.oneOfType([import_prop_types42.default.oneOf(["primary", "secondary"]), import_prop_types42.default.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: import_prop_types42.default.shape({
    Input: import_prop_types42.default.elementType,
    Root: import_prop_types42.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: import_prop_types42.default.shape({
    input: import_prop_types42.default.object,
    root: import_prop_types42.default.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types42.default.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: import_prop_types42.default.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: import_prop_types42.default.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: import_prop_types42.default.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: import_prop_types42.default.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types42.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types42.default.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: import_prop_types42.default.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: import_prop_types42.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: import_prop_types42.default.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types42.default.oneOfType([import_prop_types42.default.number, import_prop_types42.default.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: import_prop_types42.default.oneOfType([import_prop_types42.default.number, import_prop_types42.default.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: import_prop_types42.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types42.default.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types42.default.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: import_prop_types42.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types42.default.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: import_prop_types42.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types42.default.oneOfType([import_prop_types42.default.number, import_prop_types42.default.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: import_prop_types42.default.shape({
    input: import_prop_types42.default.object,
    root: import_prop_types42.default.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: import_prop_types42.default.shape({
    input: import_prop_types42.default.elementType,
    root: import_prop_types42.default.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: import_prop_types42.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types42.default.oneOfType([import_prop_types42.default.arrayOf(import_prop_types42.default.oneOfType([import_prop_types42.default.func, import_prop_types42.default.object, import_prop_types42.default.bool])), import_prop_types42.default.func, import_prop_types42.default.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: import_prop_types42.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types42.default.any
} : void 0;
Input3.muiName = "Input";
var Input_default = Input3;

// node_modules/@mui/material/FilledInput/FilledInput.js
var React84 = __toESM(require_react());
var import_prop_types43 = __toESM(require_prop_types());

// node_modules/@mui/material/FilledInput/filledInputClasses.js
function getFilledInputUtilityClass(slot) {
  return generateUtilityClass("MuiFilledInput", slot);
}
var filledInputClasses = _extends({}, inputBaseClasses_default, generateUtilityClasses("MuiFilledInput", ["root", "underline", "input"]));
var filledInputClasses_default = filledInputClasses;

// node_modules/@mui/material/FilledInput/FilledInput.js
var import_jsx_runtime68 = __toESM(require_jsx_runtime());
var _excluded41 = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"];
var useUtilityClasses32 = (ownerState) => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getFilledInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var FilledInputRoot = styled_default(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles4), !ownerState.disableUnderline && styles4.underline];
  }
})(({
  theme,
  ownerState
}) => {
  var _palette;
  const light = theme.palette.mode === "light";
  const bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  const backgroundColor = light ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)";
  const hoverBackground = light ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)";
  const disabledBackground = light ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return _extends({
    position: "relative",
    backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor,
    borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.hoverBg : hoverBackground,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
      }
    },
    [`&.${filledInputClasses_default.focused}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
    },
    [`&.${filledInputClasses_default.disabled}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground
    }
  }, !ownerState.disableUnderline && {
    "&:after": {
      borderBottom: `2px solid ${(_palette = (theme.vars || theme).palette[ownerState.color || "primary"]) == null ? void 0 : _palette.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${filledInputClasses_default.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${filledInputClasses_default.error}`]: {
      "&:before, &:after": {
        borderBottomColor: (theme.vars || theme).palette.error.main
      }
    },
    "&:before": {
      borderBottom: `1px solid ${theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})` : bottomLineColor}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: theme.transitions.create("border-bottom-color", {
        duration: theme.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${filledInputClasses_default.disabled}, .${filledInputClasses_default.error}):before`]: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.text.primary}`
    },
    [`&.${filledInputClasses_default.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, ownerState.startAdornment && {
    paddingLeft: 12
  }, ownerState.endAdornment && {
    paddingRight: 12
  }, ownerState.multiline && _extends({
    padding: "25px 12px 8px"
  }, ownerState.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, ownerState.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }));
});
var FilledInputInput = styled_default(InputBaseComponent, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => _extends({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !theme.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
    caretColor: theme.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, theme.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [theme.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, ownerState.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, ownerState.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, ownerState.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
}, ownerState.startAdornment && {
  paddingLeft: 0
}, ownerState.endAdornment && {
  paddingRight: 0
}, ownerState.hiddenLabel && ownerState.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}));
var FilledInput = React84.forwardRef(function FilledInput2(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input;
  const props = useThemeProps({
    props: inProps,
    name: "MuiFilledInput"
  });
  const {
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    // declare here to prevent spreading to DOM
    inputComponent = "input",
    multiline = false,
    slotProps,
    slots = {},
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded41);
  const ownerState = _extends({}, props, {
    fullWidth,
    inputComponent,
    multiline,
    type
  });
  const classes = useUtilityClasses32(props);
  const filledInputComponentsProps = {
    root: {
      ownerState
    },
    input: {
      ownerState
    }
  };
  const componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? deepmerge(slotProps != null ? slotProps : componentsPropsProp, filledInputComponentsProps) : filledInputComponentsProps;
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : FilledInputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : FilledInputInput;
  return (0, import_jsx_runtime68.jsx)(InputBase_default, _extends({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes
  }));
});
true ? FilledInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types43.default.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: import_prop_types43.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types43.default.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: import_prop_types43.default.oneOfType([import_prop_types43.default.oneOf(["primary", "secondary"]), import_prop_types43.default.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: import_prop_types43.default.shape({
    Input: import_prop_types43.default.elementType,
    Root: import_prop_types43.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: import_prop_types43.default.shape({
    input: import_prop_types43.default.object,
    root: import_prop_types43.default.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types43.default.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: import_prop_types43.default.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: import_prop_types43.default.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: import_prop_types43.default.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: import_prop_types43.default.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types43.default.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types43.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types43.default.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: import_prop_types43.default.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: import_prop_types43.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: import_prop_types43.default.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types43.default.oneOfType([import_prop_types43.default.number, import_prop_types43.default.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: import_prop_types43.default.oneOfType([import_prop_types43.default.number, import_prop_types43.default.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: import_prop_types43.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types43.default.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types43.default.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: import_prop_types43.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types43.default.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: import_prop_types43.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types43.default.oneOfType([import_prop_types43.default.number, import_prop_types43.default.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: import_prop_types43.default.shape({
    input: import_prop_types43.default.object,
    root: import_prop_types43.default.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: import_prop_types43.default.shape({
    input: import_prop_types43.default.elementType,
    root: import_prop_types43.default.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: import_prop_types43.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types43.default.oneOfType([import_prop_types43.default.arrayOf(import_prop_types43.default.oneOfType([import_prop_types43.default.func, import_prop_types43.default.object, import_prop_types43.default.bool])), import_prop_types43.default.func, import_prop_types43.default.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: import_prop_types43.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types43.default.any
} : void 0;
FilledInput.muiName = "Input";
var FilledInput_default = FilledInput;

// node_modules/@mui/material/OutlinedInput/OutlinedInput.js
var React86 = __toESM(require_react());
var import_prop_types45 = __toESM(require_prop_types());

// node_modules/@mui/material/OutlinedInput/NotchedOutline.js
var React85 = __toESM(require_react());
var import_prop_types44 = __toESM(require_prop_types());
var import_jsx_runtime69 = __toESM(require_jsx_runtime());
var _span6;
var _excluded42 = ["children", "classes", "className", "label", "notched"];
var NotchedOutlineRoot = styled_default("fieldset")({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
});
var NotchedOutlineLegend = styled_default("legend")(({
  ownerState,
  theme
}) => _extends({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !ownerState.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: theme.transitions.create("width", {
    duration: 150,
    easing: theme.transitions.easing.easeOut
  })
}, ownerState.withLabel && _extends({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: theme.transitions.create("max-width", {
    duration: 50,
    easing: theme.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, ownerState.notched && {
  maxWidth: "100%",
  transition: theme.transitions.create("max-width", {
    duration: 100,
    easing: theme.transitions.easing.easeOut,
    delay: 50
  })
})));
function NotchedOutline(props) {
  const {
    className,
    label,
    notched
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded42);
  const withLabel = label != null && label !== "";
  const ownerState = _extends({}, props, {
    notched,
    withLabel
  });
  return (0, import_jsx_runtime69.jsx)(NotchedOutlineRoot, _extends({
    "aria-hidden": true,
    className,
    ownerState
  }, other, {
    children: (0, import_jsx_runtime69.jsx)(NotchedOutlineLegend, {
      ownerState,
      children: withLabel ? (0, import_jsx_runtime69.jsx)("span", {
        children: label
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _span6 || (_span6 = (0, import_jsx_runtime69.jsx)("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
true ? NotchedOutline.propTypes = {
  /**
   * The content of the component.
   */
  children: import_prop_types44.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types44.default.object,
  /**
   * @ignore
   */
  className: import_prop_types44.default.string,
  /**
   * The label.
   */
  label: import_prop_types44.default.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: import_prop_types44.default.bool.isRequired,
  /**
   * @ignore
   */
  style: import_prop_types44.default.object
} : void 0;

// node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js
function getOutlinedInputUtilityClass(slot) {
  return generateUtilityClass("MuiOutlinedInput", slot);
}
var outlinedInputClasses = _extends({}, inputBaseClasses_default, generateUtilityClasses("MuiOutlinedInput", ["root", "notchedOutline", "input"]));
var outlinedInputClasses_default = outlinedInputClasses;

// node_modules/@mui/material/OutlinedInput/OutlinedInput.js
var import_jsx_runtime70 = __toESM(require_jsx_runtime());
var import_jsx_runtime71 = __toESM(require_jsx_runtime());
var _excluded43 = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"];
var useUtilityClasses33 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getOutlinedInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var OutlinedInputRoot = styled_default(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(({
  theme,
  ownerState
}) => {
  const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return _extends({
    position: "relative",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    [`&:hover .${outlinedInputClasses_default.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${outlinedInputClasses_default.notchedOutline}`]: {
        borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
      }
    },
    [`&.${outlinedInputClasses_default.focused} .${outlinedInputClasses_default.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette[ownerState.color].main,
      borderWidth: 2
    },
    [`&.${outlinedInputClasses_default.error} .${outlinedInputClasses_default.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.error.main
    },
    [`&.${outlinedInputClasses_default.disabled} .${outlinedInputClasses_default.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.action.disabled
    }
  }, ownerState.startAdornment && {
    paddingLeft: 14
  }, ownerState.endAdornment && {
    paddingRight: 14
  }, ownerState.multiline && _extends({
    padding: "16.5px 14px"
  }, ownerState.size === "small" && {
    padding: "8.5px 14px"
  }));
});
var NotchedOutlineRoot2 = styled_default(NotchedOutline, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (props, styles4) => styles4.notchedOutline
})(({
  theme
}) => {
  const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
  };
});
var OutlinedInputInput = styled_default(InputBaseComponent, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => _extends({
  padding: "16.5px 14px"
}, !theme.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
    caretColor: theme.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, theme.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [theme.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, ownerState.size === "small" && {
  padding: "8.5px 14px"
}, ownerState.multiline && {
  padding: 0
}, ownerState.startAdornment && {
  paddingLeft: 0
}, ownerState.endAdornment && {
  paddingRight: 0
}));
var OutlinedInput = React86.forwardRef(function OutlinedInput2(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input, _React$Fragment;
  const props = useThemeProps({
    props: inProps,
    name: "MuiOutlinedInput"
  });
  const {
    components = {},
    fullWidth = false,
    inputComponent = "input",
    label,
    multiline = false,
    notched,
    slots = {},
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded43);
  const classes = useUtilityClasses33(props);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  });
  const ownerState = _extends({}, props, {
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    type
  });
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : OutlinedInputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : OutlinedInputInput;
  return (0, import_jsx_runtime71.jsx)(InputBase_default, _extends({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    renderSuffix: (state) => (0, import_jsx_runtime71.jsx)(NotchedOutlineRoot2, {
      ownerState,
      className: classes.notchedOutline,
      label: label != null && label !== "" && fcs.required ? _React$Fragment || (_React$Fragment = (0, import_jsx_runtime70.jsxs)(React86.Fragment, {
        children: [label, " ", "*"]
      })) : label,
      notched: typeof notched !== "undefined" ? notched : Boolean(state.startAdornment || state.filled || state.focused)
    }),
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes: _extends({}, classes, {
      notchedOutline: null
    })
  }));
});
true ? OutlinedInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types45.default.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: import_prop_types45.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types45.default.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: import_prop_types45.default.oneOfType([import_prop_types45.default.oneOf(["primary", "secondary"]), import_prop_types45.default.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: import_prop_types45.default.shape({
    Input: import_prop_types45.default.elementType,
    Root: import_prop_types45.default.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types45.default.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: import_prop_types45.default.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: import_prop_types45.default.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: import_prop_types45.default.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types45.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types45.default.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: import_prop_types45.default.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: import_prop_types45.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: import_prop_types45.default.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: import_prop_types45.default.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types45.default.oneOfType([import_prop_types45.default.number, import_prop_types45.default.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: import_prop_types45.default.oneOfType([import_prop_types45.default.number, import_prop_types45.default.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: import_prop_types45.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types45.default.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: import_prop_types45.default.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types45.default.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: import_prop_types45.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types45.default.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: import_prop_types45.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types45.default.oneOfType([import_prop_types45.default.number, import_prop_types45.default.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: import_prop_types45.default.shape({
    input: import_prop_types45.default.elementType,
    root: import_prop_types45.default.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: import_prop_types45.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types45.default.oneOfType([import_prop_types45.default.arrayOf(import_prop_types45.default.oneOfType([import_prop_types45.default.func, import_prop_types45.default.object, import_prop_types45.default.bool])), import_prop_types45.default.func, import_prop_types45.default.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: import_prop_types45.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types45.default.any
} : void 0;
OutlinedInput.muiName = "Input";
var OutlinedInput_default = OutlinedInput;

// node_modules/@mui/material/Select/Select.js
var import_jsx_runtime72 = __toESM(require_jsx_runtime());
var _excluded44 = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"];
var useUtilityClasses34 = (ownerState) => {
  const {
    classes
  } = ownerState;
  return classes;
};
var styledRootConfig = {
  name: "MuiSelect",
  overridesResolver: (props, styles4) => styles4.root,
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) && prop !== "variant",
  slot: "Root"
};
var StyledInput = styled_default(Input_default, styledRootConfig)("");
var StyledOutlinedInput = styled_default(OutlinedInput_default, styledRootConfig)("");
var StyledFilledInput = styled_default(FilledInput_default, styledRootConfig)("");
var Select3 = React87.forwardRef(function Select4(inProps, ref) {
  const props = useThemeProps({
    name: "MuiSelect",
    props: inProps
  });
  const {
    autoWidth = false,
    children,
    classes: classesProp = {},
    className,
    defaultOpen = false,
    displayEmpty = false,
    IconComponent = ArrowDropDown_default,
    id,
    input,
    inputProps,
    label,
    labelId,
    MenuProps,
    multiple = false,
    native = false,
    onClose,
    onOpen,
    open,
    renderValue,
    SelectDisplayProps,
    variant: variantProp = "outlined"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded44);
  const inputComponent = native ? NativeSelectInput_default : SelectInput_default;
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "error"]
  });
  const variant = fcs.variant || variantProp;
  const ownerState = _extends({}, props, {
    variant,
    classes: classesProp
  });
  const classes = useUtilityClasses34(ownerState);
  const InputComponent = input || {
    standard: (0, import_jsx_runtime72.jsx)(StyledInput, {
      ownerState
    }),
    outlined: (0, import_jsx_runtime72.jsx)(StyledOutlinedInput, {
      label,
      ownerState
    }),
    filled: (0, import_jsx_runtime72.jsx)(StyledFilledInput, {
      ownerState
    })
  }[variant];
  const inputComponentRef = useForkRef_default(ref, InputComponent.ref);
  return (0, import_jsx_runtime72.jsx)(React87.Fragment, {
    children: React87.cloneElement(InputComponent, _extends({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent,
      inputProps: _extends({
        children,
        error: fcs.error,
        IconComponent,
        variant,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple
      }, native ? {
        id
      } : {
        autoWidth,
        defaultOpen,
        displayEmpty,
        labelId,
        MenuProps,
        onClose,
        onOpen,
        open,
        renderValue,
        SelectDisplayProps: _extends({
          id
        }, SelectDisplayProps)
      }, inputProps, {
        classes: inputProps ? deepmerge(classes, inputProps.classes) : classes
      }, input ? input.props.inputProps : {})
    }, multiple && native && variant === "outlined" ? {
      notched: true
    } : {}, {
      ref: inputComponentRef,
      className: clsx_default(InputComponent.props.className, className)
    }, !input && {
      variant
    }, other))
  });
});
true ? Select3.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: import_prop_types46.default.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: import_prop_types46.default.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: import_prop_types46.default.object,
  /**
   * @ignore
   */
  className: import_prop_types46.default.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: import_prop_types46.default.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types46.default.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: import_prop_types46.default.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: import_prop_types46.default.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: import_prop_types46.default.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: import_prop_types46.default.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: import_prop_types46.default.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: import_prop_types46.default.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: import_prop_types46.default.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: import_prop_types46.default.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: import_prop_types46.default.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: import_prop_types46.default.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: import_prop_types46.default.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: import_prop_types46.default.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: import_prop_types46.default.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: import_prop_types46.default.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: import_prop_types46.default.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: import_prop_types46.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types46.default.oneOfType([import_prop_types46.default.arrayOf(import_prop_types46.default.oneOfType([import_prop_types46.default.func, import_prop_types46.default.object, import_prop_types46.default.bool])), import_prop_types46.default.func, import_prop_types46.default.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: import_prop_types46.default.oneOfType([import_prop_types46.default.oneOf([""]), import_prop_types46.default.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types46.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
Select3.muiName = "Select";
var Select_default = Select3;
export {
  Select_default as default,
  getSelectUtilityClasses,
  selectClasses_default as selectClasses
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@mui/base/index.js:
  (**
   * @mui/base v5.0.0-beta.10
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=@mui_material_Select.js.map
