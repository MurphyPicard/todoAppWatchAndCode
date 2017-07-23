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
    for (var i = 0; i < totalTodos; i++){
      if(this.todos[i].completed === true){
        completedTodos++;
      }
    }
    // if everythings true... change all to false
    if(completedTodos === totalTodos){
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    }
    // change all to true
    else{
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
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
  deleteTodo: function(){
    var deleteMe = document.getElementById('deletePosition');
    todolist.deleteTodo(deleteMe.valueAsNumber);
    deleteMe.value = '';
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
    for(var i = 0; i < todolist.todos.length; i++){
      var todoLi = document.createElement('li');
      var todo = todolist.todos[i];
      var todoTextWithCompletion = '';

      if(todo.completed){
        todoTextWithCompletion = "(x) " + todo.todoText;
      }else{
        todoTextWithCompletion = "( ) " + todo.todoText;
      }
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }//for
  }//displayTodos


}//view







//






//
