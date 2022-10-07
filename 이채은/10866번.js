const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = input.shift()
let deque = []
let answer = [] 

let push_front = (num) => {
    deque.unshift(num)
}

let push_back = (num) => {
    deque.push(num)
}

let pop_front = () => {
    if(deque.length === 0) answer.push(-1)
    else answer.push(deque.shift())
}

let pop_back = () => {
    if(deque.length === 0) answer.push(-1)
    else answer.push(deque.pop())
}

let size = () => {
    answer.push(deque.length)
}

let empty = () => {
    if(deque.length === 0) answer.push(1)
    else answer.push(0)
}

let front = () => {
    if(deque.length === 0) answer.push(-1)
    else answer.push(deque[0])
}

let back = () => {
    if(deque.length === 0) answer.push(-1)
    else answer.push(deque[deque.length - 1])
}

for(let test of input){
    let splited = test.split(" ")
    let X = Number(splited[1])
    let order = splited[0]
    if(test === "pop_front") pop_front()
    else if(test === "pop_back") pop_back()
    else if(test === "size") size()
    else if(test === "empty") empty()
    else if(test === "front") front()
    else if(test === "back") back()
    else if(order === "push_back") push_back(X)
    else push_front(X)
}

console.log(answer.join("\n"))