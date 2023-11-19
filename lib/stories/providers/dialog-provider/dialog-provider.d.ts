import { JSX } from "solid-js";
import { TModalProps } from "../../../stories/components/modal/modal";
export interface TDialogContext {
    show: (modalProps: TModalProps) => void;
}
export interface TDialogProviderProps {
    children: JSX.Element | JSX.Element[];
}
export declare function DialogProvider(props: TDialogProviderProps): JSX.Element;
export declare function useDialog(): TDialogContext;
