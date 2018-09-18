module.exports = ({ env }) => ({
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-mixins': {},
    'postcss-advanced-variables': {},
    'postcss-extend-rule': {},
    'postcss-atroot': {},
    'postcss-preset-env': {
      browsers: [
        '>0.5%',
      ],
      cascade: false,
    },
    'postcss-property-lookup': {},
    'postcss-nested': {},
    'cssnano': env === 'production' ? {} : false,
  },
});
  