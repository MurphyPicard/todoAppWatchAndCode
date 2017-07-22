var todolist = {

  todos: ['testing...',1,2,3],

  displayTodos: function(){
    console.log('My Todos: ', this.todos);
  },

  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function(pos, todoText){
    this.todos[pos].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function(pos){
    this.todos.splice(pos, 1);
    this.displayTodos();
  }
};
