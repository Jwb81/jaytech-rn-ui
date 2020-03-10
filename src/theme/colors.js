/**
 * @instructions each array has 10 or 14 colors in it (10 lightest to darkest and 4 accent colors)
 * -- lighten 5 through lighten 1
 * -- base color
 * -- darken 1 through dark 4
 * -- accent colors (optional)
 */

const red = [
  '#FFEBEE',
  '#FFCDD2',
  '#EF9A9A',
  '#E57373',
  '#EF5350',
  '#F44336',
  '#E53935',
  '#D32F2F',
  '#C62828',
  '#B71C1C',
  '#FF8A80',
  '#FF5252',
  '#FF1744',
  '#D50000',
];

const pink = [
  '#FCE4EC',
  '#F8BBD0',
  '#F48FB1',
  '#F06292',
  '#EC407A',
  '#E91E63',
  '#D81B60',
  '#C2185B',
  '#AD1457',
  '#880E4F',
  '#FF80AB',
  '#FF4081',
  '#F50057',
  '#C51162',
];

const purple = [
  '#F3E5F5',
  '#E1BEE7',
  '#CE93D8',
  '#BA68C8',
  '#AB47BC',
  '#9C27B0',
  '#8E24AA',
  '#7B1FA2',
  '#6A1B9A',
  '#4A148C',
  '#EA80FC',
  '#E040FB',
  '#D500F9',
  '#AA00FF',
];

const deepPurple = [
  '#EDE7F6',
  '#D1C4E9',
  '#B39DDB',
  '#9575CD',
  '#7E57C2',
  '#673AB7',
  '#5E35B1',
  '#512DA8',
  '#4527A0',
  '#311B92',
  '#B388FF',
  '#7C4DFF',
  '#651FFF',
  '#6200EA',
];

const indigo = [
  '#E8EAF6',
  '#C5CAE9',
  '#9FA8DA',
  '#7986CB',
  '#5C6BC0',
  '#3F51B5',
  '#3949AB',
  '#303F9F',
  '#283593',
  '#1A237E',
  '#8C9EFF',
  '#536DFE',
  '#3D5AFE',
  '#304FFE',
];

const blue = [
  '#E3F2FD',
  '#BBDEFB',
  '#90CAF9',
  '#64B5F6',
  '#42A5F5',
  '#2196F3',
  '#1E88E5',
  '#1976D2',
  '#1565C0',
  '#0D47A1',
  '#82B1FF',
  '#448AFF',
  '#2979FF',
  '#2962FF',
];

const lightBlue = [
  '#E1F5FE',
  '#B3E5FC',
  '#81D4FA',
  '#4FC3F7',
  '#29B6F6',
  '#03A9F4',
  '#039BE5',
  '#0288D1',
  '#0277BD',
  '#01579B',
  '#80D8FF',
  '#40C4FF',
  '#00B0FF',
  '#0091EA',
];

const cyan = [
  '#E0F7FA',
  '#B2EBF2',
  '#80DEEA',
  '#4DD0E1',
  '#26C6DA',
  '#00BCD4',
  '#00ACC1',
  '#0097A7',
  '#00838F',
  '#006064',
  '#84FFFF',
  '#18FFFF',
  '#00E5FF',
  '#00B8D4',
];

const teal = [
  '#E0F2F1',
  '#B2DFDB',
  '#80CBC4',
  '#4DB6AC',
  '#26A69A',
  '#009688',
  '#00897B',
  '#00796B',
  '#00695C',
  '#004D40',
  '#A7FFEB',
  '#64FFDA',
  '#1DE9B6',
  '#00BFA5',
];

const green = [
  '#E8F5E9',
  '#C8E6C9',
  '#A5D6A7',
  '#81C784',
  '#66BB6A',
  '#4CAF50',
  '#43A047',
  '#388E3C',
  '#2E7D32',
  '#1B5E20',
  '#B9F6CA',
  '#69F0AE',
  '#00E676',
  '#00C853',
];

const lightGreen = [
  '#F1F8E9',
  '#DCEDC8',
  '#C5E1A5',
  '#AED581',
  '#9CCC65',
  '#8BC34A',
  '#7CB342',
  '#689F38',
  '#558B2F',
  '#33691E',
  '#CCFF90',
  '#B2FF59',
  '#76FF03',
  '#64DD17',
];

const lime = [
  '#F9FBE7',
  '#F0F4C3',
  '#E6EE9C',
  '#DCE775',
  '#D4E157',
  '#CDDC39',
  '#C0CA33',
  '#AFB42B',
  '#9E9D24',
  '#827717',
  '#F4FF81',
  '#EEFF41',
  '#C6FF00',
  '#AEEA00',
];

const yellow = [
  '#FFFDE7',
  '#FFF9C4',
  '#FFF59D',
  '#FFF176',
  '#FFEE58',
  '#FFEB3B',
  '#FDD835',
  '#FBC02D',
  '#F9A825',
  '#F57F17',
  '#FFFF8D',
  '#FFFF00',
  '#FFEA00',
  '#FFD600',
];

const amber = [
  '#FFF8E1',
  '#FFECB3',
  '#FFE082',
  '#FFD54F',
  '#FFCA28',
  '#FFC107',
  '#FFB300',
  '#FFA000',
  '#FF8F00',
  '#FF6F00',
  '#FFE57F',
  '#FFD740',
  '#FFC400',
  '#FFAB00',
];

const orange = [
  '#FFF3E0',
  '#FFE0B2',
  '#FFCC80',
  '#FFB74D',
  '#FFA726',
  '#FF9800',
  '#FB8C00',
  '#F57C00',
  '#EF6C00',
  '#E65100',
  '#FFD180',
  '#FFAB40',
  '#FF9100',
  '#FF6D00',
];

const deepOrange = [
  '#FBE9E7',
  '#FFCCBC',
  '#FFAB91',
  '#FF8A65',
  '#FF7043',
  '#FF5722',
  '#F4511E',
  '#E64A19',
  '#D84315',
  '#BF360C',
  '#FF9E80',
  '#FF6E40',
  '#FF3D00',
  '#DD2C00',
];

const brown = [
  '#EFEBE9',
  '#D7CCC8',
  '#BCAAA4',
  '#A1887F',
  '#8D6E63',
  '#795548',
  '#6D4C41',
  '#5D4037',
  '#4E342E',
  '#3E2723',
];

const blueGray = [
  '#ECEFF1',
  '#CFD8DC',
  '#B0BEC5',
  '#90A4AE',
  '#78909C',
  '#607D8B',
  '#546E7A',
  '#455A64',
  '#37474F',
  '#263238',
];

const gray = [
  '#FAFAFA',
  '#F5F5F5',
  '#EEEEEE',
  '#E0E0E0',
  '#BDBDBD',
  '#9E9E9E',
  '#757575',
  '#616161',
  '#424242',
  '#212121',
];

const lightModes = {
  0: { label: 'Lighten', index: 5 },
  1: { label: 'Lighten', index: 4 },
  2: { label: 'Lighten', index: 3 },
  3: { label: 'Lighten', index: 2 },
  4: { label: 'Lighten', index: 1 },

  5: { label: '', index: '' },

  6: { label: 'Darken', index: 1 },
  7: { label: 'Darken', index: 2 },
  8: { label: 'Darken', index: 3 },
  9: { label: 'Darken', index: 4 },

  10: { label: 'Accent', index: 1 },
  11: { label: 'Accent', index: 2 },
  12: { label: 'Accent', index: 3 },
  13: { label: 'Accent', index: 4 },
};

const generateColors = (colorArr, colorLabel) => {
  return colorArr.reduce((acc, cur, curIdx) => {
    acc[`${colorLabel}${lightModes[curIdx].label}${lightModes[curIdx].index}`] = cur;
    return acc;
  }, {});
};

const colorPalette = {
  ...generateColors(red, 'red'),
  ...generateColors(pink, 'pink'),
  ...generateColors(purple, 'purple'),
  ...generateColors(deepPurple, 'deepPurple'),
  ...generateColors(indigo, 'indigo'),
  ...generateColors(blue, 'blue'),
  ...generateColors(lightBlue, 'lightBlue'),
  ...generateColors(cyan, 'cyan'),
  ...generateColors(teal, 'teal'),
  ...generateColors(green, 'green'),
  ...generateColors(lightGreen, 'lightGreen'),
  ...generateColors(lime, 'lime'),
  ...generateColors(yellow, 'yellow'),
  ...generateColors(amber, 'amber'),
  ...generateColors(orange, 'orange'),
  ...generateColors(deepOrange, 'deepOrange'),
  ...generateColors(brown, 'brown'),
  ...generateColors(blueGray, 'blueGray'),
  ...generateColors(gray, 'gray'),
};

export const SOCIAL = {
  FACEBOOK: '#3B5998',
  TWITTER: '#5BC0DE',
  DRIBBBLE: '#EA4C89',
};

export const THEME = {
  THEME: '#B23AFC',

  // from Galio
  // PRIMARY: '#B23AFC',
  // INFO: '#1232FF',
  // ERROR: '#FE2472',
  // WARNING: '#FF9C09',
  // SUCCESS: '#45DF31',

  // from Material Native Kit
  DEFAULT: '#DCDCDC',
  PRIMARY: '#9C26B0',
  INFO: '#00BCD4',
  ERROR: '#F44336',
  WARNING: '#FF9800',
  SUCCESS: '#4CAF50',
  LABEL: '#FE2472',
  MUTED: '#979797',
  INPUT: '#DCDCDC',
  ACTIVE: '#9C26B0',
  BUTTON_COLOR: '#9C26B0',
  PLACEHOLDER: '#9FA5AA',
  SWITCH_ON: '#9C26B0',
  SWITCH_OFF: '#D4D9DD',
  GRADIENT_START: '#6B24AA',
  GRADIENT_END: '#AC2688',
  PRICE_COLOR: '#EAD5FB',
  BORDER_COLOR: '#E7E7E7',
  BLOCK: '#E7E7E7',
  ICON: '#4A4A4A',
};

export const COMPONENTS = {
  INPUT: '#808080',
  PLACEHOLDER: '#9FA5AA',
  NAVBAR: '#F9F9F9',
  BLOCK: '#808080',
  ICON: '#000000',
};

const INPUTS = {
  INPUT_TEXT: '#656565',
};

const COLORS = {
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  GREY: '#898989',
  // MUTED: '#9FA5AA',
  MUTED: '##8F9BB3',
  TRANSPARENT: 'transparent',
  NEUTRAL: 'rgba(255,255,255, 0.65)',
  ...INPUTS,   
  ...COMPONENTS,
  ...THEME,
  ...SOCIAL,
  ...colorPalette,
};

const lightModeColors = {
  TEXT_BASIC: '#222B45',
  TEXT_ALTERNATE: '#FFFFFF',
  TEXT_HINT: '#8F9BB3',

  BACKGROUND_BASIC_1: '#FFFFFF',
  BACKGROUND_BASIC_2: '#F7F9FC',
  BACKGROUND_BASIC_3: '#EDF1F7',
  BACKGROUND_BASIC_4: '#E4E9F2',
  BACKGROUND_ALTERNATE_1: '#222B45',
  BACKGROUND_ALTERNATE_2: '#1A2138',
  BACKGROUND_ALTERNATE_3: '#151A30',
  BACKGROUND_ALTERNATE_4: '#101426',

  BORDER_BASIC_1: '#FFFFFF',
  BORDER_BASIC_2: '#F7F9FC',
  BORDER_BASIC_3: '#EDF1F7',
  BORDER_BASIC_4: '#E4E9F2',
  BORDER_BASIC_5: '#C5CEE0',
  BORDER_ALTERNATE_1: '#222B45',
  BORDER_ALTERNATE_2: '#1A2138',
  BORDER_ALTERNATE_3: '#151A30',
  BORDER_ALTERNATE_4: '#101426',
  BORDER_ALTERNATE_5: '#101426',
};

const darkModeColors = {
  TEXT_BASIC: '#FFFFFF',
  TEXT_ALTERNATE: '#1A2138',
  TEXT_HINT: '#8F9BB3',

  BACKGROUND_BASIC_1: '#222B45',
  BACKGROUND_BASIC_2: '#1A2138',
  BACKGROUND_BASIC_3: '#151A30',
  BACKGROUND_BASIC_4: '#101426',
  BACKGROUND_ALTERNATE_1: '#FFFFFF',
  BACKGROUND_ALTERNATE_2: '#F7F9FC',
  BACKGROUND_ALTERNATE_3: '#EDF1F7',
  BACKGROUND_ALTERNATE_4: '#E4E9F2',

  BORDER_BASIC_1: '#222B45',
  BORDER_BASIC_2: '#1A2138',
  BORDER_BASIC_3: '#151A30',
  BORDER_BASIC_4: '#101426',
  BORDER_BASIC_5: '#101426',
  BORDER_ALTERNATE_1: '#FFFFFF',
  BORDER_ALTERNATE_2: '#F7F9FC',
  BORDER_ALTERNATE_3: '#EDF1F7',
  BORDER_ALTERNATE_4: '#E4E9F2',
  BORDER_ALTERNATE_5: '#C5CEE0',

  BORDER_BASIC_1: '#222B45',
  BORDER_BASIC_2: '#1A2138',
  BORDER_BASIC_3: '#151A30',
  BORDER_BASIC_4: '#101426',
  BORDER_BASIC_5: '#101426',
  BORDER_ALTERNATE_1: '#FFFFFF',
  BORDER_ALTERNATE_2: '#F7F9FC',
  BORDER_ALTERNATE_3: '#EDF1F7',
  BORDER_ALTERNATE_4: '#E4E9F2',
  BORDER_ALTERNATE_5: '#C5CEE0',
};

export const getThemeModeColors = (mode = 'light') => {
  switch (mode.toLowerCase()) {
    case 'light':
      return lightModeColors;
    case 'dark':
      return darkModeColors;
    default:
      return lightModeColors;
  }
};

export default COLORS;
