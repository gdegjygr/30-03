//gmail cheker
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


//move block
let position = 0
function recursionAnimation(){
    position = position + 5
    if(position > 400) return
    let childBlock = document.getElementsByClassName('child_block')
    if(childBlock.length > 0){
        childBlock[0].style.left = position + 'px'
    }
    animation()
}

function animation(){
    setTimeout(recursionAnimation, 100)
}
animation()

