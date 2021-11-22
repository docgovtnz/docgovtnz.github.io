---
title: Starting New Projects
slug: /new-projects
---

The following page contains some suggestions for the publishing of new code bases.

If a new software project is created by Department staff, and/or the agreement with an external vendor allows for the open sourcing of code, these projects should be started as open code code and attributed a licence from day one: *"working in the open"*. This makes it clear to project contributors that their contributions will be public, rather than needing to retro-actively obtain permission. Similarly, this encourages best practices in making sure DOC-specific configuration is kept out of the code-base and injected through environment variables or similar.

## Considerations

* Is it possible to make the main/canonical source code repository public? 
  * (instead of an internal repository with a publishing process)
* Is there relevant documentation that should be made publicly available? 
  * Can the documentation be made available in a form to which the public can contribute?
  * Is the documentation available under a Creative Commmons licence? (see NZGOAL-SE (71)(72) for suggestions)
* Is it possible to make the development roadmap publicly available?
* Have you considered processes or systems to ensure secrets/private information is not accidentally committed to the codebase?
  * e.g. commit hooks/automated secret scanning, appropriate use of `.gitignore` and environment variables/configuration.

## Technical aspects

* Ensure that the project has an updated `README.md`, also including reference to the open source licence that has been attributed. Assuming the project is aiming to encourage contributions, the README should also make mention of our Contributing Guidelines, which in turn refer to our Code of Conduct.
* The open source licence must be included in the repository. There are slight variations on the naming, but our convention is using the filename `LICENCE.md`.
* The repository should include a `SECURITY.md` with information on our Responsible Disclosure Guidelines.
* If the repository is seeking community engagement, contributions and feedback, the GitHub repo should be configured appropriately to allow for these.

## Further reading

The excellent [NZGOAL-SE](https://www.data.govt.nz/toolkit/policies/nzgoal/) (New Zealand Government Open Access and Licensing Software Extension) has plenty of information specific to New Zealand government entities wishing to open source software.

In addition to the policy and process, [NZGOAL-SE note 2](https://www.data.govt.nz/toolkit/policies/nzgoal/nzgoal-se-guidance-note-2/) has detailed technical suggestions. This includes a specific section on ['working in the open'](https://www.data.govt.nz/toolkit/policies/nzgoal/nzgoal-se-guidance-note-2/#working-in-the-open), which aligns with the approach proposed here.