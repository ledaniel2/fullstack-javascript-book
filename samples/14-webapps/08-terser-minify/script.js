import Terser from 'terser';

let code = {
  "file1.js": "function add(first, second) { return first + second; }"
};

let options = {
  mangle: {
    toplevel: true,
  },
};

let result = Terser.minify(code, options);
console.log(result.code);  // 'function n(n,r){return n+r}'
