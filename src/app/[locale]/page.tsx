import { Suspense } from 'react';

import { LoaderCircle } from 'lucide-react';

import CityMainCard from '@/components/current weather card/current-weather-card';
import FiveDayForecast from '@/components/five day forecast/five-day-forecast';
import NoResultsCard from '@/components/no-results-card';
import { Card } from '@/components/ui/card';
import { getCurrentWeather } from '@/lib/actions';
import { TProjectPageProps } from '@/types/types';

export default async function Home({
    params: { locale },
    searchParams: { searchQuery = 'new york', units = 'metric' },
}: TProjectPageProps) {
    const generalOptions = {
        q: searchQuery,
        lang: locale,
        units: units,
    };
    const weather = await getCurrentWeather(generalOptions);

    if (!weather)
        return <NoResultsCard query={searchQuery.replaceAll('-', ' ')} />;
    return (
        <main className="flex flex-col gap-10">
            <CityMainCard units={units} {...weather} />

            <Suspense
                fallback={
                    <Card
                        className={
                            'flex h-[10rem] w-full items-center justify-center'
                        }
                        variants={'custom'}
                    >
                        <LoaderCircle className="h-10 w-10 animate-spin" />
                    </Card>
                }
            >
                <FiveDayForecast {...generalOptions} />
            </Suspense>
        </main>
    );
}
