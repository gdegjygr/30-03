//   MODAL
const button = document.querySelector('#btn-get')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.modal_close')

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
    let windowHeight = window.innerHeight
    let scrollPosition = window.scrollY || document.body.scrollTop || document.documentElement.scrollTop
        //условие для модального окна
        if(scrollPosition + windowHeight == scrollHeight){
            modal.style.display = 'block'
            //отключение обработчика событий фноним. ф-ции
            // window.removeEventListener('scroll', arguments.callee)
            //отключение обработчика событий не анонимной ф-ции
            window.removeEventListener('scroll', scrollHandler)
        }
    }
window.addEventListener('scroll', scrollHandler)


const open = () => {
    modal.style.display = 'block'
}
button.onclick = () => open()
    const close = () => {
        modal.style.display = 'none'
    }
    closeModal.onclick = () => close()
    //Вызов ф-ции через 10сек. после открытия сайта
    function modalTime() {
        modal.style.display = 'block';
        window.removeEventListener('scroll', scrollHandler);
    }
    setTimeout(modalTime, 10000);