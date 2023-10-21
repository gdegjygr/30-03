const btn = document.querySelector('.button')
const div = document.querySelector('.conclution')
const div2 = document.querySelector('.conclution-2')

btn.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    
    request.onload = () => {
        let data = JSON.parse(request.response)
        console.log(data);
    }
    
    
    const cardContainer = document.querySelector('.card-container')
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
        <h1>Name: ${obj.name}</h1>
        <p>Age: ${obj.age}</p>
        <p>Gender: ${obj.gender}</p>
        `
    cardContainer.appendChild(card);
}



const obj = [
    {
        name: 'John',
        age: 30,
        gender: 'male',
    },
    {
        name: 'Mary',
        age: 25,
        gender: 'female',
    },
    {
        name: 'David',
        age: 35,
        gender: 'male',
    }
]