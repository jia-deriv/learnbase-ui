import React from 'react';
import { SizeVariants } from '@learnbase-ui/global/types';
import { twMerge } from 'tailwind-merge';
import { cva } from 'cva';
import { ButtonProps } from '../button';

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
    | 'center-top'
    | 'center-bottom';
}

const floatingButtonClass = cva(
  'fixed flex flex-col p-5 transition duration-700 animate-zoom-in gap-2',
  {
    variants: {
      position: {
        'top-left': 'top-0 left-0',
        'top-right': 'top-0 right-0',
        'bottom-left': 'bottom-0 left-0',
        'bottom-right': 'bottom-0 right-0',
        'center-top': 'top-0 left-1/2 translate-x-[-50%] duration-0',
        'center-bottom': 'bottom-0 left-1/2 translate-x-[-50%] duration-0',
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
  children,
  ...rest
}: FloatingActionButtonProps) => {
  return (
    <div className={twMerge(floatingButtonClass({ position }), className)}>
      {/*eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, {
          className: 'shadow-xl shadow-gray-300',
          ...rest,
        }),
      )}
    </div>
  );
};

FloatingActionButton.displayName = 'FloatingActionButton';

export default FloatingActionButton;
