import express from 'express';
import path from 'path';
import fs from 'fs';
import https from 'https';
import homepageRouter from './homepageRouter.js';
import assetsRouter from './assetsRouter.js';

const port = process.env.PORT || 3000;

const app = express();

const options = {
    key: fs.readFileSync('./tls/private_key.pem'),
    cert: fs.readFileSync('./tls/certificate_full_chain.pem'),
};

app.use(express.json());

app.get('/api/v1/galleryFiles', (req, res) => {
    const galleryPath = path.resolve('./public/gallery');
    fs.readdir(galleryPath, 'utf8', (err, files) => {
        res.json({ files });
    });
});

app.post('/api/v1/weather', (req, res) => {
    const { latitude, longitude } = req.body;

    const url = new URL('https://api.open-meteo.com/v1/forecast');

    url.searchParams.append('latitude', latitude);
    url.searchParams.append('longitude', longitude);
    url.searchParams.append('current_weather', true);

    async function getWeatherData() {
        const response = await fetch(url);
        const result = await response.json();
        const { temperature, windspeed, weathercode, winddirection } =
            result.current_weather;
        res.json({
            temperature,
            windspeed,
            weathercode,
            winddirection,
        });
    }

    getWeatherData();
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

https.createServer(options, app).listen(port, () => {
    console.log('Server listening on port', port);
});

// app.listen(port, () => {
//     console.log('Server listening on port', port);
// });
