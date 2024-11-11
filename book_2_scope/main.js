// @ts-nocheck

function sortNаmesByLength(names) {
  var buckets = [];

  for (let firstName of names) {
    if (buckets[firstName.length] == null) {
      buckets[firstName.length] = [];
    }
    buckets[firstName.length].push(firstName);
  }

  {
    // блок1 для сужения области видимости
    let sortedNames1 = [];
    for (let bucket of buckets) {
      if (bucket) {
        // каждый массив сортируется по алфавиту
        bucket.sort();
        // присоединить отсортированные имена
        // к текущему списку
        sortedNames1 = [...sortedNames1, ...bucket];
      }
    }
  }

  {
    // блок2 для сужения области видимости
    let sortedNames2 = [];
    for (let bucket of buckets) {
      if (bucket) {
        // каждый массив сортируется по алфавиту
        bucket.sort();
        // присоединить отсортированные имена
        // к текущему списку
        sortedNames1 = [...sortedNames, ...bucket];
      }
    }
  }

  return [sortedNames1, sortedNames2];
}

sortNamesByLength(['Sally', 'Suzy', 'Frank', 'John', 'Jennifer', 'Scott']);
// [ "John", "Suzy", "Frank", "Sally", "Scott", "Jennifer" ]

try {
  let someCosnt;
  const someConst2 = 213;
} catch {
  someConst2;
}
