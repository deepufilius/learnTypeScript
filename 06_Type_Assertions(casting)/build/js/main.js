"use strict";
// Type Assertions
// convert to more or less specific
let a = 'hello';
let b = a; // less specific as it's union type
let c = a; // more specific as it's type literal 
let d = 'world'; // same as line 12
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// we are telling that this will return a string 
let nextVal = addOrConcat(2, 2, 'concat');
// this is not throwing any ts error but we know that function return a string 
// 10 as string , TS gives you an error as number not compatable to convert to a string
10; // double casting or forced casting 
// if you really want to convert a number to a string, first convert the number to unkown type and then do assertion
//avoid it as much as possible 
// DOM - Document Object Model
const img = document.querySelector('img');
//infered to HTMLImageElement | null;
// by making not null, HTMLImageElement is automatically infered as TS
const myImg = document.getElementById("img");
const nextImg = document.getElementById("img");
img.src;
myImg.src;
