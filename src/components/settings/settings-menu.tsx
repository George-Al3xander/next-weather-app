'use client';

import React from 'react';

import { locales } from '@/i18n';
import { Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

import Logo from '@/components/logo';
import Settings from '@/components/settings/settings';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import useChangeLanguage from '@/hooks/use-change-language';
import useUnitState from '@/hooks/use-unit-state';
import { metadata, themeVariants, unitVariants } from '@/constants/data';
import { TSettingParameter } from '@/types/types';

export default function SettingsMenu({ locale }: { locale: string }) {
    const { theme, setTheme } = useTheme();
    const { handleChangeLanguage } = useChangeLanguage();
    const { unit, setUnit } = useUnitState();
    const parameters: TSettingParameter[] = [
        {
            variants: themeVariants,
            value: theme,
            setValue: setTheme,
            path: 'theme',
        },
        {
            variants: unitVariants,
            value: unit,
            setValue: setUnit,
            path: 'units',
        },
        {
            variants: locales,
            value: locale,
            setValue: handleChangeLanguage,
            path: 'language',
        },
    ];
    const t = useTranslations('SettingsPage');
    return (
        <Sheet>
            <SheetTrigger>
                <Button
                    className="bg-primary"
                    size="icon"
                    variant={'secondary'}
                >
                    <span className="sr-only">{t('btn_label')}</span>
                    <Menu className={'h-4 w-4'} />
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-gray-300 dark:bg-gray-950">
                <SheetHeader className="mb-10 font-bold">
                    <SheetTitle className="flex items-center gap-4">
                        <Logo withTitle />
                    </SheetTitle>
                </SheetHeader>
                <Settings locale={locale} />
            </SheetContent>
        </Sheet>
    );
}
