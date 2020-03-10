import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import scopedStyles from './TopNavigation.styles';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { themeModes, withStyles } from '../../theme';
import { iconTypes } from '../../helpers';
import { j } from '../../styles';
// import Icon from '../Icon';
// import Text from '../Text';

import Icon from '../Icon';
import Text from '../Text';

const icons = {
  MOON: { name: 'moon', family: iconTypes.FEATHER },
  SUN: { name: 'sun', family: iconTypes.FEATHER },
  MENU: { name: 'menu', family: iconTypes.FEATHER },
  BACK: { name: 'arrow-left', family: iconTypes.FEATHER },
};

const TopNavigation = props => {
  const { navigation, theme, themeMode, toggleThemeMode, styles, alignment, ...restProps } = props;

  const createNavAction = (iconInfo, onPress) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Icon style={[styles.text, j.m5]} {...iconInfo} />
      </TouchableOpacity>
    );
  };

  const getAlignmentDependentStyles = alignment => {
    if (alignment === 'start') {
      return {
        titleContainer: [j.columnCenterStart, j.flex1, j.alignSelfStretch],
      };
    } else if (alignment === 'center') {
      return {
        container: j.justifyBetween,
        titleContainer: styles.titleContainerCentered,
      };
    } else {
      return {
        titleContainer: [j.columnCenterEnd, j.flex1, j.alignSelfStretch],
        // rightControlsContainer: styles.rightControlsContainerStart,
      };
    }
  };

  const renderTextElement = (text, style) => {
    return <Text style={style}>{text}</Text>;
  };

  const renderActionElements = source => {
    return React.Children.map(source, (element, index) => {
      return React.cloneElement(element, {
        key: index,
        appearance: props.appearance,
        // onPress: () => console.log('hi')
      });
    });
  };

  const renderComponentChildren = () => {
    const {
      title,
      subtitle,
      leftControls,
      rightControls,
      titleStyle,
      subtitleStyle,

      addBackAction,
      addThemeAction,
      addDrawerAction,
    } = props;

    let lControls = [];

    // add the back button
    addBackAction && lControls.push(createNavAction(icons.BACK, () => navigation.goBack()));

    // add the drawer toggle
    addDrawerAction && lControls.push(createNavAction(icons.MENU, navigation.toggleDrawer));

    // add the rest
    lControls.push(...leftControls);

    let rControls = rightControls.slice();
    if (addThemeAction) {
      rControls.push(
        createNavAction(themeMode === themeModes.LIGHT ? icons.SUN : icons.MOON, toggleThemeMode)
      );
    }

    return [
      !!title && renderTextElement(title, [styles.text, styles.title]),
      !!subtitle && renderTextElement(subtitle, [styles.textHint, styles.subtitle]),
      lControls && renderActionElements(lControls),
      rControls && renderActionElements(rControls),
    ];
  };

  const [
    titleElement,
    subtitleElement,
    leftControlElements,
    rightControlElements,
  ] = renderComponentChildren();

  const alignmentStyles = getAlignmentDependentStyles(alignment);

  return (
    <View style={[j.px10, alignmentStyles.container, styles.container]} {...restProps}>
      <View style={[styles.leftControlsContainer]}>{leftControlElements}</View>
      <View
        style={[j.flexColumnCenter, j.mx10, styles.titleContainer, alignmentStyles.titleContainer]}>
        {titleElement}
        {subtitleElement}
      </View>
      <View style={[styles.rightControlsContainer, alignment.rightControlsContainer]}>
        {rightControlElements}
      </View>
    </View>
  );
};

TopNavigation.propTypes = {
  styles: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  leftControls: PropTypes.arrayOf(PropTypes.any),
  rightControls: PropTypes.arrayOf(PropTypes.any),
  title: PropTypes.string,
  subtitle: PropTypes.string,

  titleStyle: PropTypes.object,
  subtitleStyle: PropTypes.object,
  alignment: PropTypes.oneOf(['start', 'center', 'end']),

  addBackAction: PropTypes.bool,
  addThemeAction: PropTypes.bool,
  addDrawerAction: PropTypes.bool,
};

TopNavigation.defaultProps = {
  leftControls: [],
  rightControls: [],

  alignment: 'center',
  addBackAction: false,
  addThemeAction: false,
  addDrawerAction: false,
};

export default withStyles(withNavigation(TopNavigation), scopedStyles);
