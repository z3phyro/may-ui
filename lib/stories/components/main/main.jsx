import { children } from "solid-js";
export default function Main(props) {
    const resolved = children(() => props.children);
    return <main class="container mt-4">{resolved()}</main>;
}
