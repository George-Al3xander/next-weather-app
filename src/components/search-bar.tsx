'use client';

import React from 'react';

import { Search } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import useSearch from '@/hooks/use-search';

function SearchBar() {
    const { search, searchQuery, isValid, handleChange } = useSearch();
    const t = useTranslations('Header');
    return (
        <Card
            variants="custom"
            className={'z-20 basis-full rounded-xl border-2 border-destructive'}
        >
            <CardContent className="p-2">
                <form className="flex gap-2 bg-transparent" onSubmit={search}>
                    <Input
                        className="border-transparent bg-transparent autofill:bg-gray-950"
                        value={searchQuery}
                        onChange={handleChange}
                        id="search-bar"
                        placeholder={t('placeholder')}
                    />
                    <Button type="submit" disabled={!isValid} size={'icon'}>
                        <Search />
                        <span className="sr-only">{t('search')}</span>
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}

export default SearchBar;
