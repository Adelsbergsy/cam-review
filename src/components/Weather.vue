<script setup>
import { ref } from 'vue';

async function weatherData(coords) {
    const response = await fetch('/api/v1/weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(coords),
    });

    const result = await response.json();

    const formatter = new Intl.NumberFormat('ru');

    temp.value = formatter.format(result.temperature);

    windSpeed.value = (result.windspeed * 0.277777778).toFixed(1);
    windSpeed.value = formatter.format(windSpeed.value);

    windDirection.value = result.winddirection;

    weatherCode.value = result.weathercode;

    defineWeatherType(weatherCode);

    windDirection.value = convertWindDirection(windDirection.value);
}

function yesGeoData(data) {
    const { latitude, longitude } = data.coords;

    const coords = {
        latitude,
        longitude,
    };

    weatherAvailability.value = true;

    weatherData(coords);
}

function noGeoData(data) {
    weatherAvailability.value = false;
}

function defineWeatherType(code) {
    switch (code.value) {
        case 0:
        case 1:
            weatherType.value = 'Ясно';
            icon.value = '../src/assets/images/sunny.svg';
            break;
        case 2:
        case 3:
            weatherType.value = 'Облачно';
            icon.value = '../src/assets/images/cloud.svg';
            break;
        case 45:
        case 48:
            weatherType.value = 'Туман';
            icon.value = '../src/assets/images/foggy.png';
            break;
        case 51:
        case 53:
        case 55:
            weatherType.value = 'Морось';
            icon.value = '../src/assets/images/drizzle.svg';
            break;
        case 56:
        case 57:
            weatherType.value = 'Изморозь';
            icon.value = '../src/assets/images/snow.svg';
            break;
        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
        case 80:
        case 81:
        case 82:
            weatherType.value = 'Дождь';
            icon.value = '../src/assets/images/rainy.svg';
            break;
        case 61:
        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
            weatherType.value = 'Снег';
            icon.value = '../src/assets/images/snow.svg';
            break;
        case 95:
        case 96:
        case 99:
            weatherType.value = 'Гроза';
            icon.value = '../src/assets/images/thunderstorm.svg';
            break;
        default:
            weatherType.value = 'Нет данных';
            icon.value = '../src/assets/images/alert-circle.svg';
            break;
    }
}

function convertWindDirection(degrees) {
    if ((degrees >= 0 && degrees <= 22) || (degrees >= 338 && degrees <= 360)) {
        return 'С';
    } else if (degrees >= 23 && degrees <= 67) {
        return 'СВ';
    } else if (degrees >= 68 && degrees <= 112) {
        return 'В';
    } else if (degrees >= 113 && degrees <= 157) {
        return 'ЮВ';
    } else if (degrees >= 158 && degrees <= 202) {
        return 'Ю';
    } else if (degrees >= 203 && degrees <= 247) {
        return 'ЮЗ';
    } else if (degrees >= 248 && degrees <= 292) {
        return 'З';
    } else if (degrees >= 293 && degrees <= 337) {
        return 'СЗ';
    }
}

navigator.geolocation.getCurrentPosition(yesGeoData, noGeoData);

const weatherAvailability = ref();
const temp = ref();
const windSpeed = ref();
const windDirection = ref();
const weatherCode = ref();
const weatherType = ref();
const icon = ref();

const isLoaded = ref(false);

setTimeout(() => (isLoaded.value = true), 350);
</script>

<template>
    <h3 class="weather-title">Погода сейчас</h3>
    <template v-if="weatherAvailability">
        <div
            class="weather-container"
            :class="!isLoaded ? 'weather-container_disabled' : ''"
        >
            <img :src="icon" alt="icon" class="weather-container__icon" />
            <span class="weather-container__data">{{ weatherType }}</span>
            <span class="weather-container__data">
                {{ `Температура воздуха: ${temp}°` }}
            </span>
            <span class="weather-container__data">
                {{ `Ветер: ${windSpeed} м/с, ${windDirection}` }}
            </span>
        </div>
    </template>
    <template v-else>
        <div
            class="weather-container weather-container_no-data"
            :class="!isLoaded ? 'weather-container_disabled' : ''"
        >
            <span class="weather-container__data">Погода недоступна</span>
        </div>
    </template>
</template>

<style scoped></style>
