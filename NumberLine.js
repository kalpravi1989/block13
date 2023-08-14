fn(50,51);
fn(99,-2);
fn(0,101);
fn(500,-500);
fn(-1000,0);
fn(-5,0);

function fn(num1,num2){
let sum=num1+num2;//find sum
if(sum>100){ //if sum is greater than 100 then print gn statement
    console.log(sum," greater than 100");
}else if(sum<100&&sum>0){ //sum is positive number and less than 100 then print gn statement
    console.log(sum," is greater than 0");
}else if(sum==0){  //sum is 0 then print gn statement
console.log(sum," is equal to 0");
}else if(sum<0){ //sum is negative number then print gn statement
    console.log(sum," is negative number");
}
}