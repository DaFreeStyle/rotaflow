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

Rotaflow.create = (product) => {
  return db.one(
    `
    INSERT INTO products (title, imgurl, producturl)
    VALUES ($1, $2, $3)
    RETURNING *`,
    [product.title, product.imgurl, product.producturl]
  );
};


Rotaflow.destroy = (id) => {
  return db.none(`
    DELETE FROM products
    WHERE id = $1
  `, [id]);
}

Rotaflow.update = (product, id) => {
  return db.one(
    `
    UPDATE products SET
    title = $1,
    imgurl = $2,
    producturl = $3

    RETURNING *
  `, [product.title, product.imgurl, product.producturl, id]);
}

module.exports = Rotaflow;
