export function GET(request, { params }) {
  return Response.json({
    name: "Teephop",
    major: "IT",
    lv: "3",
    id: params.id,
  });
}
