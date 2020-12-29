const tasksContainer = document.querySelector('#tasks');
let nameTask = document.querySelector('#taskInput');
let descriptionTask = document.querySelector('#descripInput');
let dateTask = document.querySelector('#dateInput');
const addButton = document.querySelector('#add-btn');
const fragment = document.createDocumentFragment();
const form = document.querySelector('#form');

class Task{
    constructor(name, description, date, id){
        this.name = name;
        this.description = description;
        this.date = date;
        this.randId = id;
    }
    showInfo(){
        let info = `<div id="${this.randId}" class="task">
                        <div class="task-head">
                            <h2>${this.name}</h2>
                            <h3>${this.date}</h3>
                        </div>
                        <div class="task-body">
                            <p>${this.description}</p>
                        
                            <button id="btn-eliminar" onclick="deleteElementById(${this.randId})">Eliminar</button>
                        </div>
                      </div>`
        return info;
    }
    showMessage(msg){
        if(msg == true){
            let message = document.createElement('p');
            message.textContent = `Task ${this.name} created successful!`;
            return message;
        }
    }
}

function deleteMessage(element){
    setTimeout(()=>{
        form.removeChild(element);
    }, 3000)
}

function getRandomId(){
    let id = Math.random() * 100;
    return id;
}

function deleteElementById(id){
    let taskToDelete = document.getElementById(id);
    tasksContainer.removeChild(taskToDelete);
}

function getInfo(name, description, date){
    let newId = getRandomId();
    let newElement = new Task(name, description, date, newId);
    let newTaskElement = fragment.appendChild = newElement.showInfo();

    tasksContainer.innerHTML += newTaskElement;
    
    let messageElement = newElement.showMessage(true);
    form.appendChild(messageElement)
    
    deleteMessage(messageElement);
}

addButton.addEventListener('click', (e) => {
    let nameTaskValue = nameTask.value;
    let descriptionValue = descriptionTask.value;
    let dateValue = dateTask.value;
    
    getInfo(nameTaskValue, descriptionValue, dateValue);

    e.preventDefault();
})

