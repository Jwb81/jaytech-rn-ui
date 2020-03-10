import React from 'react';
import { View, StatusBar } from 'react-native';
import scopedStyles from './DynamicStatusBar.styles';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { withStyles, themeModes } from '../../theme';

const DynamicStatusBar = ({
  theme,
  themeMode,
  styles,
  style,
  hidden,
  barStyleOverride,
  translucent,
}) => {
  const getStatusBarContent = () => {
    if (themeMode === themeModes.LIGHT) {
      return 'dark-content';
    } else {
      return 'light-content';
    }
  };

  //   const androidStatusBarBgColor = styles.container.backgroundColor;
  const barStyle = getStatusBarContent();

  return (
    <View style={[styles.background, styles.text, styles.dynamicStatusBar, style]}>
      <StatusBar
        // backgroundColor={androidStatusBarBgColor}
        barStyle={barStyleOverride ? barStyleOverride : barStyle}
        hidden={hidden}
        translucent={translucent}
      />
    </View>
  );
};

DynamicStatusBar.propTypes = {
  styles: PropTypes.object.isRequired,
  hidden: PropTypes.bool,
  barStyleOverride: PropTypes.string,
  translucent: PropTypes.bool,
};

DynamicStatusBar.defaultProps = {
  hidden: false,
  translucent: false,
};

export default withNavigation(withStyles(DynamicStatusBar, scopedStyles));
