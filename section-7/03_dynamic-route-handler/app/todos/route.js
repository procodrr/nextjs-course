import todosData from "../../todos";

export function GET() {
  return Response.json(todosData);
}
