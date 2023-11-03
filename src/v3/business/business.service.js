const {
  findAllBusiness,
  findBusinessByParams,
  findBusinessById,
  findBusinessByName,
  insertBusiness,
  updateBusiness,
  deleteBusiness,
} = require("./business.repository");

const getAllBusiness = async () => {
  const datas = await findAllBusiness();

  if (datas.length == 0) throw Error("Data masih kosong.");

  return datas;
};

const getBusinessByParams = async (params) => {
  const data = await findBusinessByParams(params);

  if (!data) throw Error(`Data dengan tidak ditemukan.`);

  return data;
};

const getBusinessById = async (id) => {
  const data = await findBusinessById(id);

  if (!data) throw Error(`Data dengan ID: ${id} tidak ditemukan.`);

  return data;
};

const createBusiness = async (newData) => {
  const findBusinessName = await findBusinessByName(newData.name);
  if (findBusinessName) throw Error("Nama sudah terdaftar.");

  await insertBusiness(newData);

  return newData;
};

const updateBusinessById = async (id, newData) => {
  await getBusinessById(id);

  const findBusinessName = await findBusinessByName(newData.name);
  if (findBusinessName) throw Error("Nama sudah terdaftar.");

  await updateBusiness(id, newData);

  return newData;
};

const deleteBusinessById = async (id) => {
  await getBusinessById(id);

  await deleteBusiness(id);
};

module.exports = {
  getAllBusiness,
  getBusinessByParams,
  getBusinessById,
  createBusiness,
  updateBusinessById,
  deleteBusinessById,
};
