import { within, userEvent, expect } from 'storybook/test';
export async function selectOption(canvas, optionText) {
    const combobox = within(canvas).getByRole('combobox');
    await userEvent.click(combobox);
    const body = within(document.body);
    const option = body.getByText(optionText);
    await userEvent.click(option);
    await expect(combobox).toHaveTextContent(new RegExp(optionText, 'i'));
}
