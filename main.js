//adding functionality
const input=document.querySelector('.taskInput');
const button=document.querySelector('.taskEnter'); 
const list=document.querySelector('.taskList');
button.addEventListener('click',(e)=>{
    e.preventDefault();
    const newElement=document.createElement('li');
    newElement.textContent=input.value;
    list.appendChild(newElement);
    input.value='';
    newElement.addEventListener('click', () => {
        newElement.classList.toggle('priority');
    });
});
// deleting functionality
list.addEventListener('click',(e)=>{
    e.target.remove();
});
