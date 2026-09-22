import type React from 'react';

/** Keep a bundled image visible if a third-party photo is unavailable. */
export const showImageFallback = (event: React.SyntheticEvent<HTMLImageElement>) => {
  const image = event.currentTarget;
  image.onerror = null;
  image.src = '/places/inner-harbor.jpg';
};
