

const formatValue = (value: string | number | boolean): string | number | boolean =>{
    if(typeof value === "string"){
        return value.toUpperCase()
    } else if(typeof value === "number"){
        return value*10;
    }else if(typeof value === "boolean"){
        return !value;
    }

    return value;
}

// Problem 2:
// Create a function getLength that accepts a value which may be a string or an array, and returns the length of the value.

// If the input is a string → return the number of characters.
// If the input is an array → return the number of elements.
// Requirements:
// You must write the correct type for the function parameter and the return type.
// You must use type checking to handle each case (typeof or Array.isArray).

const getLength = (value: string | any[])=>{
    if(typeof value === "string"){
        return value.length;
    }else if(Array.isArray(value)){
        return value.length;
    }
}

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));