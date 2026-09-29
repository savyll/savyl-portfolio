const supportedProtocols = new Set(["http:", "https:"]);

export function getSiteUrl(): URL | undefined {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) return undefined;

  let siteUrl: URL;

  try {
    siteUrl = new URL(configuredUrl);
  } catch {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be a valid absolute URL, including http:// or https://.",
    );
  }

  if (!supportedProtocols.has(siteUrl.protocol)) {
    throw new Error("NEXT_PUBLIC_SITE_URL must use the http or https protocol.");
  }

  siteUrl.hash = "";
  siteUrl.search = "";

  const pathnameWithoutTrailingSlash = siteUrl.pathname.replace(/\/+$/, "");
  siteUrl.pathname = pathnameWithoutTrailingSlash
    ? `${pathnameWithoutTrailingSlash}/`
    : "/";

  return siteUrl;
}
