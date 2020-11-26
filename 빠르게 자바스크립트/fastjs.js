// 자바스크립트 기초부터 빠르게 적기 

// 1. 변수선언 부더 값 할당하기 
var a; // 아무 값을 할당하지 않으면 기본적으로 undefined 초기값 
a = 10; // 선언하고 변수 안에 원하는 값을 정의할 수 있습니다. 
console.log(a); // 10 출력
a = 'hi';
console.log(a); // hi 출력
a = false;
console.log(a); // false 출력 


//2. 변수의 타입 확인하기 typeof 
var divElement = document.querySelector('input').value;
console.log(divElement); // input에 들어온 값을 콘솔로 찍는다. 
console.log(typeof divElement); // input 에 들어온 값의 타입을 콘솔로 찍는다.


//3. String 숫자와 문자의 구분 
var a = 10; // 이것은 숫자 
var b = '10'; // 이것은 문자 싱글쿼테이션이든 더블이든 둘다 쓰면됨 
console.log(a); // 10 숫자 
console.log(b); // 10 문자

console.log(a.length); // 숫자에는 length 안되서 undefined 
console.log(b.length); // 2 출력 

//4. String 숫자와 문자의 구분 
var obj = {
    //객체 내용 

};
// {} 객체를 의미하며 이를 객체 리터럴 이라고한다. 

    // 4-1. 속성추가 
    // 객체를 생성하고 나면 아래와 같은 방식으로 속성(property)를 추가할 수 있습니다.
    // 쓰는법1 
var obj = {};
obj.num = 10;
    // 쓰는법 2
var obj ={};
obj['num'] = 20;

    // 4-2. 속성값 변경
    // 이미 정의한 속성을 변경하는 방법은 해당 속성을 다시 접근하여 값을 할당한다. 
var obj = {}; 
obj.num = 10;
obj.num = 20;

// 배열 (Array)

var arr = [];
arr[0] = 10;
console.log(arr);
// 배열의 인덱스는 0부터 싲가합니다. 빈배열에 최초로 값을 추가하면 0 번째 인덱스 값이 
// 추가됩니다. 