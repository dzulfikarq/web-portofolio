import { profile } from "@/data/portfolio";

export function personStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Malang",
      addressCountry: "Indonesia",
    },
    sameAs: [profile.githubUrl, profile.linkedinUrl].filter(Boolean),
  };
}
