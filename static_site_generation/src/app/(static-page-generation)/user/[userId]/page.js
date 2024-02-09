import getUserData from "@/src/shared/api/getUserData";

async function page(props) {
  const getUser = getUserData();
  const user = await getUser;
  const id = props.params.userId;
  const userDetails = user[id - 1];

  return (
    <div>
      <h1 className="text-3xl text-center font-semibold">User Details</h1>
      <div className="card">
        <h1>Id :{userDetails.id}</h1>
        <h1>First Name : {userDetails.first_name}</h1>
        <h1>Last Name :{userDetails.last_name}</h1>
        <h1>Email :{userDetails.email}</h1>
      </div>
    </div>
  );
}

export default page;
