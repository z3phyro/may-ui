import "./styles.css";
export interface TSwitchProps {
    onChange?: (val: boolean) => void;
    checked: boolean;
    label?: string;
}
export default function Switch(props: TSwitchProps): import("solid-js").JSX.Element;
