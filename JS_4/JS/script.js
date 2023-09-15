// DZ3 другой враиант исполнения
// let htmlTag = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
// let tagObjest = {}
//     for(var i = 0; i < htmlTag.length; i++)
//     if(tagObjest.hasOwnProperty(htmlTag[i])) {
//         tagObjest[htmlTag[i]] += 1
//     } else{
//         tagObjest[htmlTag[i]] = 1
//     }
// console.log(tagObjest)
 // Анонимные функции
console.log(Object.keys(tagObjest).sort(function(tag1, tag2){
    return tagObjest[tag2] - tagObjest[tag1]
}))



//! Стреллчные функции
// let getPositionElement = (element, array) => {
// for(let i = 0; i < array.length; i++){
//Если какоенибудь значение из массива array будет равно element, то...
    // if(array[i] === element){
    //     return console.log(i)
   //  } else{console.log('404')}
    //}
//     return console.log('404')
//     }
// }
// getPositionElement(3, [2, 3, 4, 666])

// var sayDie = (num1, num2) => console.log(num1 > num2 ? num1:num2)
// sayDie(2, 3)

//HDF
// let alertName = (funcName) => {
//     return funcName()
// }
// let bibib = () => {
//     return alert('bob')
// }
//callback
// alertName(bibib)


//dir
// console.dir(document)
// console.dir(document.body.style)


// let txt = document.getElementsByClassName('text')
// text[1] = ('red')
// console.log(txt)


//for...of
// let num = [1, 2, 3, 4, 5, 666]
//     for(let val in num){
//         console.log(val)
//     }

//стрелочные ф-ции №2
// let getPositionElement = (element, array) => {
//      for(let i = 0; i < array.length; i++){
//         if(array[i] === element) {
//             return console.log(i)
//         } 
//         }
//         return console.log('404')
// }
// getPositionElement(4, [1, 2, 3, 4, 5, 666])

//№2
// let sayHello = (num1, num2) => console.log(num1 > num2 ? num1:num2)
//     sayHello(1, 60)

//сам написал (с сарказмом)
// var alertName = (funcName) => {
//     return funcName()
// }
// var windowName = () => {
//     alert('Abobus!')
// }
// alertName(windowName)

//х2 сарказм
// let data = (funcName) => {
//     return funcName()
// }
// let windowAlert = () => {
//     alert('monty')
// }
// data(windowAlert)

//за 5 минут, х3 сарказм!
// var arr = (array) => {
//     let sum = 0
//     for(let i = 0; i < array.length; i++){
//         sum += array[i]
//     }
//     return console.log(sum)
// }
// arr([1,2,3,4,5,666])

var text = document.getElementsByClassName('text')
text[1].style.color = 'blue'
text[0].innerHTML = 'Genshin x Warframe'
text[0].style.color = 'green'


let button = document.querySelector('button')
  function buttonClick (){
    return console.log('clicked')
  } 

button.addEventListener('click', buttonClick)
