var todolist = {

  todos: ['item 1', 'item 2', 'item 3'],

  displayTodos: function(){
    console.log('My Todos: ', this.todos);
  },

  addTodo: function(todo){
    this.todos.push(todo);
    this.displayTodos();
  },

  changeTodo: function(pos, newValue){
    this.todos[pos] = newValue;
    this.displayTodos();
  },

  deleteTodo: function(pos){
    this.todos.splice(pos, 1);
    this.displayTodos();
  }
};

{
  todoText: 'item 1',
  completed: true
}
