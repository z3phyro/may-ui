import { JSX } from "solid-js";
export interface TInfoBlockProps {
    title: string;
    children: JSX.Element | string;
}
export default function InfoBlock(props: TInfoBlockProps): JSX.Element;
