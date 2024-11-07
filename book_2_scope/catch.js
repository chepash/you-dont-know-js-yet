// @ts-nocheck

try {
  doesntExist();
} catch (err) {
  console.log(err);
  // ReferenceError: 'doesntExist' is not defined
  // ^^^^ сообщение, выводимое для перехваченного исключения

  let onlyHere = true;
  var outerVariable = true;
}

console.log(outerVariable); // true

console.log(err);
// ReferenceError: 'err' is not defined
// ^^^^ другое (неперехваченное) исключение

try {
  doOptionOne();
} catch {
  // Объявление catch опущено
  doOptionTwoInstead();
}
