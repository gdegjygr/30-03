console.log("Server controls")//проверка

var day= prompt('Введите день рождения');
    if (day >= 32) {
        alert('pls return').stop
    }
    else if(day <= 0) {
        alert('pls return').stop
    }

var month = prompt('Введите месяц в числах');
if(day >= 21 && day <= 31 && month == 3) console.log('Ваш знак зодиака - овен');
    else if( day >= 1 && day <= 19 && month == 4) console.log('Ваш знак зодиака - овен');

if(day >= 20 && day <= 31 && month == 4) console.log('Ваш знак зодиака - телец');
    else if( day >= 1 && day <= 20 && month == 5) console.log('Ваш знак зодиака - телец');

if(day >= 21 && day <= 31 && month == 5) console.log('Ваш знак зодиака - близняшки');
    else if( day >= 1 && day <= 20 && month == 6) console.log('Ваш знак зодиака - близняшки');

if(day >= 21 && day <= 30 && month == 6) console.log('Ваш знак зодиака - рачок');
    else if( day >= 1 && day <= 22 && month == 7) console.log('Ваш знак зодиака - рачок');

if(day >= 22 && day <= 31 && month == 7) console.log('Ваш знак зодиака - лев');
    else if( day >= 1 && day <= 22 && month == 8) console.log('Ваш знак зодиака - лев');

if(day >= 22 && day <= 31 && month == 8) console.log('Ваш знак зодиака - дева');
    else if( day >= 1 && day <= 22 && month == 9) console.log('Ваш знак зодиака - дева');

if(day >= 23 && day <= 30 && month == 9) console.log('Ваш знак зодиака - весы');
    else if( day >= 1 && day <= 22 && month == 10) console.log('Ваш знак зодиака - весы');

if(day >= 23 && day <= 31 && month == 10) console.log('Ваш знак зодиака - скорпион Джонсон');
    else if( day >= 1 && day <= 21 && month == 11) console.log('Ваш знак зодиака - скорпион Джонсонн');

if(day >= 22 && day <= 30 && month == 11) console.log('Ваш знак зодиака - стрелец');
    else if( day >= 1 && day <= 21 && month == 12) console.log('Ваш знак зодиака - стрелец');

if(day >= 22 && day <= 31 && month == 12) console.log('Ваш знак зодиака - козий-рог');
    else if( day >= 1 && day <= 19 && month == 1) console.log('Ваш знак зодиака - кзий-рог');

if(day >= 20 && day <= 31 && month == 1) console.log('Ваш знак зодиака - водяной');
    else if( day >= 1 && day <= 18 && month == 2) console.log('Ваш знак зодиака - водяной');

if(day >= 19 && day <= 28 && month == 2) console.log('Ваш знак зодиака - ры-бы');
    else if( day >= 1 && day <= 20 && month == 3) console.log('Ваш знак зодиака - ры-бы');
    else if( day <= 29 && month == 2) console.log('Ваш знак зодиака - ры-бы');
// 
// if(day >= 19 && day <= 28 && month === 'февраль') console.log('Ваш знак зодиака - ры-бы');
//     else if( day >= 1 && day <= 18 && month == 'март') console.log('Ваш знак зодиака - ры-бы');