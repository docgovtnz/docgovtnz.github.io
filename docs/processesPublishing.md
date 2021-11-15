---
title: Publishing Existing Code
slug: /publishing-existing
---

The following page contains some informal suggestions for the publishing of legacy/pre-existing code bases.

With new projects that are *open by default*, it is immediately obvious that the code published will be public therefore certain considerations may be made by developers before pushing code (e.g. using environment variables, keeping DOC-specific configuration out of the repository). However, for pre-existing code bases a thorough audit of the code should be performed before its open sourcing to ensure the security and privacy of those involved in the development—even if there was always an intention to open source the code.

## Considerations

:::caution
Make sure the git history is removed or audited for any private information.
Simply removing information by a standard git commit will still mean there is a copy retained in the history!
:::

Make sure that the following information is excluded from the repo. Note that these types of things should not live in the code repository, irrespective of whether it is open source or not.

* Are there any SQL/JSON/data migration dumps?
  * Try looking for files with names similar to `.sql`, `.dump`, `.json`, `.n1ql`
* Is there any private or user-identifying information?
  * e.g. email addresses in commits/data
  * Try searching for `doc.govt.nz` or `@` across the code base; similarly search for any names of people involved in the project
* Are there any environment files, log files, certificates, private keys or key stores?
  * Try looking for files with names containing `env`, `.p12`, `.pem`, `.key`, `.log` etc
* Is there any DOC-specific cloud configuration? (e.g. references to AWS account numbers, ARNs, DOC network configurations, synthesised CloudFormation stacks)
* Random strings of characters may suggest a secret key or similar credentials. Automated tools can be used to help find these.

## Code scanning tools

There are a number of automated tools that can be used to scan the code for secrets. The following have been used successfully.

* https://github.com/Yelp/detect-secrets
* https://github.com/awslabs/git-secrets

## What else?

* Ensure that the project has an updated `README.md`, also including the open source licence that has been attributed. The README should also make mention of our Contributing Guidelines, which in turn refer to our Code of Conduct.
* The open source licence must be included in the repository. There are slight variations on the naming, but our convention is using the filename `LICENCE.md`.
* The repository should include a `SECURITY.md` with information on our Responsible Disclosure Guidelines.