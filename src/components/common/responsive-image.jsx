export function ResponsiveImage({ images, alt, className = "" }) {
  if (!images) return null;

  return (
    <picture>
      {/* WebP format for modern browsers */}
      <source
        srcSet={`${images.small} 640w, ${images.medium} 1024w, ${images.large} 1600w`}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        type="image/webp"
      />
      {/* Fallback to no WebP browsers */}
      <img
        src={images.fallback || images.original}
        alt={alt}
        className={className}
        loading="lazy"
      />
    </picture>
  );
}
