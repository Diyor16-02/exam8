import axios from "axios"

const instance = axios.create({
  baseURL: "https://anorkulov.uz/api", // backend URL
})

export default instance