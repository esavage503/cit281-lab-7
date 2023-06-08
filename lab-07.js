// You will need to add the following programming elements to lab-07.js:

// CustomError class that inherits from Error, where the class name property is "CustomError"
// Function throwGenericError() that uses throw to create a generic Error error, with the custom message of "Generic error"
// Function throwCustomError() that uses throw to create a custom CustomError error, with the custom message of "Custom error"
// A try..catch..finally block that forces the generic error by calling throwGenericError(), with console.log() debug statements
// A try..catch..finally block that forces the custom error by calling throwCustomError(), with console.log() debug statements

class CustomError extends Error{
    constructor (param){
        super(param);
        this.name = 'CustomError'

    }
}

function throwGenericError() {
throw new Error("generic error")
}

function throwCustomError () {
    throw new CustomError("Custom Error")
}

console.log("force generic error"); 

try {
    console.log("generic error try block");
    throwGenericError()
} catch (err) {
    console.log('generic error catch block');
    console.log(`${err.name}: ${err.message}`);
} finally {
    console.log("generic error finally block");
}

//custom
console.log('force custom error');

try {
    console.log("custom error try block");
    throwCustomError()
} catch (err) {
    console.log('custom error catch block');
    console.log(`${err.name}: ${err.message}`);
} finally {
    console.log("custom error finally block");
}


