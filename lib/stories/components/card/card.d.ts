import { JSX } from "solid-js";
export interface TCardProps {
    children: JSX.Element;
    class?: string;
}
export default function Card(props: TCardProps): JSX.Element;
