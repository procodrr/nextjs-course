"use client";

export default function ServiceList({ children }) {
  return (
    <>
      <h3>All Services List</h3>
      <ul className="services-list">{children}</ul>
    </>
  );
}
