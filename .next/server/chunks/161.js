exports.id = 161;
exports.ids = [161];
exports.modules = {

/***/ 9161:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ProductPage; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(9875);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
;// CONCATENATED MODULE: ./components/Products.js


 // turn text into a graphql query


const ALL_PRODUCTS_QUERY = (external_graphql_tag_default())`
allProducts{
  id 
  name 
  price 
  description
  photo {
    id
    image{
      publicUrlTransformed
    }
    
  }
}

`;
function Products() {
  // usequery is a hook
  const {
    data,
    error,
    loading
  } = useQuery(ALL_PRODUCTS_QUERY);
  console.log(data, error, loading);
  if (loading) return /*#__PURE__*/_jsx("p", {
    children: "Loading..."
  });
  if (error) return /*#__PURE__*/_jsxs("p", {
    children: ["error!! ", error.message]
  });
  return /*#__PURE__*/_jsx("div", {
    children: /*#__PURE__*/_jsx("p", {
      children: "This is our product"
    })
  });
}
;// CONCATENATED MODULE: ./pages/product.js


function ProductPage() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "This is product page"
    })
  });
}

/***/ })

};
;