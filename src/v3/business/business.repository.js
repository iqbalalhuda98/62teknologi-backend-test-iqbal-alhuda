const pgp = require("pg-promise")();
const config = require("../../db/config");
const db = pgp(config.db);

const { v4: uuidv4 } = require("uuid");

const findAllBusiness = async () => {
  const datas = await db
    .any("SELECT * FROM business")
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw Error(error);
    });

  return datas;
};

const findBusinessByParams = async (params) => {
  const { limit, offset, price, sort_by, open_now } = params;

  const sqlPrice = price ? `WHERE LENGTH(price) = ${price}` : "";
  const sqlOpenNow = open_now
    ? sqlPrice
      ? `AND is_closed = ${open_now}`
      : `WHERE is_closed = ${open_now}`
    : "";
  const sqlSortBy = sort_by ? `ORDER BY ${sort_by} DESC` : "";
  const sqlLimit = limit ? `LIMIT ${limit}` : "";
  const sqlOffset = offset ? `OFFSET ${offset}` : "";

  const datas = await db
    .any(
      `SELECT * FROM business
       ${sqlPrice}
       ${sqlOpenNow}
       ${sqlSortBy}
       ${sqlLimit}
       ${sqlOffset}`
    )
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw Error(error);
    });

  return datas;
};

const findBusinessById = async (id) => {
  const data = await db
    .oneOrNone("SELECT * FROM business where id=$1", [id])
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw Error(error);
    });

  return data;
};

const findBusinessByName = async (name) => {
  const data = await db
    .oneOrNone("SELECT * FROM business where name=$1", [name])
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw Error(error);
    });

  return data;
};

const insertBusiness = async (newData) => {
  const { name, image_url, is_closed, review_count, rating, price, distance } =
    newData;
  const id = uuidv4();

  await db
    .none(
      `INSERT INTO business (id, name, image_url, is_closed, review_count, rating, price, distance) 
       VALUES('${id}', '${name}', '${image_url}', ${is_closed}, ${review_count}, ${rating}, '${price}', ${distance})`
    )
    .then(() => {
      console.log("Success inserting data.");
    })
    .catch((error) => {
      throw Error(error);
    });
};

const updateBusiness = async (id, newData) => {
  const { name, image_url, is_closed, review_count, rating, price, distance } =
    newData;

  await db
    .none(
      `UPDATE business 
       SET name='${name}', image_url='${image_url}', is_closed=${is_closed}, 
           review_count=${review_count}, rating=${rating}, price='${price}', distance=${distance} 
       WHERE id=$1`,
      [id]
    )
    .then(() => {
      console.log("Success updating data.");
    })
    .catch((error) => {
      throw Error(error);
    });
};

const deleteBusiness = async (id) => {
  await db
    .none("DELETE FROM business where id=$1", [id])
    .then(() => {
      console.log("Success deleting data.");
    })
    .catch((error) => {
      throw Error(error);
    });
};

module.exports = {
  findAllBusiness,
  findBusinessByParams,
  findBusinessById,
  findBusinessByName,
  insertBusiness,
  updateBusiness,
  deleteBusiness,
};
