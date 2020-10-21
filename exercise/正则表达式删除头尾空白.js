let hello = "   Hello, World!  ";
let wsRegex = /(\s)+Hello, World!(\s)*/; // 修改这一行
let result = hello.match(wsRegex); // 修改这一行
console.log(result)