import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// import COLORS & SIZES
import JAYTECH_COLORS, { getThemeModeColors } from './colors';
import JAYTECH_SIZES from './sizes';
import themeModes from './themeModes';

// default theme with COLORS & SIZES
const JaytechTheme = {
  COLORS: JAYTECH_COLORS,
  SIZES: JAYTECH_SIZES,
};

// creating the JaytechTheme context
const JaytechContext = createContext();

/*
 *   withStyles
 *   Component - React Component, styles to be added to Component
 *   theme: if no styles or theme add default theme={ SIZES, COLORS }
 */

const withStyles = (Component, styles) => {
  return props => {
    return (
      <JaytechContext.Consumer>
        {({ theme, themeMode, persistentStyles, toggleThemeMode }) => {
          // persistent styles are user defined and injected into every component using this HOC
          console;
          const computedPersistentStyles =
            typeof persistentStyles === 'function' ? persistentStyles(theme) : persistentStyles;

          // computed styles are usually the styles coming from a Stylesheet related to a specific component
          const computedStyles = styles
            ? styles({ ...JaytechTheme, ...theme }, computedPersistentStyles)
            : {};

          return (
            <Component
              {...props}
              theme={{
                ...JaytechTheme,
                // , ...getThemeModeColors(theme.mode)
                ...theme,
              }}
              styles={Object.assign({}, computedPersistentStyles, computedStyles)}
              themeMode={themeMode}
              toggleThemeMode={toggleThemeMode}
            />
          );
        }}
      </JaytechContext.Consumer>
    );
  };
};

// export function withStyles(Component, styles) {
//   // eslint-disable-next-line react/no-multi-comp
//   return class extends React.Component {
//     render() {
//       const { props } = this;
//       return (

//       );
//     }
//   };
// }

const useTheme = () => useContext(JaytechContext);

/*
 *   JaytechProvider using React.Component
 *   JaytechContext.Provider value has the default value from { COLORS, SIZES }
 */

// eslint-disable-next-line react/no-multi-comp
const JaytechProvider = ({
  children,
  theme: { COLORS: CUSTOM_COLORS, SIZES: CUSTOM_SIZES, customTheme },
  mode: themeMode,
  persistentStyles,
  toggleThemeMode,
}) => {
  // get the final theme based on generic theme and custom content
  const providerTheme = {
    COLORS: { ...JaytechTheme.COLORS, ...getThemeModeColors(themeMode), ...CUSTOM_COLORS },
    SIZES: { ...JaytechTheme.SIZES, ...CUSTOM_SIZES },
    ...customTheme,
  };

  return (
    <JaytechContext.Provider
      value={{ theme: providerTheme, themeMode, persistentStyles, toggleThemeMode }}>
      {children}
    </JaytechContext.Provider>
  );
};

JaytechProvider.defaultProps = {
  children: null,
  theme: { COLORS: {}, SIZES: {} },
  mode: themeModes.LIGHT,
  persistentStyles: () => ({}),
  toggleThemeMode: () => ({}),
};

JaytechProvider.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.any,
  mode: PropTypes.oneOf(Object.values(themeModes)),
  persistentStyles: PropTypes.func,
  toggleThemeMode: PropTypes.func,
};

export { withStyles, useTheme, JaytechContext, JaytechProvider, JaytechTheme, themeModes };
