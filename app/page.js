import Card from "./Card";


export default function Home() {
  return (
    <main className="p-4 flex flex-col">
      <div className="max-w-[1000px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"></div>
      <Card />
      <Card />
      <Card />
     <h1>products</h1>
    </main>
  );
}
