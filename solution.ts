

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








interface Book {
    title: string
    author: string
    publishedYear: number
    isAvailable:boolean
}
const printBookDetails = (book: Book): void=>{
return console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable? 'Yes' : 'No'}`);
}










const getUniqueValues = (arr1: any[], arr2: any[])=>{
    const newArr: any[] = [];
    arr1.forEach(value=> {
        if(!newArr.includes(value)){
            newArr.push(value)
        }
    });

   arr2.forEach(value=>{
    if(!newArr.includes(value)){
        newArr.push(value)
    }
   })

    return newArr;
}










type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (products: Product[]): number=>{
    if(products.length === 0) return 0;

    const productTotals = products.map(product=> product.price * product.quantity)

    const totalPrice = productTotals.reduce((sum, productTotal)=> sum + productTotal, 0)
    return totalPrice;

}

