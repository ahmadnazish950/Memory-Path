
let add = document.getElementById('add')

add.addEventListener('click', function () {
    let title = document.getElementById('title').value.trim();
    let description = document.getElementById('description').value.trim();
    let date = document.getElementById('date').value;
    let mood = document.getElementById('mood').value;

    if (!title || !description || !date) {
        alert("Please fill the box! - Try again")
        return;
    }

    let container = document.getElementById('memorycontainer')
    let memoryGen = document.createElement('div')
    
    memoryGen.classList.add('memoryGen')
    memoryGen.innerHTML =
     `

     <h1>${mood} ${title}</h1>
     <p>${description} </p>
     <small>${date} </small>
     <button class="delete-btn">Delete</button>

     `
    memoryGen.querySelector('.delete-btn').addEventListener('click', function () {
        memoryGen.remove()
    })

    container.appendChild(memoryGen)

    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('date').value = '';
})
