import { TButtonProps } from "../button/button";
export interface TModalProps {
    title: string;
    description: string;
    buttons?: TButtonProps[];
    open?: boolean;
    onClose?: () => void;
}
export default function Modal(props: TModalProps): import("solid-js").JSX.Element;
