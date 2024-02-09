const db = require("../models");

const getById = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const compound = await db.Compound.findOne({
      where: {
        id,
      },
    });

    if (compound) {
      res.send(compound);
    } else {
      res.status(404).send("Compound not found");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const addToDB = async (req, res) => {
  try {
    const compound = await db.Compound.create(req.body);
    res.send(compound);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateById = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const compound = await db.Compound.update(data, {
      where: {
        id,
      },
    });

    res.send(`Compound updated successfully.`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedCompounds = await db.Compound.destroy({
      where: {
        id,
      },
    });

    if (deletedCompounds === 0) {
      res.send("No compounds were deleted.");
    } else {
      res.send(`Compound with id = ${id} deleted.`);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getAll = async (req, res) => {
  try {
    const compoundsList = await db.Compound.findAll();
    res.send(compoundsList);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getById,
  addToDB,
  updateById,
  deleteById,
  getAll,
};
