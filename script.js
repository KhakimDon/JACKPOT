let second = document.querySelector('#mi')
let minute = document.querySelector('#se')

second.innerHTML = new Date().getSeconds()
minute.innerHTML = new Date().getMinutes()
let input1 = document.querySelector('#in1')
let input2 = document.querySelector('#in2')
input1.oninput = () =>{
    input2.value = input1.value * 31.2
}
input2.oninput = () =>{
    input1.value = input2.value / 31.2
}