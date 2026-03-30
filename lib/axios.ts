import axios from "axios"

const instance = axios.create({
  baseURL: "https://anorkhulov.uz/api", // backend URL
})

export default instance