var todolist = {
  todos: [],
  // displays the list
  displayTodos: function(){
    // debugger;
    if(this.todos.length < 1){
      console.log("There are no todos yet.  Use addTodo if you want.");
    }else{
      console.log('My Todos: ');
      for(var i = 0; i < this.todos.length; i++){
        if(this.todos[i].completed === true){
          console.log("(x)", this.todos[i].todoText);
        }else{
          console.log("( )", this.todos[i].todoText);
        }//else
      }//for
    }//else
  },
  // adds a todo to the end of the list
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  // changes a todo
  changeTodo: function(pos, todoText){
    this.todos[pos].todoText = todoText;
    this.displayTodos();
  },
  // deletes a todo
  deleteTodo: function(pos){
    this.todos.splice(pos, 1);
    this.displayTodos();
  },
  // change if completed
  toggleCompleted: function(pos) {
    var todo = this.todos[pos];
    todo.completed = !todo.completed;
    this.displayTodos();
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
      console.log("all false");
      this.displayTodos();
    }
    // change all to true
    else{
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
      console.log("all true");
      this.displayTodos();
    }
  }
};

// refactored nicely
var handlers = {
  displayTodos: function(){
    todolist.displayTodos();
  },
  addTodo: function(){
    var addTodoText = document.getElementById('addTodoInput');
    todolist.addTodo(addTodoText.value);
    addTodoText.value = '';
  },
  changeTodo: function(){
    var changePositionInput = document.getElementById('changePosInput');
    var changeTextInput = document.getElementById('changeTextInput');
    todolist.changeTodo(changePositionInput.valueAsNumber, changeTextInput.value);
    changeTextInput.value = '';
    changePositionInput.value = '';
  },
  deleteTodo: function(){
    var deleteMe = document.getElementById('deletePosition');
    todolist.deleteTodo(deleteMe.valueAsNumber);
    deleteMe.value = '';
  },
  toggleCompleted: function(){
    var togglesNum = document.getElementById('togglesNum');
    todolist.toggleCompleted(togglesNum.valueAsNumber);
    togglesNum.value = '';
  },
  toggleAll: function(){
    todolist.toggleAll();
  }
}//handlers
