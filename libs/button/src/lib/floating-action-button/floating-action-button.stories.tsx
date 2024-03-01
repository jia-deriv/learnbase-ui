import type { Meta, StoryObj } from '@storybook/react';
import { FloatingActionButton } from '.';
import { FiAlertCircle } from 'react-icons/fi';
import { colorCode } from '@learnease-ui/global/constant';
import Button from '../button';

const icon: Record<string, React.ReactNode | null> = {
  icon: <FiAlertCircle />,
  none: null,
};

const meta: Meta<typeof FloatingActionButton> = {
  component: FloatingActionButton,
  title: 'Button/FloatingActionButton',
  tags: ['autodocs'],
  argTypes: {
    className: { table: { disable: true } },
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
    icon: {
      options: Object.keys(icon),
      mapping: icon,
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
type Story = StoryObj<typeof FloatingActionButton>;

export const Default = {
  args: {
    label: 'Button',
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

export const WithIcon: Story = {
  args: {
    ...Default.args,
    icon: <FiAlertCircle />,
  },
};

export const FullWidth: Story = {
  args: {
    ...Default.args,
    fullWidth: true,
  },
};

export const Rounded: Story = {
  args: {
    ...Default.args,
    rounded: 'full',
  },
};
