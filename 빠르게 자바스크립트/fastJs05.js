// 간단한 function 
function sum(a,b){
    return a+b;
}
var c = sum(10,20);
console.log(c);


var answer = function(){
   console.log("sum 함수를 호출했나요? ")
}
var a = answer();


// 객체를 사용한 함수 

function Car(a,b,c){
    this.name =a; // 공용변수
    this.color =b;

}
Car.prototype.move = function () {
    console.log(this.name + '차이고'+ this.color+"색입니다.");
}

var a = new Car("현대","노란","전진");
a.move();
console.log(a.name);
console.log(a.color);

var b = new Car("기아","파란");
b.move();
console.log(b.name);
console.log(b.color);

var a = [1,2,3,10]
Array.prototype.print = function(){
    for(var i=0; i<this.length; i++){
        console.log(i);        
    }
}
a.print();
a.length 

