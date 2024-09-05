// in browser
require(['math'], function (math) {
  console.log(math.add(2, 3)); // 5
}

// in node
const math = require('./0_math.js');
console.log(math.add(2, 3)); // 5