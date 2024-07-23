import React from 'react';

import { ImageResponse } from 'next/og';

import RawSvgLogo from '@/components/raw-svg-logo';
import { metadata } from '@/constants/data';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = metadata.title;
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    const interSemiBold = fetch(
        new URL('../../public/assets/fonts/Inter-Bold.ttf', import.meta.url),
    ).then((res) => res.arrayBuffer());
    const { title, description } = metadata;
    // @ts-ignore
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                className="og-image"
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1rem',
                    color: 'white',
                    textAlign: 'center',
                    background: 'linear-gradient(to top left,#00c6ff,#0072ff)',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                    }}
                >
                    <RawSvgLogo />
                    <h1 style={{ fontSize: 100 }}>{title?.toString()}</h1>
                </div>
                <p
                    style={{
                        fontSize: 40,
                        opacity: 0.7,
                    }}
                >
                    {description}
                </p>

                <p
                    style={{
                        fontWeight: 800,
                        opacity: 0.7,
                    }}
                >
                    {process.env.HOST_NAME}
                </p>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: 'Inter',
                    data: await interSemiBold,
                    style: 'normal',
                    weight: 400,
                },
            ],
        },
    );
}
