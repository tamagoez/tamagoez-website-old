export default function Title({ title }) {
  if (process.browser) {
    document.title = `${title} - tamagoez`;
  }
  return (
    <>
      <h1 className="pt-2 text-4xl font-bold flex justify-center">{title}</h1>
      <div className="divider" />
    </>
  );
}
