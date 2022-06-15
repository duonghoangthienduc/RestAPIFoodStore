const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = 1803;
const router = require('./src/routers/index.router');


app.use(morgan('common'));
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

router(app);

app.listen(port, () => {
  console.log(`Access to http://localhost:${port}/`)
})