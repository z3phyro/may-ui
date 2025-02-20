import { TIconProps } from "./icon.props";

export default function ChevronUpIcon(props: TIconProps) {
  return (
    <svg
      fill="none"
      stroke-width="2"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      role="img"
      style="overflow: visible; color: currentcolor;"
      class={props.class}
    >
      <path d="M18 15 12 9 6 15"></path>
    </svg>
  );
}
