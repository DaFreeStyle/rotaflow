const db = require('../db/config');

const Rotaflow = {};

Rotaflow.findAll = () => {
  return db.query(
    `SELECT * FROM products`
  );
};

Rotaflow.findById = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM products
    WHERE id = $1`,
    [id]
  );
};

/*
Rotaflow.create = (product) => {
  return db.one(
    `
    INSERT INTO products(title, imgurl, producturl)
    VALUES ($1, $2, $3)
    RETURNING *`,
    [product.title, product.imgurl, product.producturl]
  );
};  */

module.exports = Rotaflow;
