import axios from "axios";

export const getUsersRequest = async () =>
  await axios.get(`${import.meta.env.VITE_SERVER_URL}/users/users`);

export const getCitasRequest = async () =>
  await axios.get(`${import.meta.env.VITE_SERVER_URL}/users/citas/${fecha}`); 


export const addUsersRequest = async (user) =>
  await axios.post(`${import.meta.env.VITE_SERVER_URL}/users/users/add`, user);

export const addCitasRequest = async (citas) =>
  await axios.post(`${import.meta.env.VITE_SERVER_URL}/users/addcitas`, citas);
  


export const updateUsersRequest = async (user, id) =>
  await axios.put(
    `${import.meta.env.VITE_SERVER_URL}/users/users/edit/${id}`,
    user
  );

export const deleteUsersRequest = async (id) =>
  await axios.delete(
    `${import.meta.env.VITE_SERVER_URL}/users/users/delete/${id}`
);


//  _____________////////////_________________/////////// 



// import axios from "axios";

// const API_URL = import.meta.env.VITE_SERVER_URL;

// export const getUsers = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/users/users`);
//     return response.data;
//   } catch (error) {
//     console.error('Error al obtener los usuarios:', error);
//     throw error;
//   }
// };

// export const addUser = async (user) => {
//   try {
//     const response = await axios.post(`${API_URL}/users/users/add`, user);
//     return response.data;
//   } catch (error) {
//     console.error('Error al agregar el usuario:', error);
//     throw error;
//   }
// };

// export const updateUser = async (user, id) => {
//   try {
//     const response = await axios.put(`${API_URL}/users/users/edit/${id}`, user);
//     return response.data;
//   } catch (error) {
//     console.error('Error al actualizar el usuario:', error);
//     throw error;
//   }
// };

// export const deleteUser = async (id) => {
//   try {
//     await axios.delete(`${API_URL}/users/users/delete/${id}`);
//   } catch (error) {
//     console.error('Error al eliminar el usuario:', error);
//     throw error;
//   }
// };
