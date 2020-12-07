//  아주 간단한 리터럴 객체 
var a = {
    'a' : 110,
    'b' : 'hi',
    'c' : function() {
        this.a++;
    }

}

Object.prototype.sum= function () {
    console.log(this.a + 20); 
}
a.c();
a.c();
console.log(a.a);