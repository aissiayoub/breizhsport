const express = require('express');
require('dotenv').config()
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('favorites Service is running!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`favorites Service listening on port ${PORT}`));
