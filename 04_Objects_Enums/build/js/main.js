"use strict";
let myObj; //explicitly typed
myObj = []; // array is also an object
console.log(typeof myObj);
myObj = {};
const exampleObj = {
    prop1: "filius", //                         prop1: string,     
    prop2: true //                          prop2: boolean 
}; //                         }
let evh = {
    name: "Eddie",
    active: false,
    albums: ["Meet you", "Reckon", 5150]
};
let jp = {
    active: true,
    albums: ["I", "II", "IV"]
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return `Hello!`;
};
console.log(greetGuitarist(evh));
console.log(greetGuitarist(jp));
//interface works same as type annotation 
//primarily used to define the structure of classes
//------------------Enums---------------------//
//unlike most typescript features, Enums are not a type level addition to javascript
//but something added to the language and runtime
// it alows to define a set of named constants
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["right"] = 2] = "right";
    Direction[Direction["left"] = 3] = "left";
})(Direction || (Direction = {}));
let direction = Direction.up;
console.log(direction); // 0 (default)
var Direction_Default;
(function (Direction_Default) {
    Direction_Default[Direction_Default["up"] = 1] = "up";
    Direction_Default[Direction_Default["down"] = 2] = "down";
})(Direction_Default || (Direction_Default = {}));
console.log(Direction_Default.down); // output=> 2 
var Direction_Str;
(function (Direction_Str) {
    Direction_Str["up"] = "UP";
    Direction_Str["down"] = "DOWN";
})(Direction_Str || (Direction_Str = {}));
console.log(Direction_Str.down); // output=> DOWN
