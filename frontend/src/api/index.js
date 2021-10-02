import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api" });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("user")) {
//     req.headers.Authorization = JSON.parse(localStorage.getItem("user").token);
//   }
//   return req;
// });

// const headers = {
//   headers: {
//     "Content-Type": "Multipart/Form-Data",
//   },
// };

// auth api
export const login = (data) => API.post("/auth/login", data);
export const register = (data) => API.post("/auth/register", data);

// movie api
export const getMovies = () => API.get('/lists');
export const getMovie = (id) => API.get(`/movie/${id}`)
export const getRandomMovie = () => API.get('/movie/random');
export const getTypeMovie = (genre) => API.get(`/lists?type=Movie${genre ? "&genre=" + genre : ""}`)
export const getTypeSeries = (genre) => API.get(`/lists?type=Series${genre ? "&genre=" + genre : ""}`)
