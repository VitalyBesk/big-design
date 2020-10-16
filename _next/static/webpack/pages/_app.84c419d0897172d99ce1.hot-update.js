webpackHotUpdate_N_E("pages/_app",{

/***/ "../big-design/dist/es/components/Modal/Modal.js":
/*!*******************************************************!*\
  !*** ../big-design/dist/es/components/Modal/Modal.js ***!
  \*******************************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"../../node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/big-design-icons */ \"../big-design-icons/dist/es/index.js\");\n/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! focus-trap */ \"../../node_modules/focus-trap/index.js\");\n/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ \"../../node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks */ \"../big-design/dist/es/hooks/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils */ \"../big-design/dist/es/utils/index.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Button */ \"../big-design/dist/es/components/Button/index.js\");\n/* harmony import */ var _Button_private__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Button/private */ \"../big-design/dist/es/components/Button/private.js\");\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Typography */ \"../big-design/dist/es/components/Typography/index.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styled */ \"../big-design/dist/es/components/Modal/styled.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Modal = Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"typedMemo\"])(function (props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useState, 2),\n      modalContainer = _useState2[0],\n      setModalContainer = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    var container = document.createElement('div');\n    document.body.appendChild(container);\n    setModalContainer(container);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    return function () {\n      if (modalContainer) {\n        document.body.removeChild(modalContainer);\n      }\n    };\n  }, [modalContainer]);\n  return props.isOpen && modalContainer ? /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_6__[\"createPortal\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(InternalModal, props), modalContainer) : null;\n});\n\nvar InternalModal = function InternalModal(_ref) {\n  var actions = _ref.actions,\n      _ref$backdrop = _ref.backdrop,\n      backdrop = _ref$backdrop === void 0 ? true : _ref$backdrop,\n      children = _ref.children,\n      _ref$closeOnClickOuts = _ref.closeOnClickOutside,\n      closeOnClickOutside = _ref$closeOnClickOuts === void 0 ? false : _ref$closeOnClickOuts,\n      _ref$closeOnEscKey = _ref.closeOnEscKey,\n      closeOnEscKey = _ref$closeOnEscKey === void 0 ? true : _ref$closeOnEscKey,\n      header = _ref.header,\n      _ref$onClose = _ref.onClose,\n      onClose = _ref$onClose === void 0 ? function () {\n    return null;\n  } : _ref$onClose,\n      _ref$variant = _ref.variant,\n      variant = _ref$variant === void 0 ? 'modal' : _ref$variant;\n  var initialBodyOverflowYRef = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])('');\n  var internalTrap = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n  var headerUniqueId = Object(_hooks__WEBPACK_IMPORTED_MODULE_7__[\"useUniqueId\"])('modal_header');\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useState3, 2),\n      modalRef = _useState4[0],\n      setModalRef = _useState4[1];\n\n  var onClickAway = function onClickAway(event) {\n    if (closeOnClickOutside && modalRef === event.target) {\n      onClose();\n    }\n  };\n\n  var onKeyDown = function onKeyDown(event) {\n    if (closeOnEscKey && event.key === 'Escape') {\n      onClose();\n    }\n  }; // Disable scroll on body when modal is open\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    initialBodyOverflowYRef.current = document.body.style.overflowY || '';\n    document.body.style.overflowY = 'hidden';\n    return function () {\n      document.body.style.overflowY = initialBodyOverflowYRef.current;\n    };\n  }, []); // Setup focus-trap\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    if (modalRef && internalTrap.current === null) {\n      internalTrap.current = focus_trap__WEBPACK_IMPORTED_MODULE_4___default()(modalRef, {\n        fallbackFocus: modalRef\n      });\n      internalTrap.current.activate();\n    }\n\n    return function () {\n      var _internalTrap$current;\n\n      (_internalTrap$current = internalTrap.current) === null || _internalTrap$current === void 0 ? void 0 : _internalTrap$current.deactivate();\n    };\n  }, [internalTrap, modalRef]);\n  var renderedClose = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useMemo\"])(function () {\n    return variant === 'modal' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_12__[\"StyledModalClose\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Button_private__WEBPACK_IMPORTED_MODULE_10__[\"MessagingButton\"], {\n      onClick: onClose,\n      iconOnly: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"CloseIcon\"], {\n        title: \"Close\"\n      })\n    }));\n  }, [onClose, variant]);\n  var renderedHeader = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useMemo\"])(function () {\n    return header && typeof header === 'string' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_12__[\"StyledModalHeader\"], {\n      id: headerUniqueId\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_11__[\"H2\"], {\n      margin: \"none\"\n    }, header));\n  }, [header, headerUniqueId]);\n  var renderedActions = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useMemo\"])(function () {\n    return Array.isArray(actions) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_12__[\"StyledModalActions\"], {\n      justifyContent: \"flex-end\"\n    }, actions.map(function (_ref2, index) {\n      var text = _ref2.text,\n          props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, [\"text\"]);\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: index\n      }, props), text);\n    }));\n  }, [actions]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_12__[\"StyledModal\"], {\n    backdrop: backdrop,\n    onClick: onClickAway,\n    onKeyDown: onKeyDown,\n    ref: setModalRef,\n    variant: variant,\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_12__[\"StyledModalContent\"], {\n    variant: variant,\n    \"aria-labelledby\": headerUniqueId,\n    flexDirection: \"column\"\n  }, renderedClose, renderedHeader, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_12__[\"StyledModalBody\"], null, children), renderedActions));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL2JpZy1kZXNpZ24vZGlzdC9lcy9jb21wb25lbnRzL01vZGFsL01vZGFsLmpzP2I3YzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBEO0FBQ2dDO0FBQ3BCO0FBQ1o7QUFDdkI7QUFDaUM7QUFDM0I7QUFDQztBQUNGO0FBQ0w7QUFDaUI7QUFDakI7QUFDa0c7QUFDOUgsWUFBWSx3REFBUztBQUM1QixrQkFBa0Isc0RBQVE7QUFDMUIsbUJBQW1CLHdGQUFjO0FBQ2pDO0FBQ0E7O0FBRUEsRUFBRSx1REFBUztBQUNYO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLHVEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx1REFBdUQsOERBQVksZUFBZSw0Q0FBSztBQUN2RixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0Msb0RBQU07QUFDdEMscUJBQXFCLG9EQUFNO0FBQzNCLHVCQUF1QiwwREFBVzs7QUFFbEMsbUJBQW1CLHNEQUFRO0FBQzNCLG1CQUFtQix3RkFBYztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSixFQUFFLHVEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsTUFBTTs7QUFFVCxFQUFFLHVEQUFTO0FBQ1g7QUFDQSw2QkFBNkIsaURBQVM7QUFDdEM7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsc0JBQXNCLHFEQUFPO0FBQzdCLCtDQUErQyw0Q0FBSyxlQUFlLHlEQUFnQixxQkFBcUIsNENBQUssZUFBZSxnRUFBZTtBQUMzSTtBQUNBLDZCQUE2Qiw0Q0FBSyxlQUFlLHVFQUFTO0FBQzFEO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0gsdUJBQXVCLHFEQUFPO0FBQzlCLGdFQUFnRSw0Q0FBSyxlQUFlLDBEQUFpQjtBQUNyRztBQUNBLEtBQUssZUFBZSw0Q0FBSyxlQUFlLCtDQUFFO0FBQzFDO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCx3QkFBd0IscURBQU87QUFDL0Isa0RBQWtELDRDQUFLLGVBQWUsMkRBQWtCO0FBQ3hGO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLGtHQUF3Qjs7QUFFMUMsMEJBQTBCLDRDQUFLLGVBQWUsOENBQU0sRUFBRSxrRkFBUTtBQUM5RDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNILHNCQUFzQiw0Q0FBSyxlQUFlLG9EQUFXO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZUFBZSw0Q0FBSyxlQUFlLDJEQUFrQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxHQUFHLDhDQUE4Qyw0Q0FBSyxlQUFlLHdEQUFlO0FBQ3BGIiwiZmlsZSI6Ii4uL2JpZy1kZXNpZ24vZGlzdC9lcy9jb21wb25lbnRzL01vZGFsL01vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgeyBDbG9zZUljb24gfSBmcm9tICdAYmlnY29tbWVyY2UvYmlnLWRlc2lnbi1pY29ucyc7XG5pbXBvcnQgZm9jdXNUcmFwIGZyb20gJ2ZvY3VzLXRyYXAnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyB1c2VVbmlxdWVJZCB9IGZyb20gJy4uLy4uL2hvb2tzJztcbmltcG9ydCB7IHR5cGVkTWVtbyB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgeyBNZXNzYWdpbmdCdXR0b24gfSBmcm9tICcuLi9CdXR0b24vcHJpdmF0ZSc7XG5pbXBvcnQgeyBIMiB9IGZyb20gJy4uL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgU3R5bGVkTW9kYWwsIFN0eWxlZE1vZGFsQWN0aW9ucywgU3R5bGVkTW9kYWxCb2R5LCBTdHlsZWRNb2RhbENsb3NlLCBTdHlsZWRNb2RhbENvbnRlbnQsIFN0eWxlZE1vZGFsSGVhZGVyIH0gZnJvbSAnLi9zdHlsZWQnO1xuZXhwb3J0IHZhciBNb2RhbCA9IHR5cGVkTWVtbyhmdW5jdGlvbiAocHJvcHMpIHtcbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKG51bGwpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBtb2RhbENvbnRhaW5lciA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRNb2RhbENvbnRhaW5lciA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIHNldE1vZGFsQ29udGFpbmVyKGNvbnRhaW5lcik7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1vZGFsQ29udGFpbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWxDb250YWluZXIpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFttb2RhbENvbnRhaW5lcl0pO1xuICByZXR1cm4gcHJvcHMuaXNPcGVuICYmIG1vZGFsQ29udGFpbmVyID8gLyojX19QVVJFX18qL2NyZWF0ZVBvcnRhbCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW50ZXJuYWxNb2RhbCwgcHJvcHMpLCBtb2RhbENvbnRhaW5lcikgOiBudWxsO1xufSk7XG5cbnZhciBJbnRlcm5hbE1vZGFsID0gZnVuY3Rpb24gSW50ZXJuYWxNb2RhbChfcmVmKSB7XG4gIHZhciBhY3Rpb25zID0gX3JlZi5hY3Rpb25zLFxuICAgICAgX3JlZiRiYWNrZHJvcCA9IF9yZWYuYmFja2Ryb3AsXG4gICAgICBiYWNrZHJvcCA9IF9yZWYkYmFja2Ryb3AgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGJhY2tkcm9wLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgX3JlZiRjbG9zZU9uQ2xpY2tPdXRzID0gX3JlZi5jbG9zZU9uQ2xpY2tPdXRzaWRlLFxuICAgICAgY2xvc2VPbkNsaWNrT3V0c2lkZSA9IF9yZWYkY2xvc2VPbkNsaWNrT3V0cyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGNsb3NlT25DbGlja091dHMsXG4gICAgICBfcmVmJGNsb3NlT25Fc2NLZXkgPSBfcmVmLmNsb3NlT25Fc2NLZXksXG4gICAgICBjbG9zZU9uRXNjS2V5ID0gX3JlZiRjbG9zZU9uRXNjS2V5ID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRjbG9zZU9uRXNjS2V5LFxuICAgICAgaGVhZGVyID0gX3JlZi5oZWFkZXIsXG4gICAgICBfcmVmJG9uQ2xvc2UgPSBfcmVmLm9uQ2xvc2UsXG4gICAgICBvbkNsb3NlID0gX3JlZiRvbkNsb3NlID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gOiBfcmVmJG9uQ2xvc2UsXG4gICAgICBfcmVmJHZhcmlhbnQgPSBfcmVmLnZhcmlhbnQsXG4gICAgICB2YXJpYW50ID0gX3JlZiR2YXJpYW50ID09PSB2b2lkIDAgPyAnbW9kYWwnIDogX3JlZiR2YXJpYW50O1xuICB2YXIgaW5pdGlhbEJvZHlPdmVyZmxvd1lSZWYgPSB1c2VSZWYoJycpO1xuICB2YXIgaW50ZXJuYWxUcmFwID0gdXNlUmVmKG51bGwpO1xuICB2YXIgaGVhZGVyVW5pcXVlSWQgPSB1c2VVbmlxdWVJZCgnbW9kYWxfaGVhZGVyJyk7XG5cbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZShudWxsKSxcbiAgICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICAgIG1vZGFsUmVmID0gX3VzZVN0YXRlNFswXSxcbiAgICAgIHNldE1vZGFsUmVmID0gX3VzZVN0YXRlNFsxXTtcblxuICB2YXIgb25DbGlja0F3YXkgPSBmdW5jdGlvbiBvbkNsaWNrQXdheShldmVudCkge1xuICAgIGlmIChjbG9zZU9uQ2xpY2tPdXRzaWRlICYmIG1vZGFsUmVmID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgIG9uQ2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIG9uS2V5RG93biA9IGZ1bmN0aW9uIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmIChjbG9zZU9uRXNjS2V5ICYmIGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIG9uQ2xvc2UoKTtcbiAgICB9XG4gIH07IC8vIERpc2FibGUgc2Nyb2xsIG9uIGJvZHkgd2hlbiBtb2RhbCBpcyBvcGVuXG5cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGluaXRpYWxCb2R5T3ZlcmZsb3dZUmVmLmN1cnJlbnQgPSBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSB8fCAnJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9IGluaXRpYWxCb2R5T3ZlcmZsb3dZUmVmLmN1cnJlbnQ7XG4gICAgfTtcbiAgfSwgW10pOyAvLyBTZXR1cCBmb2N1cy10cmFwXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobW9kYWxSZWYgJiYgaW50ZXJuYWxUcmFwLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgIGludGVybmFsVHJhcC5jdXJyZW50ID0gZm9jdXNUcmFwKG1vZGFsUmVmLCB7XG4gICAgICAgIGZhbGxiYWNrRm9jdXM6IG1vZGFsUmVmXG4gICAgICB9KTtcbiAgICAgIGludGVybmFsVHJhcC5jdXJyZW50LmFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfaW50ZXJuYWxUcmFwJGN1cnJlbnQ7XG5cbiAgICAgIChfaW50ZXJuYWxUcmFwJGN1cnJlbnQgPSBpbnRlcm5hbFRyYXAuY3VycmVudCkgPT09IG51bGwgfHwgX2ludGVybmFsVHJhcCRjdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaW50ZXJuYWxUcmFwJGN1cnJlbnQuZGVhY3RpdmF0ZSgpO1xuICAgIH07XG4gIH0sIFtpbnRlcm5hbFRyYXAsIG1vZGFsUmVmXSk7XG4gIHZhciByZW5kZXJlZENsb3NlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHZhcmlhbnQgPT09ICdtb2RhbCcgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkTW9kYWxDbG9zZSwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVzc2FnaW5nQnV0dG9uLCB7XG4gICAgICBvbkNsaWNrOiBvbkNsb3NlLFxuICAgICAgaWNvbk9ubHk6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENsb3NlSWNvbiwge1xuICAgICAgICB0aXRsZTogXCJDbG9zZVwiXG4gICAgICB9KVxuICAgIH0pKTtcbiAgfSwgW29uQ2xvc2UsIHZhcmlhbnRdKTtcbiAgdmFyIHJlbmRlcmVkSGVhZGVyID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGhlYWRlciAmJiB0eXBlb2YgaGVhZGVyID09PSAnc3RyaW5nJyAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRNb2RhbEhlYWRlciwge1xuICAgICAgaWQ6IGhlYWRlclVuaXF1ZUlkXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSDIsIHtcbiAgICAgIG1hcmdpbjogXCJub25lXCJcbiAgICB9LCBoZWFkZXIpKTtcbiAgfSwgW2hlYWRlciwgaGVhZGVyVW5pcXVlSWRdKTtcbiAgdmFyIHJlbmRlcmVkQWN0aW9ucyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFjdGlvbnMpICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZE1vZGFsQWN0aW9ucywge1xuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIlxuICAgIH0sIGFjdGlvbnMubWFwKGZ1bmN0aW9uIChfcmVmMiwgaW5kZXgpIHtcbiAgICAgIHZhciB0ZXh0ID0gX3JlZjIudGV4dCxcbiAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMiwgW1widGV4dFwiXSk7XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIF9leHRlbmRzKHtcbiAgICAgICAga2V5OiBpbmRleFxuICAgICAgfSwgcHJvcHMpLCB0ZXh0KTtcbiAgICB9KSk7XG4gIH0sIFthY3Rpb25zXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRNb2RhbCwge1xuICAgIGJhY2tkcm9wOiBiYWNrZHJvcCxcbiAgICBvbkNsaWNrOiBvbkNsaWNrQXdheSxcbiAgICBvbktleURvd246IG9uS2V5RG93bixcbiAgICByZWY6IHNldE1vZGFsUmVmLFxuICAgIHZhcmlhbnQ6IHZhcmlhbnQsXG4gICAgdGFiSW5kZXg6IC0xXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZE1vZGFsQ29udGVudCwge1xuICAgIHZhcmlhbnQ6IHZhcmlhbnQsXG4gICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogaGVhZGVyVW5pcXVlSWQsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIlxuICB9LCByZW5kZXJlZENsb3NlLCByZW5kZXJlZEhlYWRlciwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkTW9kYWxCb2R5LCBudWxsLCBjaGlsZHJlbiksIHJlbmRlcmVkQWN0aW9ucykpO1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../big-design/dist/es/components/Modal/Modal.js\n");

/***/ })

})