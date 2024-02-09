import axios from "axios";

export default async function () {
  const response = await axios.get("https://reqres.in/api/users");

  return response.data.data;
}
