import { JSX } from "solid-js";
import { TUiVariant } from "../../../core/types/ui-variants.type";
export interface TBadgeProps {
    variant?: TUiVariant;
    children: JSX.Element | string;
    class?: string;
}
export default function Badge(props: TBadgeProps): JSX.Element;
