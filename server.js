const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


const corsOptions = {
  origin: 'http://localhost:3001',
};

app.use(cors(corsOptions));
app.use(express.json());

const db = require('./models');
db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and re-sync db.');
// });

// parse requests of content-type - application/json. makes this a json server. I think.
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to bezkoder application.' });
});

require('./routes/route.tutorial')(app);
require('./routes/route.user')(app);
require('./routes/route.auth')(app);
require('./routes/route.user')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



app.get('*', function (request, response) {
    response.sendFile(('./public/index.html'));
  });
