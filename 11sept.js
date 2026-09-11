
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