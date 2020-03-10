// COMPONENTS
import Accordion from './components/Accordion';
import Block from './components/Block';
import Button from './components/Button';
import Card from './components/Card';
import Checkbox from './components/Checkbox';
import DeckSwiper from './components/DeckSwiper';
import Icon from './components/Icon';
import Input from './components/Input';
import NavBar from './components/NavBar';
import Radio from './components/Radio';
import Slider from './components/Slider';
import Switch from './components/Switch';
import Text from './components/Text';
import Toast from './components/Toast';
import ScreenWrapper from './components/ScreenWrapper';
import TopNavigation from './components/TopNavigation';
import DynamicStatusBar from './components/DynamicStatusBar';
import TabBar from './components/TabBar';
import TabBarIcon from './components/TabBarIcon';
import TabBarLabel from './components/TabBarLabel';

// STYLES & THEME
import { j, styles } from './styles';
import { withStyles, useTheme, JaytechProvider, JaytechTheme, themeModes } from './theme';

import galioConfig from './config/galio.json';
const GalioFont = require('./fonts/galio.ttf');

// HELPERS
import { getIconType, iconTypes, normalizeFont } from './helpers';

export {
  // COMPONENTS
  Accordion,
  Block,
  Button,
  Card,
  Checkbox,
  DeckSwiper,
  Icon,
  Input,
  NavBar,
  Radio,
  Slider,
  Text,
  Toast,
  Switch,
  ScreenWrapper,
  TopNavigation,
  DynamicStatusBar,
  TabBar,
  TabBarIcon,
  TabBarLabel,
  //
  // THEME
  JaytechTheme,
  themeModes,
  withStyles,
  useTheme,
  JaytechProvider,
  galioConfig,
  GalioFont,
  //
  // STYLES
  j, // same as styles
  styles,
  //
  //
  // HELPER FUNCTIONS
  getIconType,
  iconTypes,
  normalizeFont,
};
