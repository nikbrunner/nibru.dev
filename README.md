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

## Tasks

- [x] Light/Dark Toggle
	- [ ] **Research:** Setup effective dark/light color maps — [Example](https://codepen.io/BarthyB/pen/EBzxje)
	- [ ] **Research:** The 7/1 SCSS has a Themes folder. Look how they intend to solve this
- [ ] Decide on Fonts
- [ ] [Implement Markdown import](http://geekhmer.github.io/blog/2018/03/29/import-markdown-files-and-serve-its-content-in-next-dot-js/)

### Bugs

- [ ] Fix height problem in Buttons with SVG Icons

### Components

- [x] `<Link />`
- [ ] `<Grid />`
	-	[ ] Setup base props
	-	[ ] Implement responsive props `cols-m={2} col-min-width-m="250px"`
- [ ] `<Flex />`
	-	[ ] Setup base props
	-	[ ] Implement responsive props `cols-m={2} col-min-width-m="250px"`
- [ ] `<Text />`
- [ ] `<Image />`
- [ ] `<Cell />`

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
