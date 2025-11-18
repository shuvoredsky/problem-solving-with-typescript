Question-1: What are some differences between interfaces and types in TypeScript?

Answer: Interface আর Type এর মধ্যে পার্থক্য,
Interface-

১। অবজেক্টের গঠন ঠিক করতে ব্যবহৃত হয়।
২। Extend করা সহজ।

Example:
interface User{
name: string;
}

Type-

১। যেকোনো কিছু represent করতে পারে (union, primitives, tuples)।
২। কিছু ক্ষেত্রে বেশি flexible।

Example:

type Person = {
name: string;
}

Question-2: What is the use of the keyof keyword in TypeScript? Provide an example.

Answer: keyof হল Typescript এর একটি অপারেটর যা অবজেক্ট থেকে তার সমস্ত key
মানে property name বের করে এনে union type তৈরি করে।এটা কোড safety এর জন্য কাজ করে থাকে।
যাতে invalid key ব্যবহার না হয়।

Example:

type User = {
name: string;
age: number;
};

type UserKeys = keyof User;

Question-3: Explain the difference between any, unknown, and never types in TypeScript.

Answer: any

- যেকোনো ভ্যালু রাখতে পারে, কিছুই চেক করে না।
  unknown
- ভ্যালু রাখা যায়, কিন্ত ব্যবহার এর আগে টাইপ চেক করতে হয়।
  never
- এমন টাইপ যার কোন ভ্যালুই হয় না।

Example:
let a: any = 'Hello';
let b: unknown = 10;
let c: never;
