import getUserData from "@/src/shared/api/getUserData";
import Link from "next/link";

async function page() {
  const getUser = getUserData();
  const user = await getUser;

  return (
    <div className="container">
      <h1 className="text-3xl text-center font-semibold">User Name</h1>
      {user.map((data) => {
        return (
          <div key={data.id}>
            <ul className="text-2xl fomg-semibold list-disc flex flex-col gap-5 mt-10">
              <li>
                <Link href={`user/${data.id}`} className="text-blue-700">
                  {data.first_name}
                </Link>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default page;
