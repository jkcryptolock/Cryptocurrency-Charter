const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));

app.listen(PORT, () => console.log(`crypto chart is running on port ${PORT}`));