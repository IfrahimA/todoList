import { Project } from "./project";
import { Task } from "./task";
import { showProjectModal, hideProjectModal, submitProject, showTaskModal, submitTask, hideTaskModal } from "./modal.js";

let projects = []; 

export const addProject = () => 
{     
    const projects = document.querySelector('.projects'); 
    const projectBtn = projects.querySelector('button[type=submit]');

    //Submit and Cancel
    const cancelBtn = document.getElementById('cancelBtn');
    const submitBtn = document.getElementById('submitBtn'); 

    projectBtn.addEventListener('click', showProjectModal);
    cancelBtn.addEventListener('click', hideProjectModal);
    submitBtn.addEventListener('click', (e) => 
    {
        e.preventDefault();

        createProject(submitProject());
        hideProjectModal();
    })
}

export function createProject(title)
{
    let newProject = new Project(title);
    projects.push(newProject); 
    newProject.renderDOM(title); 
}

export function changeProjectDOM()
{
    const projectList = document.querySelector('.projectList');
    projectList.addEventListener('click', (e) => 
    {
        if(e.target.className === 'projectDisplay')
        {
            render(e.target.textContent);
            renderPreviousTasks(e.target.textContent);
        }
    })
}

export function render(t)
{
    const title = document.querySelector('.title'); 
    const taskBtn = document.querySelector('.taskBtn');
    const addTaskBtn = document.createElement('button');
    const tasks = document.querySelector('.tasks'); 

    title.textContent = t;

    taskBtn.innerHTML = ""; 
    tasks.innerHTML = ""; 

    //Button Properties
    taskBtn.appendChild(addTaskBtn);
    addTaskBtn.textContent = "+ Add Task"; 
    addTaskBtn.classList.add("addTaskBtn");
}

export function renderPreviousTasks(t)
{
    const title = document.querySelector('.title'); 
 
    for(let i = 0; i < projects.length; i++)
    {
        if(projects[i].getTitle() === title.textContent)
        {
            doSomethingRender(projects[i]);
        }
    }
}

function doSomethingRender(t)
{
    const tasks = document.querySelector('.tasks');
    const taskArr = t.getTasks();
    for(let i = 0; i < taskArr.length; i++)
    {
        const div = document.createElement('div'); 
        const title = document.createElement('div'); 
        const date = document.createElement('div');

        tasks.appendChild(div); 
        div.appendChild(title); 
        div.appendChild(date); 

        div.classList.add('task');

        title.textContent = taskArr[i].v1; 
        date.textContent = taskArr[i].v2; 
    }
}

export function addTask()
{
    const addTaskBtn = document.querySelector('.taskBtn');
    const title = document.querySelector('.title'); 
    const taskSubmitBtn = document.getElementById('taskSubmitBtn'); 
    const taskCancelBtn = document.getElementById('taskCancelBtn');


    addTaskBtn.addEventListener('click', (e) => 
    {
        e.preventDefault(); 

        if(e.target.className === 'addTaskBtn')
        {
            showTaskModal();
        }
    })
    taskCancelBtn.addEventListener('click', () => 
    {
        hideTaskModal(); 
    })
    taskSubmitBtn.addEventListener('click', () => {
        hideTaskModal();
        let task = renderTask(submitTask());
        for(let i = 0; i < projects.length; i++)
        {
            if(projects[i].getTitle() === title.textContent)
            {
                projects[i].addTasks(task);
                console.log(projects[i].getTitle());
                console.log(projects[i].getTasks());
            }
        }
    })
}

export function renderTask(t)
{
    const tasks = document.querySelector('.tasks'); 
    const div = document.createElement('div'); 
    const title = document.createElement('div'); 
    const date = document.createElement('div');

    tasks.appendChild(div); 
    div.appendChild(title); 
    div.appendChild(date); 

    div.classList.add('task');

    title.textContent = t[0]; 
    date.textContent = t[1];
    
    let v1 = t[0];
    let v2 = t[1]; 

    return {v1, v2};
}