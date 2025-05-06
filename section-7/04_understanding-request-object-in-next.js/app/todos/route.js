import todos from "../../todos";

export function GET(request) {
  console.log(request);
  return Response.json(todos);
}
