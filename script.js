const tasks = document.getElementsByName("li")
taskArr = Array.from(tasks)
taskDelete = document.getElementsByClassName("far")
form = document.querySelector("form")
input = document.getElementById("todo_input")

//Event Listeners
form.addEventListener("submit", handleNewTask)

function handleComplete() {
    this.classList.toggle("completed")    
}

function handleDelete() {
    let starter = taskArr.indexOf(this)
    this.parentNode.parentNode.removeChild(this.parentNode)
    taskArr.splice(starter, 1)
}

function handleNewTask (event) {
    const ul = document.querySelector("ul")
    li = document.createElement("li")
    span = document.createElement("span")
    newTrash = document.createElement("i")
    t = document.createTextNode(" " + input.value)
    event.preventDefault()
    form.classList.add("was-validated")
    event.stopPropagation()
    if (input.value !== "") {
        span.appendChild(t)
        newTrash.classList.add("trash","far", "fa-trash-alt")
        li.appendChild(newTrash)
        li.appendChild(span)
        ul.appendChild(li)
        span.addEventListener("click", handleComplete)
        newTrash.addEventListener("click", handleDelete)
        taskArr.push(li)
        input.value = ""
        form.classList.remove("was-validated")
    }
}
