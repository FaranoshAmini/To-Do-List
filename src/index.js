import './style.css';
function showTodo(todo) {
  const formList = document.querySelector('.form-list');
  const newList = document.createElement('li');
  newList.classList.add('newList');
  newList.innerHTML = `
    <input id='${todo.index}' class='check' type='checkbox'/>
    <span class='text'>${todo.description}</span>
    <span class='delete'><i class="bi bi-three-dots-vertical"></i></span>
  `;
  formList.append(newList);
}

const todoList = [];
let id = 1;
function add(text) {
  const todo = {
    description: text,
    completed: false,
    index: (id += 1),
  };
  todoList.push(todo);
  showTodo(todo);
}

const main = document.querySelector('.form');
main.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('.action');
  const text = input.value.trim();
  if (text !== '') {
    add(text);
    input.value = '';
    input.focus();
  }
});

const completed = document.querySelector('.newList');
completed.addEventListener('click', () => {
  completed.classList.toggle('complete');
});
