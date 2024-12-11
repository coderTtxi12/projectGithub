
function calculator(a, b, callback) {

    return callback(a, b);

}

function sum(a, b) {

    return a + b;
}

function multiply(a, b) {
    return a * b;
}


function devide(a, b) {
    return a / b;
}


function module(a, b) {
    return a % b;
}

function substraction(a, b) {
    return a - b;

}


try {

    console.log(calculator(4, 5, devide));

} catch (error) {
    console.error(error);
}


function calculatorCallback(a, b, type, calllback) {

    var data = {
        function: type,
        result: (a + b)
    }


    if (type === 'sum') {


        setTimeout(() => {

            calllback(data);


        }, 5000);


    }
}


calculatorCallback(1, 4, 'sum', (d) => {



    console.log(d.result);

    console.log(d.function);

})



// class Calculator {

//     constructor(operation, a, b) {

//         if (!operation) {

//             throw new Error();

//         }

//         this._a = a;
//         this._b = b;
//         this._operation = operation;

//         operation();

//     }


//     sum() {

//         return this._a + this._b;

//     }

//     multiply() {

//         return this._a * this._b;
//     }


// }


// try{

//     let myCalculator = new Calculator(sum, 4, 5);
//     console.log(myCalculator);

// }catch(error){

//     console.error(error);
// }





function dice() {

    let dice = Math.random(0, 6);

    return Math.floor(dice * 6) + 1;

}






console.log(dice());





