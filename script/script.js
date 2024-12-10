let tarefa = document.getElementById('inputadd'); // campo de entrada
let botao = document.getElementById('botaoadd'); // botão de adicionar
let lista = document.getElementById('listadd'); // lista de tarefas

// Função para adicionar a tarefa
function add() {
  let tarefaTexto = tarefa.value.trim(); // Pega o valor do campo de entrada e remove espaços extras

  if (tarefaTexto !== '') { // Verifica se a tarefa não está vazia
    const li = document.createElement('li'); // Cria um novo item de lista
    li.innerHTML = `
      <span class="task-text">${tarefaTexto}</span>
      <button class="remove-btn">Remover</button>
    `;
    lista.appendChild(li); // Adiciona o item na lista
    tarefa.value = ''; // Limpa o campo de entrada
  }
}

// Adiciona o evento de clique no botão de adicionar
botao.addEventListener('click', add);

// Adiciona o evento de clique na lista para marcar como concluída
lista.addEventListener('click', (event) => {
  if (event.target.classList.contains('task-text')) { // Verifica se o item clicado é um texto de tarefa
    event.target.classList.toggle('completed'); // Marca ou desmarca a tarefa como concluída
  }

  // Se o botão de remover for clicado, remove a tarefa
  if (event.target.classList.contains('remove-btn')) {
    event.target.parentElement.remove(); // Remove o item de tarefa
  }
});
