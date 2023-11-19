import { children } from "solid-js";
export default function Card(props) {
    const resolved = children(() => props.children);
    return (<article class={`shadow-lg shadow-gray-150 rounded-lg bg-white p-4 mb-4 ${props.class}`}>
      {resolved()}
    </article>);
}
