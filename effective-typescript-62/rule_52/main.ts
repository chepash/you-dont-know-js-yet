// лучше инструменты вроде dtslint

// Допустим, вы написали декларацию типов для функции map, предоставленной библиотекой утилит (Lodash или Underscore):

declare function map<U, V>(array: U[], fn: (u: U) => V): V[];

//  Можно написать тестовый файл, вызывающий функцию:

map(['2017', '2018', '2019'], (v) => Number(v));

// гораздо лучше провести реальную проверку некоторых типов.

// Один из способов — присвоить результат переменной с особым типом:

const lengths: number[] = map(['john', 'paul'], (name) => name.length);

// number[] не обязателен. но здесь он имеет смысл, так как мы явно утверждаем что map преобразует данные к нужному нам формату.

//

function assertType<T>(x: T) {}

assertType<number[]>(map(['john', 'paul'], (name) => name.length));

const n = 12;
assertType<number>(n); // ok

const add = (a: number, b: number) => a + b;
assertType<(a: number, b: number) => number>(add); // ok

const double = (x: number) => 2 * x;
assertType<(a: number, b: number) => number>(double); // ok?!

// Например, разделить тип функции и протестировать его по частям,
// используя обобщенные типы Parameters и ReturnType:
// const double = (x: number) => 2 * x;
let parametrs: Parameters<typeof double> = null!;
assertType<[number, number]>(parametrs);
// ~ Аргумент типа '[number]' не может
// быть назначен параметру типа
// [number, number]'.
let result: ReturnType<typeof double> = null!;
assertType<number>(result); // ok

// Стиль наших недавних тестов map напоминал черный ящик:
// мы пропускали массив и функцию через map и тестировали итоговый тип,
// но не детали промежуточных шагов. Их можно протестировать, заполнив функцию обратного вызова
// и напрямую верифицировав типы ее параметров и this:
const beatles = ['john', 'paul', 'george', 'ringo'];
assertType<number[]>(
  map(beatles, function (name, i, array) {
    // ~~~~~~~ Аргумент типа '(name: any, i: any, array: any) => any'
    // не может быть назначен параметру типа '(u: string) => any'.
    assertType<string>(name);
    assertType<number>(i);
    assertType<string[]>(array);
    assertType<string[]>(this);
    // ~~~~ 'this' неявно имеет тип 'any'
    return name.length;
  })
);

// Вот декларация, которая проходит проверки:

declare function map<U, V>(array: U[], fn: (this: U[], u: U, i: number, array: U[]) => V): V[];

// Остается всего одна, но самая главная проблема.
// Есть завершенный файл декларации типа для нашего модуля,
// который пройдет даже самые требовательные тесты для map,
// но по качеству он хуже бесполезного:

declare module 'overbar';

const beatles = ['john', 'paul', 'george', 'ringo'];
map(
  beatles,
  function (
    name, // $ExpectType string
    i, // $ExpectType number
    array // $ExpectType string[]
  ) {
    this; // $ExpectType string[]
    return name.length;
  }
); // $ExpectType number[]
