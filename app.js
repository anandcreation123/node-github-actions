const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>Hello Anand 🚀</h1>
        <p>Node.js app deployed using GitHub Actions</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});