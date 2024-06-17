console.log(a);

var a;
a = 10; 
// 호이스팅 : 변수 선언이 우선순위 그 뒤에 위에서 아래로 실행(대입도 포함)

var b = 10;
console.log(b);

var b = 20;
console.log(!b);

console.log(c); // let은 호이스팅 x , 재선언 x , 재할당 o
let c = 30;
c = 30; 
console.log(!c)

const d = 50;
console.log(d);
// d = 60; 재할당 x
// console.log(d);

