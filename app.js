// javascript hoisting

console.log(name);
var name = "abc";
console.log(name)
GetName()
function GetName(){
    console.log("hi")
}