import {
  blueA200,
  grey100,
  grey300,
  grey400,
  grey500,
  white,
  black
} from '../colors';
import color from 'color';

const shadowsArray = [
  [1, 6, 0.12, 1, 4, 0.12],
  [3, 10, 0.16, 3, 10, 0.23],
  [10, 30, 0.19, 6, 10, 0.23],
  [14, 45, 0.25, 10, 18, 0.22],
  [19, 60, 0.30, 15, 20, 0.22],
];

const shadows = (depth) => (
  `0 ${shadowsArray[depth][0]}px ${shadowsArray[depth][1]}px
  ${color(black).alpha(shadowsArray[depth][2]).rgbString()},
  0 ${shadowsArray[depth][3]}px ${shadowsArray[depth][4]}px
  ${color(black).alpha(shadowsArray[depth][5]).rgbString()}`
);

export default {
  name: 'lightBaseTheme',
  fontFamily: 'lato,system,-apple-system,".SFNSText-Regular","Helvetica Neue",Roboto,"Segoe UI",sans-serif',
  palette: {
    primaryColor: blueA200,
    accentColor: '#ff5a5f',
    greyColor: grey100,
    textColor: color(black).alpha(0.75).rgbString(),
    panelHeader: color(grey300).alpha(0.5).rgbString(),
    backgroundColor: white,
    highlightTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    checkboxColor: grey400,
    placeholderColor: grey500,
    disabledColor: grey100,
    disabledColorDarken: 0.1,
    shadows,
    hoverColorDepth: 0.1
  },
  spacing: {
    iconSize: 20,
    avatarSize: 40,
    largeAvatarSize: 56,
    buttonWidth: 72,
    margin: 10,
    padding: 10,
    verticalPadding: '9px 0 8px',
    borderRadius: 2
  }
};
