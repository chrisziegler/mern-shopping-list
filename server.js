const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

const items = require('./routes/api/items');

const app = express();

// instead of body-parser
app.use(express.json());

//DB config
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected to MongoDb'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
