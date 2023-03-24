/* eslint-disable no-unused-vars */
const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  //res.json({ characters: ['Luke', 'Leia', 'Han'] });
  throw new Error('BROKEN');
});

//Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.status(404).render('notfound.ejs', {
      error: err.message,
      status: 404,
      message: 'Not Found',
      stack: err.stack,
    });
    next();
  } else {
    res.status(500).render('error.ejs', {
      error: err.message,
      status: 500,
      message: 'Internal Server Error',
      stack: err.stack,
    });
    next();
  }
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
