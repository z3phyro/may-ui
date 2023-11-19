import { JSX } from "solid-js";
export interface InfoBlockProps {
    title: string;
    children: JSX.Element | string;
}
export default function InfoBlock(props: InfoBlockProps): JSX.Element;
