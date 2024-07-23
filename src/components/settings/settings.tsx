'use client';

import React from 'react';

import { locales } from '@/i18n';
import { useTheme } from 'next-themes';

import SettingsParameter from '@/components/settings/settings-parameter';
import useChangeLanguage from '@/hooks/use-change-language';
import useUnitState from '@/hooks/use-unit-state';
import { themeVariants, unitVariants } from '@/constants/data';
import { TSettingParameter } from '@/types/types';

function Settings({ locale }: { locale: string }) {
    const { theme, setTheme } = useTheme();
    const { handleChangeLanguage } = useChangeLanguage();
    const { unit, setUnit } = useUnitState();
    const parameters: TSettingParameter[] = [
        {
            variants: unitVariants,
            value: unit,
            setValue: setUnit,
            path: 'units',
        },
        {
            variants: themeVariants,
            value: theme,
            setValue: setTheme,
            path: 'theme',
        },
        {
            variants: locales,
            value: locale,
            setValue: handleChangeLanguage,
            path: 'language',
        },
    ];

    return (
        <ul className="flex flex-col gap-10">
            {parameters.map((parameter) => (
                <SettingsParameter key={parameter.path} {...parameter} />
            ))}
        </ul>
    );
}

export default Settings;
