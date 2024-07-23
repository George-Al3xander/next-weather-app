export type TThemeVariant = 'light' | 'dark' | 'system';

export type TSettingParameter = {
    variants: string[];
    value: string | undefined;
    setValue: (str: string) => void;
    path: string;
};

export type TUnit = 'metric' | 'imperial';

export type TProjectPageProps = {
    searchParams: {
        searchQuery?: string;
        units?: TUnit;
        lat?: string;
        lon?: string;
    };
    params: { locale: string };
};

export type TTempUnit = 'celsius' | 'kelvin' | 'fahrenheit';
