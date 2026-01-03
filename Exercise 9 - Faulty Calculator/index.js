let random = Math.random()
let a = prompt("Enter your first number")
let b = prompt("Enter your second number")
let c = prompt("Enter your operation")
let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random > 0.1) {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
