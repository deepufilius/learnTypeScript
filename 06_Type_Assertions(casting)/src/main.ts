// Type Assertions

//sometimes you will have information about the type of a value that typescript can't know about especially
//when you are working with DOM

type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific

let a: One = 'hello';
let b = a as Two; // less specific as it's union type
let c = a as Three; // more specific as it's type literal 

let d = <One>'world'; // same as line 12
let e = <string | number>'world';
// this syntax won't work in tsx 

type mathFunction = (a: number, b: number, c: 'add' | 'concat')=> number | string;

const addOrConcat: mathFunction = (a, b, c)=>{
    if(c === 'add') return a+b;
    return ''+a+b;
}

let myVal: string = addOrConcat(2,2,'concat') as string;
// we are telling that this will return a string 

let nextVal: number = addOrConcat(2,2,'concat') as number;
// this is not throwing any ts error but we know that function return a string 

// 10 as string , TS gives you an error as number not compatable to convert to a string

(10 as unknown) as string; // double casting or forced casting 
// if you really want to convert a number to a string, first convert the number to unkown type and then do assertion
//avoid it as much as possible 

// DOM - Document Object Model

const img = document.querySelector('img')!; 
//infered to HTMLImageElement | null;
// by making not null, HTMLImageElement is automatically infered as TS

const myImg = document.getElementById("img") as HTMLImageElement;

const nextImg = <HTMLImageElement> document.getElementById("img")

img.src;
myImg.src;
