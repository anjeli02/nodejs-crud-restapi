const db = require('../config/database');

exports.create = (req, res) => {
  const { name } = req.body;
  db.query(
    'INSERT INTO categories (name) VALUES (?)',
    [name],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Category created' });
    }
  );
};

exports.getAll = (req, res) => {
  db.query('SELECT * FROM categories', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getById = (req, res) => {
  db.query(
    'SELECT * FROM categories WHERE id = ?',
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result[0]);
    }
  );
};

exports.update = (req, res) => {
  const { name } = req.body;
  db.query(
    'UPDATE categories SET name = ? WHERE id = ?',
    [name, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Category updated' });
    }
  );
};

exports.delete = (req, res) => {
  db.query(
    'DELETE FROM categories WHERE id = ?',
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Category deleted' });
    }
  );
};
