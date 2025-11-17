

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







type Item = {
    title: string
    rating: number
}

const filterByRating = (value: Item[]): Item[]=>{
    return value.filter(item=> item.rating >=4 )
     
}








type User = {
    id: number,
    name: string,
    email: string,
    isActive: boolean,
}

const filterActiveUsers = (value: User[]): User[]=>{
    return value.filter(user=> user.isActive == true)
}


