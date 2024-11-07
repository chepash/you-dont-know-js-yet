// @ts-nocheck
function diff(x, y) {
  var tmp;

  if (x > y) {
    tmp = x;
    x = y;
    y = tmp;
  }

  return y - x;
}

function diff(x, y) {
  if (x > y) {
    // `tmp` по-прежнему имеет функциональную область
    // видимости,но ее размещение здесь является
    // семантическим сигналом о блоковой области видимости
    var tmp = x;
    x = y;
    y = tmp;
  }

  return y - x;
}

for (var i = 0; i < 5; i++) {
  // ...
}

for (let i = 0; i < 5; i++) {
  // ...
}

for (var i = 0; i < 5; i++) {
  if (checkValue(i)) {
    break;
  }
}

if (i < 5) {
  console.log('The loop stopped early!');
}

var lastI;

for (let i = 0; i < 5; i++) {
  lastI = i;

  if (checkValue(i)) {
    break;
  }

  if (lastI < 5) {
    console.log('The loop stopped early!');
  }
}
