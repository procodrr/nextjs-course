"use client";

import { useActionState, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { registerUser } from "../actions/userAction";

export default function RegisterPage() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(registerUser, {});

  const [name, setName] = useState("ProCodrr");
  const [email, setEmail] = useState("procodrr@gmail.com");
  const [password, setPassword] = useState("123456");

  const [errors, setErrors] = useState({});

  const handleFormAction = async (formData) => {
    const newUser = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const formErrors = {};

    if (newUser.name.length < 3) {
      formErrors.name = "name should be at least 3 characters";
    }

    if (!newUser.email.includes("@")) {
      formErrors.email = "please enter a valid email";
    }

    if (newUser.password.length < 8) {
      formErrors.password = "password should be at least 8 characters";
    }

    if (Object.keys(formErrors).length) {
      console.log(formErrors);
      return setErrors(formErrors);
    }

    setErrors({});

    formAction(newUser);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6">
      <div className="w-full max-w-lg">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Todo App
          </h1>
        </header>
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form action={handleFormAction} className="space-y-4" noValidate>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 dark:text-white"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <p className="text-xs text-red-500 -mb-2">{errors.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p className="text-xs text-red-500 -mb-2">{errors.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="mt-1 w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="text-xs text-red-500 -mb-2">{errors.password}</p>
          </div>
          <p className="text-xs text-green-500">{state.message}</p>
          <p className="text-xs text-red-500">{state.error}</p>

          <button
            type="submit"
            className="w-full bg-gradient-to-r mt-2 from-blue-500 to-purple-600 text-white py-2 rounded-md font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isPending}
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
