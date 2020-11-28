// Function 

// 1개 이상의 목적이 있는 코드 모음 
function sumNumbers(a,b){
    return a + b 
}
sumNumbers(10,20);



// 선언문은 2가지 방식 
var sumNumbers = function(a,b){
    return a + b ;
}

function sumNumbers(a,b){
    return a + b;
}

/*
    함수를 작성하실 때는 가급적 단일 책임 원칙(Single Responsibility Principle)을 지켜주시면 좋습니다. 
     단일 책임 원칙이란 1개의 함수는 1개의 기능만 담당해야 한다는 프로그래밍 원칙입니다.
     여러가지 기능이 들어가면 재사용 하기 어려워집니다. 
*/

// 예제코드
function sumNumbers(a,b){
    var num = 1000 ;
    var data ={};
    $.get('domain.com/product/1').then(function(response){
        data = response.data;
    });
    var total = a + b + num;
    return total;
}
/*
    위 함수의 이름은 sumNumbers라는 함수의 이름을 갖고 있지만, 실제로 두 수를 
    더하는 로직 이외에도 데이터 요청이나 다른 숫자를 더하는 로직들이 뒤엉켜 있습니다. 
    위와 같은 코드는 단일 책임 원칙에 벗어나는 코드이며 재사용하기가 쉽지 않습니다.
*/


// 예제 코드리팩토링 
function sumNumbers(a,b){
    return a + b ;
}

function sumAll(){
    var num = 1000;
    var total = sumNumbers(0,0) + num;
    return total;
}

function fetchData(){
    var data = {};
    $.get('domain.com/product/1').then(function(response){
        data = response.data;
        return data;
    });
}

// 유효 범위 Scope 

/*
스코프란 변수의 유효 범위를 의미합니다. 
다른 프로그래밍 언어와는 다르게 자바스크립트의 변수는 유효 범위가 전역으로 시작합니다. 
예를 들어 아래와 같은 변수 선언은 자바스크립트로 접근할 수 있는 모든 영역에서 같은 값을 같습니다.
*/

/*
    함수의 흐름
    1. 선언
    2. 로직 생성
    3. 출력 
*/
var a = 10;
function getA(){
    console.log(a);
}
getA();

// 함수 단위로 구분되는 변수 범위
/*
    함수안에서 새로운 선언하는 경우 함수 단위의
    새로운 유효범위를 갖습니다. 
*/
var a = 10;
function getA(){
    var a = 20;
    console.log(a);
}
getA();
console.log(a);

/*
    위 코드는 함수 바깥에서 변수 a를 선언하고 10을 대입한 뒤, 
    getA()라는 함수를 선언하면서 함수 안에 변수 a를 새로 선언하고 20을 대입한 코드입니다. 
    getA() 함수를 실행하면 함수 안의 변수인 a가 20의 값으로 콘솔에 출력됩니다. 
    함수의 실행이 끝나고 나서 console.log(a);로 다시 a의 값을 출력하면 10이 출력됩니다.
    여기서 변수의 유효 범위는 함수 단위(function)로 한정된다는 것을 알 수 있습니다.
*/
