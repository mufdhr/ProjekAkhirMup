import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/says';

export const getSays = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching says:', error);
    throw error;
  }
};

export const createSay = async (say) => {
  try {
    const response = await axios.post(API_BASE_URL, say);
    return response.data;
  } catch (error) {
    console.error('Error creating say:', error);
    throw error;
  }
};

export const updateSay = async (id, updatedSay) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, updatedSay);
    return response.data;
  } catch (error) {
    console.error('Error updating say:', error);
    throw error;
  }
};

export const deleteSay = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting say:', error);
    throw error;
  }
};
