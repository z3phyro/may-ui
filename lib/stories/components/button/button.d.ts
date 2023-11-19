import { JSX } from "solid-js";
import { TUiVariant } from "../../../core/types/ui-variants.type";
export interface TButtonProps {
    children?: JSX.Element | JSX.Element[] | string;
    variant?: TUiVariant;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    loading?: boolean;
    class?: string;
}
export default function Button(props: TButtonProps): JSX.Element;
