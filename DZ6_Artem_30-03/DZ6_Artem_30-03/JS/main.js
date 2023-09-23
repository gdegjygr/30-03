        function add() {
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);
            const result = num1 + num2;
            document.getElementById("result").innerText = `${result}`;
        }

        function subtract() {
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);
            const result = num1 - num2;
            document.getElementById("result").innerText = `${result}`;
        }

        function multiply() {
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);
            const result = num1 * num2;
            document.getElementById("result").innerText = `${result}`;
        }

        function divide() {
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);
            if (num2 === 0) {
                document.getElementById("result").style.color = "red";
                document.getElementById("result").innerText = "Ошибка: деление на ноль";
            } else {
                const result = num1 / num2;
                document.getElementById("result").style.color = "black";
                document.getElementById("result").innerText = `${result}`;
            }
        }

        function clearResult() {
            document.getElementById("result").innerText = "";
            document.getElementById("num1").value = "";
            document.getElementById("num2").value = "";
        }
//2
function filterBooks(...books){
    const yourBooks = {}
    const otherBooks = {}

    for(let book of books){
        if(book.toLowerCase().includes('y')) 
        {yourBooks.push(book)}
        else{otherBooks.push(book)}
    }

console.log('Книги с символом =у=',yourBooks)
console.log('Другая литература', otherBooks)
}