"use client";

import TodoItem from "./TodoItem";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TodoList = ({ todos, deleteTodo, toggleTodo, updateTodo }) => {
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const pendingCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - pendingCount;

  if (todos.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-muted-foreground">No todos yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          <span>{pendingCount} pending</span>
          {completedCount > 0 && <span>, {completedCount} completed</span>}
        </div>

        <div className="flex space-x-2 text-sm">
          <button
            onClick={() => setFilter("all")}
            className={`px-2 py-1 rounded-md transition-colors ${
              filter === "all"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`px-2 py-1 rounded-md transition-colors ${
              filter === "active"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-2 py-1 rounded-md transition-colors ${
              filter === "completed"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            }`}
          >
            Completed
          </button>
        </div>
      </div>

      <ul className="space-y-3">
        <AnimatePresence>
          {filteredTodos.map((todo) => (
            <motion.li
              key={todo.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.2 }}
            >
              <TodoItem
                todo={todo}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
                updateTodo={updateTodo}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default TodoList;
