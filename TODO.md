# TODO

- [x] Convert all components to named exports
- [x] Setup path aliases
- [x] Sort imports
- [ ] Manual dark mode toggle
- [ ] Rename `scss` to `style`
- [ ] Rename `types` to `typings`

## Styling

- [ ] Clean out and simplify `.scss` files

## Components

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
