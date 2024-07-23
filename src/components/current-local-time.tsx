'use client';

import React, { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { useTranslations } from 'next-intl';

import { Card, CardContent } from '@/components/ui/card';

import 'dayjs/locale/uk';
import 'dayjs/locale/en';

dayjs.extend(localizedFormat);

function CurrentLocalTime({ locale }: { locale: string }) {
    dayjs.locale(locale);
    const [time, setValue] = useState(dayjs().format('dddd, LT'));
    const t = useTranslations('Header');

    useEffect(() => {
        const interval = setInterval(
            () => setValue(dayjs().format('dddd, LT')),
            1000,
        );

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Card variants="custom">
            <CardContent className="p-2 text-center">
                <time dateTime={time}>{t('time', { time })}</time>
            </CardContent>
        </Card>
    );
}

export default CurrentLocalTime;
