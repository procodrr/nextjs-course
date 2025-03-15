"use client";

import { createUser } from "./actions"; // Import the server action

const Todos = () => {
  return (
    <>
      <h1>Todos</h1>
      <form
        action={async (e) => {
          try {
            const data = await createUser(e);
            console.log(data);
          } catch (err) {
            console.dir(err);
          }
        }}
      >
        <input type="text" name="username" value="Anurag Singh" readOnly />
        <input type="email" name="email" value="anurag@gmail.com" readOnly />
        <button type="submit">Submit</button>
      </form>

      {/* {state && <p className="text-green-500">{state.message}</p>} */}
    </>
  );
};

export default Todos;
