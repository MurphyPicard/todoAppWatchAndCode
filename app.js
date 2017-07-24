var todolist = {
  todos: [],
  // adds a todo to the end of the list
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  // changes a todo
  changeTodo: function(pos, todoText){
    this.todos[pos].todoText = todoText;
  },
  // deletes a todo
  deleteTodo: function(pos){
    this.todos.splice(pos, 1);
  },
  // change if completed
  toggleCompleted: function(pos) {
    var todo = this.todos[pos];
    todo.completed = !todo.completed;
  },
  // change all to true or false
  toggleAll: function(){
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // how many completed? 
    this.todos.forEach(function(todo){
      if(todo.completed === true){
          completedTodos++;
      }
    });

    //   // refactored awesome below  --- refactored twice!
    this.todos.forEach(function(todo){
      if(completedTodos === totalTodos){
        todo.completed = false;
      }
      else{
        todo.completed = true;
      }
    });
  }
};

// refactored nicely
var handlers = {
  addTodo: function(){
    var addTodoText = document.getElementById('addTodoInput');
    todolist.addTodo(addTodoText.value);
    addTodoText.value = '';
    view.displayTodos();
  },
  changeTodo: function(){
    var changePositionInput = document.getElementById('changePosInput');
    var changeTextInput = document.getElementById('changeTextInput');
    todolist.changeTodo(changePositionInput.valueAsNumber, changeTextInput.value);
    changeTextInput.value = '';
    changePositionInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(pos){
    todolist.deleteTodo(pos);
    view.displayTodos();
  },
  toggleCompleted: function(){
    var togglesNum = document.getElementById('togglesNum');
    todolist.toggleCompleted(togglesNum.valueAsNumber);
    togglesNum.value = '';
    view.displayTodos();
  },
  toggleAll: function(){
    todolist.toggleAll();
    view.displayTodos();
  }
}//handlers

//only for viewing pleasure
var view = {
  displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    var that = this;
    // I could also write forEach(callback, this)
    todolist.todos.forEach(function(todo, pos){
        var todoLi = document.createElement('li');
        var todoTextWithCompletion = '';
        if(todo.completed){
          todoTextWithCompletion = "(x) " + todo.todoText;
        }else{
          todoTextWithCompletion = "( ) " + todo.todoText;
        }
        todoLi.id = pos;
        todoLi.textContent = todoTextWithCompletion;
        todoLi.appendChild(that.createDeleteButton());
        todosUl.appendChild(todoLi);
    });
  },//displayTodos
  createDeleteButton: function(){
    var deleteButton = document.createElement("button");
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },//createDeleteButton
  setUpEventListeners: function(){
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event){
      var elementClicked = event.target;
      if(elementClicked.className === 'deleteButton'){
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }// setUpEventListeners
}//view

// adds the event listener for ul tag
view.setUpEventListeners();







//






//
