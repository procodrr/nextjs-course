"use client";

export default function Button() {
  return (
    <button
      onClick={() => {
        console.log("Button Clicked");
      }}
    >
      Click Me
    </button>
  );
}
