/* 
let a = 221; 
let b = a - 5;
a = 4;
console.log(b, a);  
*/
/*
const : 상수, 변수를 변하지 않게 지정함.
let : 값을 다른값으로 바꿀 수 있음.
var : let처럼 값을 다른값으로 바꿀 수 있음.
    so, 변수를 선언할 땐 const를 사용할 것.
       진짜 필요할 때만 let 사용.
*/



/* string (=text)
const what = "Wow,Fantastic";

console.log(what);
*/



/* Boolean : True or False
True, False은 텍스트가 X, 고로 ""로 감싸지 않는다.

const wat = true;
const wat = false;
*/



/*
Number 
const wat = 666;
*/



/* Float (=소수점)
const wat = 55.1;
*/



/* [] = Array (=string들을 하나로 묶는것)
        데이터 타입(텍스트, true/false, numbers, floats)만 쓸 수있음. 
*/
/*
const something = "Something"

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", 
                    54, true, "stuff", "lalala", something]
*/
// console.log(daysOfWeek[2]);
/* [2]를 쓰는 이유는 daysOfWeek 중에서 세번째에 나오는걸 출력해달라는 뜻.
    0부터 시작이라 2가 세번째에 나오는걸 출력
*/

//console.log(daysOfWeek);

/* 
  = const mon = "Mon";
    const tue = "Tue";
    const wed = "Wed";
    const thu = "Thr";
    const fri = "Fri";
    const sat = "Sat";

    console.log(mon,tue,wed,thu,fri);
*/




const janeInfo = {
    name: "Jane",
    age: 29,
    gender: "Female",
    city: "Bucheon",
    isBeauty: true,
    favMovies: ["Along the gods", "LoTR", "Oldboy"],
    favFood: [{
            name: "Kimchi",
            fatty: false
        },
        {
            name: "Cheeseburger",
            fatty: true
        }
    ]
}

//const janeInfo의 janeInfo는 바꿀 수 없지만, 그 안에 있는 내용은 변경 가능.
// ,(콤마) ""(쌍따옴표) 빼먹지 말것.

console.log(janeInfo.city);

janeInfo.city = "Seoul"

console.log(janeInfo.city);

console.log(janeInfo);

//janeInfo의 favFood 첫번째의 fatty에 대한 내용을 출력한 것.
console.log(janeInfo.favFood[0].fatty)