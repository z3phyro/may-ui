import { createContext, useContext } from "solid-js";
import Toast from "../../../stories/components/toast/toast";
import { Toast as KToast, toaster } from "@kobalte/core";
import { Portal } from "solid-js/web";
import { EUiVariant } from "../../../core/types/ui-variants.type";
const ToastContext = createContext({
    show: () => console.error("ToastContext not properly initialized"),
    success: () => console.error("ToastContext not properly initialized"),
    error: () => console.error("ToastContext not properly initialized"),
    info: () => console.error("ToastContext not properly initialized"),
    neutral: () => console.error("ToastContext not properly initialized"),
});
export function ToastProvider(props) {
    const show = (toastProps) => {
        toaster.show(({ toastId }) => {
            return <Toast toastId={toastId} {...toastProps}/>;
        });
    };
    const success = (toastProps) => {
        show({
            ...toastProps,
            variant: EUiVariant.Success,
        });
    };
    const info = (toastProps) => {
        show({
            ...toastProps,
            variant: EUiVariant.Info,
        });
    };
    const error = (toastProps) => {
        show({
            ...toastProps,
            variant: EUiVariant.Danger,
        });
    };
    const neutral = (toastProps) => {
        show({
            ...toastProps,
            variant: EUiVariant.Neutral,
        });
    };
    return (<ToastContext.Provider value={{ show, success, error, info, neutral }}>
      {props.children}
      <Portal>
        <KToast.Region limit={5} class="fixed top-6 right-4">
          <KToast.List />
        </KToast.Region>
      </Portal>
    </ToastContext.Provider>);
}
export function useToast() {
    return useContext(ToastContext);
}
