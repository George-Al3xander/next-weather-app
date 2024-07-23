import { TTempUnit } from '@/types/types';

type City = {
    $: {
        id: string;
        name: string;
    };
    coord: [
        {
            $: {
                lon: string;
                lat: string;
            };
        },
    ];
    country: [string];
    timezone: [string];
    sun: [
        {
            $: {
                rise: string;
                set: string;
            };
        },
    ];
};

type Temperature = {
    $: {
        value: string;
        min?: string;
        max?: string;
        unit: TTempUnit;
    };
};

type FeelsLike = {
    $: {
        value: string;
        unit: TTempUnit;
    };
};

type Humidity = {
    $: {
        value: string;
        unit: '%';
    };
};

type Pressure = {
    $: {
        value: string;
        unit: 'hPa';
    };
};

type Wind = {
    speed: [
        {
            $: {
                value: string;
                unit: 'm/s';
                name?: string;
            };
        },
    ];
    gusts?: [
        {
            $: {
                value: string;
            };
        },
    ];
    direction: [
        {
            $: {
                value: string;
                code: string;
                name: string;
            };
        },
    ];
};

type Clouds = {
    $: {
        value: string;
        name: string;
    };
};

type Visibility = {
    $: {
        value: string;
    };
};

type Precipitation = {
    $: {
        mode: 'no' | string;
    };
};

type Weather = {
    $: {
        number: string;
        value: string;
        icon: string;
    };
};

type LastUpdate = {
    $: {
        value: string;
    };
};

export type XMlCurrentWeather = {
    current: {
        city: [City];
        temperature: [Temperature];
        feels_like: [FeelsLike];
        humidity: [Humidity];
        pressure: [Pressure];
        wind: [Wind];
        clouds: [Clouds];
        visibility: [Visibility];
        precipitation: [Precipitation];
        weather: [Weather];
        lastupdate: [LastUpdate];
    };
};

export type ParsedCity = {
    id: string;
    name: string;
    coord: {
        lon: string;
        lat: string;
    };
    country: string;
    timezone: string;
    sun: {
        rise: string;
        set: string;
    };
};

export type ParsedTemperature = {
    value: string;
    min?: string;
    max?: string;
    unit: TTempUnit;
};

export type ParsedFeelsLike = {
    value: string;
    unit: TTempUnit;
};

export type ParsedHumidity = {
    value: string;
    unit: '%';
};

export type ParsedPressure = {
    value: string;
    unit: 'hPa';
};

export type ParsedWind = {
    speed: {
        value: string;
        unit: 'm/s';
        name?: string;
    };
    gusts?: string;
    direction: {
        value: string;
        code: string;
        name: string;
    };
};

export type ParsedClouds = {
    value: string;
    name: string;
};

export type ParsedVisibility = {
    value: string;
};

export type ParsedPrecipitation = {
    mode: 'no' | string;
};

export type ParsedWeather = {
    number: string;
    value: string;
    icon: string;
};

export type ParsedLastUpdate = {
    value: string;
};
export type TParsedCurrent = {
    city: ParsedCity;
    temperature: ParsedTemperature;
    feels_like: ParsedFeelsLike;
    humidity: ParsedHumidity;
    pressure: ParsedPressure;
    wind: ParsedWind;
    clouds: ParsedClouds;
    visibility: ParsedVisibility;
    precipitation: ParsedPrecipitation;
    weather: ParsedWeather;
    lastupdate: ParsedLastUpdate;
};

export type ParsedCurrentWeatherResponse = {
    current: TParsedCurrent;
};
