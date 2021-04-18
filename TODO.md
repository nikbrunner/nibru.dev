# Todo

## General

- [ ] [Implement Markdown import](http://geekhmer.github.io/blog/2018/03/29/import-markdown-files-and-serve-its-content-in-next-dot-js/)

## Research

- Why does the `export` script does not work when opening as a file in browser?
- Research how to work with .env Variables for Prod and Deploy
- TailwindCSS
  - If TailwindCSS proves to be good, it would streamline some problems

## Theme

- [ ] Implement better dark mode
  - [next-themes](https://github.com/pacocoursey/next-themes)
  - [tailwind](https://dev.to/enochndika/dark-mode-with-tailwindcss-in-next-js-2if5)
  - [Persist dark mode via local storage](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually)
- [ ] Put `theme` as `Prop` for simple components ( Diff between components and partials)

## Fonts

I originally wanted to use `Candara` but it is a payed font. `Galdeano` is a good Google Fonts alternative.

- [x] Implement `Galdeano` as font
- [x] Optimize typography with [this](https://www.cssfontstack.com/candara)
- [ ] media queries for font-sizes

## SCSS

- [ ] Figure out a way to import SCSS vars into tsx
- [ ] Put component `.scss` files into a folder together with the `.tsx`
- [ ] Decide on colors
  - [ ] Setup all shades
  - [ ] Dry up with functions
- [ ] Convert `xxxl` for `mq()` to `3xl` and so on

## Components

### `<Link />`
- [ ] Dry up SCSS
- [ ] Better underline

### `<Skill />`

- [ ] Setup optional description points for `Skill`
- [ ] Replace hardcoded color values
- [ ] Implement functionality to display experiences with Libraries and Services

### `<Grid />`

-	[ ] Setup base props
-	[ ] Implement responsive props `cols-m={2} col-min-width-m="250px"`

### `<Row />`

- [ ] Refactor cols

### `<Flex />`

-	[ ] Setup base props
-	[ ] Implement responsive props `cols-m={2} col-min-width-m="250px"`

### `<Button />`

- [x] `label` as `children`
- [ ] Icons for Button

###  `<Section />`

- [ ] Add `id` and `hash` functionality

### `<Text />`

- [x] Setup

### `<Image />`

- [ ] Setup

### `<Cell />`

- [ ] Setup
