import type { Metadata } from 'next';
import { Oswald as MainFont } from 'next/font/google';

import '../globals.css';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import 'dayjs/locale/uk';
import 'dayjs/locale/en';

import CurrentLocalTime from '@/components/current-local-time';
import Header from '@/components/header';
import Logo from '@/components/logo';
import IntlClientProvider from '@/components/providers/intl-client-provider';
import Providers from '@/components/providers/providers';
import SearchBarMenu from '@/components/search-bar-menu';

dayjs.extend(localizedFormat);

const font = MainFont({
    subsets: ['latin', 'cyrillic'],
});
export { metadata } from '@/constants/data';

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    dayjs.locale(locale);
    return (
        <html lang={locale}>
            <IntlClientProvider messagesFrom={'ErrorPage'}>
                <body className={font.className}>
                    <Providers>
                        <div className="relative mx-auto flex w-[min(90%,50rem)] flex-col gap-10 py-10">
                            <IntlClientProvider messagesFrom={'Header'}>
                                <Header locale={locale} />
                                <SearchBarMenu locale={locale} />
                            </IntlClientProvider>
                            {children}
                        </div>
                    </Providers>
                </body>
            </IntlClientProvider>
        </html>
    );
}
