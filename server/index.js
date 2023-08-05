import express from 'express';
import path from 'path';
import homepageRouter from './homepageRouter.js';
import assetsRouter from './assetsRouter.js';
import { fileURLToPath } from 'url';

const port = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url))
// const publicPath = path.join(__dirname, '..', 'public');
// const assetsPath = path.join(__dirname, '..', 'src', 'assets', 'images');
// const distPath = path.join(__dirname, '..', 'dist');
const app = express();

app.get('/api/v1/hello', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static('dist'));
} else {
    app.use('/', express.static('public'));
    app.use('/src', assetsRouter)
}

// app.use(
//     express.static('./', {
//         setHeaders: function (res) {
//             res.set('Content-Security-Policy', "default-src 'self'");
//         },
//     })
// );

app.use(homepageRouter);

app.listen(port, () => {
    console.log('Server listening on port', port);
});
