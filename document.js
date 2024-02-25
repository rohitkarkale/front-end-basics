document.querySelector("#dom").innerHTML ="queryselect"





let id = document.getElementById("done")
id.innerHTML = "getElementBYId example."

let attr = document.querySelector("#para")
let res = attr.setAttribute("id","update")
console.log(res)


// let button = document.createElement("button")
// button.innerText = "click me"
// console.log(button)

// let para = document.querySelector("h2")
// para.after(button)



// let button = document.createElement("button")
// button.innerText = "submit"
// console.log(button)

// let body = document.querySelector("body")
// body.append(button)


let head = document.createElement("h1")
head.innerHTML = "<i>Hello Rohit</i>"
console.log(head)

let body = document.querySelector("p").before(head)



// let button = document.createElement("button")
// button.innerHTML = "click me"
// button.style.backgroundColor = "red"
// button.style.color = "white"

// let insert = document.querySelector('body')
// insert.append(button)


// setTimeout(()=>{
//     console.log('Hello')
// },2000)



let h5 = document.createElement("h5")
h5.innerHTML = "heading"
console.log(h5)

let upd = document.querySelector("body")
upd.before(h5)


// setTimeout(()=>{
//     console.log("Timeout function")
// },3000)


// prectice 

let btn = document.createElement("button")
btn.innerHTML = "click me !"
console.log(btn)

document.querySelector('body').after(btn)

let click = document.querySelector('button')
click.addEventListener("click",()=>{
    console.log("button was clicked.")
})



