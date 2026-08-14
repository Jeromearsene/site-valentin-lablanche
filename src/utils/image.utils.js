export const getResponsiveImage = (baseName) => {
  try {
    const root = `/img/${baseName}`;
    return {
      original: new URL(`${root}.webp`, import.meta.url).href,
      small: new URL(`${root}-sm.webp`, import.meta.url).href,
      medium: new URL(`${root}-md.webp`, import.meta.url).href,
      large: new URL(`${root}-lg.webp`, import.meta.url).href,
      fallback: new URL(`${root}.jpg`, import.meta.url).href,
    };
  } catch (e) {
    console.error(`Images not found for "${baseName}"`, e);
    return {};
  }
};
