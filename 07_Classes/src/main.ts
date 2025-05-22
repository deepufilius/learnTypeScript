class Coder {

    secondLang! : string;

    constructor(
        public readonly name:string, 
        public music:string, 
        private age:number, 
        protected lang:string = 'TypeScript'
    ){
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge(){
        return this.age;
    }
}

const Dave = new Coder('Dave','Rock',27);

console.log(Dave.getAge());
//console.log(Dave.age);  private member can't accessible outside 
//console.log(Dave.lang); protected member can't accessible outside ,
// can be accessible only within class and it's subclasses

class WebDev extends Coder{
    constructor(
        public computer:string,
        name: string,
        music: string,
        age: number,
    ){
        super(name,music,age); // super has to be the first line 
        this.computer = computer;
    }

    public getLang(){
        return  `I write ${this.lang}`;
    }
}

const Sara = new WebDev('Mac','sara','Lofi',25);

console.log(Sara.getLang());


////////////////////////////////////////////
// implementing interface

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    constructor(
        public name: string,
        public instrument: string
    ) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}

const Page = new Guitarist ('Jimmy','guitar');
console.log(Page.play('strums'));


////////////////////////////

class Peeps {
    static count: number = 0;

    static getCount(): number {
        return Peeps.count;
    }

    public id: number;

    constructor (public name: string) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}

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
    private dataState: string[];

    constructor() {
        this.dataState = [];
    }

    public get data(): string[] {
        return this.dataState;
    }

    public set data(value: string[]){
        if(Array.isArray(value) && value.every(ele => typeof ele === 'string')){
            this.dataState = value;
            return;
        } else {
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


