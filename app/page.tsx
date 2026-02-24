import Image from "next/image";
import HomeImage from "./components/HomeImage";
import HomeMain from "./components/HomeMain";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans text-black mb-4">
      <main className="max-w-175">
        <HomeImage/>
        <HomeMain/>
      </main>
    </div>
  );
}
