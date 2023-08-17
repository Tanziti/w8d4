class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}


// Function.prototype.myBind = function (ctx) {
//   let that  = this;
//   let result = []; 
//   for (let i = 0; i < arguments.length; i++){
//     result.push(arguments[i]);

//   }
//   return function() {
//     return that.apply(ctx, result.slice(1))
//   }


// }

Function.prototype.myBind = function (ctx) {
    let that  = this;
    let result = []; 
    for (let i = 0; i < arguments.length; i++){
      result.push(arguments[i]);
  
    }
    return function(callArgs) {
      let allArgs = result.concat(callArgs)
      return that.apply(ctx, allArgs.slice(1))
    }

  }


Function.prototype.myBind2 = function (ctx, ...bindArgs) {
  let that = this;
  
  return function (...callArgs) {
    let args = bindArgs.concat(callArgs)
    return that.apply(ctx, args);
  };

};





const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

console.log(markov.says.myBind2(pavlov, "meow", "Kush")());
console.log(markov.says.myBind2(pavlov)("meow", "a tree"));
console.log(markov.says.myBind2(pavlov, "meow")("Markov"));

const notMarkovSays = markov.says.myBind2(pavlov);
console.log(notMarkovSays("meow", "me"));