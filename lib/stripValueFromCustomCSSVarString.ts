// Example Input  'var(--color-bg-primary)'
// Example Output '--color-bg-primary'
export const stripValueFromCustomCSSVarString = (
  variable: string
): string => {
  const openBracketIndex = variable.indexOf('(');
  const closeBracketIndex = variable.indexOf(')');
  return variable.slice(openBracketIndex + 1, closeBracketIndex);
};
