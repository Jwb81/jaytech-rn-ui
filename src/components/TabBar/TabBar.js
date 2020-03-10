import React from 'react';
import scopedStyles from './TabBar.styles';
import { withStyles } from '../../theme';
import { BottomTabBar } from 'react-navigation-tabs';

const TabBar = props => {
  const { style, styles, ...rest } = props;
  return <BottomTabBar {...props} style={[styles.background, style]} {...rest} />;
};

export default withStyles(TabBar, scopedStyles);
