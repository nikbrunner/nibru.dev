# TODO

- [x] Convert all components to named exports
- [x] Setup path aliases
- [x] Sort imports
- [x] Rename `types` to `typings`

## Styling

- [x] Rename `scss` to `style`
- [ ] Clean out and simplify `.scss` files

### Styling Hooks

I want to build a custom hook, in combination with a prop type to implement reactive styling for components like Grid.

The problem is, that I am not sure, what problem I want to solve with this.
I have the feeling that I am thinking to complicated again, but also that I would find it very useful at times.

For example:
- A `Grid` component should have a `cols` property but, it generally (via SCSS) should collapse anyway to one col on smaller viewports
- On the other hand, for something like `margin`, `padding`, and other smaller values, this could be useful.

Also this would be a good practice in Problem Solving and TypeScript

- [ ] Analyse problem  and think if this solution is necessery.
  - Ask yourself: "What is the easiest way to solve my problem?"
- [ ] `useResponsiveStyle()`
- [ ] `useResponsiveStyles()`

## Components

- [ ] Manual dark mode toggle

### `Image`

- [ ] Introduce own new component or use `next/image`

### `Section`

- [ ] Add Anchors

### `Button`

- [ ] Add icons

## Partials

Partials should compose of components, but with no own styling

- [ ] Introduce folder
- [ ] Convert `<Row/>` to partial without own styling
- [ ] Convert `<Page/>` to partial without own styling
- [ ] **Question** Should `Skill` and `Experience` also be partials?

## Styling System

Generic, but responsive styling system for all components.
Take [Styled System](https://styled-system.com/) as Inspiration.

- [ ] Plan out system
  - `useResponsiveStyles`
