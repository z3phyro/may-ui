import { createContext, createEffect, createSignal, useContext, } from "solid-js";
import Modal from "../../../stories/components/modal";
const DialogContext = createContext({
    show: () => console.error("DialogContext not properly initialized"),
});
export function DialogProvider(props) {
    const [visible, setVisible] = createSignal(false);
    const [modalProps, setModalProps] = createSignal({
        title: "Saying Hi",
        description: "Hello World!",
    });
    const show = (modalProps) => {
        setModalProps(modalProps);
        setVisible(true);
    };
    createEffect(() => decorateButtonsAction(modalProps().buttons));
    const decorateButtonsAction = (buttons) => {
        buttons?.forEach((button) => {
            const action = button.onClick;
            button.onClick = undefined;
            button.onClick = () => {
                action?.();
                setVisible(false);
            };
        });
    };
    const restModal = () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { open, ...rest } = modalProps();
        return rest;
    };
    return (<DialogContext.Provider value={{ show }}>
      {props.children}
      <Modal {...restModal()} open={visible()} onClose={() => setVisible(false)}/>
    </DialogContext.Provider>);
}
export function useDialog() {
    return useContext(DialogContext);
}
