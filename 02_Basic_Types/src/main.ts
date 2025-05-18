let firstName = "Korakian"; // implicit type declaration where TS infer it's type from value, you can hover on varibale to see the inference
let lastName: string = "Gen" // Explicit type declaration where the exact type is defined, it'll throw an error if assigned value is not that type

let age : number ;
age = 28;

let isPassed: boolean = true;

let isActive: number | string | boolean; // union type - it can have all three types
isActive = 0;
isActive = "yes";
isActive = false;

let album: any; // it can store any type, which actually defeats the purpose of TS but it has some use cases
// with "any" it's almost like you disabled type checking

/* const sum = (a , b) =>{
    return a + b;
} */ // this will throw an error as  a and b are of "any" type, return is also "any" type - string or number

const sum = (a:number , b:number) =>{
    return a+b;
} // sum is infered to be a number

const add = (a:number , b:string) =>{
    return a+b;
}// add is infered to be a string 


let w: unknown = 1;
w="string"; // no error
// unknown is similar to any, but a safer alternative. 
// it is best used when you don't know the type. 
// to add a type later you need to cast it ("as" keyword)

//let x: never = true; 
//never effectively thows an error whenever it is defined, primarily used in generics

let y: undefined = undefined;
let z: null = null;
//These types don't have much use unless strictNullChecks is enabled in the tsconfig.json file.