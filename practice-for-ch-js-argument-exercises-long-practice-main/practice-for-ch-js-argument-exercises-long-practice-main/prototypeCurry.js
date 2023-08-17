Function.prototype.curry = function (numArgs) {
  let that = this;
    let callArgs = [];
  return function _curried(arg){
    callArgs.push(arg);
    if (callArgs.length === numArgs){
      return that.apply(null, callArgs);
    } else {
      return _curried;
    }
  } 
}



Function.prototype.curry2 = function (numArgs){
  let that = this
  let collectedArgs =[]
  return function _curried(...args){
    collectedArgs = collectedArgs.concat(args)
    if (collectedArgs.length >= numArgs ){
      return that.apply(null, collectedArgs)
    } else {
      return _curried;
    }
  }
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = add.curry2(3);
console.log(curriedAdd(1)(2)(3)); // Output: 6