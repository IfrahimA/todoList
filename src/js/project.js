export class Project
{
    constructor(title)
    {
        this.title = title; 
        this.tasks = []; 
    }

    addTasks(task)
    {
        this.tasks.push(task)
    }
    
    removeTasks(task)
    {
        tasks = tasks.filter(task => task !== taskToRemove);
    }

    renderDOM(title)
    {
        const projects = document.querySelector('.projects'); 
        const projectList = projects.querySelector('.projectList');

        const projectDisplay = document.createElement('button');
        projectDisplay.textContent = title; 
        projectDisplay.classList.add('projectDisplay');

        projectList.appendChild(projectDisplay);

        projectDisplay.addEventListener('click', () => 
        {
            const button = document.createElement('button');
            const titleDisplay = document.createElement('div'); 
            
            const display = document.querySelector('.display'); 
            display.innerHTML = ""; 

            titleDisplay.textContent = title; 
            button.textContent = "+ Add Task"; 

            titleDisplay.classList.add('titleDisplay');
            button.classList.add('addTaskBtn');

            display.appendChild(titleDisplay); 
            display.appendChild(button); 
        })
    }
}

