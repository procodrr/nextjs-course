import todosData from "../../todos";

export function GET() {
  return Response.json(todosData);

  //   return new Response(JSON.stringify(todosData), {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     status: 200,
  //     statusText: "ProCodrr",
  //   });
}
