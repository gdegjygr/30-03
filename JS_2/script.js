// var day = Number(prompt('ВВедите день'))
// var month = prompt('Месяц')

// if (day >= 21 && day <= 31 && month === 'март') {
//     alert('овен')
// }

// Index
var userINN = '19901990199000';
var firstNum = Number(userINN[0])

if ((firstNum === 0 || firstNum === 1 || firstNum === 2) && userINN.length === 14) {
    console.log('ok')
}
else {
    console.warn('return')
}

// Undefined

// null

//!        switch, case

// var size = 'M'.toLowerCase()
// if(size === 'm'){
//     console.log('44')
// }
// else if(size === 's'){
//     console.log('40')
// }
// else if(size === 'l'){
//     console.log('46')
// }


// switch(size){
//     case 's':
//         console.log('40')
//         break
//     case 'm':
//         console.log('44')
//         break
//     case 'l':
//         console.log('46')
//         break
//     default:
//         console.log('unknown size')
// }

//!      object

// var user = {
//     name: 'Moxie',
//     age: 82,
//     isMarried: false,
//     adress: {
//         city: 'Parije',
//         street: null
//     }
// }

// console.log(user)
// console.log(user.name)
// console.log(user.age)

// delete user.age //удаление
// user.cource = "GEEKS" //добавление
// user['isMarried'] = true //изменение

// console.log(Object.values(user))
// console.log(Object.keys(user))
// console.log(Object.entries(user)) //получить все значения с помощью .entries
// console.log(Object.hasOwnProperty('loona'))

//!     array - массив

// var array = ['a', 'b', 'c', 90]
// console.log(array[1], array[0].length -1)

// переопределение переменных
// var num = 10
// num = 'bibaboba'
// console.log(num)

//Циклы
//for

for (var i = 0; i <= 10; i++){
    console.log(i)
}

// .includes - исп для сравнения в списках, например.