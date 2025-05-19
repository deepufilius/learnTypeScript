let myObj: object; //explicitly typed
myObj=[]; // array is also an object
console.log(typeof myObj); 
myObj = {};


const exampleObj = {      // this is infered to : {
    prop1: "filius",     //                         prop1: string,     
    prop2: true         //                          prop2: boolean 
}                      //                         }

// type annotation

type Guitarist = {
    name?: string, // ? makes a property optional, it's of either string or undefined
    active: boolean, 
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: ["Meet you", "Reckon", 5150]
}

let jp: Guitarist = {
    active: true,
    albums: ["I","II","IV"]
}

const greetGuitarist = (guitarist : Guitarist) =>{
    if(guitarist.name){
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return `Hello!`;
}

console.log(greetGuitarist(evh));
console.log(greetGuitarist(jp));

interface GuitaristJunior {
    name: string, 
    active: boolean, 
    albums: (string | number)[]
}
//interface works same as type annotation 
//primarily used to define the structure of classes

//------------------Enums---------------------//

//unlike most typescript features, Enums are not a type level addition to javascript
//but something added to the language and runtime

// it alows to define a set of named constants

enum Direction{
    up,
    down,
    right,
    left
}

let direction: Direction = Direction.up;
console.log(direction); // 0 (default)

enum Direction_Default{
    up=1,
    down
}
console.log(Direction_Default.down); // output=> 2 


enum Direction_Str{
    up="UP",
    down="DOWN"
}
console.log(Direction_Str.down); // output=> DOWN



