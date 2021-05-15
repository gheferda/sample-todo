//MY CODE

let inputbox = document.querySelector(".inputBox");
let addbtn = document.querySelector(".addBtn");
let todolist = document.querySelector(".todoList");

let inputVal = '';
inputbox.addEventListener("input", (e) => {
  inputVal = e.target.value;
});

let finishTodo = new Set();
addbtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!inputVal) {
    inputbox.focus();
  } 
  else {
    let newTodo = document.createElement('li');
      newTodo.innerText = inputVal;
    let doneBtn = document.createElement('button');
      doneBtn.innerText = "X";
    
    todolist.appendChild(newTodo);
    newTodo.appendChild(doneBtn);
    
    all = document.querySelectorAll('li');
    all.forEach(function(t, i){
      if (i >= 0) {
        t.classList.add('donebtn');
      }
    });

    inputbox.value = '';
    inputVal = '';
    inputbox.focus();

    let isTodoDone = false;
    if (doneBtn) {
      doneBtn.addEventListener("click", () => {
        if (!isTodoDone) {
          finishTodo.add(newTodo);
          console.log(finishTodo);

          finishTodo.forEach((todo) => {
            todo.style.textDecoration = "line-through";
            todo.remove(finishTodo);
          });
          doneBtn.innerText = "X";
          isTodoDone = true;
        } 
        else {
          //let todo = doneBtn.parentElement;
          //finishTodo.delete(todo);
          console.log(finishTodo);

          //todo.style.textDecoration = "none";
          //doneBtn.innerText = "delete";
          //isTodoDone = false;
        }
      });
    }
  }
});












/*let inputbox = document.querySelector(".inputBox");
let addBtn = document.querySelector(".addBtn");
let todoList = document.querySelector(".todoList");
let todoListArr = [];

addBtn.addEventListener('click', function () {
  let userinput = inputbox.value
  if (!userinput) {
    alert("empty")
  } else {
    todoListArr.push(userinput)
    renderList();
    inputbox.value = ''
  }
  inputbox.focus()
})

function renderList() {
  let list = ''
  todoListArr.forEach(function (todo, i) {
    list += `<li>
      <span id="todo-${i}" class="active">${todo}</span>
      <button id="btn-todo-${i}" onClick="toggleButton(${i})">Delete</button>
    </li>`
  });
  todoList.innerHTML = list;
}

function toggleButton(i) {
  let span = document.getElementById(`todo-${i}`);
  let btn = document.getElementById(`btn-todo-${i}`);

  if (span.classList.contains('active')) {
    span.classList.remove('active')
    btn.innerText = 'Restore'
  } else {
    span.classList.add('active')
    btn.innerText = 'Delete'
  }
}*/