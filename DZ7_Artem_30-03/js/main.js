const onBtns = document.querySelectorAll('.on');
const answers = document.querySelectorAll('.answer');

// Обработчик для каждой кнопки
onBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        if (answers[index].style.display === 'none' || answers[index].style.display === '') {
            answers[index].style.display = 'flex';
            btn.textContent = 'скрыть ответ';}
        else {
            answers[index].style.display = 'none';
            btn.textContent = 'показать ответ';}
    });
});



// let d = true

// answer.onclick=()=>{
//     if(d==true){
//         console.log("b");
//         d=false
//     }else if(d==false){
//         console.log("b");
//         d=true
//     }
// }