const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  S: `(min-width: ${size.mobileM})`,
  M: `(min-width: ${size.tablet})`,
  L: `(min-width: ${size.laptop})`,
};
