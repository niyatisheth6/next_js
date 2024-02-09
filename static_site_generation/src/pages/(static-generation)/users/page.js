import React from "react";

function Users() {
  console.log(props); // Now props will not be undefined
  return (
    <div>
      <h1>user Data</h1>
      <h1>{props.name}</h1>
    </div>
  );
}

export default Users;

export async function getStaticProps() {
  return {
    props: {
      name: "niyu",
    },
  };
}
