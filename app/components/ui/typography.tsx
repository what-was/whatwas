import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/lib/utils';

type TypographyVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';

const typographyVariants = cva(['tracking-tight'], {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      heading: 'font-extrabold',
    },
    variant: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      muted: 'text-muted-foreground',
      large: 'text-4xl font-semibold',
      lead: 'text-xl text-muted-foreground',
      small: 'text-sm font-medium leading-none',
      accent: 'text-blue-600',
      h1: 'text-4xl font-extrabold lg:text-5xl',
      h2: 'text-3xl font-semibold',
      h3: 'text-2xl font-semibold',
      h4: 'text-lg font-semibold',
      p: 'leading-7',
      span: 'text-sm',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {
  as?: TypographyVariants;
  children?: React.ReactNode;
}

const Typography = React.forwardRef<HTMLHeadingElement, TextProps>(
  (
    { as: Component = 'p', size, weight, variant, className, ...props },
    ref,
  ) => {
    if (!Component) throw new Error('Component is undefined');

    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant, size, weight }), className)}
        {...props}
      >
        {props.children}
      </Component>
    );
  },
);
Typography.displayName = 'Typography';

export { Typography, typographyVariants };
