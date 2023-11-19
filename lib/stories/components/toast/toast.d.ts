import { TUiVariant } from "../../../core/types/ui-variants.type";
export interface TToastProps {
    title: string;
    description?: string;
    hasProgressBar?: boolean;
    toastId: number;
    variant?: TUiVariant;
}
export default function Toast(props: TToastProps): import("solid-js").JSX.Element;
