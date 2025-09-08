import type { Meta, StoryObj } from '@storybook/react-vite';
import Home from './Page';

const meta: Meta<typeof Home> = {
  title: 'Pages/Home',
  component: Home,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
