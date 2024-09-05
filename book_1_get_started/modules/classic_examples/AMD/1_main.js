require.config({
  paths: {
    math: './math.js', // Указываем путь к math.js
  },
});

require(['./math.js'], function (math) {
  console.log(math.add(2, 3)); // 5
});
