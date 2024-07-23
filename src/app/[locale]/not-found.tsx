import React from 'react';

import { House } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Link } from '@/lib/navigation';

export default function NotFound() {
    const t = useTranslations('NotFoundPage');

    return (
        <section>
            <Card className="text-center" variants="custom">
                <CardHeader>
                    <CardTitle>
                        <p className="mb-10 text-6xl">404</p>
                        <h2>{t('title')}</h2>
                    </CardTitle>
                    <CardDescription className="text-lg">
                        {t('description')}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="/">
                        <Button variant="secondary">
                            {t('btn')}
                            <House className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </section>
    );
}
