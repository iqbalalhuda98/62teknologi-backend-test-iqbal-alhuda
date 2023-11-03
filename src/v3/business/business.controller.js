const express = require("express");
const router = express.Router();

const middlewareAuth = require("../../middleware/auth");

const {
  getAllBusiness,
  getBusinessByParams,
  getBusinessById,
  createBusiness,
  updateBusinessById,
  deleteBusinessById,
} = require("./business.service");

router.get("/", async (req, res) => {
  try {
    const business = await getAllBusiness();

    res.status(200).send(business);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/search", async (req, res) => {
  try {
    const params = req.query;
    const business = await getBusinessByParams(params);

    res.status(200).send(business);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/:id", middlewareAuth, async (req, res) => {
  try {
    const id = req.params.id;
    const business = await getBusinessById(id);

    res.status(200).send(business);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", middlewareAuth, async (req, res) => {
  try {
    const newData = req.body;

    const business = await createBusiness(newData);

    res.status(201).send({
      message: "Create business success.",
      newData: business,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", middlewareAuth, async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;

    const business = await updateBusinessById(id, newData);

    res.status(201).send({
      message: "Update business success.",
      newData: business,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", middlewareAuth, async (req, res) => {
  try {
    const id = req.params.id;
    await deleteBusinessById(id);

    res.status(201).send({
      message: "Delete business success.",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
