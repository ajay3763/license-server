const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

// --- YOUR DATABASE OF VALID KEYS ---
// When a customer pays, you will add their key to this list.
const validKeys = [
    'TEST-KEY-123', // This is a test key you can use
    'ANOTHER-KEY-ABC',
    'KEY-FOR-FIRST-CUSTOMER'
];

// --- ENDPOINT 1: VALIDATE A KEY ---
app.get('/validate-key', (req, res) => {
    const userKey = req.query.key;
    if (validKeys.includes(userKey)) {
        res.json({ status: 'valid' });
    } else {
        res.json({ status: 'invalid' });
    }
});

// --- ENDPOINT 2: PROVIDE THE SECRET SCRIPT ---
app.get('/get-script', (req, res) => {
    const filePath = path.join(__dirname, 'obfuscated_script.js');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error: Could not load the script file.');
            return;
        }
        res.type('application/javascript').send(data);
    });
});

// This is the main page of your server, you can ignore it.
app.get('/', (req, res) => {
    res.send('License server is operational.');
});

// Starts the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
