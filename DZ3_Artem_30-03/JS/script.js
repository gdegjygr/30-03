let numbers = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50]
    for(let i = 0; i < numbers.length; i++){
        let num = String(numbers[i])
        let char = num[0]
        if(char == 2 || char == 5){
            console.log(num)
        }
    }


let orbiter = {
        forge: 'Bolter Prime',
        inventory: 'Credits & gun mods',
        pet: 'Infected dog Archy',
        relicts: 'Axi, Mezo, Neo, Lit',
        operator: 'juvenile moron',
}

let warframe = prompt('Which section of the ship do you need?')
    for(let i = 0; i< warframe.length; i++){
        if(warframe in orbiter){
            console.log( 'ACCEPT')
            console.log(typeof warframe)
        }else {
            console.log('IGNORE')
            console.log(typeof undefined)
        }
console.log(typeof Boolean)
}


let tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']
let result = {}
    for(let i = 0; i < tags.length; i++){
        let quantity = tags[i]
        if(result[quantity] != undefined){
            ++result[quantity]
        } else{
            result[quantity] = 1
        }
    }
    for(let key in result){
        document.write('ко-во ' + key + '==' + result[key] + ' шт <br>')
    }
//40 строк кода в общем