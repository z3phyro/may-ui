import { JSX } from "solid-js";
export interface THeadingProps {
    children: string | JSX.Element;
}
export default function Heading({ children }: THeadingProps): JSX.Element;
