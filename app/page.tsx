import axios from "axios";

async function getUserData() {
  await new Promise((r) => setTimeout(r, 3000));
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
}
export default async function Home() {
  const userDetails = await getUserData();
  return (
    <div className="items-center align-middle justify-center">
      Hii there
      <div className="p-10">
        {userDetails.email}
        {userDetails.password}
      </div>
    </div>
  );
}
