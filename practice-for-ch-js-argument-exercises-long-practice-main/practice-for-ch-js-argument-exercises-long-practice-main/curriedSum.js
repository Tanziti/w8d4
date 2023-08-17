function curriedSum(numArgs) {
  let numbers = []

  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((acc, el) => acc + el);
    } else {
      return _curriedSum;
    };
  };
};

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56
 