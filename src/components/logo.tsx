import React from 'react';

import LogoSrc from '@/app/icon.svg';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { metadata } from '@/constants/data';

function Logo({
    className,
    withTitle = false,
}: {
    className?: React.ComponentProps<'img'>['className'];
    withTitle?: boolean;
}) {
    if (withTitle) {
        return (
            <figure className="flex items-center gap-4">
                <Image
                    className={cn(className)}
                    src={LogoSrc}
                    width={60}
                    height={60}
                    alt="Logo"
                />
                <h1 className="hidden text-xl sm:inline">
                    {metadata.title as string}
                </h1>
                <figcaption className="sr-only">
                    {metadata.description as string}
                </figcaption>
            </figure>
        );
    }

    return (
        <Image
            className={cn(className)}
            src={LogoSrc}
            width={60}
            height={60}
            alt="Logo"
        />
    );
}

export default Logo;
