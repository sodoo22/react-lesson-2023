export function cutTextToLength(str: string, maxLength: number) {
  return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

export function extractArticleIdFromSlug(slug: string) {
  return slug.split("-").pop();
}

export function composeArticleSlug(id: number, title: string) {
  return `${slugify(title)}-${id}`;
}
