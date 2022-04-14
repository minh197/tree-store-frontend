(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8786:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: external "nprogress"
var external_nprogress_namespaceObject = require("nprogress");;
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
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
;// CONCATENATED MODULE: external "@apollo/link-error"
var link_error_namespaceObject = require("@apollo/link-error");;
;// CONCATENATED MODULE: external "@apollo/react-ssr"
var react_ssr_namespaceObject = require("@apollo/react-ssr");;
;// CONCATENATED MODULE: external "apollo-upload-client"
var external_apollo_upload_client_namespaceObject = require("apollo-upload-client");;
;// CONCATENATED MODULE: external "next-with-apollo"
var external_next_with_apollo_namespaceObject = require("next-with-apollo");;
var external_next_with_apollo_default = /*#__PURE__*/__webpack_require__.n(external_next_with_apollo_namespaceObject);
;// CONCATENATED MODULE: ./config.js
const endpoint = (/* unused pure expression or super */ null && (`http://localhost:3001/api/graphql`));
const prodEndpoint = `https://sick-fits-2ybvv.ondigitalocean.app/backend/admin/api`;
const perPage = 4;
;// CONCATENATED MODULE: ./lib/withData.js





 // import paginationField from './paginationField';

function createClient({
  headers,
  initialState
}) {
  return new client_.ApolloClient({
    link: client_.ApolloLink.from([(0,link_error_namespaceObject.onError)(({
      graphQLErrors,
      networkError
    }) => {
      if (graphQLErrors) graphQLErrors.forEach(({
        message,
        locations,
        path
      }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
      if (networkError) console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`);
    }), // this uses apollo-link-http under the hood, so all the options here come from that package
    (0,external_apollo_upload_client_namespaceObject.createUploadLink)({
      uri:  false ? 0 : prodEndpoint,
      fetchOptions: {
        // whenever it goes off and fetches the data from our
        // graphql endpoints should it sends the cookies along for the ride?
        // the ans is yes, because we want to see if the user is logged in
        // or not
        credentials: 'include'
      },
      // pass the headers along from this request. This enables SSR with logged in state
      headers
    })]),
    cache: new client_.InMemoryCache({
      typePolicies: {
        Query: {
          fields: {// allProducts: paginationField(),
          }
        }
      }
    }).restore(initialState || {})
  });
}

/* harmony default export */ var withData = (external_next_with_apollo_default()(createClient, {
  getDataFromTree: react_ssr_namespaceObject.getDataFromTree
})); // we use a package called with Apollo that allows us crawl all of our arch
// pages and components and look any queries that we have
// it will make sure that we have fetched and
// it will wait for all the data to be fetched before the server side
// sends the html from the server to the client
;// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/jsx-props-no-spreading */





 // When Router event starts, it starts the nprogress

router_default().events.on('routerChangeStart', () => external_nprogress_default().start()); // When Router event finishes, it starts the nprogress

router_default().events.on('routerChangeComplete', () => external_nprogress_default().done());
router_default().events.on('routerChangeError', () => external_nprogress_default().done()); // eslint-disable-next-line react/prop-types

function MyApp({
  Component,
  pageProps,
  apollo
}) {
  console.log(apollo);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    // we need to wrap our entire application in what's called a provider
    // a provider in react is a component that lives very high in our application
    // it allows all the components that are several levels deep in order
    // to access that data
    // apollo client needs a client property
    jsx_runtime_.jsx(client_.ApolloProvider, {
      client: apollo,
      children: /*#__PURE__*/jsx_runtime_.jsx(Page, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      })
    })
  );
} // we need to tell next.js that it needs to go and fetch all of the queries in all of the children components
// myApp.getinitial props is a specific nextjs thing
// this is an async function
// ctx = context
// if any of the props have a getinitalprops method on them then we will wait and fetch them


MyApp.getInitialProps = async function ({
  Component,
  ctx
}) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query; // this will allow us to get any query variables like /products/2

  return {
    pageProps
  };
}; // give me my app but inject the apollo client along inside of it


/* harmony default export */ var _app = (withData(MyApp));

/***/ }),

/***/ 8074:
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(8786); });
module.exports = __webpack_exports__;

})();