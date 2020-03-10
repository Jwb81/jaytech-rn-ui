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

export default type => {
  switch (type.toLowerCase()) {
    case [iconTypes.ZOCIAL]:
      return ZocialIcon;
    case [iconTypes.OCTICON]:
      return OcticonIcon;
    case [iconTypes.MATERIAL]:
      return MaterialIcon;
    case [iconTypes.MATERIAL_COMMUNITY]:
      return MaterialCommunityIcon;
    case [iconTypes.IONICON]:
      return Ionicon;
    case [iconTypes.FOUNDATION]:
      return FoundationIcon;
    case [iconTypes.EVIL]:
      return EvilIcon;
    case [iconTypes.ENTYPO]:
      return EntypoIcon;
    case [iconTypes.FONT_AWESOME]:
      return FAIcon;
    case [iconTypes.FONT_AWESOME_5]:
      return FA5Icon;
    case [iconTypes.SIMPLE_LINE_ICONS]:
      return SimpleLineIcon;
    case [iconTypes.FEATHER]:
      return FeatherIcon;
    case [iconTypes.ANT_DESIGN]:
      return AntIcon;
    default:
      return MaterialIcon;
  }
};