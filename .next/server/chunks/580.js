exports.id = 580;
exports.ids = [580];
exports.modules = {

/***/ 368:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Nav.js



function Nav() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/products",
      children: "Products"
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/sell",
      children: "Sell"
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/orders",
      children: "Orders"
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/account",
      children: "Account"
    })]
  });
}
;// CONCATENATED MODULE: ./components/Header.js




 // the benefit os putting styles on root is that you could reuse css inside a stand
// alone svg item

const Logo = external_styled_components_default().h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-11lejiy-0"
})(["font-size:4rem;margin-left:2rem;position:relative;z-index:4;background:green;transform:skew(-8deg);a{color:white;text-decoration:none;text-transform:uppercase;padding:0.5rem 1 rem;}"]);
const HeaderStyles = external_styled_components_default().header.withConfig({
  displayName: "Header__HeaderStyles",
  componentId: "sc-11lejiy-1"
})([".bar{border-bottom:10px solid var(--black,black);display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:center;}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid var(--black,black);}"]);
function Header() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderStyles, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bar",
      children: /*#__PURE__*/jsx_runtime_.jsx(Logo, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: "Cool-Trees"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "sub-bar",
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Search"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Nav, {})]
  });
} // Next.Js uses the combination os HTML5 pushstate which is changing the URL as well
// the ability to trigger and rerender pages when that URL has changed. So
// instead of using a hrefs in here, what we use is we use the Next.js capital Link tag
// we will write our CSS using scoped CSS. The package that I am using is styled-components
// The idea behind scoped CSS is that you define all of your CSS in component as well
// A couple of benefits for this this approach:
// First we gonna be abl to scope our CSS easily
// Second you can use JS value inside of your CSS
// For the logo, what we gonna do is we gonna create an h1 component with the styles
// already attached to it. And then that will immediately scope all of the syles to the h1 tag
;// CONCATENATED MODULE: ./components/Page.js




const GlobalStyles = (0,external_styled_components_.createGlobalStyle)(["@font-face{font-family:'radnika_next';src:url('/public/radnikanext-medium-webfont.woff2') format('woff2');font-weight:normal;font-style:normal;}html{--red:#ff0000;--black:#393939;--grey:#3A3A3A;--gray:var(--grey);--lightGrey:#e1e1e1;--lightGray:var(--lightGrey);--offWhite:#ededed;--maxWidth:1000px;--bs:0 12px 24px 0 rgba(0,0,0,0.09);box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}body{font-family:'radnika_next',--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;padding:0;margin:0;font-size:1.5rem;line-height:2;}a{text-decoration:none;color:var(---black);}a:hover{text-decoration:underline;}button{font-family:'radnika_next',--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',}"]);
const InnerStyle = external_styled_components_default().div.withConfig({
  displayName: "Page__InnerStyle",
  componentId: "sc-biinjw-0"
})(["max-width:var(--maxWidth);margin:0 auto;padding:2rem;"]);
function Page({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(GlobalStyles, {}), /*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx(InnerStyle, {
      children: children
    })]
  });
}

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;