//HW 1
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

//1 вариант с использованием шаблона
// const regExp = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
//! 2 вариант валидации без шаблонов (и библиотек)
// const regExp = /^[A-Za-z0-9_\-\.]{4,10}\@[A-Za-z_\-\.]{5}\.[A-Za-z]{3}$/
//! 3 Вариант с учётом всех нюансов
const regExp = /^[a-z]{4,10}\@['gmail']{5}\.['com']{3}$/
gmailButton.addEventListener('click', () => {
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'ACCEPT'
        gmailResult.style.color = 'green'}
    else {
        gmailResult.innerHTML = 'ERROR'
        gmailResult.style.color = 'red'}
})


// HW 2-3 путешествие квадрата
const childBlock = document.querySelector('.child_block')
const parentBlock = document.querySelector('.parent_block')
const parentWidth = parentBlock.clientWidth
const parentHeight = parentBlock.clientHeight
const childWidth = childBlock.clientWidth
const childHeight = childBlock.clientHeight

let direction = 'left'
let x = parentWidth - childWidth
let y = 0


function moveBlock() {
  if (direction === 'left') {    x -= 5;
    if (x < 0) {      direction = 'down';
    }  } else if (direction === 'down') {
    y += 5;    if (y + childHeight > parentHeight) {
      direction = 'right';    }
  } else if (direction === 'right') {    x += 5;
    if (x + childWidth > parentWidth) {      direction = 'up';
    }  } else if (direction === 'up') {
    y -= 5;    if (y < 0) {
      direction = 'left';    }
  }
  childBlock.style.left = x + 'px';  childBlock.style.top = y + 'px';
  requestAnimationFrame(moveBlock);
}
moveBlock();


//HW 3
let hours = 0
let minutes = 0
let second = 0
let timeInterval
let timeRunning = false

function startTimer(){
    if(!timeRunning){
    timeInterval = setInterval(updateTime, 1000)
    document.getElementById('start').disabled = true
    timeRunning = true
    }
}
function stopTimer(){
    if(timeRunning){
        clearInterval(timeInterval)
        timeRunning = false
        document.getElementById('start').disabled = false
    }
}
function resetTime(){
    clearInterval(timeInterval)
    timeRunning = false
    hours = 0
    minutes = 0
    second = 0
    document.getElementById('seconds').textContent = '00'
    document.getElementById('minutes').textContent = '00'
    document.getElementById('hours').textContent = '00'
    document.getElementById('reset').disabled = false
    document.getElementById('start').disabled = false
}
function updateTime(){
    second++
    if(second == 60){
        second = 0
        minutes++
    }
    if(minutes == 60){
        minutes = 0
        hours++
    }
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0')
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0')
    document.getElementById('seconds').textContent = second.toString().padStart(2, '0')
}
document.getElementById('start').addEventListener('click', startTimer)
document.getElementById('stop').addEventListener('click', stopTimer)
document.getElementById('reset').addEventListener('click', resetTime)

//+epilepsy mod
//надо опдумать...