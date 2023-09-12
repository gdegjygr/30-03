let numbers = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50]
let newArray = []    
    for(let i = 0; i < numbers.length; i++){
        newArray = String(numbers[i])
        char = newArray[0]
        if(char == 2 || char == 5){
            console.log(newArray)
        }
    }


function frame (){
    let x = 10
    console.log(typeof x)
    let y = '20'
    console.log(typeof y)
    let z = [1, '2', undefined]
    console.log(typeof z)
    let w = true
    console.log(typeof w)
}
frame()
console.log(typeof frame)



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
    for(let key in result) console.log(Object(result))

//36 строк кода в общем
