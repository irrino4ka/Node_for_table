const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const SwaggerExpress = require('swagger-express-mw');
const app = require('express')();
module.exports = app;

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods: DELETE, PUT, UPDATE, HEAD, GET, POST'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const config = {
  appRoot: __dirname
};

SwaggerExpress.create(config, (err, swaggerExpress) => {
  const db_config = require('./config/db_config');
  mongoose.Promise = global.Promise;
  mongoose.connect(db_config.url, { useMongoClient: true })
  .then(() => {
      console.log('Database connected');
    },
    err => {
      console.log(err);
    }
  );

  swaggerExpress.register(app);

  const port = process.env.PORT || 10010;
  app.listen(port);
});
