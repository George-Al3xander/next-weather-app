import React from 'react';

import { Sun as Spinner } from 'lucide-react';

function Loading() {
    return (
        <section className="my-10">
            <Spinner className="dark:tex-black mx-auto h-20 w-20 animate-spin text-white" />
        </section>
    );
}

export default Loading;
