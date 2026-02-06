import { api } from "@/lib/axios";

const CreateUser = async () => {
  const res = await api.post("/users", {
    name: "JAHID",
    email: "rayhan33@gmail.com",
    age: 25,
    isMarried: false,
    nationality: "USA",
  });

  console.log(res.data);
};


export default CreateUser;