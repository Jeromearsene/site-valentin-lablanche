export const getResponsiveImage = (baseName) => {
  try {
    const root = `/img/${baseName}`;
    return {
      original: `${root}.webp`,
      small: `${root}-sm.webp`,
      medium: `${root}-md.webp`,
      large: `${root}-lg.webp`,
      fallback: `${root}.jpg`,
    };
  } catch (e) {
    console.error(`Images not found for "${baseName}"`, e);
    return {};
  }
};
