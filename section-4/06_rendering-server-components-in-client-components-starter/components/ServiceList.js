"use client";
import ServiceItem from "./ServiceItem";

export default function ServiceList() {
  const services = [
    "Web Development",
    "Mobile App Development",
    "Consulting Services",
    "Digital Marketing",
  ];
  return (
    <>
      <h3>All Services List</h3>
      <ul className="services-list">
        {services.map((service) => (
          <ServiceItem key={service} serviceName={service} />
        ))}
      </ul>
    </>
  );
}
