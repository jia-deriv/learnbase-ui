import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from '.';
import { colorCode } from '@learnbase-ui/global/constant';
import Button from '../button';

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'Button/ButtonGroup',
  tags: ['autodocs'],
  // parameters: { layout: 'centered' },
  argTypes: {
    className: { table: { disable: true } },
    children: { table: { disable: true } },
    variant: {
      table: {
        defaultValue: { summary: 'outlined' },
      },
    },
    color: {
      options: Object.keys(colorCode),
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      description: '`xs` | `sm` | `md` | `lg` | `xl`',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    rounded: {
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
    fullWidth: {
      table: {
        // type: { summary: '-' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {
    size: 'lg',
    children: [
      <Button label="Button" />,
      <Button label="Button" />,
      <Button label="Button" loading={true} />,
    ],
  },
};

export const Contained = {
  args: {
    ...Default.args,
    variant: 'contained',
  },
};

export const Error = {
  args: {
    ...Default.args,
    color: 'error',
  },
};

export const Success = {
  args: {
    ...Default.args,
    color: 'success',
  },
};

export const Vertical = {
  args: {
    ...Default.args,
    orientation: 'vertical',
    className: 'items-start',
  },
};
