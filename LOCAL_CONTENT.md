# Offline Portfolio Content

## Keeping Both Repositories in Sync

After editing frontend snapshot or credential data, run from the frontend:

```sh
node scripts/sync-cms-data.mjs
node scripts/sync-cms-data.mjs --check
```

This explicitly exports the current frontend data to 14 CMS JSON files,
including the lossless canonical `data/portfolio-snapshot.json` and
`credentials.json`. Export overwrites the corresponding local CMS files;
review edits in both repositories first. It never connects to the database.
Empty optional collections remain empty, rather than reviving old samples.

Full CMS-to-frontend sync uses the canonical snapshot when available, preserving
IDs, media URLs, empty collections and project detail fields. It also copies
credentials. Targeted modes read the editable reference JSON files. After a
targeted sync, run the export/check commands above to update the canonical CMS
mirror. Commit both repositories together.

UI layout, styles, labels and preview limits remain frontend code, not CMS
content records. JSON copies do not automatically update an existing hosted
Strapi database. Keep `CONTENT_SOURCE=local` until database records and uploaded
media relations have been reconciled and API output compared with the snapshot.

## Published Writing

The Writing homepage section and `/writing` index list individual articles.
Edit `portfolio-cms/data reference/writing.json` with `id`, `title`, `summary`,
`url`, and an optional `publisher`. Use the actual article URL, not an author
profile. HTTPS URLs open externally; relative URLs such as `/blog/my-post`
stay on the portfolio domain. Invalid URLs and missing article links are hidden.
The index does not create article bodies: add the matching route or publish the
article first before linking it. Future same-domain posts can be listed alongside
Webkul posts without changing components.

Refresh only writing data without overwriting other local edits:

```sh
node scripts/sync-local-content.mjs --writing-only
```

The verified Webkul titles and direct links are included with short original
summaries; full article text is not copied. The CMS writing schema now supports
article URLs and publisher metadata when the updated backend is deployed.

## Detail Pages and Credentials

Project titles and screenshots open `/projects/<name-slug>`. The external-link
icon still opens the live site. Optional `role`, `problem`, `solution` and
`outcome` fields in project JSON appear only when populated. Avoid inventing
metrics or confidential implementation details. The updated local Strapi project
schema defines these fields; deploy it and reconcile database content before
expecting them in the hosted API.

Credentials live in `src/app/data/credentials.json` and are shown on the home
page and `/certifications`. Degrees are labeled as education, not certifications.
No credential verification URLs, dates or IDs are implied when unavailable.

Each credential may include an optional `url` (external certificate page) or
`image` (local `/assets/...` path or HTTPS certificate image URL). A `url` takes
priority when both exist; image-only entries open `/certifications/<id>`, where
the full snapshot is displayed. Entries without either stay non-clickable.
Use a unique URL-safe `id`. Image routes return 404 for entries without images.

Layout references: Brittany Chiang's chronological experience list
(`https://brittanychiang.com/`) and Nielsen Norman Group's guidance on scannable
project case studies (`https://www.nngroup.com/articles/ux-design-portfolios/`).

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

To refresh only case studies, testimonials, Now and writing from the CMS repository's
`data reference` JSON files while preserving other snapshot edits:

```sh
node scripts/sync-local-content.mjs --sections-only
```

Commit the updated snapshot and redeploy the frontend. Editing CMS JSON alone
does not update an already deployed frontend.

The snapshot includes About, awards, experiences, projects, skills, case studies,
testimonials, Now and published writing.
Media URLs are matched from the Cloudinary inventory. Images without a match
are omitted. Cloudinary remains an external dependency.

Case studies and testimonials use the supplied reference content, including
sample names, claims and example.com links. Verify or replace these before
publishing them as genuine portfolio work or endorsements. Metrics, process,
and CTA reference sections remain excluded.
This snapshot is not a complete live database backup and may not include
changes made only in the hosted CMS.