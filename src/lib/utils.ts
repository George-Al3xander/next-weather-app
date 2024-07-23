import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'; // ES 2015
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { TTempUnit, TUnit } from '@/types/types';

dayjs.extend(utc);

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const convertToJSObject = <T extends Object>(xmlObj: any): T => {
    if (typeof xmlObj !== 'object' || xmlObj === null) {
        return xmlObj;
    }

    const jsObj: any = {};

    for (const key in xmlObj) {
        if (key === '$') {
            Object.assign(jsObj, xmlObj[key]);
        } else if (Array.isArray(xmlObj[key]) && xmlObj[key].length === 1) {
            jsObj[key] = convertToJSObject(xmlObj[key][0]);
        } else {
            jsObj[key] = convertToJSObject(xmlObj[key]);
        }
    }

    return jsObj as T;
};

export const getTemperatureUnits = (units: TTempUnit | TUnit) => {
    switch (units) {
        case 'fahrenheit':
        case 'imperial':
            return '°F';
        case 'kelvin':
            return '°K';
        default:
            return '°C';
    }
};

export const getSpeedUnits = (units: TUnit, apiUnit?: string) => {
    if (apiUnit) {
        switch (units) {
            case 'imperial':
                return apiUnit === 'mph' ? 'speed.imperial' : 'speed.metric';
            default:
                return apiUnit === 'm/s' ? 'speed.metric' : 'speed.imperial';
        }
    } else {
        return `speed.${units}`;
    }
};
