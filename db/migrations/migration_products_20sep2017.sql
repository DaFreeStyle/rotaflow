

  \c rotaflow_dev

DROP TABLE products;

CREATE TABLE IF NOT EXISTS products (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(256),
  imgURL VARCHAR(256),
  productURL VARCHAR(256),
  description VARCHAR(1000)
);
