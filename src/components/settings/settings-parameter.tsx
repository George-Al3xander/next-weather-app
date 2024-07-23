'use client';

import React from 'react';

import { useTranslations } from 'next-intl';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { settingsIcons } from '@/constants/data';
import { TSettingParameter } from '@/types/types';

function ThemeVariantSelector({
    value,
    setValue,
    variants,
    path,
}: TSettingParameter) {
    const t = useTranslations('SettingsPage');
    return (
        <li>
            <h3 className="border-b-2 border-gray-600 pb-2 text-xl font-semibold">
                {t(`${path}.title`)}
            </h3>
            <RadioGroup
                className="mt-2"
                defaultValue={value}
                onValueChange={setValue}
            >
                {variants.map((variant) => (
                    <Label
                        htmlFor={`theme-option-${variant}`}
                        key={variant}
                        className={cn(
                            'flex w-full flex-row-reverse items-center justify-between gap-4 space-x-2 border-primary text-lg capitalize opacity-60 transition-all hover:opacity-100',
                            {
                                'opacity-100': value === variant,
                            },
                        )}
                    >
                        {/*<Label*/}
                        {/*    className="flex items-center gap-4 text-lg hover:cursor-pointer"*/}
                        {/*    htmlFor={`theme-option-${variant}`}*/}
                        {/*>*/}
                        {variant in settingsIcons &&
                            settingsIcons[variant as 'dark']}
                        {t(`${path}.variants.${variant}`)}
                        <RadioGroupItem
                            value={variant}
                            id={`theme-option-${variant}`}
                        />
                        {/*</Label>*/}
                    </Label>
                ))}
            </RadioGroup>
        </li>
    );
}

export default ThemeVariantSelector;
