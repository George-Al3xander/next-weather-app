import React, { ReactNode } from 'react';

import pick from 'lodash/pick';
import { NextIntlClientProvider, useMessages } from 'next-intl';

function IntlClientProvider({
    children,
    messagesFrom,
}: {
    children: ReactNode;
    messagesFrom: string;
}) {
    const messages = useMessages();
    return (
        <NextIntlClientProvider messages={pick(messages, messagesFrom)}>
            {children}
        </NextIntlClientProvider>
    );
}

export default IntlClientProvider;
