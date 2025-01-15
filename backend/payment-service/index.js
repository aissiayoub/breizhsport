const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Payment Service is running!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Payment Service listening on port ${PORT}`));
