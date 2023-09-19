//#1
let pushButton = document.getElementById('btn')
let textContainer = document.getElementById('textValue')

pushButton.addEventListener('click', function(){
    var userInput = prompt('Кто-ты воин?')
    if(userInput.length < 10 && isNaN(userInput)){ //в данном случае isNaN() проверяет, нет ли числа в prompt, если нет то не выдаст ошибку
        textContainer.textContent = 'Welcome '+ userInput
    } else if(userInput === ''){
        alert('ОШИБКА') 
        console.log('BASTARD!')
    }
    let alertStop = false  //В данном случае создаю переменную alertStop, которая будет с начлаьным значением false (ложным) которое меняется после alert'а на положительное - true. Таким цикл сработает сего 1 раз
    for(let i = 0;i < userInput.length; i++){
        if(userInput.length > 10 && !alertStop){
            alert('Имя не должно превышать 10 символов')
            alertStop = true
        }
    }
})


//#2
let mixArray = ['frontend', 3, 34, 45, null, undefined, null, 45, 'text', 'text',  true, false,  23, null, 'qwerty', '456']


let resultArray = mixArray.reduce((acc, currentValue)=> {
    let currentType = typeof currentValue

    if(currentType in acc) {acc[currentType].push(currentValue)}
    else {acc[currentType] = [currentType]}
    return acc
}, [])
console.log(resultArray)


let arrayOfArrays = Object.values(resultArray)
//Сортировка массива подмассивов по ко-ву элементов c помощью .sort()
let sorted = arrayOfArrays.sort((arr1, arr2)=> arr1 - arr2)
console.log(sorted)

const filterArray = arrayOfArrays.flat().filter(element => {
    if(typeof element === 'string') {return element.length > 3}
    return false
})
console.log(filterArray)


//Парралакс эффект
const parallaxImage = document.querySelector('.parralax-image');

document.body.addEventListener('mousemove', (e) => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Рассчитываем смещение для изображения в зависимости от положения курсора
  const xOffset = (mouseX - windowWidth / 2) / windowWidth * 14;
  const yOffset = (mouseY - windowHeight / 2) / windowHeight * 14;

  // Применяем смещение к изображению
  parallaxImage.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
});
