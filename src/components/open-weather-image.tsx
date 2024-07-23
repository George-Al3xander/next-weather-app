import React from 'react';

import Image, { ImageProps } from 'next/image';

function OpenWeatherImage({
    openWeatherId,
    ...props
}: Omit<ImageProps, 'src'> & { openWeatherId: string }) {
    return (
        <Image
            priority
            src={`https://openweathermap.org/img/wn/${openWeatherId}@2x.png`}
            {...props}
        />
    );
}

export default OpenWeatherImage;
