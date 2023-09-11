console.log('Menu')//проверка

var starBucks = {
    coffe: {   
        Latte: 'Latte - классический, тёплый кофе',
        Mackinato: 'Латте макиато состоит в большей части из молока, которое наливается в стакан первым',
        Frappuccino: 'Готовится с помощью шейкера или миксера на основе одной или двух порций кофе, сахара и небольшого количества воды',
        Americano: 'идеальный горячий напиток для тех, кто хотел бы насладиться вкусным эспрессо',
        Mocha: 'сорт кофе вида арабика, названный по портовому городу Моха в Йемене',
        Espresso: 'Традиционно подается с одним кубиком сахара, без ложки. Есть холодный вариант',
        IceCoffee: 'Холодный Латте',
},
    greenTea: 'Зелёный чай',
    blackTea: 'Чёрный чай', 
}
console.log(starBucks)

var choise = prompt('Заказываете кофе или чай?')
     if(choise === 'coffee') {
         true
     }
         else if(choise === 'tea'){
            true
    }
            else if(choise != 'coffe' || 'tea'){
                console.log('NotUnderstand').return
            }
var choise2 = prompt('Название кофе для заказа')

    if(choise2 in starBucks.coffe){
        console.log('have')
    } else{
        alert('Not have')
        location.reload()
    }


// Вычисление города в котором > 9 символов
let cities = ['Bishkek', 'Los Angeles', 'Chicago', 'New York', 'Houston', 'Dallas', 'Philadelphia', 'Seattle']; 
for (var i = 0; i < cities.length; i++) {
  if (cities[i].length >= 9) {
    console.log(cities[i]);
  }
}


// Дни недели
let week = prompt('ВВедите нумерацию дня недели(в числах)')

switch (week) {
    case '1':
        alert('Понедельник')
        break
    case '2':
        alert('Вторник')
        break
    case '3':
        alert('Среда')
    case '4':
        alert('Четверг')
        break
    case '5':
        alert('Пятница')
        break
    case '6':
        alert('Суббота')
        break
    case '7':
        alert('Воскресенье')
        break
}