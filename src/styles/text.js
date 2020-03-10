const fontWeightVariants = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];

const fontWeights = {};
fontWeightVariants.forEach(weight => {
  fontWeights[`fontWeight${weight}`] = {
    fontWeight: weight,
  };
});

const textDecorationVariants = [
  { label: 'None', value: 'none' },
  { label: 'Underline', value: 'underline' },
  { label: 'LineThrough', value: 'line-through' },
  { label: 'UnderlineLineThrough', value: 'underline line-through' },
];
const textDecorations = {};
textDecorationVariants.forEach(decoration => {
  textDecorations[`textDecoration${decoration.label}`] = {
    textDecoration: decoration.value,
  };
});

const fontStyleVariants = [
  { label: 'Normal', value: 'normal' },
  { label: 'Italic', value: 'italic' },
];
const fontStyles = {};
fontStyleVariants.forEach(style => {
  fontStyles[`fontStyle${style.label}`] = {
    fontStyle: style.value,
  };
});

const stylesheet = {
  // TEXT
  textLeft: { textAlign: 'left' },
  textCenter: { textAlign: 'center' },
  textRight: { textAlign: 'right' },
  textJustify: { textAlign: 'justify' },
  textAuto: { textAlign: 'auto' },

  fontXs: {
    fontSize: 12,
  },
  fontSm: {
    fontSize: 16,
  },
  fontMd: {
    fontSize: 20,
  },
  fontLg: {
    fontSize: 24,
  },
  fontXl: {
    fontSize: 28,
  },
  fontHeader: {
    fontSize: 40,
  },

  textFamilyChalkboard: {
    fontFamily: 'Chalkboard SE',
    // fontFamily: 'Avenir'
    // fontFamily: 'Optima'
  },
  fontBold: {
    fontWeight: 'bold',
  },
  fontNote: {
    color: '#777',
  },
  fontWhite: {
    color: 'white',
  },
  fontBlack: {
    color: 'black',
  },
  textFillCenter: {
    width: '100%',
    textAlign: 'center',
  },

  // FONT WEIGHTS
  ...fontWeights,

  // TEXT DECORATIONS
  ...textDecorations,

  // FONT STYLES
  ...fontStyles,
};

module.exports = stylesheet;
