import { createElement, ReactElement } from 'react';
import { FlagIcon } from 'react-flag-kit';

import { BookMarked, MonitorCog, Moon, Ruler, Sun } from 'lucide-react';
import type { Metadata } from 'next';

import { TThemeVariant, TUnit } from '@/types/types';

export const metadata: Metadata = {
    title: 'Weather Sphere',
    description:
        'A city-based weather forecast web app showing current conditions and 5-day forecasts',
};

export const themeVariants: TThemeVariant[] = ['light', 'dark', 'system'];

export const unitVariants: TUnit[] = ['metric', 'imperial'];

export const unitsKeys = {
    localStorage: 'unitsType',
    searchParameter: 'units',
};

const iconOptions = {
    className: 'h-5 w-5',
};

//@ts-ignore
export const settingsIcons: {
    [key in TThemeVariant | TUnit | 'en' | 'uk']: ReactElement;
} = {
    uk: createElement(FlagIcon, { code: 'UA', size: 20 }),
    en: createElement(FlagIcon, { code: 'GB', size: 20 }),
    light: createElement(Sun, iconOptions),
    dark: createElement(Moon, iconOptions),
    system: createElement(MonitorCog, iconOptions),
    metric: createElement(Ruler, iconOptions),
    imperial: createElement(BookMarked, iconOptions),
};
