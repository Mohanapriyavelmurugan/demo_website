/*
 * Newsroom entries — events, summits, and meetings.
 *
 * To add one:
 *  1. Drop the photo into `photos/gallery/` in the repo root.
 *  2. Add an entry below. `image` is the path under `frontend/public/newsroom/`.
 *  3. The Newsroom link appears in the navigation automatically once this list
 *     is non-empty, so a half-finished page is never exposed.
 *
 * Keep the newest entry first. Captions should state what actually happened —
 * no claims about outcomes, partnerships, or endorsements that did not occur.
 */

export type NewsroomItem = {
  /** Path under frontend/public, e.g. "/newsroom/doctors-ai-summit.jpg" */
  image: string;
  /** Describes the photo for screen readers and if the image fails to load. */
  alt: string;
  /** Event or occasion, e.g. "Doctors AI Global Summit". */
  event: string;
  /** Free text, e.g. "September 2026". Shown next to the event name. */
  date: string;
  /** Optional city or venue. */
  location?: string;
  /** One or two sentences on what took place. */
  caption: string;
  /** Optional: focal point for the crop, e.g. "center 20%". */
  imagePosition?: string;
};

export const newsroomItems: NewsroomItem[] = [
  // Example of the shape — delete this comment block when the first real entry lands.
  // {
  //   image: "/newsroom/doctors-ai-summit.jpg",
  //   alt: "A Valtraq representative speaking at the Doctors AI Global Summit",
  //   event: "Doctors AI Global Summit",
  //   date: "September 2026",
  //   location: "Bengaluru",
  //   caption: "Valtraq joined clinicians and health technology teams to discuss
  //             guideline-grounded decision support in outpatient care.",
  // },
];
