function fetchTodos() {
  fetch('https://us-central1-cco-project-1b0ee.cloudfunctions.net/getTodos')
    .then(response => response.json())
    .then(data => {
      const todoListContainer = document.getElementById('todoList');
      
      // Clear existing todo items
      todoListContainer.innerHTML = '';

      // Iterate over the todo items and create list items
      data.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.textContent = todo.title;
        todoListContainer.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
fetchTodos();
