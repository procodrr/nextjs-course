"use client";

export default function Error({ error, reset }) {
  console.dir(error);

  return (
    <div>
      <p>Something went wrong in home page</p>
      <button
        onClick={() => {
          reset();
        }}
      >
        Try Again
      </button>
    </div>
  );
}
