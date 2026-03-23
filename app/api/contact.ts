import axios from "axios";
import { ContactType } from "../_types/contact";

const API_URL = "http://localhost:3001";

export const getContacts = async () => {
  try {
    console.log("Fetching contacts for user:");

    const response = await axios.get(`${API_URL}/contacts`);

    console.log("API response:", response.data);

    const data = response.data;

    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.data)) return data.data;
    if (Array.isArray(data?.contacts)) return data.contacts;

    console.warn("Unexpected API format:", data);
    return [];
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return [];
  }
};

export const getContactById = async (id: string) => {
  const response = await axios.get(`${API_URL}/contacts/${id}`);
  return response.data;
};

export const createContact = async (contact: ContactType) => {
  const response = await axios.post(`${API_URL}/contacts`, contact);
  return response.data;
};

export const updateContact = async (id: string, contact: ContactType) => {
  const response = await axios.put(`${API_URL}/contacts/${id}`, contact);
  return response.data;
};

export const deleteContact = async (id: string) => {
  const response = await axios.delete(`${API_URL}/contacts/${id}`);
  return response.data;
};
