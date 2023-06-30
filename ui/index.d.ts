import { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
    children: ReactNode;
    danger?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    loading?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    propagateEscapeKeyDown?: boolean;
    secondary?: boolean;
}
declare const Button: {
    (props: ButtonProps): JSX.Element;
    defaultProps: {
        danger: boolean;
        disabled: boolean;
        fullWidth: boolean;
        loading: boolean;
        propagateEscapeKeyDown: boolean;
        secondary: boolean;
    };
};

export { Button };
