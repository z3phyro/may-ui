export const slugify = (value) => value.toLowerCase().replace(/\s/g, "-");
export const capitalize = (value) => value[0].toUpperCase() + value.slice(1);
export const deSlugify = (value) => value.split("-").map(capitalize).join(" ");
