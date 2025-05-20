//Type Aliases 
// we can create an alias for type declaration and can be reused which is not possible with interface

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray;
}

type userId = stringOrNumber;


//--------------Functions----------------------//

const add = (a:number,b:number):number =>{
    return a+b;
}

const logMessage = (message: any):void =>{
    console.log(message);
}

logMessage("Hello!");
logMessage(add(2,3));

let substract = function (c:number,d:number): number {
    return c-d;
}

logMessage(substract(20,5));

type mathFunction = (a: number,b: number) => number; 
// interface mathFunction {
//     (a: number,b: number): number
// }

let multiply: mathFunction = function(c,d){
    return c * d;
}

logMessage(multiply(3,6));

//----Optional Parameters (should be last params)------//

const addAll = (a:number,b:number,c?:number):number=>{
    if(typeof c !== "undefined"){ // typeguard for an optional parameter
        return a + b + c;
    }
    return a + b;
}

//-----Default Parameters-------//
// type function aliases can't be used with default params
const sumAll = (a: number, b: number, c: number = 2):number=>{
    return a + b + c;
}

const sumAllNew = (a: number=20, b: number, c: number = 2):number=>{
    return a + b + c;
}

logMessage(addAll(1,9));
logMessage(addAll(1,9,9));
logMessage(sumAll(1,9));
logMessage(sumAllNew(undefined,9)); 
// if the default params are not the last ones then they have to explictly passed
// as undefined so that default value will be considered 

//------------Rest Parameters--------------//
// it should be the last parameter

const total = (a: number, ...nums: number[]):number =>{
    return a + nums.reduce((prev,curr) => prev + curr);
}

const nums: number[] = [5,6,7,8,9];

logMessage(total(10, ...nums));
logMessage(total(100,1,2,3,4,5));


//------------ never -------------------//
// it is of type for throwing an error or in a function with infinite loop

const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}

const infinite = () =>{
    let i:number = 1;
    while(true){
        i++;
        if(i>100) break; // without this guard this would be of never type
    }
}

//custom guard type

const isNumber = (value: any): boolean =>{
    return typeof value === "number" ? true : false;
}

//use of the never type

const numberOrString = (value: number | string): string => {
    if(typeof value === "number") return "number";
    if(typeof value === "string") return "string";
    return createError("This should never weapon!!")
}
// here this function returns a string even if is a number type, the two guard functions
// are not the main return type where we can use never type to fill the return ;


