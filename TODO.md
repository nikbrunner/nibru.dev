# TODO

- [x] Convert all components to named exports
- [x] Setup path aliases
- [x] Sort imports
- [x] Rename `types` to `typings`

## Styling

- [x] Rename `scss` to `style`
- [ ] Clean out and simplify `.scss` files

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
