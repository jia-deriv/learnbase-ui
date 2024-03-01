import type { Meta, StoryObj } from '@storybook/react';
import { FiAlertCircle, FiMic, FiMicOff } from 'react-icons/fi';
import { colorCode } from '@learnease-ui/global/constant';
import IconButton from '.';

const icon: Record<string, React.ReactNode | null> = {
  alert: <FiAlertCircle />,
  microphone_on: <FiMic />,
  microphone_off: <FiMicOff />,
};

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'Button/IconButton',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    className: { table: { disable: true } },
    icon: {
      options: Object.keys(icon),
      mapping: icon,
      control: {
        type: 'radio',
      },
      table: { defaultValue: { summary: 'none' } },
    },
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
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    icon: <FiAlertCircle />,
  },
};

export const Contained: Story = {
  args: {
    ...Default.args,
    variant: 'contained',
  },
};

export const Success: Story = {
  args: {
    ...Default.args,
    color: 'success',
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    color: 'error',
  },
};
