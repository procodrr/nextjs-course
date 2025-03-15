export default function ServiceItem({ serviceName }) {
  if (typeof window === "undefined") {
    console.log("Running ServiceItem as a Server Component");
  } else {
    console.log("Running ServiceItem as a Client Component");
  }

  return (
    <>
      <p style={{ display: "none" }}>ServiceItem Para</p>
      <li>{serviceName}</li>
    </>
  );
}
