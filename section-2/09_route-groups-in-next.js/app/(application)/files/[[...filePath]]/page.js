export const metadata = {
  title: {
    absolute: "My Files",
  },
};

export default async function File({ params }) {
  const { filePath } = await params;
  return (
    <h1>
      File <i>/{filePath?.join("/")}</i>
    </h1>
  );
}
