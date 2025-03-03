export default async function TodoItems() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  const todos = await response.json();
  return (
    <div className="todos-container">
      {todos.map(({ id, title, completed }) => (
        <div className="todo-item" key={id}>
          <input type="checkbox" checked={completed} readOnly />
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
}
