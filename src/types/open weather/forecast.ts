import {
    City,
    Clouds,
    ForecastPrecipitation,
    Main,
    Time,
    Weather,
    Wind,
} from './weather-response';

export interface ThreeHourResponse {
    cod: string;
    message: number;
    cnt: number;
    list: Forecast[];
    city: City;
}

export interface Forecast {
    dt: Time;
    main: Main & { temp_kf: number };
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    rain?: ForecastPrecipitation; // Only in the first Element when received in a Forecast list
    snow?: ForecastPrecipitation; // Only in the first Element when received in a Forecast list
    sys: ForecastSys;
    dt_txt: string; // Time of data forecasted, ISO, UTC
}

export interface ForecastSys {
    pod: 'd' | 'n'; // Part of the day (d = day, n = night)
}
