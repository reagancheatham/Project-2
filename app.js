require('dotenv').config();

import express, { json, urlencoded } from 'express';
import path from 'path';
const app = express();
let corsOptions = {
    origin: 'http://localhost:8081'
};
const port = process.env.PORT || 8080;

app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({extended: true}));
// app.use(express.static('public'));
// app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.json({ message: "Hello World!" });
});

app.post('/', (req, res) => {
    res.send('Got a POST request.');
});

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user.');
});

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user.');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});