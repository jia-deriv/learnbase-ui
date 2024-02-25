import { cva } from 'cva';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from '../button';

export interface ButtonGroupProps
  extends Omit<ButtonProps, 'label' | 'icon' | 'iconPosition' | 'loading'> {
  orientation?: 'vertical' | 'horizontal';
}

const buttonGroupClass = cva(
  'flex [&>button]:rounded-none [&>button:first-child]:ml-0 [&>button]:relative',
  {
    variants: {
      orientation: {
        vertical: 'flex-col items-start',
        horizontal: '',
      },
      variant: {
        contained: '[&>button]:border-white',
        outlined: '',
      },
      rounded: {
        none: '',
        sm: '[&>button:first-child]:rounded-l [&>button:last-child]:rounded-r',
        md: '[&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md',
        lg: '[&>button:first-child]:rounded-l-lg [&>button:last-child]:rounded-r-lg',
        full: '[&>button:first-child]:rounded-l-full [&>button:last-child]:rounded-r-full',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  },
);

export const ButtonGroup = ({
  children,
  className,
  size,
  orientation = 'horizontal',
  rounded = 'none',
  variant = 'outlined',
  ...rest
}: ButtonGroupProps) => {
  return (
    <div
      className={twMerge(
        buttonGroupClass({ orientation, rounded, variant }),
        className,
      )}
    >
      {/*eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, { size, variant, ...rest }),
      )}
    </div>
  );
};

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
