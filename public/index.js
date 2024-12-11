
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








function Coin(material, country) {

    this.material = material;
    this.country = country;

    this.flip = function () {

        let coin =
            Math.floor(Math.random(0, 1) * 2);

        let result = 'Try again, an error occurred';

        if (coin === 0) {

            result = 'aguila';


        } else if (coin === 1) {

            result = 'sol';

        }

        return result;

    }

}


let myCoin = new Coin('gold', 'mx');

console.log('The result is: ' + myCoin.flip());





class MyCoinFromMexico {


    constructor(material, country) {

        if (!country || !material) {

            throw new Error('Material or Country Cannor be Empty');
        }
        this._material = material;
        this._country = country;
    }


    flip() {

        let coin = Math.floor((Math.random(0, 1) * 2));

        let result = '';
        if (coin == 0) {
            result = 'Aguila';
        } else if (coin === 1) {

            result = 'Sol';

        }


        return result;
    }

    get material() {
        return this._material;
    }

    get country() {
        return this._country;
    }

    set material(value) {

        this._material = value;
    }

    set country(value) {

        this._country = value;
    }
}



var myGoldCoin = new MyCoinFromMexico('Gold', 'Mexico');

console.log('The result of this coin is: ' + myGoldCoin.flip());







