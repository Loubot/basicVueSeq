const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


const corsOptions = {
  origin: 'http://localhost:8080',
};

app.use(cors(corsOptions));

const db = require('./models');
db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and re-sync db.');
// });

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to bezkoder application.' });
});

require('./routes/route.tutorial')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
