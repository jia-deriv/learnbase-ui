import React from 'react';
import { SizeVariants } from '@learnbase-ui/global/types';
import { twMerge } from 'tailwind-merge';
import { cva } from 'cva';
import Button, { ButtonProps } from '../button';

export type FloatingActionButtonSizeProps = Exclude<
  SizeVariants,
  '2xl' | '3xl' | '4xl' | '5xl'
>;
export interface FloatingActionButtonProps extends ButtonProps {
  position?:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'center-top';
}

const floatingButtonClass = cva(
  'fixed p-5 transition duration-700 animate-zoom-in',
  {
    variants: {
      position: {
        'top-left': 'top-0 left-0',
        'top-right': 'top-0 right-0',
        'bottom-left': 'bottom-0 left-0',
        'bottom-right': 'bottom-0 right-0',
        'center-top': 'top-0 left-0.5',
      },
    },
    defaultVariants: {
      position: 'bottom-right',
    },
  },
);

export const FloatingActionButton = ({
  position = 'bottom-right',
  className,
  ...rest
}: FloatingActionButtonProps) => {
  return (
    <div className={twMerge(floatingButtonClass({ position }), className)}>
      <Button {...rest} className="shadow-xl shadow-gray-300" />
    </div>
  );
};

FloatingActionButton.displayName = 'FloatingActionButton';

export default FloatingActionButton;
