// # Callback 함수 만들어보기 

function t1 (num, callback){
    console.log(num);
    callback();

}

t1(1,function (){
    console.log("callback gen")
})

// # 클로저 
// # 함수 내에서 변수를 메모리 처럼 사용하기 위해 

function ex_cl(){
    var num = 0 ;
    return function (){
        num++;
        console.log(num);
    }
}
var test = ex_cl();
test();
test();


