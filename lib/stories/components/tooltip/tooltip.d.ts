import "./styles.css";
import { JSX } from "solid-js";
interface TooltipProps {
    children: JSX.Element | JSX.Element[];
    content: JSX.Element | string;
}
export default function Tooltip(props: TooltipProps): JSX.Element;
export {};
