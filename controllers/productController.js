const db = require('../config/database');

exports.create = (req, res) => {
  const { category_id, name, price } = req.body;
  db.query(
    'INSERT INTO products (category_id, name, price) VALUES (?, ?, ?)',
    [category_id, name, price],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Product created' });
    }
  );
};

exports.getAll = (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getById = (req, res) => {
  db.query(
    'SELECT * FROM products WHERE id = ?',
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result[0]);
    }
  );
};

exports.update = (req, res) => {
  const { name, price } = req.body;
  db.query(
    'UPDATE products SET name = ?, price = ? WHERE id = ?',
    [name, price, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Product updated' });
    }
  );
};

exports.delete = (req, res) => {
  db.query(
    'DELETE FROM products WHERE id = ?',
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Product deleted' });
    }
  );
};
