export class Project
{
    constructor(title)
    {
        this.title = title; 
        this.tasks = []; 
    }

    getTitle()
    {
        return this.title; 
    }

    getTasks()
    {
        return this.tasks;
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
    }
}