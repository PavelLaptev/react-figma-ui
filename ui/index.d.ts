import React, { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
    label: string;
    danger?: boolean;
    disabled?: boolean;
    className?: string;
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

interface LoadingIndicatorProps {
    className?: string;
    styles?: React.CSSProperties;
}
declare const LoadingIndicator: (props: LoadingIndicatorProps) => JSX.Element;

interface DividerProps {
    className?: string;
    style?: React.CSSProperties;
    isDashed?: boolean;
}
declare const Divider: (props: DividerProps) => JSX.Element;

interface PanelProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    hasLeftRightPadding?: boolean;
    hasTopBottomPadding?: boolean;
    hasLeftPadding?: boolean;
    hasRightPadding?: boolean;
    hasTopPadding?: boolean;
    hasBottomPadding?: boolean;
    topBorder?: boolean;
    bottomBorder?: boolean;
}
declare const Panel: {
    (props: PanelProps): JSX.Element;
    defaultProps: {
        hasLeftRightPadding: boolean;
        hasTopBottomPadding: boolean;
        topBorder: boolean;
        bottomBorder: boolean;
    };
};

interface IconProps {
    className?: string;
    style?: React.CSSProperties;
    name: Icon16Type | Icon32Type;
    size: '32' | '16';
    customIcon?: React.ReactNode;
}
declare const Icon: (props: IconProps) => JSX.Element;

type IconButtonProps = {
    className?: string;
    children: ReactNode;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    isActive?: boolean;
    propagateEscapeKeyDown?: boolean;
};
declare const IconButton: (props: IconButtonProps) => JSX.Element;

type TextProps = {
    className?: string;
    style?: React.CSSProperties;
    align?: TextAlignType;
    children: ReactNode;
    fontSize?: number;
    fontWeight?: fontWeightType;
};
type fontWeightType = 'regular' | 'bold';
type TextAlignType = 'left' | 'center' | 'right';
declare const Text: {
    (props: TextProps): JSX.Element;
    defaultProps: {
        align: TextAlignType;
        fontSize: number;
        fontWeight: fontWeightType;
    };
};

interface StackProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    gap?: number | string;
    direction?: 'row' | 'column';
    hasLeftRightPadding?: boolean;
    hasTopBottomPadding?: boolean;
    hasLeftPadding?: boolean;
    hasRightPadding?: boolean;
    hasTopPadding?: boolean;
    hasBottomPadding?: boolean;
    onClick?: () => void;
}
declare const Stack: {
    (props: StackProps): JSX.Element;
    defaultProps: {
        gap: number;
        direction: string;
        hasLeftRightPadding: boolean;
        hasTopBottomPadding: boolean;
    };
};

type PanelHeaderProps = {
    className?: string;
    style?: React.CSSProperties;
    title?: string;
    isActive?: boolean;
    onClick?: () => void;
    hasBackButton?: boolean;
    iconButtons?: IconButtonProps[];
};
declare const PanelHeader: React.ForwardRefExoticComponent<PanelHeaderProps & React.RefAttributes<HTMLDivElement>>;

interface CheckboxProps$1 {
    className?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
    id: string;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    checked?: boolean;
}
declare const Toggle: {
    (props: CheckboxProps$1): JSX.Element;
    defaultProps: {
        checked: boolean;
    };
};

interface OptionProps {
    id: string;
    label: string;
    caption?: string;
    icon?: React.ReactNode;
}
interface SectionProps {
    title?: string;
    options: OptionProps[];
}
interface OverlayListProps {
    hasShift?: boolean;
    className?: string;
    style?: React.CSSProperties;
    optionsSections: SectionProps[];
    onClick: (id: string) => void;
    onOutsideClick?: () => void;
    trigger?: HTMLElement;
    maxHeight?: number;
}
declare const OverlayList: (props: OverlayListProps) => JSX.Element;

interface DropdownProps {
    label?: string;
    id?: string;
    className?: string;
    value?: string;
    optionsSections: SectionProps[];
    onChange: (value: string) => void;
    labelGreed?: number;
    inputGreed?: number;
    maxHeight?: number;
}
declare const Dropdown: (props: DropdownProps) => JSX.Element;

interface NativeDropdownProps {
    label?: string;
    id?: string;
    className?: string;
    value?: string;
    options: {
        id: string;
        label: string;
    }[];
    onChange: (value: string) => void;
    labelGreed?: number;
    inputGreed?: number;
}
declare const NativeDropdown: (props: NativeDropdownProps) => JSX.Element;

interface CheckboxProps {
    className?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
    id: string;
    onChang?: (checked: boolean) => void;
    disabled?: boolean;
    checked?: boolean;
}
declare const Checkbox: {
    (props: CheckboxProps): JSX.Element;
    defaultProps: {
        checked: boolean;
    };
};

interface InputProps {
    id?: string;
    label?: string;
    className?: string;
    style?: React.CSSProperties;
    value?: string;
    disabled?: boolean;
    isInvalid?: boolean;
    placeholder?: string;
    hasOutline?: boolean;
    labelGreed?: number;
    inputGreed?: number;
    leftIcon?: React.ReactNode;
    onChange?: (value: string) => void;
    onFocus?: (value: string) => void;
    onBlur?: (value: string) => void;
}
declare const Input: {
    (props: InputProps): JSX.Element;
    defaultProps: {
        hasOutline: boolean;
    };
};

interface TabsProps {
    className?: string;
    style?: React.CSSProperties;
    value?: string;
    options?: {
        value: string;
        label: string;
    }[];
    onChange?: (value: string) => void;
    iconButtons?: IconButtonProps[];
}
declare const Tabs: (props: TabsProps) => JSX.Element;

interface ToggleRowProps {
    id: string;
    label: string;
    icon?: React.ReactNode;
    checked?: boolean;
    onChange?: (value: boolean) => void;
}
declare const ToggleRow: (props: ToggleRowProps) => JSX.Element;

export { Button, Checkbox, Divider, Dropdown, Icon, IconButton, Input, LoadingIndicator, NativeDropdown, OverlayList, Panel, PanelHeader, Stack, Tabs, Text, Toggle, ToggleRow };
