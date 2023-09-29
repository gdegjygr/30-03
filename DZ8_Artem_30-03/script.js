function palindrom(str) {
    str = str.toLowerCase().replace(/\s/g, '');
    const reversedStr = str.split('').reverse().join('')
    return str === reversedStr
}

const palindromText1 = 'Пожилой мужичок съел кота у китайцев'
console.log(palindrom(palindromText1));

const palindromText2 = 'Ze, world!'
console.log(palindrom(palindromText2));