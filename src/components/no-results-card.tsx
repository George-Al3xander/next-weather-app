import React from 'react';

import { Globe, SearchX } from 'lucide-react';
import { useTranslations } from 'next-intl';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

function NoResultsCard({ query }: { query: string }) {
    const t = useTranslations('NoSearchResults');
    return (
        <Card variants="custom">
            <CardHeader className="gap-6 text-center">
                <Globe className="mx-auto h-20 w-20" />
                <CardTitle>{t('title', { query })}</CardTitle>
                <CardDescription className="text-xl">
                    {t('description')}
                </CardDescription>
            </CardHeader>
        </Card>
    );
}

export default NoResultsCard;
