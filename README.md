# Project — nibru.dev - next

This is the next version of my personal website.

## Run

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Stages

### Stage 1

- Landing page
- Basic info
	-	Personal
	-	Skills
	-	Experiences

### Stage 2

- NBP Section
	-	Image Galleries

### Stage 3

- Blog
	-	NBP
	-	Dev

## Ideas

- [Bubble Like Chart for Skills](https://www.npmjs.com/package/@weknow/react-bubble-chart-d3)?
- Bauhaus Colors with Cells?
- A proper image gallery section for NBP
	- `<GalleryImage description="Arbersee September 2021" meta="Fuji X-H1"/>`

## Questions

- Why does the `export` script does not work when opening as a file in browser?
- Research how to work with .env Variables for Prod and Deploy

## Log

### 21.01.10 — Sunday

- [x] Setup `<Grid />` component

### 21.04.06 — Tuesday

- [x] Clean up commits from last time
- [x] Progress on `<Grid/>`

### 21.04.14 — Wednesday

- [x] Progress on styling `<Skill/>`

### 21.04.15 — Thursday

- [x] Finish `<Skill/>` design
- [x] Setup colors.ts file
- [x] Setup better Icon lib
  - [x] Remove FA Lib after

## Tasks

### General

- [x] Light/Dark Toggle
- [ ] Decide on Fonts
- [ ] [Implement Markdown import](http://geekhmer.github.io/blog/2018/03/29/import-markdown-files-and-serve-its-content-in-next-dot-js/)
- [ ] Put `theme` as `Prop` for simple components ( Diff between components and partials)

### SCSS

- [ ] Figure out a way to import SCSS vars into tsx
- [ ] Put component `.scss` files into a folder together with the `.tsx`
- [ ] Decide on colors
  - [ ] Setup all shades
  - [ ] Dry up with functions

### Components

-  `<Link />`
   - [ ] Dry up SCSS
   - [ ] Better underline
-  `<Skill />`
	- [ ] Setup optional description points for `Skill`
	- [ ] Replace hardcoded color values
-  `<Grid />`
	-	[ ] Setup base props
	-	[ ] Implement responsive props `cols-m={2} col-min-width-m="250px"`
- `<Flex />`
	-	[ ] Setup base props
	-	[ ] Implement responsive props `cols-m={2} col-min-width-m="250px"`
- `<Button />`
  - [ ] `label` as `children`
- `<Section />`
  - [ ] Add `id` and `hash` functionality
- `<Text />`
	- [ ] Setup
- `<Image />`
	- [ ] Setup
- `<Cell />`
	- [ ] Setup
