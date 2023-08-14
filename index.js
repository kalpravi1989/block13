fn("i am a string");
fn(false);
fn(null);
fn(undefined);
fn(0);
fn("");
function fn(str){
    //check if given value is "i am a string" then print true
if(str==="i am a string"){
    console.log(true);
}
    //check if given value is boolean false then print given statement
else if(str===false){
console.log("The boolean value false is falsy");
}
//check if given value is null then print the given statement
else if(str===null){
    console.log("The null value is falsy");
}
//check if given value is undefined then print the given statement
else if(str===undefined){
    console.log("undefined is falsy")
}
//check if given value is 0 then print the given statement
else if(str===0){
    console.log("The number 0 is falsy (the only falsy number)");
}
//check if given value is empty string then print the given statement
else if(str===""){
    console.log("he empty string is falsy (the only falsy string)");
}
}