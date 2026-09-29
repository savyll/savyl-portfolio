const basePath =
  process.env.GITHUB_PAGES === "true" ? "/savyl-portfolio" : "";

export function getPublicPath(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${basePath}${normalizedPath}`;
}
