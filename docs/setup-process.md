### Create repo:

- `npm create cloudflare@latest -- letters --framework=svelte`

### DB Creation

- add a db [link](https://developers.cloudflare.com/workers/wrangler/commands/#d1-create)
  - `npx wrangler d1 create letters_db`
  - paste json output into wrangler.jsonc
  - make migrations
