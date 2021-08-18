import * as React from 'react';
import { Stack, IStackTokens } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';

export default function FluentUI() {
    return (
        <>
        Button Default Example
        <a href="https://www.microsoft.com/design">MS Design</a> | 
        <a href="https://developer.microsoft.com/en-us/fluentui#/">MS Fluent UI</a>
            <ButtonDefaultExample disabled={false} checked={false} />
        </>
    )
}

export interface IButtonExampleProps {
    // These are set based on the toggles shown above the examples (not needed in real code)
    disabled?: boolean;
    checked?: boolean;
}

// Example formatting
const stackTokens: IStackTokens = { childrenGap: 20 };

export const ButtonDefaultExample: React.FunctionComponent<IButtonExampleProps> = props => {
    const { disabled, checked } = props;

    return (
        <Stack horizontal tokens={stackTokens}>
            <DefaultButton text="Standard" onClick={_alertClicked} allowDisabledFocus disabled={disabled} checked={checked} />
            <PrimaryButton text="Primary" onClick={_alertClicked} allowDisabledFocus disabled={disabled} checked={checked} />
        </Stack>
    );
};

function _alertClicked(): void {
    alert('Clicked');
}