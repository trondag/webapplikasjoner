import './style.scss'

window.onload = start;

function start(){
  initListeners();
  updateTodoListeners()
}

function initListeners(){
  document.querySelector('.create-todo-button').addEventListener('click', () => {
    showCreateTodoModal();
  })
  document.querySelector('#exit-create-todo-modal').addEventListener('click', () => {
    hideCreateTodoModal();
  })
  document.addEventListener('click', checkIfClickIsOutsideModal , true)
}

function showCreateTodoModal(){
  document.querySelector('.new-todo-modal').classList.add('show-modal')
  document.querySelector('#create-todo-button').addEventListener('click', createTodo)
}

function hideCreateTodoModal(){
  document.querySelector('.new-todo-modal').classList.remove('show-modal');
}

function checkIfClickIsOutsideModal(event) {
  if (!hasClass(event.target, 'new-todo-modal')){
    hideCreateTodoModal();
  }
}

// This recursive function is from stackoverflow.com (I'm lazy)
function hasClass(element, className) {
  var regex = new RegExp('\\b' + className + '\\b');
  do {
    if (regex.exec(element.className)) {
      return true;
    }
    element = element.parentNode;
  } while (element);
  return false;
}

function createTodo(){
  let data = {
    title:  document.querySelector('#new-todo-title').value,
    description: document.querySelector('#new-todo-description').value,
    author: document.querySelector('#new-todo-author').value
  }

  let todoCard = createTodoHtml(data)
  document.querySelector('.card-container').innerHTML += todoCard
  updateTodoListeners()
}

function createTodoHtml(data){
  return `
    <div class="todo-card">
      <h1 class="todo-title">${data.title}</h1>
      <p class="todo-author">${data.description}</p>
      <p class="todo-description">${data.author}</p>
      <button class="todo-delete">Delete</button>
      <button class="todo-complete">Complete</button>
    </div>
  `
}

function updateTodoListeners(){
  let deleteButtons = document.querySelectorAll('.todo-delete') 
  let completeButtons = document.querySelectorAll('.todo-complete') 
  for (let i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener('click', deleteTodo)
    completeButtons[i].addEventListener('click', completeTodo)
  }
}

function deleteTodo(){
  this.parentNode.remove()
}

function completeTodo(){
  let data = {
    title: this.parentNode.querySelector('.todo-title').innerHTML,
    description: this.parentNode.querySelector('.todo-description').innerHTML,
    author: this.parentNode.querySelector('.todo-author').innerHTML
  }
  createCompletedTodo(data)
  this.parentNode.remove()
}

function createCompletedTodo(data){
  let completedTodoEntry = createCompletedTodoHtml(data)
  document.querySelector('.finished-todos-tbody').innerHTML += completedTodoEntry
}

function createCompletedTodoHtml(data){
  return `
  <tr>
    <td>${data.title}</td>
    <td>${data.author}</td>
    <td>${data.description}</td>
    <td>${new Date().toLocaleDateString()}</td>
  </tr>
  `
}