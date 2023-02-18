const mongoose = require('mongoose');
const DB_URL = "mongodb+srv://admin:admin@moviesproject.mwlkcuh.mongodb.net/moviesProject?retryWrites=true&w=majority"

mongoose
  .connect(DB_URL)
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err));