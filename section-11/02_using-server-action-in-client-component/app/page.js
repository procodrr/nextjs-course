"use client";

import { useEffect, useRef, useState } from "react";
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const { theme = "dark", setTheme } = useTheme();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    fetchTodos();
    fetchUser();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchUser = async () => {
    const response = await fetch("/api/user");
    const data = await response.json();
    if (response.status === 401) {
      return router.push("/login");
    }
    if (!data.error) {
      setUser(data);
    }
  };
  const fetchTodos = async () => {
    const response = await fetch("/api/todos");
    const data = await response.json();
    if (response.status === 401) {
      return router.push("/login");
    }
    if (!data.error) {
      setTodos(data.reverse());
    }
  };

  const addTodo = async (text) => {
    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ text }),
    });
    const newTodo = await response.json();
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = async (id) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });
    if (response.status === 204) {
      fetchTodos();
    }
  };

  const toggleTodo = async (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const response = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({ completed: !todo.completed }),
    });
    if (response.status === 200) {
      fetchTodos();
    }
  };

  const updateTodo = async (id, newText) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({ text: newText }),
    });
    if (response.status === 200) {
      fetchTodos();
    }
  };

  const handleLogout = async () => {
    const response = await fetch(`/api/logout`, {
      method: "POST",
    });
    if (response.status === 204) {
      return router.push("/login");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6">
      <div className="w-full max-w-lg">
        <header className="mb-8 flex justify-between items-center relative">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            My Todo App
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-muted transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="py-2 rounded-full hover:bg-muted transition-colors cursor-pointer"
                aria-label="User menu"
              >
                <UserIcon className="h-5 w-5" />
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 max-w-48 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-4 shadow-lg z-10 text-gray-900 dark:text-gray-100">
                  <div className="text-sm font-semibold">{user.name}</div>
                  <div
                    className="text-xs text-gray-600 dark:text-gray-400 mb-3 truncate"
                    title={user.email}
                  >
                    {user.email}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-red-500 hover:underline text-sm cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <TodoForm addTodo={addTodo} />

        <main className="mt-6">
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
          />
        </main>
      </div>
    </div>
  );
}
