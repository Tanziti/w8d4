function sum(arg1) {
    result = [];

    for (let i =0; i<arguments.length; i++){
        result.push(arguments[i]);
    }

    const initialValue = 0;
    let sumAll = result.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    return sumAll;
};

console.log(sum(1, 2, 3));