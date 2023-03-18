const express = require('express');
const products = require('./data/products');

const app = express();
app.get('/', (_req, res) => {
  res.send('api is running......... ');
});
app.get('/api/products', (_req, res) => {
  res.json(products);
});
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(5000, () => console.log('server running on port 5000'));
