const input = document.querySelector('input[type="text"]')
const addButton = document.getElementById('add')
const delButton = document.getElementById('del')
const ul = document.querySelector('ul');

addButton.addEventListener('click', () => {

    //Verifica se o campo de entrada não está vazio
    if (input.value.trim() !== ''){
        //Cria um novo item de lista
        const li = document.createElement('li');
        li.textContent = input.value; //Adiciona o texto da tarefa

        //Cria um botão de excluir
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('delete-btn')
        deleteButton.addEventListener('click', () =>{
            ul.removeChild(li); //Remove a tarefa
        });

        li.appendChild(deleteButton); //Adiciona o botão de excluir a tarefa
        ul.appendChild(li); //Adiciona a tarefa a lista
        input.value = ''; // Limpa o campo de entrada
        }else{
        alert('Por favor, digite uma tarefa!')
        }
});

// Função para excluir todas as tarefas
delButton.addEventListener('click', () =>{
    ul.innerHTML = ''; 
});

// Função para marcar tarefa como concluída
ul.addEventListener('click', (e) =>{
    if (e.target.tagName === 'LI'){
     e.target.classList.toggle('completed'); // Marca ou desmarca a tarefa
    }
});

input.addEventListener('keydown', (e) =>{
    if (e.key === 'Enter'){
        e.preventDefault(); 
        addButton.click();
    }
})