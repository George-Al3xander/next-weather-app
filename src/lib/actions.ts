//@ts-ignore
import { parseString, parseStringPromise } from 'xml2js';

import { convertToJSObject } from '@/lib/utils';
import { Forecast, ThreeHourResponse } from '@/types/open weather/forecast';
import { TUnit } from '@/types/types';
import { ParsedCurrentWeatherResponse, XMlCurrentWeather } from '@/types/xml';

export const fetchCurrentWeather = async (params: {
    q: string;
    lang: string;
    units: TUnit;
}): Promise<XMlCurrentWeather | undefined> => {
    const currentWeatherParams = new URLSearchParams();

    currentWeatherParams.set('appid', process.env.OPEN_WEATHER_API_KEY!);
    currentWeatherParams.set('mode', 'xml');

    Object.keys(params).forEach((key) =>
        currentWeatherParams.set(key, params[key as 'q']),
    );
    currentWeatherParams.set('q', params.q.replaceAll('-', ' '));

    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?${currentWeatherParams.toString()}`,
        );

        if (!res.ok) throw new Error();

        const data = await parseStringPromise(await res.text(), {
            explicitArray: false,
        });
        if (!data) throw new Error();
        return data;
    } catch (e) {
        console.log(e);
        return;
    }
};

export const getCurrentWeather = async (params: {
    q: string;
    lang: string;
    units: TUnit;
}): Promise<ParsedCurrentWeatherResponse | undefined> => {
    try {
        const weather = await fetchCurrentWeather(params);

        if (!weather) throw new Error();

        return convertToJSObject<ParsedCurrentWeatherResponse>(weather);
    } catch (e) {
        console.log(e);
        return;
    }
};

export const getFiveDayForecast = async (params: {
    lang: string;
    units: TUnit;
    q: string;
}): Promise<Forecast[]> => {
    const weatherParams = new URLSearchParams();

    weatherParams.set('appid', process.env.OPEN_WEATHER_API_KEY!);

    Object.keys(params).forEach((key) =>
        weatherParams.set(key, params[key as 'q']),
    );
    weatherParams.set('q', params.q.replaceAll('-', ' '));
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?${weatherParams.toString()}`,
        );
        if (!res.ok) throw new Error();

        const data = (await res.json()) as ThreeHourResponse;
        return data.list;
    } catch (e) {
        console.log(e);
        return [];
    }
};
