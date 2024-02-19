import React, { ReactNode } from 'react';
import Button, { ButtonProps } from '../button';
import { cva } from 'cva';

export interface IconButtonProps
  extends Omit<
    ButtonProps,
    'loading' | 'fullWidth' | 'iconPosition' | 'label'
  > {
  icon: ReactNode;
}

const IconButtonClassName = cva('', {
  variants: {
    size: {
      xs: 'p-2 text-sm',
      sm: 'p-2 text-md',
      md: 'p-2 text-lg',
      lg: 'p-3 text-xl',
      xl: 'p-3 text-2xl',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

const IconButton = ({
  icon,
  rounded = 'full',
  size = 'md',
  ...rest
}: IconButtonProps) => {
  return (
    <Button
      icon={icon}
      rounded={rounded}
      className={IconButtonClassName({ size })}
      {...rest}
    />
  );
};

IconButton.displayName = 'IconButton';

export default IconButton;
