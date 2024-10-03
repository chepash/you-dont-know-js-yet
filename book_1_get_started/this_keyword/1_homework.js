function classroom(teacher) {
  return function study() {
    console.log(`${teacher} says to study ${this.topic}`);
  };
}
var assignment = classroom('Kyle');

Пример: var homework = {
  topic: 'JS',
  assignment: assignment,
};

homework.assignment();
