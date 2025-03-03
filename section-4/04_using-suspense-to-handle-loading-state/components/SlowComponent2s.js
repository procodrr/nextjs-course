export default async function SlowComponent2s() {
  const response = await fetch("https://procodrr.vercel.app/?sleep=2000");
  const data = await response.json();

  return <div>{JSON.stringify(data)}</div>;
}
