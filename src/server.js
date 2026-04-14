const express = require('express');
const app = express();

const PORT = 3000; 

app.set('view engine', 'ejs');
const path = require('path');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    console.log('Received a request to the root path');
    res.render('index.ejs', { name: '😁' });
    // res.json({'message': 'Hello, World!'});
    // res.download("src/server.js");
    // res.sendStatus(200);
});

app.get('/about', (req, res) => {
    console.log('Received a request to the about path');
    res.render('about.ejs', { name: '😁' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});