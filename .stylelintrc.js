module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-rscss/config',
  ],
  plugins: [
    'stylelint-scss',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'comment-empty-line-before': 'always',
    'comment-whitespace-inside': 'always',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'font-family-name-quotes': 'always-unless-keyword',
    'function-url-quotes': 'always',
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'no-descending-specificity': null,
    'no-duplicate-selectors': true,
    'number-leading-zero': 'never',
    'rule-empty-line-before': 'always-multi-line',
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-colon-notation': 'single',
    'string-quotes': 'double',
    indentation: 2,
    'rscss/class-format': [
      true,
      {
        element: '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      },
    ],
    'rscss/no-descendant-combinator': true,
    'scss/at-rule-no-unknown': true,
  },
};
