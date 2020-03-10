import React from 'react';
import { withStyles } from '../../theme';
import { j } from '../../styles';
import Icon from '../Icon';
import scopedStyles from './TabBarIcon.styles';

const TabBarIcon = ({ theme, styles, style, name, family, focused, horizontal }) => {
  return (
    <Icon
      name={name}
      family={family}
      style={[horizontal ? j.mt20 : j.mt5, style]}
      color={focused ? theme.COLORS.INFO : theme.COLORS.TEXT_BASIC}
      size={focused ? 24 : 20}
      //
    />
  );
};

export default withStyles(TabBarIcon, scopedStyles);
