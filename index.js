const Benchmark = require('benchmark');
const { bubbleSort } = require('./sort');

const numbers = [];
for (let i = 1; i <= 50000; i++) {
  numbers.push(i);
}

const suite = new Benchmark.Suite;

suite
  .add('bubble sort', function() {
    const testArray = [...numbers];
    bubbleSort(testArray);
  })
  .on('complete', function() {
    this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
  })
  .run();

  const { quickSort } = require('./sort');
const numbers = [54, 8, 87, 88, 100, 98, 17, 72, 67, 42, 40, 34, 55, 18, 33, 94, 59, 68, 92, 2];

console.log(quickSort(numbers));

suite
  .add('bubble sort', function() {
    const testArray = [...numbers];

    bubbleSort(testArray);
  })
  .add('quick sort', function() {
    const testArray = [...numbers];

    quickSort(testArray);
  })
  .on('complete', function() {
    this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
  })
  .run();

  const numbers = [];
for (let i = 0; i < 40000; i++) {
  numbers.push(Math.floor(Math.random() * 10000) + 1);
}

const suite = new Benchmark.Suite;

suite
  .add('quick sort', function() {
    const testArray = [...numbers];

    quickSort(testArray);
  })
  .add('js sort', function() {
    const testArray = [...numbers];

    // benchmark the built-in sort method
    testArray.sort((a, b) => {
      return a - b;
    });
  })
  .on('complete', function() {
    this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
  })
  .run();