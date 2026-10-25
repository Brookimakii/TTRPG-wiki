// Test environment setup (Jest 27 + jsdom, via react-scripts).
// No extra dependency: jsdom lacks structuredClone, and the app extends String.prototype in src/index.js.
global.IS_REACT_ACT_ENVIRONMENT = true;

// react-router v7 / react-dom/server need these and jsdom does not provide them.
const {TextEncoder, TextDecoder} = require("util");
global.TextEncoder = global.TextEncoder || TextEncoder;
global.TextDecoder = global.TextDecoder || TextDecoder;

if (typeof global.structuredClone !== "function") {
  global.structuredClone = (value) => JSON.parse(JSON.stringify(value));
}

String.prototype.toUrlified = String.prototype.toUrlified || function () {
  return encodeURIComponent(this.toLowerCase()).toLowerCase();
};
