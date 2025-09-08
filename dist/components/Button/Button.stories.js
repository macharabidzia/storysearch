import { fn } from 'storybook/test';
import { Button } from '../ui/button';
const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
        onClick: { action: 'clicked' },
    },
    args: { onClick: fn() },
};
export default meta;
export const Primary = { args: { variant: 'default', size: 'default', children: 'Button' } };
export const Secondary = { args: { variant: 'secondary', size: 'default', children: 'Button' } };
export const Large = { args: { variant: 'default', size: 'lg', children: 'Button' } };
export const Small = { args: { variant: 'default', size: 'sm', children: 'Button' } };
