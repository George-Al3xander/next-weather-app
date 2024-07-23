import * as React from 'react';

import { cn } from '@/lib/utils';

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { variants?: 'custom' | 'default' }
>(({ className, variants = 'default', ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'rounded-lg border border-none bg-card text-card-foreground shadow-sm',
            className,
            {
                'rounded-xl border border-white border-opacity-40 bg-gray-200 bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-900/40':
                    variants === 'custom',
            },
        )}
        {...props}
    />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex flex-col space-y-1.5 p-6', className)}
        {...props}
    />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement> & { variants?: 'custom' }
>(({ className, variants, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            'text-2xl font-semibold leading-none tracking-tight',
            className,
            {
                'flex flex-wrap items-center justify-between gap-4 text-xl':
                    variants === 'custom',
            },
        )}
        {...props}
    />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
    />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex items-center p-6 pt-0', className)}
        {...props}
    />
));
CardFooter.displayName = 'CardFooter';

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
};
