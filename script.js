// Função que adiciona tarefa
function addTask() {
  // Título da tarefa
  const taskTitle = document.querySelector("#task-title").value;

  // Verifica se o título está ou não vazio, se estiver, não envia
  if (taskTitle) {
    // Clonar template em uma nova variável
    const template = document.querySelector(".template");

    // Nova tarefa
    const newTask = template.cloneNode(true); // Retorna um clone do elemento para o qual foi invocado.

    // Adiciona título
    newTask.querySelector(".task-title").textContent = taskTitle;

    // Remover as classes desnecessárias
    newTask.classList.remove("template");
    newTask.classList.remove("hide");

    // Adiciona tarefa na lista
    const list = document.querySelector("#task-list");
    list.appendChild(newTask);

    // Adicionar o evento de remover
    const removeBtn = newTask
      .querySelector(".remove-btn")
      .addEventListener("click", function () {
        removeTask(this); // Refere-se à tarefa em si para saber qual elemento que quero remover
      });

    // Adicionar evento de completar tarefa
    const doneBtn = newTask
      .querySelector(".done-btn")
      .addEventListener("click", function () {
        completeTask(this)
      });

    // Limpar texto
    document.querySelector("#task-title").value = "";
  } else {
    alert("Preencha a tarefa para prosseguir!");
  }
}

// Função de remover tarefa
function removeTask(task) {
  task.parentNode.remove(true); // Acessa o elemento pai (li) e remove a tarefa
}

// Função de completar tarefa
function completeTask(task) {
  const taskComplete = task.parentNode // // Acessa o elemento pai (li)
  taskComplete.classList.toggle("done") // Se estiver com o done ele tira, se não estiver ele coloca, verifica se o elemento tem a classe ou não (substitui o if else)
}

// Evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", function (e) {
  e.preventDefault(); // Impede que o evento padrão ocorra - adiciona o form aqui no front-end e não no servidor

  addTask();
});
