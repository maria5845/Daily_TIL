// 자바스크립트 기초부터 빠르게 적기 02 

// 1. 배열조작하기
    // 인덱스를 직접 접근해서 사용하는 경우 
var arr = [];
arr[0] = 100 ;
arr[1] = 20;
arr[2] = 10;
console.log(arr);

    //자바스크립트 내장 API를 사용하는경우 (이걸 더 많이 사용함)
    // push(): 배열에 데이터 추가 
    // slice(): 배열의 특정 인덱스에 있는 값을 반환 
    // splice(): 배열의 특정 인덱스에 있는 값을 변경 또는 삭제 
    // pop(): 배열의 마지막 인덱스의 값을 꺼냄(배열의 내용이 변경됨)
    // shift() : 배열의 첫번째 인덱스 값을 꺼냄(배열의 내용이 변경됨)
var arr = [];
arr.push(1);
arr.push(20);
arr.push(30);
console.log(arr);

// 반복문 
for(var i = 0; i < 10; i++){
    console.log(i)
}

    // forEach() 
var arr =  [10,20,30];
arr.forEach(function(value,index){
    console.log('index :'+index+' value :'+value);
});

    //for in
var arr = [10,20,30];
var obj ={
    num:10,
    str:'hi',
    arr:[]
};

for(var key in arr ){
    console.log(arr[key]);
}
for(var key in obj ){
    console.log(obj[key]);
}
// 변수 초기화 
function fetchData(data){
    var receivedData;
    if(data === undefined){
      receivedData = localStorage.getItem('item');
    }    
}

// 논리 연산자를 사용하여 if 문 대신 깔끔하게 코드구현 

function fetchData(data){
    var receivedData;
      receivedData = data || localStorage.getItem('item');
    }    

// 조건문 대신에 삼항 연산자로
var num = 0;
if(num == 0){
    num = 50;
    if(num >10){
        num =8;
        console.log(num);
    } else{
        num = 0;
    }
}
var data = 0
if(data == 0){
    data = 50;
    data = data > 10 ? 100 :0;
    console.log(data);
}