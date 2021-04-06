# Project — nibru.dev - next

This is the next version of my personal website.

## Run

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tasks

- [ ] Fonts
- [x] Light/Dark Toggle
	- [ ] **Research:** Setup effective dark/light color maps — [Example](https://codepen.io/BarthyB/pen/EBzxje)
	- [ ] **Research:** The 7/1 SCSS has a Themes folder. Look how they intend to solve this
- [ ] Debug mode
- [ ] [Implement Markdown import](http://geekhmer.github.io/blog/2018/03/29/import-markdown-files-and-serve-its-content-in-next-dot-js/)

### Bugs

- [ ] Fix height problem in Buttons with SVG Icons

### Components

- [x] `<Link />`
- [ ] `<Text />`
- [ ] `<Grid />`
- [ ] `<Flex />`
- [ ] `<Image />`
- [ ] `<Cell />`

## Ideas

- [Bubble Like Chart for Skills](https://www.npmjs.com/package/@weknow/react-bubble-chart-d3)?
- Bauhaus Colors with Cells?

## Questions

- Why does the `export` script does not work when opening as a file in browser?
- Research how to work with .env Variables for Prod and Deploy

## Log

### 21.01.10 — Sunday

- [x] Setup `<Grid />` component

### 21.04.06 — Tuesday

- [ ] Clean up commits from last time

### Next time

- [ ] Progress on `<Grid />` component
	- [ ] Declare breakpoints in a ts file
	- [ ] Add media query props for cols like `m={3}`
	- [ ] Use `useViewport` to evaluate settings
