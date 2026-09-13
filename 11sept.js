
//let can adjust with that 
let a=9;
// a=10;


console.log(a);


//let cant handle redeclaration
// let b=9;
// let b=92;// not possible 

//var can adjust with that redeclaration

var h=9;
var h="manish";
// now we ll learn about the block score and functional scope range of the variables like var, let ,const
let x=98
let l=9;
let b=2;
function add_two_numbers(l,b){
    let x=l+b;
    console.log("the addition of l and b is ",x)
}
add_two_numbers(l,b);


//Temporal DeadZone- tum clg(a) pehle likh doge aur declare baad me karoge 
//hoisting-in the var,let,const


//temporal dead zone me error nahi aaya access ho  gya he and access hone ke baad undefined aaya he that mean vo temporal deadzone upport karta he 

//hoisting - jab bhi ham koi variable banate he to uska declaration wala part upar reh jata he and assign wala part niche reh jata he 

//hoisting done in all three variable var,let,const


//primitives : string,bool,null,char,bigint,
//reference : array[],functions(),objects{}

let v=[1,2,3,4];
let r=v;
console.log(r)


let obje={
    name:"manish",
    age:21
}
let y=obje.age;
const ya=obje.name;
console.log(y);
console.log(ya)


//reference variable me esa hota he ki ham agar copy karne ki koshish karte he to copy nahi hota he uske 2 malik ban jate he ab kisi bhi malik se tum usko access karke chedchad kar skte ho

//array ,objects,functions

let naam="manishee"
let maandusra = naam;
maandusra="manisha";

console.log(maandusra)
console.log(naam)

//dynamic typing ka mtlb hota he ye ki tum ek variable ko declare karke usko integer store karoge fir baad me tum reassign karoge string value se to ye possible he

// quirks


