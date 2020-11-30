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
    var move = c; // private 변수 
    // name 과 color는 맴버라고 한다.
}

var a = new Car("현대","노란","전진");
console.log(a.name);
console.log(a.color);
console.log(a.move);


var b = new Car("기아","파란");
console.log(b.name);
console.log(b.color);