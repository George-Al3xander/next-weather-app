import { useSearchParams } from 'next/navigation';

import { usePathname, useRouter } from '@/lib/navigation';

const useChangeLanguage = () => {
    const router = useRouter();
    const pathname = usePathname();
    const currSearchParams = useSearchParams();

    const handleChangeLanguage = (locale: string) => {
        router.push(`${pathname}?${currSearchParams.toString()}`, { locale });
    };

    return { handleChangeLanguage };
};

export default useChangeLanguage;
