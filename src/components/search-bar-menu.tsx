import React from 'react';

import { Menu } from 'lucide-react';
// import SettingsMenu from '@/components/settings-menu';
import dynamic from 'next/dynamic';

import CurrentLocalTime from '@/components/current-local-time';
import IntlClientProvider from '@/components/providers/intl-client-provider';
import SearchBar from '@/components/search-bar';
import { Button } from '@/components/ui/button';

const SettingsMenu = dynamic(
    () => import('@/components/settings/settings-menu'),
    {
        ssr: false,
        loading: () => (
            <Button size="icon" variant={'secondary'}>
                <Menu className={'h-4 w-4'} />
            </Button>
        ),
    },
);

function SearchBarMenu({ locale }: { locale: string }) {
    return (
        <menu className="sticky top-4 z-10 flex w-full items-center justify-between gap-4">
            <li className="w-full">
                <SearchBar />
            </li>

            <li>
                <IntlClientProvider messagesFrom={'SettingsPage'}>
                    <SettingsMenu locale={locale} />
                </IntlClientProvider>
            </li>
        </menu>
    );
}

export default SearchBarMenu;
