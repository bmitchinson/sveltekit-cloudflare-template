### Create repo:

- `npm create cloudflare@latest -- letters --framework=svelte`
  - No real need to do this, since this template already exists

### Init from this template

- Change `name` property of wrangler.jsonc

### Deploying

- `node run deploy` will deploy to https://{name_property}.mitchinson-dev.workers.dev/
- to associate with a subdomain on your cloudflare managed domain:
- dash > Compute (Workers) > {name} > Settings > Domains & Routes > + Add > Custom Domain > `planets.mitchinson.dev`

### DB Creation

- add a db [link](https://developers.cloudflare.com/workers/wrangler/commands/#d1-create)
  - `npx wrangler d1 create letters_db` (replace w db name)
  - paste json output into wrangler.jsonc
  - make migrations

wrangler creates a local db for dev and a remote for deployments.

### DB Migrations + Manual Edits

Migrations:

- create a migration file
- `npx wrangler d1 migrations apply letters_db --remote` (replace w db name)
  - `--remote` applies the changes to the remote db, removing does local

Manual changes:

- `npx wrangler d1 execute letters_db --command "INSERT INTO mailboxes (name, password) VALUES ('matt', 'testpassword') ON CONFLICT(name) DO UPDATE SET password=excluded.password;" --remote`
  - note "remote" again

Clear local:

- Shouldn't really need to do this but, if testing migrations from start:
- `rm -f .wrangler/state/d1/letters_db/*.sqlite3`

### Secrets

- Add Local: just add to `/.dev.vars` with `.env` syntax
- Add Remote: `npx wrangler secret put COOKIE_SECRET` will prompt for value
