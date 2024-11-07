// @ts-nocheck

function sortNamesByLength(names) {
  var buckets = [];

  for (let firstName of names) {
    if (buckets[firstName.length] == null) {
      buckets[firstName.length] = [];
    }
    buckets[firstName.length].push(firstName);
  }

  {
    // блок для сужения области видимости
    let sortedNames = [];

    for (let bucket of buckets) {
      if (bucket) {
        // каждый массив сортируется по алфавиту
        bucket.sort();
        // присоединить отсортированные имена
        // к текущему списку
        sortedNames = [...sortedNames, ...bucket];
      }
    }

    return sortedNames;
  }
}

sortNamesByLength(['Sally', 'Suzy', 'Frank', 'John', 'Jennifer', 'Scott']);
// [ "John", "Suzy", "Frank", "Sally", "Scott", "Jennifer" ]
