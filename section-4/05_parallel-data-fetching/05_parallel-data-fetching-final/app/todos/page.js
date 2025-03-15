async function fetchData(url) {
  const response = await fetch(url);
  return await response.json();
}

const urls = [
  "https://jsonplaceholder.typicode.com/todos?_limit=5",
  "https://procodrr.vercel.app/?sleep=2000",
  "https://procodrr.vercel.app/?sleep=3000",
];

const Todos = async () => {
  const [todos, data2s, data3s] = await Promise.all(
    urls.map((url) => fetchData(url))
  );

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
