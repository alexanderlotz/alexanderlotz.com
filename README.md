# Alexander Lotz's Personal Website <!-- omit in toc -->

- [About](#about)
- [Code Conventions](#code-conventions)
  - [HTML/CSS](#htmlcss)
  - [JavaScript](#javascript)
- [Commit Message Guidelines](#commit-message-guidelines)
  - [Commit Message Format](#commit-message-format)
  - [Revert](#revert)
  - [Type](#type)
  - [Scope](#scope)
  - [Description](#description)
  - [Body](#body)
  - [Footer](#footer)

## About

This repostiory contains all source code for both DEV and PROD instances of the website [alexanderlotz.com](alexanderlotz.com).

## Code Conventions

This project uses distinct coding conventions in an effort to produce well-documented, readable, sustainable code. See specific language section for more information.

### HTML/CSS

This project adheres to the [Google HTML/CSS style guide](https://google.github.io/styleguide/htmlcssguide.html).

### JavaScript

This project adheres to the [Google JavaScript style guide](https://google.github.io/styleguide/jsguide.html).

## Commit Message Guidelines

Common convention for git commit messages makes it easy to understand the project history and will enable us to easily generate a project change log. This project adheres to the [Conventional Commits style guide](https://www.conventionalcommits.org/en/v1.0.0/). Key information has been included in the below sections for convenience.

### Commit Message Format

Each commit message consists of a **header** and optionally a **body** and a **footer**. The header has a special format that includes a **type**, **scope**, and **description**:

        \<type>[optional scope]: \<description>

        [optional body]

        [optional footer(s)]

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.

The **footer** should contain a closing reference to an issue if any.

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

Must be one of the following:

- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, - formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

### Scope

The scope should be the name of the project tier affected (as perceived by the person reading the changelog generated from commit messages.)

The following is the list of supported scopes:

- **business-logic**
- **database**
- **front-end**

### Description

The description contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Body

Just as in the **description**, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit Closes.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.
