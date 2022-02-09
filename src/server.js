const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.json({ message: 'Connected to app.'});
});

const db = require('./app/models');
db.sequelize.authenticate().then(() => {
    console.log("Connected to COLADB.");
}).catch(err => {
    console.log('Unable to connect to db.', err);
});

require('./app/routes/SaleReps')(app);
require('./app/routes/Tradeshops')(app);

const PORT = 8080;
app.listen(PORT, "0.0.0.0");