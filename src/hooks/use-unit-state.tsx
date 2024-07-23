'use client';

import { useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { useRouter } from '@/lib/navigation';
import { unitsKeys } from '@/constants/data';
import { TUnit } from '@/types/types';

const localStorageKey = unitsKeys['localStorage'];
const searchParamKey = unitsKeys['searchParameter'];

const useUnitState = () => {
    const currSearchParams = useSearchParams();
    const router = useRouter();
    const lsItem =
        typeof window !== 'undefined'
            ? window.localStorage.getItem(localStorageKey) || 'metric'
            : 'metric';
    const defVal: TUnit =
        lsItem === 'imperial' || lsItem === 'metric' ? lsItem : 'metric';
    const [unit, setUnit] = useState<string>(defVal);
    useEffect(() => {
        if (window) {
            if (localStorage) {
                localStorage.setItem(localStorageKey, unit);
            }
        }
    }, [unit]);

    const changeUnit = (unit: string) => {
        const newSearchParams = new URLSearchParams(currSearchParams);
        newSearchParams.set(searchParamKey, unit);
        router.push(`?${newSearchParams.toString()}`);

        setUnit(unit);
    };

    return { unit, setUnit: changeUnit };
};

export default useUnitState;
