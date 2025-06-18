const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const keywordRoutes = require('./routes/keywordRoutes');

app.use(express.json());

app.use('/books', bookRoutes);
app.use('/categories', categoryRoutes);
app.use('/keywords', keywordRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'book management API' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
