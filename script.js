let second = document.querySelector('#mi')
let minute = document.querySelector('#se')

second.innerHTML = new Date().getSeconds()
minute.innerHTML = new Date().getMinutes()
