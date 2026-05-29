export interface OrgRole {
  title: string;
  period: string;
  current: boolean;
}

export interface Organization {
  name: string;
  website: string;
  logoImage: string;
  accentColor: string;
  roles: OrgRole[];
}

export const organizations: Organization[] = [
  {
    name: "Product Space",
    website: "https://product.studentorg.berkeley.edu/",
    logoImage: "/productspace-logo.png",
    accentColor: "#A855F7",
    roles: [
      { title: "Product Associate", period: "May 2026 – Present", current: true },
      { title: "Product Fellow", period: "Feb 2026 – May 2026", current: false },
    ],
  },
  {
    name: "Golden Gate Garba",
    website: "https://goldengategarba.org/",
    logoImage: "/ggg-logo.png",
    accentColor: "#E8A838",
    roles: [
      { title: "Sponsorship Chair", period: "Apr 2026 – Present", current: true },
      { title: "Finance Chair", period: "Sep 2025 – Apr 2026", current: false },
    ],
  },
];
