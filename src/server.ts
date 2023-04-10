import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ message: 'hello world' }));

app.listen(3333, () => console.log('Server is running!'));
