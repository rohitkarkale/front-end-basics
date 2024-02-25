// function add (a,b) {
//     console.log(a+b);
// }

// add(3,4)

// function print (){
//     console.log('Hello Rohit this is java script')
// }

// print();

// const message = (msg) =>{
//     console.log(msg)
// }

// message("This is message to rohit.")

// const div = (a,b) =>{
//     console.log(a / b)
// }

// div(10,5)


const vowels= (str) =>{
    for(const char of str)
    { 
    let count=0; 
        if(char==="a" || 
           char==="e" ||
           char==="i" ||
           char==="o" ||
           char==="u" )
           {
             console.log(char)
             count++;
           }
    } 
    }


vowels("aaaeeeiiiiooooouuuuuuu")


let num =[2,4,6,8]

num.forEach((square)=>{
    console.log(square ** 2)
})


// let newarray = num.map((val) =>{
//     return val** 2
   
// })

// console.log(newarray)

// let arr = ["rohit","rohan","ram","revan"]

// let newarray = arr.map((val)=>{
//     return val;
// })

// console.log(newarray)


// let num = [1,2,3,4,5,6,7,8,9,10];

// let result = num.filter((val)=>{
//     return val > 2
// })

// console.log(result)

// let num = [1,2,3,4,5]

// let result = num.reduce((pre,curr) =>{
//     return pre > curr ? pre : curr;
// })

// console.log(result)


let marks = [97.96,94,89,90];

marks.filter((val)=>{
    console.log(val>90)
})





// let n = prompt('Enter a number');

// let arr = [];

// for(let i=1 ;i<=n ; i++){
//     arr[i-1] = i;
// }

// console.log(arr)

// let sum = arr.reduce((first,second)=>{
//     return first + second;

// })

// console.log(sum)

// let mul =arr.reduce((third,fourth)=>{
//     return third * fourth ;
// })

// console.log(mul)

// let heading = document.querySelector("h1")

// let head2 = document.querySelector("h2")

// head2.innerText = head2.innerText + " Java script."

let para = document.querySelector("p")
let id = para.getAttribute("id")
console.log(id)

let head = document.querySelector("h2")
head.style.backgroundColor,color = "black",""
head

let something = head.getAttribute("class")
console.log(something)

