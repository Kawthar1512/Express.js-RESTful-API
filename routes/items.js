const express = require('express');
const router = express.Router();

let items = [
  { id: 1, name: 'Item One', description: 'This is item one' },
  { id: 2, name: 'Item Two', description: 'This is item two' }
];

// GET all items
router.get('/', (req, res) => {
  res.json(items);
});

// GET item by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

// POST create new item
router.post('/', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description required' });
  }

  const newItem = {
    id: items.length ? items[items.length - 1].id + 1 : 1,
    name,
    description
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT update item
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;
  const itemIndex = items.findIndex(i => i.id === id);
  if (itemIndex === -1) return res.status(404).json({ error: 'Item not found' });

  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description required' });
  }

  items[itemIndex] = { id, name, description };
  res.json(items[itemIndex]);
});

// DELETE item
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex(i => i.id === id);
  if (itemIndex === -1) return res.status(404).json({ error: 'Item not found' });

  const deletedItem = items.splice(itemIndex, 1);
  res.json({ message: 'Item deleted', item: deletedItem[0] });
});

module.exports = router;
