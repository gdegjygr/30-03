//Первое задание
// Привязываем ссылки на элементы DOM
const input = document.getElementById('meaning');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');


let inputValue = 0;

function updateinput() {
  input.value = inputValue;//Привязываем наш input к ф-ции
}

    plusButton.addEventListener('click', function(){
      ++inputValue
      updateinput()
      console.log('+ val')
    })

    minusButton.addEventListener('click', function() {
      --inputValue;
      updateinput();
      console.log('- val')
    });  updateinput(console.log('inputValue'));



const showButton = document.getElementById('showButton')
const fadeInImage = document.getElementById('fadeInImage')

showButton.addEventListener('click', function(){
  fadeInImage.style.opacity = 1;
  setTimeout(() => {
    fadeInImage.style.display = 'block';
  }, 10)
})



const fadeInBook = document.getElementById('fadeInBook')
const showButtonTwo = document.getElementById('showButtonTwo')

showButtonTwo.addEventListener('click', function(){
  fadeInBook.style.opacity = 1;
  fadeInBook.style.transform = 'translateY(0)';
})

//Второе задание
function updateData(arr, mathDate) {
  if(typeof mathDate !== 'function'){
    return console.log('Второй аргумент должен быть ф-цией')
  }
  
  const resultArr = arr.map(function(element){
    return mathDate(element)
  })
  return resultArr;
}

  let numbers = [1,2,3,4,5,666]

  function doubleNumber(num) {
    return num * 2;
  }
  const doubledNumbers = updateData(numbers, doubleNumber); console.log(doubledNumbers)