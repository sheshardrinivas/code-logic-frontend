import Button from "./componets/Button";
export default async function Home() {
  return (
    <div className=" bg-[#000000] grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-screen  p-6 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] h-[100%] w-[100%] row-start-2 items-center sm:items-start">
        <Button />
      </main>
    </div>
  );
}
