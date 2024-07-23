import React from 'react';

import dayjs from 'dayjs';
import { getTranslations } from 'next-intl/server';

import OpenWeatherImage from '@/components/open-weather-image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { getFiveDayForecast } from '@/lib/actions';
import { getTemperatureUnits } from '@/lib/utils';
import { TUnit } from '@/types/types';

async function FiveDayForecast(props: {
    lang: string;
    units: TUnit;
    q: string;
}) {
    // await new Promise((resolve) => setTimeout(resolve, 500000));
    const data = await getFiveDayForecast(props);
    const t = await getTranslations('FiveDayForecast');

    return (
        <Card variants="custom">
            <CardHeader>
                <CardTitle variants="custom">{t('title')}</CardTitle>
            </CardHeader>
            <CardContent>
                <Carousel>
                    <CarouselContent>
                        {data.map(({ dt, main: { temp }, weather }) => (
                            <CarouselItem
                                className="flex flex-col items-center sm:basis-1/3"
                                key={dt}
                            >
                                <div className="flex items-center gap-2">
                                    <OpenWeatherImage
                                        width={75}
                                        height={75}
                                        alt={weather[0].main + ' image'}
                                        openWeatherId={weather[0].icon}
                                    />
                                    <p className={'text-xl font-bold'}>
                                        {Math.floor(temp)}{' '}
                                        {getTemperatureUnits(props.units)}
                                    </p>
                                </div>
                                <time
                                    className="text-lg capitalize opacity-60"
                                    dateTime={dayjs.unix(dt).format('L')}
                                >
                                    {dayjs.unix(dt).format('LT ddd')}
                                </time>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className={'left-0'} />
                    <CarouselNext className={'right-0'} />
                </Carousel>
            </CardContent>
        </Card>
    );
}

export default FiveDayForecast;
