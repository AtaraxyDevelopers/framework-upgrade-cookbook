<p><a href="https://ataraxydevelopers.com"><img src="docs/brand/ataraxy-developers-logo.png" alt="Ataraxy Developers — Turning Digital Visions Into Reality" width="520"></a></p>

# Framework Upgrade Cookbook

[![CI](https://github.com/AtaraxyDevelopers/framework-upgrade-cookbook/actions/workflows/ci.yml/badge.svg)](https://github.com/AtaraxyDevelopers/framework-upgrade-cookbook/actions/workflows/ci.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Executable Express 4 to 5 migration examples with shared HTTP contract tests.

An open-source project from [Ataraxy Developers](https://github.com/AtaraxyDevelopers).

## Quick start

Install [Node.js](https://nodejs.org/en/download) 22 or 24 (npm is included). Check
`node --version` and `npm --version` in your terminal. The commands below run from
this repository's root folder, the one containing `package.json`.

**With Git:**

```sh
git clone https://github.com/AtaraxyDevelopers/framework-upgrade-cookbook.git
cd framework-upgrade-cookbook
npm ci
npm test
```

**Without Git:** choose **Code → Download ZIP** on GitHub, extract the archive,
and open a terminal in the extracted `framework-upgrade-cookbook-main` folder (release archives may
include the version in the folder name). Run `npm ci` and `npm test` there.
Use the **source-code ZIP**, not an npm `.tgz` package, to follow this developer walkthrough.
The install step may need internet access; the examples run locally afterward.

On Windows PowerShell, if `npm.ps1` is blocked by execution policy, use `npm.cmd`
in place of `npm` in these commands. No execution-policy change is required.

```sh
npm run demo
```

This repository installs Express 4.22.3 and 5.3.0 under npm aliases so both
applications can run in one checkout. The demo starts temporary loopback servers,
compares responses, and shuts them down.

## Three executable migration recipes

1. [Optional route segments](recipes/01-optional-segments.md).
2. [Named wildcards and changed parameter shape](recipes/02-wildcards.md).
3. [Rejected async handlers](recipes/03-async-errors.md).

Compare [before/app.mjs](before/app.mjs) and [after/app.mjs](after/app.mjs).
The shared HTTP contract tests run against both actual framework versions. A separate
test confirms the legacy route syntax fails when registered directly in Express 5.

## Applying the method to your project

Record public HTTP contracts first, reproduce them on the old version, change one
behavior at a time, then run the same contracts on the new version. Keep both success
and failure cases. Review your dependencies and the full framework migration guide
before upgrading an application. Commit the lockfile and test your deployment path.

## Scope and limitations

This covers three selected changes, not every Express 5 incompatibility. The examples
have no authentication, database, or production deployment configuration. Dependency
versions are pinned for reproducibility and updated through reviewed changes.

Source: [official Express 5 migration guide](https://expressjs.com/en/guide/migrating-5/).

## Expected first run

The demo prints matching responses for the Express 4 and Express 5 apps. The `/async-error` route intentionally returns 503; the demonstration itself exits successfully.

## Contributing and support

See [CONTRIBUTING.md](CONTRIBUTING.md), [community expectations](CODE_OF_CONDUCT.md),
and [SECURITY.md](SECURITY.md). Open an issue with a minimal synthetic reproduction.
This project is maintained on a best-effort basis. No paid service or account is
required to run the local examples.

## License

[MIT](LICENSE). You may use, adapt, and redistribute this project under its license.
