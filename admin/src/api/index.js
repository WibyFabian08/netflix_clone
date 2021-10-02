import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:3000/api'})

export const getUsers = () => API.get('/users')
export const getUser = (id) => API.get(`/users/${id}`)
export const createUser = (data) => API.post('/auth/register', data);
export const updateUser = (id, data) => API.put(`/users/${id}/update`, data);
export const deleteUser = (id) => API.delete(`/users/${id}/delete`)

export const getMovies = () => API.get('/movie');
export const getMovie = (id) => API.get(`/movie/${id}`)
export const createMovie = (data) => API.post('/movie/create', data)
export const updateMovie = (id, data) => API.put(`/movie/${id}/update`, data)
export const deleteMovie = (id) => API.delete(`/movie/${id}/delete`)

export const getLists = () => API.get('/lists/all');
export const getList = (id) => API.get(`/lists/${id}`);
export const getMovieByListId = (id) => API.get(`/lists/${id}/movie`)
export const createList = (data) => API.post('/lists/create', data);
export const updateList = (id, data) => API.put(`/lists/${id}/edit`, data);
export const deleteList = (id) => API.delete(`/lists/${id}/delete`);
export const deleteMovieOnList = (listId, movieId) => API.put(`/lists/${listId}/${movieId}`);
