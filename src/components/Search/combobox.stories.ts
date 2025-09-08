import type { Meta, StoryObj } from '@storybook/react';
import { Combobox, type ComboboxOption } from './combobox';
import { selectOption } from './combobox.interactions';

const options: ComboboxOption[] = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit next', label: 'SvelteKit' },
  { value: 'sveltekit kit', label: 'SvelteKit kit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
];

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    multiple: { control: 'boolean' },
    outlined: { control: 'boolean' },
    withSearch: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options,
    label: 'Framework',
    multiple: false,
    outlined: true,
    withSearch: true,
  },
  play: async ({ canvasElement }) => {
    if (!canvasElement) return;
    await selectOption(canvasElement, 'Next.js');
  },
};

export const Multiple: Story = {
  args: {
    options,
    label: 'Label',
    multiple: true,
    outlined: true,
    withSearch: true,
  },
};
