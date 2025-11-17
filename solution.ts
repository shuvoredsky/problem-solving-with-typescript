

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



const getLength = (value: string | any[])=>{
    if(typeof value === "string"){
        return value.length;
    }else if(Array.isArray(value)){
        return value.length;
    }
}


class Person  {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getDetails(): string{
        return `Name: ${this.name}, Age:${this.age}`;
    } 
}

// Create a function filterByRating that accepts an array of items, where each item has the following properties:

// title (string)
// rating (number between 0 and 5)
// The function should return a new array containing only the items with a rating of 4 or more.

// Requirements:
// You must write the correct type for the function parameter and the return type.
// Do not mutate the original array.
// Sample Input:

type Item = {
    title: string
    rating: number
}

const filterByRating = (value: Item[])=>{
    return value.filter(item=> item.rating >=4 )
     
}


const books = [
  { title: 'Book A', rating: 3.9 },
  { title: 'Book B', rating: 4.2 },
  { title: 'Book C', rating: 4 },
];

console.log(filterByRating(books));
