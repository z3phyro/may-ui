import "./styles.css";
export interface SwitchProps {
    onChange?: (val: boolean) => void;
    checked: boolean;
    label?: string;
}
export default function Switch(props: SwitchProps): import("solid-js").JSX.Element;
