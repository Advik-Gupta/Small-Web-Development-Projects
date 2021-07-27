const form = document.querySelector('#form')
const div = document.querySelector('.container')


form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    let task = document.querySelector('#task').value
    let time = document.querySelector('#time').value
    const newTaskName = document.createElement('h4')
    const newTaskTime = document.createElement('h4')
    const newTask = document.createElement('div')
    const remove = document.createElement('button')
    const edit = document.createElement('button')
    newTaskName.innerText = `${task}`
    newTaskTime.innerText = `${time}`
    remove.innerText = 'Remove Task'
    edit.innerText = 'Edit Task'
    newTaskName.setAttribute('id', "taskHeader")
    newTaskTime.setAttribute('id', "taskTime")
    remove.setAttribute('id', "removeBtn")
    edit.setAttribute('id', "editBtn")
    newTask.append(newTaskName)
    newTask.append(newTaskTime)
    newTask.append(remove)
    newTask.append(edit)
    newTask.setAttribute('class', "tasks")
    div.append(newTask)
    document.querySelector('#task').value = ''
    document.querySelector('#time').value = ''

    remove.addEventListener('click', () => {
        const box = remove.parentElement;
        div.removeChild(box);
    })

    edit.addEventListener('click', () => {
        const l1 = document.createElement('label')
        const l2 = document.createElement('label')
        l1.innerText = 'Edit Task'
        l2.innerText = 'Edit Time'
        const editTask = document.createElement('input')
        const editTime = document.createElement('input')
        const save = document.createElement('button')
        editTask.value = `${newTaskName.innerText}`
        editTime.value = `${newTaskTime.innerText}`
        save.innerText = 'Save'
        save.setAttribute('id', 'saveBtn')
        form.append(l1)
        editTask.setAttribute('id', 'editTask')
        form.append(editTask)
        form.append(l2)
        editTime.setAttribute('id', 'editTime')
        form.append(editTime)
        form.append(save)

        save.addEventListener('click', (evt) => {
            evt.preventDefault()
            const newName = document.querySelector('#editTask').value
            const newTime = document.querySelector('#editTime').value
            newTaskName.innerText = `${newName}`
            newTaskTime.innerText = `${newTime}`
            form.removeChild(l1)
            form.removeChild(l2)
            form.removeChild(editTask)
            form.removeChild(editTime)
            form.removeChild(save)
        })
    })



})
