import { JSX } from "solid-js";
import { TToastProps } from "../../../stories/components/toast/toast";
type TToastType = Omit<TToastProps, "toastId">;
type TToastTypeAux = Omit<TToastType, "variant">;
export interface TToastContext {
    show: (toastProps: TToastType) => void;
    success: (toastProps: TToastTypeAux) => void;
    error: (toastProps: TToastTypeAux) => void;
    info: (toastProps: TToastTypeAux) => void;
    neutral: (toastProps: TToastTypeAux) => void;
}
export interface TToastProviderProps {
    children: JSX.Element | JSX.Element[];
}
export declare function ToastProvider(props: TToastProviderProps): JSX.Element;
export declare function useToast(): TToastContext;
export {};
