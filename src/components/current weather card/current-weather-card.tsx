import React from 'react';

import dayjs from 'dayjs';
import { useTranslations } from 'next-intl';

import CityDataGrid from '@/components/city main card/city-data-grid';
import CityMainCardHeader from '@/components/city main card/city-main-card-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TUnit } from '@/types/types';
import { ParsedCurrentWeatherResponse } from '@/types/xml';

function CurrentWeatherCard({
    units,
    current: {
        city: { name, country },

        lastupdate,
        ...props
    },
}: ParsedCurrentWeatherResponse & { units: TUnit }) {
    const t = useTranslations('CityMainCard');
    const time = dayjs(lastupdate.value).format('lll');

    return (
        <section>
            <Card variants="custom">
                <CardHeader>
                    <CardTitle variants="custom">
                        <p className="font-semibold">{`${name} (${country})`}</p>
                        <p className={'font-medium'}>
                            {t('last_updated', { time })}
                        </p>
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-10">
                    <CityMainCardHeader {...props} />
                    <CityDataGrid units={units} {...props} />
                </CardContent>
            </Card>
        </section>
    );
}

export default CurrentWeatherCard;
