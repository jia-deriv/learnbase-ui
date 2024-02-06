import { ColorVariants } from '../types';

type ColorStyles = {
  [T in ColorVariants]: string;
};

export const colorCode: ColorStyles = {
  primary: '#000',
  secondary: '#6b7280',
  error: '#e3342f',
  success: '#38c172',
  warning: '#f39c12',
};

// Generate tailwind classes
export function colorWrapper(name: string) {
  return {
    primary: `${name}-primary`,
    secondary: `${name}-secondary`,
    error: `${name}-error`,
    success: `${name}-success`,
    warning: `${name}-warning`,
    darkSlate: `${name}-darkSlate`,
    lightSlate: `${name}-lightSlate`,
    darkGray: `${name}-darkGray`,
    lightGray: `${name}-lightGray`,
    darkZinc: `${name}-darkZinc`,
    lightZinc: `${name}-lightZinc`,
    darkNeutral: `${name}-darkNeutral`,
    lightNeutral: `${name}-lightNeutral`,
    darkStone: `${name}-darkStone`,
    lightStone: `${name}-lightStone`,
    darkRed: `${name}-darkRed`,
    lightRed: `${name}-lightRed`,
    darkOrange: `${name}-darkOrange`,
    lightOrange: `${name}-lightOrange`,
    darkAmber: `${name}-darkAmber`,
    lightAmber: `${name}-lightAmber`,
    darkYellow: `${name}-darkYellow`,
    lightYellow: `${name}-lightYellow`,
    darkLime: `${name}-darkLime`,
    lightLime: `${name}-lightLime`,
    darkGreen: `${name}-darkGreen`,
    lightGreen: `${name}-lightGreen`,
    darkEmerald: `${name}-darkEmerald`,
    lightEmerald: `${name}-lightEmerald`,
    darkTeal: `${name}-darkTeal`,
    lightTeal: `${name}-lightTeal`,
    darkCyan: `${name}-darkCyan`,
    lightCyan: `${name}-lightCyan`,
    darkSky: `${name}-darkSky`,
    lightSky: `${name}-lightSky`,
    darkBlue: `${name}-darkBlue`,
    lightBlue: `${name}-lightBlue`,
    darkIndigo: `${name}-darkIndigo`,
    lightIndigo: `${name}-lightIndigo`,
    darkViolet: `${name}-darkViolet`,
    lightViolet: `${name}-lightViolet`,
    darkPurple: `${name}-darkPurple`,
    lightPurple: `${name}-lightPurple`,
    darkFuchsia: `${name}-darkFuchsia`,
    lightFuchsia: `${name}-lightFuchsia`,
    darkPink: `${name}-darkPink`,
    lightPink: `${name}-lightPink`,
    darkRose: `${name}-darkRose`,
    lightRose: `${name}-lightRose`,
  };
}
