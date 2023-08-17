function sum(arg1) {
    result = [];

    for (let i =0; i<arguments.length; i++){
        result.push(arguments[i]);
    }

    const initialValue = 0;
    let sumAll = result.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    return sumAll;
};




function sum2(...args){


    const initialValue = 0;
    let sumAll = args.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    return sumAll;

}


function sum3(...args){


    const initialValue = 0;
    let sumAll = args.reduce(function(accumulator, currentValue) {
      return  accumulator + currentValue}, initialValue);
    return sumAll;

}

console.log(sum3(1, 2, 3, 4, 5));



