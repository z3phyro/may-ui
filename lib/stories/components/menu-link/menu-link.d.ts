export interface TMenuLink {
    title: string;
    href?: string;
    items?: TMenuLink[];
    isChild?: boolean;
    isActive?: () => boolean;
}
export default function MenuLink({ title, href, items, isChild, isActive, }: TMenuLink): import("solid-js").JSX.Element;
