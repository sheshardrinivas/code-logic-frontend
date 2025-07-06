export default async function Home() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  let data = await fetch(`${apiBaseUrl}/api/hello`, {
    cache: "no-store",
  });
  var posts = await data.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="list-inside  text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="tracking-[-.01em]">{posts.message}</li>
        </ol>
      </main>
    </div>
  );
}
