import { JSX } from "solid-js";
export interface TInputProps {
    value: string;
    hasError?: boolean;
    error?: string;
    name?: string;
    disabled?: boolean;
    leading?: JSX.Element;
    leadingClass?: string;
    leadingClick?: () => void;
    trailing?: JSX.Element;
    trailingClass?: string;
    trailingClick?: () => void;
    placeholder?: string;
    label?: string;
    required?: boolean;
    onInput?: JSX.EventHandler<HTMLInputElement, InputEvent>;
    onChange?: JSX.EventHandler<HTMLInputElement, Event>;
    onBlur?: JSX.EventHandler<HTMLInputElement, FocusEvent>;
    ref?: (element: HTMLInputElement) => void;
}
export default function Input(props: TInputProps): JSX.Element;
