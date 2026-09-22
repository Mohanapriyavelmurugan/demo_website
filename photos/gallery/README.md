# Newsroom photos — drop them here

Put event photos in this folder, then tell Claude (or run the script yourself).
Originals stay here untouched; optimised copies are generated into
`frontend/public/newsroom/`.

## How to add photos

1. **Drop the image files in this folder.** Any name is fine — for example
   `doctors ai summit.jpg`. JPEG and PNG both work.

2. **Optimise them** by running this from the repo root:

   ```
   node scripts/optimise-photos.js photos/gallery frontend/public/newsroom
   ```

   This resizes each image to 1600px wide, converts to JPEG, and gives it a
   clean web-safe name (`doctors ai summit.jpg` becomes `doctors-ai-summit.jpg`).
   Large phone photos typically shrink from several MB to a few hundred KB,
   which keeps the page fast.

3. **Add an entry** to `frontend/src/content/newsroom.ts` for each photo:

   ```ts
   {
     image: "/newsroom/doctors-ai-summit.jpg",
     alt: "Vinay Koushik speaking at the Doctors AI Global Summit",
     event: "Doctors AI Global Summit",
     date: "September 2026",
     location: "Bengaluru",
     caption: "One or two sentences on what took place.",
   },
   ```

   Newest entry first. The `image` path must match the generated filename.

4. **Commit and push.** The Newsroom link appears in the site navigation
   automatically as soon as this list has at least one entry, so the page is
   never exposed while empty.

## Writing captions

Say what actually happened — attended, spoke, met, presented. Avoid implying
partnerships, endorsements, customers, or clinical outcomes that have not been
agreed, since this page is read by investors and prospective clients.

## Photo tips

- Landscape photos suit the card grid best; cards crop to 4:3.
- If a crop cuts off someone's head, add `imagePosition: "center 20%"` to that
  entry to shift the focal point up.
- Make sure anyone clearly identifiable in a photo is happy to appear on a
  public company website.
