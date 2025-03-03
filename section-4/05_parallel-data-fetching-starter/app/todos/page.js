const Todos = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  const todos = await response.json();

  const slowResponse2s = await fetch("https://procodrr.vercel.app/?sleep=2000");
  const data2s = await slowResponse2s.json();
  console.log(data2s);

  const slowResponse3s = await fetch("https://procodrr.vercel.app/?sleep=3000");
  const data3s = await slowResponse3s.json();
  console.log(data3s);

  return (
    <>
      <h1>Todos</h1>
      <div className="todos-container">
        {todos.map(({ id, title, completed }) => (
          <div className="todo-item" key={id}>
            <input type="checkbox" checked={completed} readOnly />
            <p>{title}</p>
          </div>
        ))}
      </div>
      <div>{JSON.stringify(data2s)}</div>
      <div>{JSON.stringify(data3s)}</div>
    </>
  );
};

export default Todos;
