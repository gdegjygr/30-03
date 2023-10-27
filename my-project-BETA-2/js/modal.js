//   MODAL
const button = document.querySelector('#btn-get')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.modal_close')


const open = () => {
    modal.style.display = 'block'
}
button.onclick = () => open()
const close = () => {
    modal.style.display = 'none'
}
closeModal.onclick = () => close()



function scrollHandler() {
    //Вычисляем прокрутку страницы
    const scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
        )
         //условие для модального окна
        if(window.innerHeight + window.scrollY == scrollHeight){
            modal.style.display = 'block'
            window.removeEventListener('scroll', scrollHandler)
        }
    }
window.addEventListener('scroll', scrollHandler)
    //Вызов ф-ции через 10сек. после открытия сайта
    function modalTime() {
        modal.style.display = 'block';
        window.removeEventListener('scroll', scrollHandler);
    }
    setTimeout(modalTime, 10000);


// POST DATA



