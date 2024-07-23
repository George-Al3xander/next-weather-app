'use client';

import { useEffect } from 'react';

import { useSearchParams } from 'next/navigation';

import { useRouter } from '@/lib/navigation';
import { unitsKeys, unitVariants } from '@/constants/data';

const localStorageKey = unitsKeys['localStorage'];
const searchParamKey = unitsKeys['searchParameter'];

function UnitsProvider() {
    const params = useSearchParams();
    const router = useRouter();

    const setDefaultBoth = () => {
        localStorage.setItem(localStorageKey, 'metric');

        const newSearchParams = new URLSearchParams(params);
        newSearchParams.set(searchParamKey, 'metric');
        router.push(`?${newSearchParams}`);
    };

    useEffect(() => {
        const paramsUnit = params.get('unit');
        const lsItem =
            typeof window !== 'undefined'
                ? window.localStorage.getItem(localStorageKey)
                : null;

        if (lsItem) {
            if (paramsUnit && unitVariants.includes(paramsUnit as 'metric')) {
                if (lsItem !== paramsUnit) {
                    localStorage.setItem(localStorageKey, paramsUnit);
                }
            } else {
                if (unitVariants.includes(lsItem as 'metric')) {
                    const newSearchParams = new URLSearchParams(params);
                    newSearchParams.set(searchParamKey, lsItem);
                    router.push(`?${newSearchParams}`);
                } else {
                    setDefaultBoth();
                }
            }
        } else {
            if (unitVariants.includes(paramsUnit as 'metric')) {
                localStorage.setItem(localStorageKey, paramsUnit as string);
            } else {
                setDefaultBoth();
            }
        }
    }, [params, router]);
    return null;
}

export default UnitsProvider;
