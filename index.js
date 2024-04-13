const express = require('express');
const bodyparser = require('body-parser');
const requestLogger  = require('./Utils/myReqLogger')
const route = require('./routes/routing')

const app = express();
app.use(bodyparser.json());
app.use(requestLogger);
app.use('/', route);

const port = process.env.PORT || 3008;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
