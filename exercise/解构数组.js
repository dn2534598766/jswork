let a = 8, b = 6;
(() => {
  "use strict";
  // 在这行以下修改代码
  [b,a]=[a,b]
  // 在这行以上修改代码
})();
console.log(a); // 应该等于 6
console.log(b); // 应该等于 8