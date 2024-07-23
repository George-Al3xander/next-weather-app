'use client';

// Error components must be Client Components
import { useEffect } from 'react';

import { Frown, RotateCcw } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
    params: { locale: string };
}) {
    const t = useTranslations('ErrorPage');

    useEffect(() => {
        console.error(error);
    }, [error]);
    const message = error.message || 'Something went wrong!';
    return (
        <section className="flex flex-col justify-center gap-4 text-center">
            <Card variants="custom">
                <CardHeader>
                    <Frown className="text mx-auto h-20 w-20" />

                    <CardTitle>{t('title')}</CardTitle>
                    <CardDescription className="text-lg">
                        {t('description', {
                            reason: `${message}${!message.endsWith('.') && '. '}`,
                        })}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button variant="secondary" onClick={() => reset()}>
                        {t('btn')}
                        <RotateCcw className="ml-2 h-4 w-4" />
                    </Button>
                </CardContent>
            </Card>
        </section>
    );
}
