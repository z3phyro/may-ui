import { FiInfo } from "solid-icons/fi";
import { JSX } from "solid-js";

export interface TInfoBlockProps {
  title: string;
  children: JSX.Element | string;
}
export default function InfoBlock(props: TInfoBlockProps) {
  return (
    <article class="text-gray-400 text-sm text-light">
      <h4 class="flex items-center gap-2 text-xs">
        <FiInfo class="text-sm" /> {props.title}
      </h4>
      <p class="pl-[22px]">{props.children}</p>
    </article>
  );
}
