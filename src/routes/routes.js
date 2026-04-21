const express = require('express');
const app = express();
const router = express.Router();

app.use(router);

router.get('/', (req, res) => {
    console.log('Received a request to the users path');
    res.send('This is the /users path from router file');
});

router.get('/about', (req, res) => {
    console.log('Received a request to the about path');
    res.send('This is the /about path');
});

router.get('/contact', (req, res) => {
    console.log('Received a request to the contact path');
    res.send('This is the /contact path');
});

module.exports = router;