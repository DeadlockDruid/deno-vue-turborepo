// src/services/api.ts
import axios, { type AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: VITE_API_BASE_URL,
})

export default api