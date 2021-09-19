export interface ICnParams {
  block?: string;
  element?: string;
  modifiers?: Record<string, unknown>;
  utils?: string[];
  others?: string[];
}

export const cn = ({
  block = "",
  element = "",
  utils = [],
  others = [],
  modifiers = {}
}: ICnParams): string => {
  const blockClassName = element ? `${block}__${element}` : block;

  const mods = Object.entries(modifiers).filter(
    value =>
      value[1] !== undefined &&
      value[1] !== null &&
      value[1] !== "" &&
      value[1] !== false
  );

  return [
    ...[blockClassName],
    utils.join(" "),
    others.join(" "),
    mods.map(value => `${blockClassName}--${value[0]}`).join(" ")
  ].join(" ");
};
