const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('order Service is running!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`order Service listening on port ${PORT}`));
