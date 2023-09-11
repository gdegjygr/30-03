console.log('Star Bucks')


document.querySelector('.b-10').addEventListener('click', () => {
    let data = document.querySelector('.s-10').value;
    document.querySelector('.out-10').innerHTML = data;
    if(data === 'coffee' || 'tea'){
        console.log(true)

    }
})
document.querySelector('.b-11').addEventListener('click', () => {
    let data2 = document.querySelector('.s-11').value;
    document.querySelector('.out-11').innerHTML = data2;
    if(data2 = 'Latte' || 'Espresso' || 'Pike Place' || 'House Blend' || 'Caffe Verona' || 'Espresso Roast' || 'Decaf Espresso Roas'){
        console.log('Order is accepted')
        alert('Checkout acess')
    }

})


function btn(){

let a = document.getElementById('press').value = alert('Order cancelled');
location.reload();
return;
}

function out(){
    document.getElementById('image2').style.display='flex'

}










// function myImg(){
// document.getElementById('image').style.display.none


// }







    // else {
    //     console.log(false)
    //     alert('pls return')
    //     location.reload()
    // }