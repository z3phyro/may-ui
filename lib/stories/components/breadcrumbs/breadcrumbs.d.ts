import { JSX } from "solid-js";
export interface TBreadcrumbLink {
    title: string | JSX.Element;
    href?: string;
    active: boolean;
}
export interface TBreadcrumbsProps {
    links: TBreadcrumbLink[];
}
export default function Breadcrumbs(props: TBreadcrumbsProps): JSX.Element;
