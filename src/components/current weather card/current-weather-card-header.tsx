import React from 'react';

import { useTranslations } from 'next-intl';

import OpenWeatherImage from '@/components/open-weather-image';
import { getTemperatureUnits } from '@/lib/utils';
import { ParsedFeelsLike, ParsedTemperature, ParsedWeather } from '@/types/xml';

function CurrentWeatherCardHeader({
    weather,
    feels_like,
    temperature,
}: {
    weather: ParsedWeather;
    feels_like: ParsedFeelsLike;
    temperature: ParsedTemperature;
}) {
    const t = useTranslations('CityMainCard');
    const temp = `${Math.floor(Number(temperature.value))} ${getTemperatureUnits(temperature.unit)}`;
    const feels_like_temp = `${Math.floor(Number(feels_like.value))} ${getTemperatureUnits(feels_like.unit)}`;

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
                <p className={'text-4xl font-bold'}>{temp}</p>
                <OpenWeatherImage
                    width={100}
                    height={100}
                    alt={'Current weather icon'}
                    openWeatherId={weather.icon}
                />
            </div>
            <p className="capitalize">
                {t('header_feels', {
                    temp: feels_like_temp,
                    desc: weather.value,
                })}
            </p>
        </div>
    );
}

export default CurrentWeatherCardHeader;
