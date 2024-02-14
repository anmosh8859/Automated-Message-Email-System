import { apiClient } from "./ApiClient";

export const authenticate = (credentials) => apiClient.post('/users/authenticate', credentials)

export const retrieveVolunteerById = (id) => apiClient.get(`/volunteers/forms/${id}`)