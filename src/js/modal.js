export const showProjectModal = () => 
{
    const modal = document.querySelector('.modal');
    
    modal.classList.add('show');
    modal.classList.remove('hide'); 
}

export const showTaskModal = () => 
{
    const taskModal = document.querySelector('.taskModal'); 

    taskModal.classList.remove('hide'); 
    taskModal.classList.add('show'); 
}

export const hideProjectModal = () => 
{
    const modal = document.querySelector('.modal'); 
    
    modal.classList.remove('show'); 
    modal.classList.add('hide'); 
}

export const hideTaskModal = () => 
{
    const taskModal = document.querySelector('.taskModal'); 

    taskModal.classList.remove('show'); 
    taskModal.classList.add('hide'); 
}
    

export const submitProject = () => 
{
    const input = document.getElementById('titleInput');
    const result = input.value; 

    return result
}

export const submitTask = () =>
{
    const taskInput = document.getElementById('taskInput'); 
    const dateInput = document.getElementById('dateInput');

    const taskValue = taskInput.value; 
    const dateValue = dateInput.value; 

    return [taskValue, dateValue]; 
}