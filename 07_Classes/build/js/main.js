"use strict";
class Coder {
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return this.age;
    }
}
const Dave = new Coder('Dave', 'Rock', 27);
console.log(Dave.getAge());
//console.log(Dave.age);  private member can't accessible outside 
//console.log(Dave.lang); protected member can't accessible outside ,
// can be accessible only within class and it's subclasses
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age); // super has to be the first line 
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev('Mac', 'sara', 'Lofi', 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Kora = new Peeps('Kora');
const Gen = new Peeps('Gen');
const Fili = new Peeps('Fili');
console.log(Kora.id);
console.log(Gen.id);
console.log(Fili.id);
console.log(Peeps.count);
//////////////////////////////
// setters and getters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(ele => typeof ele === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Param is not an array of strings');
        }
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
//MyBands.data = ['Van Halen', 5150]; it should be an array of strings
