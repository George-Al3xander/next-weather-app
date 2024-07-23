import React from 'react';

import CurrentLocalTime from '@/components/current-local-time';
import Logo from '@/components/logo';

function Header({ locale }: { locale: string }) {
    return (
        <header className="flex flex-wrap items-center justify-between gap-4">
            <Logo withTitle />
            <CurrentLocalTime locale={locale} />
        </header>
    );
}

export default Header;
