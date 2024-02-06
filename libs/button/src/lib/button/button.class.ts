import { cva } from 'cva';

export const buttonStyles = cva(
  'flex items-center transition-all duration-300 border',
  {
    variants: {
      variant: {
        outlined: 'hover:text-white',
        contained: 'hover:bg-transparent',
      },
      color: {
        primary: 'text-primary border-primary',
        secondary: 'text-secondary border-secondary',
        error: 'text-error border-error',
        success: 'text-success border-success',
        warning: 'text-warning border-warning',
      },
      size: {
        xs: 'px-3 py-1 text-xs gap-1',
        sm: 'px-3 py-1 text-sm gap-1',
        md: 'px-4 py-1 text-md gap-1',
        lg: 'px-5 py-2 text-lg gap-2',
        xl: 'px-6 py-3 text-xl gap-2',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
      iconPosition: {
        start: 'flex-row',
        end: 'flex-row-reverse',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    compoundVariants: [
      {
        variant: 'contained',
        color: ['primary', 'secondary', 'error', 'success', 'warning'],
        class: 'text-white',
      },
      {
        variant: 'contained',
        color: 'primary',
        class: 'bg-primary hover:text-primary',
      },
      {
        variant: 'contained',
        color: 'secondary',
        class: 'bg-secondary hover:text-secondary',
      },
      {
        variant: 'contained',
        color: 'error',
        class: 'bg-error hover:text-error',
      },
      {
        variant: 'contained',
        color: 'success',
        class: 'bg-success hover:text-success',
      },
      {
        variant: 'contained',
        color: 'warning',
        class: 'bg-warning hover:text-warning',
      },
      {
        variant: 'outlined',
        color: 'primary',
        class: 'hover:bg-primary',
      },
      {
        variant: 'outlined',
        color: 'secondary',
        class: 'hover:bg-secondary',
      },
      {
        variant: 'outlined',
        color: 'error',
        class: 'hover:bg-error',
      },
      {
        variant: 'outlined',
        color: 'success',
        class: 'hover:bg-success',
      },
      {
        variant: 'outlined',
        color: 'warning',
        class: 'hover:bg-warning',
      },
    ],
    defaultVariants: {
      variant: 'outlined',
      color: 'primary',
      size: 'md',
      rounded: 'md',
      iconPosition: 'end',
      fullWidth: false,
    },
  },
);
