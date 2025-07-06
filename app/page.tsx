export default async function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const data = await fetch(`${apiUrl}/api/paper`, {
    cache: "no-store",
  });
  const posts = await data.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-lg font-light">{posts.message}</h1>
      </main>
    </div>
  );
}
