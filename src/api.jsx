import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001' 
});

export const getContacts = () => API.get('/contacts');
export const addContact = (contact) => API.post('/contacts', contact);
export const deleteContact = (id) => API.delete(`/contacts/${id}`);
export const updateContact = (id, contact) => API.put(`/contacts/${id}`, contact);
