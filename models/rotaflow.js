const db = require('../db/config');

const Rotaflow = {};

Rotaflow.findAll = () => {
  return db.query(
    `SELECT * FROM rotaflow`
  );
};

Rotaflow.findById = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM rotaflow
    WHERE id = $1`,
    [id]
  );
};

Rotaflow.create = (rotaflow) => {
  return db.one(
    `
    INSERT INTO rotaflow(table)   //What table key values you put in.
    VALUES ($1, $2)
    RETURNING *`,
    [rotoflow.rotoflow, rotoflow.brand]
  );
};

module.exports = Rotaflow;
