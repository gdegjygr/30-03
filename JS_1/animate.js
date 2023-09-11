console.log('Ze World')

//Переменная
var name = '5orka';
//camelcase
var nameAddSurname = 'Puk';

console.log(name + nameAddSurname)//контацинация

//Типы данных
//1)string
var name_2 = 'PUK';
console.log(name.toUpperCase());
//.toUpperCase-УВЕЛИЧИВАЕТ ТЕКСТ
//.toLowerCase-Уменьшает текст


//2)number
var number = 66;
var number_2 = 666;
console.log(number % number_2)
console.log('Возраст группы 30-03', 71+17*9)


//3)boolean
var num1 = 71;
var num2 = '72';
console.log(num1 == num2)
//Конструкции if, else
var login =  prompt('register comrad now!')
var password = prompt('Print password')

var login2 =  prompt('return register')
var password2 = prompt('replace password')
    if(login === login2 && password === password2){
        alert('go work!')
    }
    else{
        alert('your brains is tired!')
        console.error('this spy!')
    }
//&&,  - логич операторы 
var userName1 = prompt('name')
var userName2 = prompt('age')
var userName3 = prompt('date')
if(userName2 <= 19){
    alert('Привет малолетний дибил')
}
    else if(userName2 >= 18) {
        alert('Категорически приветствую', userName1)
        console.log('Категорически приветствую', userName1)
    }


//4)
//5)
//6)





















