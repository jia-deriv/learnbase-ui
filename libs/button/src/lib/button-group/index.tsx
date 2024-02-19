import { cva } from 'cva';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from '../button';

export interface ButtonGroupProps
  extends Omit<ButtonProps, 'label' | 'icon' | 'iconPosition' | 'loading'> {
  orientation?: 'vertical' | 'horizontal';
}

const buttonGroupClass = cva('flex', {
  variants: {
    orientation: {
      vertical: 'flex-col items-start',
      horizontal: '',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export const ButtonGroup = ({
  children,
  className,
  size,
  orientation = 'horizontal',
  ...rest
}: ButtonGroupProps) => {
  return (
    <div className={twMerge(buttonGroupClass({ orientation }), className)}>
      {/*eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, { size, ...rest }),
      )}
    </div>
  );
};

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
