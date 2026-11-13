# Framework Upgrade Cookbook

[![CI](https://github.com/AtaraxyDevelopers/framework-upgrade-cookbook/actions/workflows/ci.yml/badge.svg)](https://github.com/AtaraxyDevelopers/framework-upgrade-cookbook/actions/workflows/ci.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Executable Express 4 to 5 migration examples with shared HTTP contract tests.

An open-source project from [Ataraxy Developers](https://github.com/AtaraxyDevelopers).

## Quick start

Requires Node.js 22 or 24 and npm. Git is optional if you download the source ZIP.

```sh
git clone https://github.com/AtaraxyDevelopers/framework-upgrade-cookbook.git
cd framework-upgrade-cookbook
npm ci
npm test
```

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

## Contributing and support

See [CONTRIBUTING.md](CONTRIBUTING.md), [community expectations](CODE_OF_CONDUCT.md),
and [SECURITY.md](SECURITY.md). Open an issue with a minimal synthetic reproduction.
This project is maintained on a best-effort basis. No paid service or account is
required to run the local examples.

## License

[MIT](LICENSE). You may use, adapt, and redistribute this project under its license.
