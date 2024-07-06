import { Project } from "./project";
import { Task } from "./task";
import { showModal, hideModal, submit } from "./modal";

export const addProject = () => 
{     
    const projects = document.querySelector('.projects'); 
    const projectBtn = projects.querySelector('button[type=submit]');

    //Submit and Cancel
    const cancelBtn = document.getElementById('cancelBtn');
    const submitBtn = document.getElementById('submitBtn'); 

    projectBtn.addEventListener('click', showModal);
    cancelBtn.addEventListener('click', hideModal);
    submitBtn.addEventListener('click', (e) => 
    {
        e.preventDefault();
        let result = submit();

        handleSubmittedData(submit());
        hideModal();
    })


}

export function handleSubmittedData(title)
{
    let newProject = new Project(title);
    newProject.renderDOM(title); 
}

export const renderProjectNAV = () => 
{
}