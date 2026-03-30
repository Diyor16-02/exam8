import axios from "@/lib/axios";

export const signIn = async (data: any) => {
  const res = await axios.post("/auth/signin", data);
  return res.data;
};

export const signUp = async (data: any) => {
  const res = await axios.post("/auth/signup", data);
  return res.data;
};