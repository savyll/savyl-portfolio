import { siteConfig } from "@/config/site";
import { getSiteUrl } from "@/lib/site-url";

export function PersonStructuredData() {
  const siteUrl = getSiteUrl();
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.personName,
    description: siteConfig.description,
    sameAs: [siteConfig.links.linkedin, siteConfig.links.github],
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: siteConfig.profile.university,
    },
    ...(siteUrl ? { url: siteUrl.toString() } : {}),
  };

  return (
    <script
      id="person-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(person).replace(/</g, "\\u003c"),
      }}
    />
  );
}
