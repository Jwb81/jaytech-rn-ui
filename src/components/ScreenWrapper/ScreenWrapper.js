import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../../theme';
import Block from '../Block';
import { Platform, StatusBar } from 'react-native';

function ScreenWrapper({ children, styles, style, ...rest }) {
  const wrapperStyles = [
    styles.background,
    {
      paddingTop: Platform.select({
        ios: 0,
        android: StatusBar.currentHeight,
      }),
    },
    styles.screenWrapper,
    style,
  ];

  return (
    <Block flex safe {...rest} style={wrapperStyles}>
      {children}
    </Block>
  );
}

ScreenWrapper.defaultProps = {};

ScreenWrapper.propTypes = {
  children: PropTypes.any.isRequired,
};

export default withStyles(ScreenWrapper);
