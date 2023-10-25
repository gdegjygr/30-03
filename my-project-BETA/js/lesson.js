//PHONE INPUT

// const phoneInput = document.querySelector('#phone_input')
// const phoneButton = document.querySelector('#phone_button')
// const phoneResult = document.querySelector('#phone_result')


// const regExp = /^\+996 [2579]  \d{2}-\d{2}-\d{2}-\d{2}$/

// phoneButton.addEventListener('click', ()=> {
//     if(regExp.test(phoneInput.value)){
//         phoneResult.innerHTML = 'ok'
//         phoneResult.style.color = 'blue'
//     } else{
//         phoneResult.innerHTML = 'EGOR!'
//         phoneResult.style.color = 'red'
//     }
// })

//!  Recursion - ф-цтя вызывает сама себя

// let count = 0

// const recursionCount = () => {
//     count++
//     console.log(count);
//     recursionCount()
// }
// recursionCount()


//Синхронные ф-ции: - код содержащий задержку
// setTimeout( () => {
//     console.log(1);
// }, 0)

// console.log(4);

// setTimeout( () => {
//     console.log(2);
// }, 2000)
// setTimeout( () => {
//     console.log(3);
// }, 500)


// setInterval
// let num = 0

// const interval = setInterval( () => {
//     num++
//     console.log(num);
// }, 1000)

// setTimeout( () => {
//     clearInterval(interval)
// }, 6000)


//callback
// const subject = prompt('Subject?')
// const doHomeWork = (finish,subject) => {
//     alert(`starting my ${subject} home work!`)
//     finish()
// }

// const alertFinish = () => {
//     return alert('Finish!')
// }
// doHomeWork(alertFinish, subject)

//FIBANACCI - (числа фибаначи)
// const arr = [1,2,3,5,8,13]

// const newArr = arr.map((element, indexElement) => {
//     return element + indexElement
// })
// console.log(arr, 'Исход');
// console.log(newArr, 'Изменённый');


// const arr2 = [1,2,3,5,8,13]

// const newArr2 = arr2.forEach((element, indexElement) => {
//     console.log(element + indexElement)
// })

//   TAB Slider
const tabContentItem = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let pervousColor = null
let currentIndex = 0
let autoSwitchTimer


const hideTabContent = () => {
    tabContentItem.forEach(tabBlock => {
        tabBlock.style.display = 'none'
    });
    tabs.forEach(tabItem => {
        tabItem.classList.remove('tab_content_item_active')
    })
}
const showTabContent = (indexElement = 0) => {
    tabContentItem[indexElement].style.display = 'block'
}


hideTabContent()
showTabContent()


tabsParent.onclick = (event) => {
    if(event.target.classList.contains('tab_content_item')){
        tabs.forEach((tabItem, tabIndex) => {
            if(event.target === tabItem){
                if(pervousColor){
                    pervousColor.style.background = '', pervousColor.style.color = '#fff', pervousColor.style.width = '400px'
                }
                tabItem.style.background = 'linear-gradient(42deg, transparent 10px, #FCEE0A 0)', tabItem.style.color = 'black', tabItem.style.width = '280px', tabItem.style.margin = '0 auto'
                hideTabContent()
                showTabContent(tabIndex)
                pervousColor = tabItem
                clearTimeout(autoSwitchTimer)
            }
        })
    }
}

const autoSwitch = () => {
    hideTabContent()
    showTabContent(currentIndex)
    currentIndex++
        if(currentIndex >= tabs.length){
            currentIndex = 0
        }
    
    autoSwitchTimer = setTimeout(autoSwitch, 3000)
}
autoSwitch()


//   COnVERTER
const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const ediInput = document.querySelector('#edi')

const converterChanges = (elementValue, targetElement, variant) => {
    elementValue.oninput = () => {
        const request = new XMLHttpRequest
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()
    
        request.onload = () => {
            const response = JSON.parse(request.response)
            if(variant === 'som'){
                targetElement.value = (elementValue.value / response.usd).toFixed(2)
                usdInput.value = (elementValue.value / response.usd).toFixed(2), ediInput.value = (elementValue.value / response.edi).toFixed(2)
            } else if(variant === 'usd'){
                targetElement.value = (elementValue.value * response.usd).toFixed(2)
                somInput.value = (elementValue.value * response.usd).toFixed(2), ediInput.value = (elementValue.value * response.edi).toFixed(2)
            } else if(variant === 'edi'){
                targetElement.value = (elementValue.value * response.edi).toFixed(2)
                    somInput.value = (elementValue.value / response.edi).toFixed(2), usdInput.value = (elementValue.value / response.edi).toFixed(2)
            }
            if(elementValue.value === ''){
                targetElement.value = '', somInput.value = '', usdInput.value = '', ediInput.value = ''
            }
        }
    }
} 
converterChanges(somInput, usdInput, 'som')
converterChanges(usdInput, som, 'usd')
converterChanges(ediInput, somInput && usdInput, 'edi')