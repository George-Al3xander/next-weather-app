import { ChangeEvent, useEffect, useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

const slug = (str: string) => str.replace(/\s/g, '-').toLowerCase();

const useSearch = () => {
    const router = useRouter();
    const currSearchParams = useSearchParams();
    const currSearchQuery = (
        currSearchParams.get('searchQuery') || ''
    ).replaceAll('-', ' ');
    const [searchQuery, setSearchQuery] = useState<string>(currSearchQuery);
    const [isValid, setIsValid] = useState(false);
    useEffect(() => {
        if (/\S/.test(searchQuery) && searchQuery.length > 2) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [searchQuery]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
        setSearchQuery(event.target.value);

    const search = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isValid) {
            const newSearchParams = new URLSearchParams(currSearchParams);
            newSearchParams.set('searchQuery', slug(searchQuery));
            router.push(`?${newSearchParams.toString()}`);
        }
    };

    return { searchQuery, search, isValid, handleChange };
};

export default useSearch;
