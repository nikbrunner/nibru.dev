module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['include']
      }
    ],
    'no-invalid-position-at-import-rule': null,
    'no-descending-specificity': null,
    // Needed to disable for React CSS properties
    'value-keyword-case': null
  }
};
