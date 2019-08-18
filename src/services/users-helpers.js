import { api } from "./api-helper";

//INITIAL DATA GRAB
const fetchRockData = async () => {
  const respData = await api.get(`/rocks`);
  return respData;
};
const fetchChakraData = async () => {
  const respData = await api.get(`/chakras`);
  return respData.data;
};
const fetchPropertyData = async () => {
  const respData = await api.get(`/properties`);
  return respData.data;
};

//ADD NEW ITEMS
const addRock = async body => {
  const respData = await api.post(`/rocks/new`, body);
  return respData;
};
const addProperty = async body => {
  const respData = await api.post(`/properties/new`, body);
  return respData;
};
const addColor = async body => {
  const respData = await api.post(`/color/new`, body);
  return respData;
};

//EDIT ROCKS
const editRock = async (id, body) => {
  const respData = await api.post(`/rocks/${id}/edit`, body);
  return respData;
};

//ASSOCIATE ROCKS
const addRockColor = async (id, rock_id) => {
  console.log(id, rock_id);
  const resp = await api.post(`/rock/${rock_id}/color/${id}/add`);
  return resp.data;
};
const setRockChakra = async (id, rock_id) => {
  console.log(id, rock_id);
  const resp = await api.post(`/rock/${rock_id}/chakra/${id}/add`);
  return resp.data;
};
const addRockProperty = async (id, rock_id) => {
  console.log(id, rock_id);
  const resp = await api.post(`/rock/${rock_id}/property/${id}/add`);
  return resp.data;
};

export {
  fetchRockData,
  fetchChakraData,
  fetchPropertyData,
  addRock,
  editRock,
  addProperty,
  addColor,
  setRockChakra,
  addRockColor,
  addRockProperty
};
