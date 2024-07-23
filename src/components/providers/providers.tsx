import React, { ReactNode } from 'react';

import { ThemeProvider } from 'next-themes';

import UnitsProvider from '@/components/providers/units-provider';

function Providers({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <UnitsProvider />
            {children}
        </ThemeProvider>
    );
}

export default Providers;
