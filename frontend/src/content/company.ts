/*
 * Compatibility layer for legacy components still in the repo.
 * New pages should import from @/content/site.
 */
export {
  company,
  contact,
  disclaimer,
} from "./site";

/** @deprecated Legacy types kept so unused page files still typecheck. */
export type Service = {
  title: string;
  body: string;
  icon: "stethoscope" | "book" | "chart" | "plug";
};

export type Role = {
  title: string;
  detail: string;
};

export type TeamMember = {
  name: string;
  title: string;
  bio: string;
  initials: string;
};

export const services: Service[] = [];
export const founderRoles: Role[] = [];
export const team: TeamMember[] = [];
