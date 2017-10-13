# Kata Base Repo
====================================

This is a starter repo for constructing a code kata in JavaScript, using the newest features of the language.

Provides:
- Jest testing tool
- NPM scripts to run Jest in watch mode or watch with Coverage
- ESLint support via NPM scripts
- `.editorconfig` to match the linting rules

## Exercise Description

You should change this to contain a description of the problem you are trying to solve.


## Implementation

Serving suggestion:
1. Fork (or clone) this repo and edit the `kata.js`, `kata.spec.js`, and `README.md` files for the problem you intend to kata-fy.  Feel free to change the names of course, as suits your problem space.  Don't forget to update your import statements, etc!
2. Create a NEW BRANCH to work on, so the you can keep a clean copy of your starting exercise repo for future use.

## Requirements

You should use [NodeJS v8](https://nodejs.org/en/download/) or above.

Install assignment dependencies:

```bash
npm install
```

## Linting your code

Check your code for style issues:

```bash
npm run lint
```

## Making the test suite pass

Run Jest in watch mode, with coverage info like this:

```bash
npm run watch:cover
```

In the test suite all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by
changing `xtest` to `test`.
