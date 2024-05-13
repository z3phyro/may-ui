import "./styles.css";
import { JSX } from "solid-js";
export interface TTooltipProps {
    children: JSX.Element | JSX.Element[];
    content: JSX.Element | string;
}
export default function Tooltip(props: TTooltipProps): JSX.Element;
