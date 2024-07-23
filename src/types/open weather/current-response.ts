import { CountryCode } from './country-code';
import { Coordinate } from './unit';
import {
    Base,
    Clouds,
    Main,
    Precipitation,
    Time,
    Weather,
    Wind,
} from './weather-response';

export interface CurrentWeatherSys {
    type?: number; // Internal parameter
    id?: number; // Internal parameter
    message?: number; // Internal parameter
    country: CountryCode; // Country code (GB, JP etc.)
    sunrise: Time; // Sunrise time, unix, UTC
    sunset: Time; // Sunset time, unix, UTC
}

export interface CurrentWeatherResponse {
    coord: Coordinate;
    weather: Weather[];
    base: Base;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    rain?: Precipitation;
    pop: number;
    snow?: Precipitation;
    dt: number;
    sys: CurrentWeatherSys;
    timezone: number; //
    id: number; // City-ID
    name: string; // City Name
    cod: number; // Internal parameter
}
