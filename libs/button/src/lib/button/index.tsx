import React from 'react';
import { ColorVariants, SizeVariants } from '@learnease-ui/global/types';
import { twMerge } from 'tailwind-merge';
import { buttonStyles } from './button.class';
import { Loader } from '@learnease-ui/loader';

export type ButtonSizeProps = Exclude<
  SizeVariants,
  '2xl' | '3xl' | '4xl' | '5xl'
>;
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  label?: string;
  size?: ButtonSizeProps;
  variant?: 'outlined' | 'contained';
  color?: ColorVariants;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  iconPosition?: 'start' | 'end';
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  label,
  variant = 'outlined',
  color,
  size = 'md',
  rounded,
  iconPosition,
  fullWidth,
  icon,
  loading,
  ...rest
}) => {
  return (
    <button
      type="button"
      className={twMerge(
        buttonStyles({
          variant,
          color,
          size,
          rounded,
          iconPosition,
          fullWidth,
          loading,
        }),
        icon ? 'justify-between' : 'justify-center',
        className,
      )}
      disabled={loading}
      {...rest}
    >
      {loading ? <Loader color={color} size={size} /> : icon}
      {label}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
