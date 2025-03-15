export default function ServiceItem({ serviceName }) {
  if (typeof window === "undefined") {
    console.log("Running ServiceItem as a Server Component");
  } else {
    console.log("Running ServiceItem as a Client Component");
  }
  return <li>{serviceName}</li>;
}
