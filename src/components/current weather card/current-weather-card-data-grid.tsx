import React from 'react';

import get from 'lodash/get';
import { useTranslations } from 'next-intl';

import { getSpeedUnits } from '@/lib/utils';
import { TUnit } from '@/types/types';
import { TParsedCurrent } from '@/types/xml';

type TDataGridItem = {
    title: string;
    path: string;
    units?: string;
    backup_unit?: string;
    intlFunc?: (units: TUnit, otherParams?: string) => string;
};
const items: TDataGridItem[] = [
    {
        title: 'wind_speed',
        path: 'wind.speed.value',
        units: 'wind.speed.unit',
        intlFunc: getSpeedUnits,
    },
    {
        title: 'wind_gust',
        path: 'wind.gusts.value',
        units: 'wind.speed.unit',
        intlFunc: getSpeedUnits,
    },
    {
        title: 'clouds',
        path: 'clouds.value',
        units: 'clouds.unit',
        backup_unit: '%',
    },
    { title: 'precipitation', path: 'precipitation.value' },
    {
        title: 'humidity',
        path: 'humidity.value',
        units: 'humidity.unit',
        backup_unit: '%',
    },
    {
        title: 'pressure',
        path: 'pressure.value',
        units: 'pressure.unit',
        backup_unit: 'hPa',
    },
];
function CurrentWeatherCardDataGrid({
    units: SearchParamsUnits,
    ...data
}: Omit<TParsedCurrent, 'city' | 'lastupdate'> & { units: TUnit }) {
    const t = useTranslations('WeatherTerms');
    const tUnits = useTranslations('units');
    return (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map(({ path, title, units, backup_unit, intlFunc }) => {
                let finalUnits: string = backup_unit || '';
                if (units) {
                    const fromData = get(data, units);
                    if (intlFunc) {
                        finalUnits = tUnits(
                            intlFunc(SearchParamsUnits, fromData),
                        );
                    } else if (fromData) {
                        finalUnits = fromData;
                    }
                }
                return (
                    <li
                        className="flex items-center justify-between gap-2 border-b-2 border-b-gray-600 pb-4"
                        key={path}
                    >
                        <p>{`${t(title)[0].toUpperCase()}${t(title).substring(1)}`}</p>

                        <p className={'font-bold'}>
                            {get(data, path) || 0} {finalUnits}
                        </p>
                    </li>
                );
            })}
        </ul>
    );
}

export default CurrentWeatherCardDataGrid;
