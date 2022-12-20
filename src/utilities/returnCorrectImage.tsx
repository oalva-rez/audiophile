export function returnCorrectImage(
  mobileImage: string,
  tabletImage: string,
  desktopImage: string,
  mobileScreen: boolean,
  tabletScreen: boolean
) {
  if (mobileScreen) {
    return mobileImage;
  } else if (tabletScreen) {
    return tabletImage;
  } else {
    return desktopImage;
  }
}
