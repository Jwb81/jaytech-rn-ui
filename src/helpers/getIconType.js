/****************************************************/
/**** INSPIRED BY react-native-elements*************/
/**************************************************/
import ZocialIcon from 'react-native-vector-icons/Zocial';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';

import iconTypes from './iconTypes';

const iconFamilyMap = {
  [iconTypes.ZOCIAL]: ZocialIcon,
  [iconTypes.OCTICONS]: OcticonIcon,
  [iconTypes.MATERIAL]: MaterialIcon,
  [iconTypes.MATERIAL_COMMUNITY]: MaterialCommunityIcon,
  [iconTypes.IONICONS]: Ionicon,
  [iconTypes.FOUNDATION]: FoundationIcon,
  [iconTypes.EVIL]: EvilIcon,
  [iconTypes.ENTYPO]: EntypoIcon,
  [iconTypes.FONT_AWESOME]: FAIcon,
  [iconTypes.FONT_AWESOME_5]: FA5Icon,
  [iconTypes.SIMPLE_LINE_ICONS]: SimpleLineIcon,
  [iconTypes.FEATHER]: FeatherIcon,
  [iconTypes.ANT_DESIGN]: AntIcon,
};

export default type => {
  // const lowerCaseType = type.toLowerCase();

  // return the icon family icon or default to Material Icons
  return iconFamilyMap[type]
    ? iconFamilyMap[type]
    : iconFamilyMap[iconTypes.MATERIAL];
};
