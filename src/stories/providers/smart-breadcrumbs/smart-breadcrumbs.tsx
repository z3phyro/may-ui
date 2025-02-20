import { useLocation } from "@solidjs/router";
import { createMemo } from "solid-js";
import Breadcrumbs from "../../../stories/components/breadcrumbs/breadcrumbs";
import { deSlugify } from "../../../utils/slugify.helper";
 
export default function SmartBreadcrumbs() {
  const location = useLocation();
  const pathname = createMemo(() => location.pathname);

  const parts = pathname()
    .split("/")
    .filter((part) => part);

  const links = parts.map((part, i) => ({
    active: parts.length - 1 === i,
    title: deSlugify(part),
    href: pathname().slice(0, pathname().indexOf(part) + part.length),
  }));

  return <Breadcrumbs links={links} />;
}
