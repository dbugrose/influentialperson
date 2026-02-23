import Image from "next/image";
import BackgroundImage from "./components/BackgroundImage";
import HomeImage from "./components/HomeImage";
import HomeMain from "./components/HomeMain";

const name = "Mary Oliver"
const date = "(1935-2019)"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans text-black mb-4">
      <main className="max-w-175">
        <HomeImage/>
        <h1 className="text-center text-3xl">{name}</h1>
        <h2 className=" text-center text-2xl mb-4">{date}</h2>
        <HomeMain/>
      </main>
    </div>
  );
}
