import { AriaButtonProps } from '@react-types/button';
import { cn } from '@todo-list/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React, { forwardRef, useRef } from 'react';
import { useButton } from 'react-aria';

const buttonVariants = cva(
    'inline-flex items-center justify-center  whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default:
                    'bg-blue-100 text-blue-800 shadow-sm hover:bg-blue-200',
                destructive:
                    'bg-red-100 text-red-800 shadow-sm hover:bg-red-200',
                outline: 'border border-blue-100',
            },
            size: {
                default: 'h-9 px-4 py-2',
                sm: 'h-8 rounded-md px-3 text-xs',
                lg: 'h-10 rounded-md px-8',
                icon: 'h-9 w-9',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

interface ButtonProps
    extends AriaButtonProps,
        VariantProps<typeof buttonVariants> {
    children: React.ReactNode;
    className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (props, forwardedRef) => {
        const { children, className, ...myProps } = props;
        const ref = useRef<HTMLButtonElement>(null);
        const { buttonProps } = useButton(myProps, ref);

        React.useImperativeHandle(forwardedRef, () => ref.current!);

        return (
            <button
                {...buttonProps}
                ref={ref}
                className={cn(buttonVariants({ className }))}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
