import express from 'express';
import path from 'path';
import homepageRouter from './homepageRouter.js';
import assetsRouter from './assetsRouter.js';
import { fileURLToPath } from 'url';
import cors from 'cors';
// import session from 'express-session';
// import cookieParser from 'cookie-parser';

const port = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
// const secret = 'camReview';

// const sessionConfig = {
//     secret,
//     name: 'appName',
//     //resave: false,
//     saveUninitialized: false,
//     cookie: {
//         sameSite: 'none', // THIS is the config you are looing for.
//     },
// };

app.use(cors());
//app.use(cookieParser(secret));
// app.use(session(sessionConfig));
app.use(express.json());

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

app.listen(port, () => {
    console.log('Server listening on port', port);
});
