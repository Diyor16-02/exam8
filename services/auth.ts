import axios from "@/lib/axios"

export const signIn = async (data: any) => {
  const res = await axios.post("/auth/login", data)
  return res.data
}

export const signUp = async (data: any) => {
  const res = await axios.post("/auth/register", data)
  return res.data
}