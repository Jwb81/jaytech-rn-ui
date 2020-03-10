import { StyleSheet } from 'react-native';

export default theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 50,
  },
  containerCentered: {
    justifyContent: 'space-between',
  },
  titleContainer: {},
  titleContainerCentered: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainerStart: {
    flex: 1,
    textAlign: 'left',
    justifyContent: 'flex-start',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: 'red'
  },
  title: { fontSize: theme.SIZES.FONT * 1.1 },
  subtitle: { fontSize: theme.SIZES.FONT * 0.85 },
  leftControlsContainer: {
    flexDirection: 'row',
    zIndex: 1,
  },
  rightControlsContainer: {
    flexDirection: 'row',
    zIndex: 1,
  },
  rightControlsContainerStart: {
    flex: 1,
    justifyContent: 'flex-end',
    borderWidth: 1,
    borderColor: 'red'
  },

  // ALIGNMENT
  alignmentStart: {
    justifyContent: 'flex-start',
  },
  alignmentCenter: {
    justifyContent: 'center',
  },
  alignmentEnd: {
    justifyContent: 'flex-end',
  },
});
