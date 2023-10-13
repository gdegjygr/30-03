//PHONE INPUT

// const phoneInput = document.querySelector('#phone_input')
// const phoneButton = document.querySelector('#phone_button')
// const phoneResult = document.querySelector('#phone_result')


// const regExp = /^\+996 [2579]  \d{2}-\d{2}-\d{2}-\d{2}$/

// phoneButton.addEventListener('click', ()=> {
//     if(regExp.test(phoneInput.value)){
//         phoneResult.innerHTML = 'ok'
//         phoneResult.style.color = 'blue'
//     } else{
//         phoneResult.innerHTML = 'EGOR!'
//         phoneResult.style.color = 'red'
//     }
// })

//!  Recursion - ф-цтя вызывает сама себя

// let count = 0

// const recursionCount = () => {
//     count++
//     console.log(count);
//     recursionCount()
// }
// recursionCount()


//Синхронные ф-ции: - код содержащий задержку
// setTimeout( () => {
//     console.log(1);
// }, 0)

// console.log(4);

// setTimeout( () => {
//     console.log(2);
// }, 2000)
// setTimeout( () => {
//     console.log(3);
// }, 500)


// //setInterval
// let num = 0

// const interval = setInterval( () => {
//     num++
//     console.log(num);
// }, 1000)

// setTimeout( () => {
//     clearInterval(interval)
// }, 6000)


//callback
// const subject = prompt('Subject?')
// const doHomeWork = (finish,subject) => {
//     alert(`starting my ${subject} home work!`)
//     finish()
// }

// const alertFinish = () => {
//     return alert('Finish!')
// }
// doHomeWork(alertFinish, subject)

//FIBANACCI - (числа фибаначи)
// const arr = [1,2,3,5,8,13]

// const newArr = arr.map((element, indexElement) => {
//     return element + indexElement
// })
// console.log(arr, 'Исход');
// console.log(newArr, 'Изменённый');


// const arr2 = [1,2,3,5,8,13]

// const newArr2 = arr2.forEach((element, indexElement) => {
//     console.log(element + indexElement)
// })