import { fn } from 'storybook/test';
import { Button } from '../ui/button';
var meta = {
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
export var Primary = { args: { variant: 'default', size: 'default', children: 'Button' } };
export var Secondary = { args: { variant: 'secondary', size: 'default', children: 'Button' } };
export var Large = { args: { variant: 'default', size: 'lg', children: 'Button' } };
export var Small = { args: { variant: 'default', size: 'sm', children: 'Button' } };
