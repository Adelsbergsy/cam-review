import express from 'express';
import path from 'path';
import homepageRouter from './homepageRouter.js';
import assetsRouter from './assetsRouter.js';
import { fileURLToPath } from 'url';

const port = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.get('/api/v1/hello', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('dist'));
} else {
    app.use(express.static('public'));
    app.use('/src', assetsRouter);
}

app.use(homepageRouter);

app.use('/', (req, res) => {
    res.status(404).send('Incorrect address');
});

app.listen(port, () => {
    console.log('Server listening on port', port);
});
