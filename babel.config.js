const presets = [
  'module:metro-react-native-babel-preset',
];

const plugins = [
  ['module-resolver'],
];

module.exports = function(api) {
  api.cache(true);
  return { presets, plugins };
};