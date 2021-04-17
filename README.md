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
- What about experience with libraries?
- A proper image gallery section for NBP

```tsx
<GalleryImage 
   href="/images/nbp-12.webp"
   description="Arbersee September 2021" 
   meta="Fuji X-H1" 
   margin="1rem"
 />
```

## Research

- Why does the `export` script does not work when opening as a file in browser?
- Research how to work with .env Variables for Prod and Deploy
- TailwindCSS 
  - If TailwindCSS proves to be good, it would streamline some problems

## Tasks

### General

- [ ] Implement `Canadara` as font
- [ ] [Implement Markdown import](http://geekhmer.github.io/blog/2018/03/29/import-markdown-files-and-serve-its-content-in-next-dot-js/)

### Theme

- [ ] Implement better dark mode
  - [next-themes](https://github.com/pacocoursey/next-themes)
  - [tailwind](https://dev.to/enochndika/dark-mode-with-tailwindcss-in-next-js-2if5)
  - [Persist dark mode via local storage](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually)
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
-  `<Row />`
  - [ ] Refactor cols
- `<Flex />`
	-	[ ] Setup base props
	-	[ ] Implement responsive props `cols-m={2} col-min-width-m="250px"`
- `<Button />`
  - [x] `label` as `children`
  - [ ] Icons for Button
- `<Section />`
  - [ ] Add `id` and `hash` functionality
- `<Text />`
	- [x] Setup
- `<Image />`
	- [ ] Setup
- `<Cell />`
	- [ ] Setup
