import express from 'express';

const app = express();
const port = 3000;

app.get('get', (req, res) => {
	res.send('Hello World!');
});

app.list(port, () => {
 console.log('Listening on port 3000');
});


