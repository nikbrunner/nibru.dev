export const cn = (
  componentName: string,
  additionalClassNames: string[] = [],
  modifiers: Object = {}
) => {
  const mods = Object.entries(modifiers).filter(
    value =>
      value[1] !== undefined &&
      value[1] !== null &&
      value[1] !== '' &&
      value[1] !== false
  );

  return [
    ...[componentName],
    additionalClassNames.join(' '),
    mods.map(value => `${componentName}--${value[0]}`).join(' ')
  ].join(' ');
};
