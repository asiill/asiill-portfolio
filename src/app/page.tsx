import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-6 p-16">
      <div className="flex flex-col gap-2 justify-center items-center">
          <p className="text-sm">Hello, I'm</p>
          <h1>Aseel Shakra</h1>
          <p>a front-end web developer</p>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center sm:flex-row">
          <Link href="/about">Learn more</Link>
          <Link href="/projects">See my projects</Link>
      </div>
    </main>
  );
}
