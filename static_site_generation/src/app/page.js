import Link from "next/link";

function Home() {
  return (
    <div className="w-full flex flex-col gap-10 container my-10">
      <h1 className="text-5xl font-semibold text-center">Topics</h1>
      <h1 className="text-3xl font-semibold">
        <Link href={"/user"}>1. Statics Page generation</Link>
      </h1>
      <h1 className="text-3xl font-semibold">
        <Link href={"/users"}>
          2. Statics Page generation with getstatic props
        </Link>
      </h1>
    </div>
  );
}
export default Home;
