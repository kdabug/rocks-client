import { api } from "./api-helper";

const registerUser = async user => {
  const respData = await api.post(`/users/register`, user);
  console.log("this is create user: resp", respData);
  return respData;
};

const editUser = async (id, edits) => {
  console.log("making an edit request with this data", edits);
  const respData = await api.put(`/users/${id}/edit`, edits);
  console.log("this is edit user: resp", respData);
  return respData;
};

const loginUser = async user => {
  const respData = await api.post(`/users/login`, user);
  console.log("this is login user: resp", respData);
  return respData;
};

const favoriteRock = async (id, rock_id) => {
  console.log(id, rock_id);
  const resp = await api.post(`/user/${id}/rock/${rock_id}/add`);
  return resp.data;
};
const deleteFavoriteRock = async (id, rock_id) => {
  console.log(id, rock_id);
  const resp = await api.delete(`/rocks/${id}/user/${rock_id}/delete`);
  return resp.data;
};
const getUserRocks = async id => {
  const resp = await api.get(`/users/${id}/favorites`);
  return resp.data;
};

export {
  editUser,
  registerUser,
  loginUser,
  favoriteRock,
  getUserRocks,
  deleteFavoriteRock
};
