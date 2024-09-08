(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Регистрация как анонимного модуля.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node.js. Используем CommonJS.
    module.exports = factory();
  } else {
    // Глобальная переменная для браузеров без модульного загрузчика.
    root.math = factory();
  }
})(this, function () {
  return {
    add: function (a, b) {
      return a + b;
    },
  };
});
