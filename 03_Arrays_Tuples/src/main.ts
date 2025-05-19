const names:  readonly string[] = ["filius"];
//you can't modify the array with readonly property  

let stringArr = ["one", "two", "three"]; 
// TS infers above array is of a string only type

let guitars = ["Strat", "Les Paul", 5150];
// TS infers above array is of an union type : string | number 

let mixedData = ["brooke", true, 500];
// TS infers above array is of an union type : string | boolean | number 

//stringArr[0] = 42; this will show an error as number can be assigned to a string array
stringArr[0] = "42"; // no issue
stringArr.push("four");// length is not fixed

guitars.unshift(2567);// for union type order can be in any order

//stringArr = guitars;
// for a string type array , you can't assign an union typed array

guitars = stringArr; // valid for union type, just RHS array should contain only the types from LHS array


//--------- Tuple ---------//

let myTuple : [string, number, boolean] = ["korakian", 28, true];
// Tuple is a fixed typed array of each index and also the length

let mixed = ["korakian", 28, true];
// infered to be an union type

mixed = myTuple; // valid 
//myTuple = mixed; error due to mixed is of union type where there is no need of every type should exist 