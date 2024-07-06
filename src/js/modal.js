
export const showModal = () => 
{
    const modal = document.querySelector('.modal');
    
    modal.classList.add('show');
    modal.classList.remove('hide'); 
}

export const hideModal = () => 
{
    const modal = document.querySelector('.modal'); 
    
    modal.classList.remove('show'); 
    modal.classList.add('hide'); 
}

export const submit = () => 
{
    const input = document.getElementById('titleInput');
    const result = input.value; 

    return result
}