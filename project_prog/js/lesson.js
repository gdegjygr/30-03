//PHONE INPUT

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')


const regExp = /^\+996 [2579]  \d{2}-\d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', ()=> {
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'ok'
        phoneResult.style.color = 'blue'
    } else{
        phoneResult.innerHTML = 'EGOR!'
        phoneResult.style.color = 'red'
    }
})

//!  Recursion - ф-цтя вызывает сама себя

let count = 0

const recursionCount = () => {
    count++
    console.log(count);
    recursionCount()
}
recursionCount()