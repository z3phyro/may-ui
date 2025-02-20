import { TIconProps } from "./icon.props";

export default function TrashIcon(props: TIconProps) {
  return (
    <svg
      fill="none"
      role="img"
      stroke-width="2"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      style="overflow: visible; color: currentcolor;"
      class={props.class}
    >
      <path d="M3 6 5 6 21 6"></path>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      <path d="M10 11 10 17"></path>
      <path d="M14 11 14 17"></path>
    </svg>
  );
}
