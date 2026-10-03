# Offline Portfolio Content

The frontend bundles `src/app/data/cms-snapshot.json`, generated from the
local CMS exports. Deployment does not require the CMS repository or a local
database to be running.

By default, content requests try Strapi and fall back to the bundled snapshot
on network failures, timeouts, non-success HTTP responses or invalid JSON.
Successful CMS responses remain authoritative.

Set the server environment variable `CONTENT_SOURCE=local` in Vercel (then
redeploy) to skip Strapi requests entirely while the backend is unavailable.
Remove this variable to resume CMS-first loading.

To refresh the snapshot, with the two repositories next to each other, run
from the frontend directory:

```sh
node scripts/sync-local-content.mjs
```

To refresh only project images and skill icons while preserving edits to the
snapshot's records and text, run:

```sh
node scripts/sync-local-content.mjs --media-only
```

To refresh only case studies, testimonials and Now from the CMS repository's
`data reference` JSON files while preserving other snapshot edits:

```sh
node scripts/sync-local-content.mjs --sections-only
```

Commit the updated snapshot and redeploy the frontend. Editing CMS JSON alone
does not update an already deployed frontend.

The snapshot includes About, awards, experiences, projects, skills, case studies,
testimonials and Now.
Media URLs are matched from the Cloudinary inventory. Images without a match
are omitted. Cloudinary remains an external dependency.

Case studies and testimonials use the supplied reference content, including
sample names, claims and example.com links. Verify or replace these before
publishing them as genuine portfolio work or endorsements. Metrics, process,
CTA and writing reference sections remain excluded.
This snapshot is not a complete live database backup and may not include
changes made only in the hosted CMS.