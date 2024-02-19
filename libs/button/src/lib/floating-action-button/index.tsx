import React from 'react';
import { ColorVariants, SizeVariants } from '@learnbase-ui/global/types';
import { colorWrapper } from '@learnbase-ui/global/constant';
import { twMerge } from 'tailwind-merge';
import { cva } from 'cva';

export type FloatingActionButtonSizeProps = Exclude<
  SizeVariants,
  '2xl' | '3xl' | '4xl' | '5xl'
>;
export interface FloatingActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  label?: string;
  size?: FloatingActionButtonSizeProps;
  variant?: 'outlined' | 'contained';
  color?: ColorVariants;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  iconPosition?: 'start' | 'end';
  fullWidth?: boolean;
}

const Colors = colorWrapper('text');

const floatingActionButtonStyles = cva(
  'flex items-center transition-all border',
  {
    variants: {
      variant: {
        outlined: ' ',
        contained: '',
      },
      color: Colors,
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

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  children,
  className,
  label,
  variant,
  color,
  size,
  rounded,
  iconPosition,
  fullWidth,
  icon,
  ...rest
}) => {
  return (
    <button
      type="button"
      className={twMerge(
        floatingActionButtonStyles({
          variant,
          color,
          size,
          rounded,
          iconPosition,
          fullWidth,
        }),
        icon ? 'justify-between' : 'justify-center',
        className,
      )}
      {...rest}
    >
      {icon}
      {label}
    </button>
  );
};

FloatingActionButton.displayName = 'Button';

export default FloatingActionButton;
